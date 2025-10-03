import { FaAws, FaDocker, FaGlobe, FaShieldAlt, FaGitAlt,FaCode,FaDatabase,FaNetworkWired } from "react-icons/fa";
import { SiGrafana } from "react-icons/si";

const ServicesData = [
  {
    s_no: "01",
    s_name: "Cloud & Infrastructure",
    s_desc: "Working knowledge of AWS services such as EC2,ECS, Databases, S3, VPC, CodePipeline, and IAM for deploying and managing applications. Hands-on experience using Infrastructure as Code (IaC) with Terraform, Ansible, and CloudFormation to automate provisioning and manage scalable environments.",
    icon: FaAws
  },
  {
    s_no: "02",
    s_name: "Containers & Orchestration",
    s_desc: "Currently learning on using Docker to containerize applications and Kubernetes to deploy, scale, and manage workloads. Good understanding of GitOps practices with Argo CD for automating application delivery in cloud-native setups.",
    icon: FaDocker
  },
  {
    s_no: "03",
    s_name: "Domain Management",
    s_desc: "Hands-on in setting up and maintaining systems through secure domain configurations and indepth System Administration skills attained  during Industrial attachment by use  of C-Panel  and network segmentation .",
    icon: FaGlobe
  },
  {
    s_no: "04",
    s_name: "Security & Compliance",
    s_desc: "Experience integrating security tools virtual private cloud(VPC) into securing AWS Deployments  for vulnerability scanning. Familiar with configuring AWS Security Groups, managing instances  with IAM Center, and improving code quality.",
    icon: FaShieldAlt
  },
  {
    s_no: "05",
    s_name: "Monitoring & Observability",
    s_desc: "Good understanding of monitoring systems with AWS CloudWatch and creating dashboards in Grafana and improving system visibility.",
    icon: SiGrafana
  },
  {
    s_no: "06",
    s_name: "Version Control & Operating Systems",
    s_desc: "Working experience with Git for version control and collaborating on projects using GitHub and GitLab. Comfortable with Linux environments, mainly Ubuntu and Zorin OS, for development and server management.",
    icon: FaGitAlt
  },
  {
    s_no: "07",
    s_name: "Web Development & Hosting",
    s_desc: "Working experience with Web Development frameworks such as Django,React and Node.js.",
    icon: FaCode
  },
  {
    s_no: "08",
    s_name: "Database Management and Query Optimization",
    s_desc: "Working experience with MySQL Database  and the MySQL server Management Studio(MMS-2019).",
    icon: FaDatabase
  },
  {
    s_no: "09",
    s_name: "Hardware Mantainance and Troubleshooting and Networking",
    s_desc: " 4 Year Working experience in Hardware Repair and Maintenance Shop for both mobile phones and desktop/personalcomputers(Larrium Office) .",
    icon: FaNetworkWired
  }
];

export default ServicesData;