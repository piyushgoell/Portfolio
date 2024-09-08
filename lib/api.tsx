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
      about: "I’m someone who likes to jump in and get things done. I prefer taking action over waiting, and I’m always looking for ways to learn and improve. I enjoy taking on challenges, solving problems independently, and sharing what I know to help others.",
      skills: [
        {
          title: "Programming Languages",
          items: ["Java", "Python", "JavaScript", "C++"]
        },
        {
          title: "Databases",
          items: ["SQL (MySQL, SQL Server, PostgreSQL)", "NoSQL (MongoDB)"]
        },

        {
          title: "Integration Platforms",
          items: ["TIBCO", "Azure" ]
        },
        {
          title: "TIBCO Products",
          items: ["BusinessWorks 6.8+", "FTL 6.10","EMS 8.4","ActiveSpaces 4.9","TEA 2.4.1","Mashery 5.X"]
        },
        {
          title: "TIBCO Plugins",
          items: ["FTL 6.7", "ActiveSpaces 8.1", "LDAP 7.3", "Confidentiality 6.1","CRM 6.10","ADB 8.1", "FILE" ]
        },

        {
          title: "Web Services",
          items: ["REST", "SOAP"]
        },
        {
          title: "Data Formats",
          items: ["JSON", "XML", "CSV"]
        },
        {
          title: "Cloud Platforms",
          items: ["Azure (DevOps, Logic Apps, Functions, OpenAI, Search Service, Azure Storage)"]
        },
        {
          title: "API Testing",
          items: ["Postman", "Soap UI", "Ready API"]
        },

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
        url: "https://www.youtube.com/@GeeksSquadIndia",
        featuredVideoId: "LKfl9UBIV6o",
        playlists: [
          {
            title: "TIBCO Masterclass",
            description: "A comprehensive guide to mastering TIBCO for enterprise integration. This playlist covers everything from basic concepts to advanced implementation techniques.",
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
        github: "https://github.com/piyushgoell",
        linkedin: "https://linkedin.com/in/piyushgoell",
        email: "piyushgoel.in@gmail.com",
        website: "https://piyushgoell.github.io/portfolio",
        youtube: "https://www.youtube.com/@GeeksSquadIndia"
      }
    };
  }