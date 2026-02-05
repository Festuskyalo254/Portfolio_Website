import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'api-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url.startsWith('/api/') && req.method === 'POST') {
              try {
                const endpoint = req.url.split('/api/')[1];
                // Ensure env vars are available to process.env for nodemailer
                Object.assign(process.env, env);

                console.log(`--- API Debug: ${endpoint} ---`);

                // Read body manually
                let body = '';
                req.on('data', chunk => { body += chunk; });
                req.on('end', async () => {
                  try {
                    const parsedBody = JSON.parse(body);
                    const { default: handler } = await import(`./api/${endpoint}.js`);

                    // Polyfill res.status().json()
                    const jsonResponse = {
                      status: (code) => ({
                        json: (data) => {
                          res.statusCode = code;
                          res.setHeader('Content-Type', 'application/json');
                          res.end(JSON.stringify(data));
                        }
                      })
                    };

                    await handler({ body: parsedBody, method: req.method }, jsonResponse);
                  } catch (err) {
                    console.error('Handler Error:', err);
                    res.statusCode = 500;
                    res.end(JSON.stringify({ message: 'Internal Server Error', error: err.message }));
                  }
                });
              } catch (err) {
                console.error('Middleware Error:', err);
                res.statusCode = 500;
                res.end(JSON.stringify({ message: 'Internal Server Error' }));
              }
            } else {
              next();
            }
          });
        }
      }
    ],
    assetsInclude: ['**/*.pdf'],
    base: '/'
  }
})
