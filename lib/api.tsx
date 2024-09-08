export interface Skill {
    title: string;
    items: string[];
  }
  
  export interface Project {
    title: string;
    description: string;
    details: string;
    technologies: string[];
    image: string;
  }
  
  export interface YoutubePlaylist {
    title: string;
    description: string;
    url: string;
  }
  
  export interface PortfolioData {
    name: string;
    title: string;
    about: string;
    skills: Skill[];
    projects: Project[];
    youtubeChannel: {
      url: string;
      featuredVideoId: string;
      playlists: YoutubePlaylist[];
    };
    socialLinks: {
      github: string;
      linkedin: string;
      email: string;
      website: string;
      youtube: string;
    };
  }
  
  export async function getPortfolioData(): Promise<PortfolioData> {
    // In a real scenario, this would fetch data from an API or database
    return {
      name: "Piyush Goel",
      title: "Senior Integration Engineer",
      about: "I’m a hands-on Senior Integration Engineer with a passion for connecting systems and streamlining business processes. With extensive experience in designing integration solutions, I focus on driving digital transformation and improving efficiency. I thrive on tackling challenges, solving problems independently, and always seeking opportunities to learn and grow. Beyond my work, I share my knowledge through my YouTube channel, helping others in the field of integration engineering by simplifying complex concepts and offering practical insights. I'm always eager to take action, make an impact, and support others in their journey.",
      skills: [
        {
          title: "Integration Platforms",
          items: ["TIBCO", "Azure" ]
        },
        {
          title: "API Technologies",
          items: ["REST", "SOAP", "GraphQL", "Webhooks"]
        },
        {
          title: "Data Formats",
          items: ["JSON", "XML", "CSV", "EDI"]
        },
        {
          title: "Cloud Platforms",
          items: ["AWS", "Azure", "Google Cloud"]
        },
        {
          title: "Databases",
          items: ["SQL (MySQL, PostgreSQL)", "NoSQL (MongoDB, Cassandra)"]
        },
        {
          title: "Programming Languages",
          items: ["Java", "Python", "JavaScript", "C#"]
        }
      ],
      projects: [
        {
          title: "E-commerce Integration Suite",
          description: "Streamlined order processing and inventory management",
          details: "Developed a comprehensive integration solution connecting an e-commerce platform with ERP and CRM systems, resulting in real-time inventory updates and automated order fulfillment. This project significantly improved operational efficiency and customer satisfaction.",
          technologies: ["MuleSoft", "REST APIs", "AWS"],
          image: "/placeholder.svg?height=200&width=400"
        },
        {
          title: "Healthcare Data Exchange",
          description: "Secure and compliant patient data integration",
          details: "Implemented a HIPAA-compliant integration platform to facilitate secure data exchange between hospitals, clinics, and insurance providers, improving patient care coordination. This solution ensured data privacy while enhancing the speed and accuracy of information sharing.",
          technologies: ["IBM Integration Bus", "HL7", "Azure"],
          image: "/placeholder.svg?height=200&width=400"
        }
      ],
      youtubeChannel: {
        url: "https://www.youtube.com/c/PiyushGoelIntegrationEngineer",
        featuredVideoId: "dQw4w9WgXcQ",
        playlists: [
          {
            title: "MuleSoft Masterclass",
            description: "A comprehensive guide to mastering MuleSoft for enterprise integration. This playlist covers everything from basic concepts to advanced implementation techniques.",
            url: "https://www.youtube.com/playlist?list=PLxxxxxxxxxxxxxxxx"
          },
          {
            title: "API Design Best Practices",
            description: "Learn how to design robust and scalable APIs for seamless integrations. This series focuses on RESTful API design principles and industry best practices.",
            url: "https://www.youtube.com/playlist?list=PLxxxxxxxxxxxxxxxx"
          }
        ]
      },
      socialLinks: {
        github: "https://github.com/piyushgoel",
        linkedin: "https://linkedin.com/in/piyushgoel",
        email: "piyush.goel@example.com",
        website: "https://piyushgoel.com",
        youtube: "https://www.youtube.com/c/PiyushGoelIntegrationEngineer"
      }
    };
  }