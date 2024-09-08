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

  export interface Experience {
    company: string;
    role: string;
    period: string;
    responsibilities: string[];
  }  
  
  export interface PortfolioData {
    name: string;
    title: string;
    about: string;
    skills: Skill[];
    experience: Experience[];
    projects: Project[];
    youtubeChannel: {
      url: string;
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
      name: "PIYUSH GOEL",
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
          title: "Web Services",
          items: ["REST", "SOAP"]
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
          title: "Azure Products",
          items: ["Azure DevOps", "Azure Logic Apps", "Azure Functions", "Azure OpenAI", "Azure AI Search","Azure Storage","Azure Repos", "Power Automate"]
        },
        {
          title: "API Testing",
          items: ["Postman", "Soap UI", "Ready API"]
        },
        {
          title: "Build Tools",
          items: ["Ant", "Ivy", "Maven"]
        },
        {
          title: "Monitoring and Analysis",
          items: ["Splunk", "AppDynamics","Log Analysis","Root Cause Analysis"]
        }
      ],
      experience: [
        {
          company: "Accenture",
          role: "Senior Integration Engineer",
          period: "March 2021 - September 2024",
          responsibilities: [
                        "Contributed to the migration of TIBCO BW5 projects to TIBCO BW6, including analysis, conversion, and testing to ensure seamless integration and functionality.",
            "Extended TIBCO BusinessWorks capabilities with custom Java classes and libraries, optimizing integration solutions.",
            "Receive design handovers from the functional design team and closely collaborate with backend teams to create technical design documents using SOA patterns, including sequence diagrams, mapping sheets, Swagger documentation, and XSDs.",
            "Orchestrated the solution design into a 3-layer architecture—presentation, business, and technical tiers—to achieve microservice-level granularity.",
            "Designed and implemented complex integration solutions using TIBCO BusinessWorks and EMS/FTL, facilitating seamless communication between enterprise applications.",
            "Collaborated with cross-functional teams to gather requirements, design solutions, and ensure project delivery within timelines.",
            "Design and build RESTful and SOAP web services and end-to-end integration processes with TIBCO BusinessWorks to ensure smooth data flow and communication between systems.",
            "Estimate efforts for new changes, including updates to design documents, code modifications, and testing. Incorporate updates to ensure seamless integration and functionality.",
            "Managed defects and tracked bug fixes through hierarchical testing stages up to UAT by analysing logs with Splunk and writing SQL queries to examine databases, targeting a zero-defect outcome.",
            "Handle deployment and performance tuning of applications, including configuring load balancing and fault tolerance on TEA. Finalize configurations with client architects.", 
            "Create and update Mashery configurations to manage access for internal users, staff, and advisers.",
            "Designed and developed a caching solution using sessions with TIBCO ActiveSpaces, optimizing data access and performance.",
            "Manage ActiveSpaces tables by writing and executing TIBDG command line utility commands to automate the creation of tables across different environments.",
            "Trained junior developers on TIBCO tools and best practices, improving team capability and knowledge base."
          ]
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
        url: "https://www.youtube.com/@GeeksSquadIndia",
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