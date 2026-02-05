import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: "Missing email" });
    }

    // ✅ Send notification email using Nodemailer
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Newsletter" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `New Newsletter Subscription: ${email}`,
            text: `You have a new newsletter subscriber: ${email}`,
            html: `
        <h2>🗞️ New Newsletter Subscription</h2>
        <p>A user has subscribed to your newsletter.</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr />
        <p style="font-size:12px;color:gray;">This email was sent from your portfolio website footer.</p>
      `,
        });

        return res.status(200).json({ message: "Subscribed successfully" });
    } catch (err) {
        console.error("Subscription error:", err);
        return res.status(500).json({ message: "Error subscribing" });
    }
}
