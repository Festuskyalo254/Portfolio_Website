import './About.css'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me<span>.</span></h1>
        <img src="/theme_pattern.svg" alt="Theme Pattern" />  
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src="/Kyalo2.png" alt="Kyalo" className="about-image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I&apos;m Festus Kyalo, a passionate Cloud & Software Engineer in the making, with a strong foundation in AWS services and Networking practices. I focus on learning and building cloud infrastructure using IaC, automation tools, and CI/CD for scalable, secure, and efficient environments.</p>
            
            <div className="key-highlights">
              <p>-I&apos;ve completed multiple Bootcamps and hands-on projects, including automated deployments on AWS using EC2 and S3 Buckets. My mission is to bridge the gap between development and operations through automation and scalability.</p>
              <br />
              <p>-Beyond the terminal , I love developing systems that solve real world problems and provide better solutions , learning from real-world DevOps scenarios, and connecting with like-minded tech enthusiasts. I&apos;m continuously evolving in my DevOps journey and always excited to take on new challenges.</p>
            </div>

            <p>Curious about cloud infrastructure and Networking hence securing the systems build by securing them, I explore new technologies to boost scalability and resilience. I&apos;m passionate about solving infrastructure challenges, automating operations, and building reliable, scalable systems.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About