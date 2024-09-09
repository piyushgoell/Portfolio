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
    resumeLink: string;
    skills: Skill[];
    experience: Experience[];
    projects: Project[];
    testimonials: Testimonial[];
    certifications: Certification[];
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

  export interface Testimonial {
    name: string;
    role: string;
    content: string;
    link: string;
  }
  
  export interface Certification {
    name: string;
    issuer: string;
    date: string;
    image: string;
    digitalCertificateUrl: string; // URL for the digital certificate
  }
  

// Define the type for navigation items
export interface NavItem {
  href: string;
  label: string;
}

// Asynchronous function to get navigation data
export async function getNavData(): Promise<NavItem[]> {
  return [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#feedbacks", label: "Feedbacks" },
    { href: "#contact", label: "Contact" },
  ];
}
  
  export async function getPortfolioData(): Promise<PortfolioData> {
    // In a real scenario, this would fetch data from an API or database
    return {
      name: "PIYUSH GOEL",
      title: "Senior Integration Engineer",
      about: "I’m someone who likes to jump in and get things done. I prefer taking action over waiting, and I’m always looking for ways to learn and improve. I enjoy taking on challenges, solving problems independently, and sharing what I know to help others.",
      resumeLink: "https://drive.google.com/file/d/1bPYurp5r6LEoSOzsH0z1_LC8TlOo3Jfy",
      skills: [
        {
          title: "Programming Languages",
          items: ["Java", "Python", "JavaScript", "C++", "PowerShell"]
        },
        {
          title: "Databases",
          items: ["SQL (MySQL, SQL Server, PostgreSQL)", "NoSQL (MongoDB)"]
        },
        {
          title: "Web Services",
          items: [
            "RESTful APIs",
            "SOAP",
            "HTTP/HTTPS",
            "Message Queues (JMS/EMS, FTL)",
            "API Documentation (Swagger/OpenAPI)",
            "API Authentication (OAuth2, JWT)"
          ]
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
          title: "Build & Containerization Tools",
          items: ["Ant", "Maven","Docker", "Kubernetes"]
        },
        {
          title: "Monitoring and Analysis",
          items: ["Splunk", "AppDynamics","Log Analysis","Root Cause Analysis","Grafana"]
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
      testimonials: [
        {
          name: "Ruth Sadler",
          role: "Client-Side Technical Solutions Manager",
          content: `Piyush is a key member of the API build team. He always ensures he understands a design handover or
                    defect at a very detailed level, and carries out his own analysis to effectively challenge the design in any
                    areas where it is open to interpretation, or could be improved. He highlights areas where the design and
                    build are not in step to ensure these are resolved. He also takes the time to thoroughly test his changes
                    with a variety of inputs to ensure the build is working correctly as designed. This approach leads to
                    higher quality designs and a reduction in the number of API defects.
                    Piyush also works effectively with technical members of other teams (.NET, Laserfiche, Sonata) to
                    resolve issues, including issues that are hard to reproduce or intermittent.
                    He should continue to give support to other members of the API build team, sharing the knowledge and

                    experience he has built up during the project, and ensure he is recognized by other build teams as a go-
                    to person for API related queries.

                    Next steps for Piyush depend on his preference - high quality technical contributors who take the time to
                    share their skills and experience with others are an asset to any project, and he should be given the
                    opportunity to gain experience of different roles and to take on different responsibilities so he can choose
                    what type of work is best for him.`,
          link: "https://drive.google.com/file/d/1KqbrXOJx1XaTBSAvkCw_OzA_fLimuGha/view?usp=drive_link", // Link to the testimonial provider's profile or related content
        },
        {
          name: "Gaurav Chhabra",
          role: "Manager at Accenture",
          content: `Piyush – We appreciate your contributions towards the team and the fantastic feedback you have received from Ruth. Within a
            short span of time you have understood the API landscape and have worked on some real complex integrations and have challenged
            the TD team at multiple occasions.
            This is just a beginning to excel in the integration skill both in length and breadth and we have a new release just going to begin very
            soon and I am sure your understanding of the current release and architecture will help us a long way. I believe now is also the time
            where we have to build the skill within the team and make everyone technically strong and you will have to play a major role in this
            area.
            We would like you to develop new skills especially in the cloud area and plan for a certification and lets look for any manual activities
            in the team and explore how can we automate them.`,
          link: "https://drive.google.com/file/d/1BkJWyAZ6ph3WSK5z12SHnSYibRI1bzZ8/view?usp=drive_link", // Link to the testimonial provider's profile or related content
        },
      ],
      certifications: [
        {
          name: "Microsoft Certified - Azure AI Engineer Associate:",
          issuer: "Micrsoft",
          date: "June 30, 2024",
          image: "https://img.icons8.com/?size=100&id=22989&format=png&color=000000", // Replace with the path to your certification image
          digitalCertificateUrl: "https://learn.microsoft.com/api/credentials/share/en-us/PiyushGoel/8A0C7EB015C2FB39?sharingId=E17775CD9A0772BB", // Link to the digital certificate
        },
        {
          name: "TCP - TIBCO BusinessWorks Container Edition",
          issuer: "TIBCO Software Inc.",
          date: "June 23, 2021",
          image: "https://images.credly.com/size/340x340/images/8b796e07-aba2-4ca0-9f75-382087cae6a5/BWCE1.png", // Replace with the path to your certification image
          digitalCertificateUrl: "https://www.credly.com/badges/c0f242f2-f711-4f1f-a03f-83b3ac89f77d", // Link to the digital certificate
        },
        {
          name: "TCP - TIBCO BusinessWorks™ 6",
          issuer: "TIBCO Software Inc.",
          date: "June 23, 2021",
          image: "https://images.credly.com/size/340x340/images/9c4bc48b-5604-4a74-a13d-978adb6d760e/BusinessWorks.png", // Replace with the path to your certification image
          digitalCertificateUrl: "https://www.credly.com/badges/d0d31e2c-5377-43b0-9729-0186ada068da", // Link to the digital certificate
        },
        {
          name: "TCA - TIBCO BusinessWorks™ 6",
          issuer: "TIBCO Software Inc.",
          date: "June 23, 2021",
          image: "https://images.credly.com/size/340x340/images/2201e066-68f9-49dc-8fee-f6b23c73b849/BusinessWorks%CE%93%C3%A4%C3%B3.png", // Replace with the path to your certification image
          digitalCertificateUrl: "https://www.credly.com/badges/9cc7fe75-001e-4861-97b9-07202675c92a", // Link to the digital certificate
        },
        {
          name: "DataCamp - SQL Fundamentals",
          issuer: "DataCamp",
          date: "November 20, 2020",
          image: "https://assets.datacamp.com/mobile/datacamp-mobile-192x192.png", // Replace with the path to your certification image
          digitalCertificateUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/a0cdb9dbfc35b357947f4cb1089aff04bce9ae69", // Link to the digital certificate
        },
        {
          name: "Coursera - Algorithmic Toolbox",
          issuer: "Coursera",
          date: "July 22, 2020",
          image: "https://cdn.cookielaw.org/logos/3e5657ed-0ab7-410b-95c6-ac68153c5668/019092a6-3ecb-7edf-a65d-388056f2143b/a3a862b5-17cb-487f-b0e0-23b439772b39/logo.png", // Replace with the path to your certification image
          digitalCertificateUrl: "https://www.coursera.org/account/accomplishments/verify/GS4LM49Y2HEB", // Link to the digital certificate
        },

  
      ],
      projects: [
        {
          title: "E-commerce Integration Suite",
          description: "Streamlined order processing and inventory management",
          details: "Developed a comprehensive integration solution connecting an e-commerce platform with ERP and CRM systems, resulting in real-time inventory updates and automated order fulfillment. This project significantly improved operational efficiency and customer satisfaction.",
          technologies: ["TIBCO BW6", "TIBCO FTL","TIBCO ActiveSpaces","TIBCO Mashery","REST APIs", "Azure"],
          image: ""
        },
        {
          title: "Healthcare Data Exchange",
          description: "Secure and compliant patient data integration",
          details: "Implemented a HIPAA-compliant integration platform to facilitate secure data exchange between hospitals, clinics, and insurance providers, improving patient care coordination. This solution ensured data privacy while enhancing the speed and accuracy of information sharing.",
          technologies: ["IBM Integration Bus", "HL7", "Azure"],
          image: ""
        }
      ],
      youtubeChannel: {
        url: "https://www.youtube.com/@GeeksSquadIndia",
        playlists: [
          {
            title: "RESTful Integration Mastery with TIBCO BW6",
            description: "Welcome to our TIBCO BW6 playlist dedicated to mastering RESTful service implementation! In this comprehensive series, Whether you're a beginner or an experienced developer, our hands-on tutorials cover everything from the basics of RESTful architecture to advanced techniques for seamless integration. Let's dive in and streamline your services for maximum impact!",
            url: "https://www.youtube.com/playlist?list=PLY10fUJxblacRvXdGRIN3FNJ4OirI8fNt"
          },
          {
            title: "TIBCO BW6 Fundamentals",
            description: "Welcome to our comprehensive playlist on TIBCO BusinessWorks 6.X Fundamentals! Whether you're a beginner exploring integration solutions or an experienced developer looking to dive into the latest version of TIBCO BusinessWorks, this series is tailored just for you. Let's dive in",
            url: "https://www.youtube.com/playlist?list=PLY10fUJxblaf9uQ5FoD8bhQcgoACd4sNs"
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