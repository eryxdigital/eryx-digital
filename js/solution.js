(function () {
    // solution.js

    document.addEventListener("DOMContentLoaded", function () {
        const params = new URLSearchParams(window.location.search);
        const serviceName = params.get("service");

       // error page
if (!serviceName || !isValidService(serviceName)) {
    document.body.innerHTML = `
        <style>
            body {
                background-color: #f8f9fa;
                margin: 0;
                font-family: 'Segoe UI', sans-serif;
            }
            .error-container {
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                padding: 40px 20px;
            }
            .error-container h1 {
                font-size: 100px;
                font-weight: 800;
                color: #000D21;
                margin-bottom: 10px;
            }
            .error-container h2 {
                font-size: 28px;
                margin-bottom: 15px;
                color: #000D21;
            }
            .error-container p {
                font-size: 18px;
                color: #6c757d;
                max-width: 600px;
                margin-bottom: 30px;
            }
            .error-container a.btn {
                background-color: #000D21;
                color: #fff;
                padding: 12px 24px;
                font-weight: 600;
                /*border-radius: 5px;*/
                text-decoration: none;
            }
            .error-container a.btn:hover {
                background-color: #05769c;
                color: #fff;
            }
        </style>

        <div class="error-container">
            <h1 >Oops!</h1>
            <h2>Service Not Found</h2>
            <p>We couldn't locate the service you’re trying to view. It may have been renamed, moved, or is no longer available.</p>
            <a href="service.html" class="btn">Back to Services</a>
        </div>
    `;
    document.title = "Error | Service Not Found";
    return;
}


        // Dynamic title update
        updatePageTitle(serviceName);

        updateHeaderTitle(serviceName);
        updateBreadcrumb(serviceName);
        renderUSPSection(serviceName);
        renderSolutionContent(serviceName);
    });

    function updatePageTitle(serviceName) {
        document.title = `Eryx Digital | Services | ${serviceName} `;
    }


    function isValidService(name) {
        const validServices = [
            "Salesforce CRM Optimization",
            "Virtual Assistance",
            "Website Design and Tech Support",
            "Data Analytics and Reporting",
            "Social Media Management"
        ];
        return validServices.includes(name);
    }

    function updateHeaderTitle(serviceName) {
        const header = document.querySelector(".header-title");
        if (header) header.textContent = serviceName;
    }

    function updateBreadcrumb(serviceName) {
        const breadcrumbItem = document.querySelector(".breadcrumb-item.active");
        if (breadcrumbItem) breadcrumbItem.textContent = serviceName;
    }

    // Unique Selling Points
    function renderUSPSection(serviceName) {
        // Define USP data for different services (serviceName should match the parameter)
        const uspData = {
            // Salesforce
            "Salesforce CRM Optimization": [
                {
                    icon: "ion-ios-checkmark",
                    heading: "Data Integrity",
                    description: "Tame messy data, eliminate duplicates, and ensure accuracy, so you can focus on core operations and growth."
                },
                {
                    icon: "ion-arrow-graph-up-right",
                    heading: "Sales Growth",
                    description: "Optimize your pipeline, streamline lead management, and support sales teams to help maximize the ROI."
                },
                {
                    icon: "fa fa-compass",
                    heading: "Strategic Insights",
                    description: "Structured and customized reports, dashboards, & analytics that empower stakeholders with actionable insights."
                }
            ],

            // VA
            "Virtual Assistance": [
                {
                    icon: "fas fa-check-circle",
                    heading: "Take Control",
                    description: "We streamline your workload, freeing you to focus on high-impact activities that drive growth."
                },
                {
                    icon: "ion-ios-cog",
                    heading: "Scalability",
                    description: "Experience flexible support that grows with your business without the overhead of full-time staff."
                },
                {
                    icon: "fas fa-rocket",
                    heading: "Growth Catalyst",
                    description: "We offer tailored support to uncover opportunities, build partnerships, and accelerate revenue growth."
                }
            ],

            // Web Design
            "Website Design and Tech Support": [
                {
                    icon: "fas fa-user-shield",
                    heading: "Online Trust",
                    description: "Own a professional, optimized website that showcases your brand, builds credibility, and thrives in S.E.O."
                },
                {
                    icon: "fas fa-wrench",
                    heading: "Tech Support",
                    description: "Your website remains efficient, secure and running smoothly with proactive maintenance & security updates."
                },
                {
                    icon: "fas fa-handshake",
                    heading: "Engage & Convert",
                    description: "We leverage analytics to drive engagement, maximize conversions, and ensure long-term online business success."
                }
            ],

            // Data Analytics
            "Data Analytics and Reporting": [
                {
                    icon: "fas fa-lightbulb",
                    heading: "Valuable Insights",
                    description: "We transform raw, messy data into actionable insights, revealing new opportunities for growth and innovation."
                },
                {
                    icon: "ion-ios-speedometer",
                    heading: "Smart Decisions",
                    description: "Experience clean, organized data and powerful visualizations that enable informed decisions and faster action."
                },
                {
                    icon: "fas fa-money-check",
                    heading: "Cost-Effective",
                    description: "By using our affordable and flexible data analytics support, you can gain a competitive edge without a heavy investment."
                }
            ],

            // Social Media
            "Social Media Management": [
                {
                    icon: "ion-ios-pulse-strong",
                    heading: "Social Stability",
                    description: "We ensure consistent, high-quality content that builds trust and keeps your audience engaged."
                },
                {
                    icon: "fas fa-handshake",
                    heading: "Reach & Trust",
                    description: "We optimize content for maximum reach and impact, while building brand trust & credibility."
                },
                {
                    icon: "ion-arrow-graph-up-right",
                    heading: "Targeted Growth",
                    description: "We craft data-driven social media strategies that boost conversions and keep you ahead of the competition."
                }
            ],

            // Add more services here as necessary
        };

        const usps = uspData[serviceName];
        if (!usps) return;

        usps.forEach((usp, index) => {
            const iconEl = document.getElementById(`usp-icon-${index + 1}`);
            const headingEl = document.getElementById(`usp-heading-${index + 1}`);
            const descEl = document.getElementById(`usp-desc-${index + 1}`);
            if (iconEl) iconEl.className = usp.icon;
            if (headingEl) headingEl.textContent = usp.heading;
            if (descEl) descEl.textContent = usp.description;
        });
    }


    // Solution Description
    function renderSolutionContent(serviceName) {
        const solutionData = {

            // Define service data for different solutions
            // Salesforce
            "Salesforce CRM Optimization": {
                title: "Salesforce Optimization & CRM Administration",
                subtitle: "Make Salesforce Your Powerful Sales Engine",
                paragraphs: [
                    // paragraph 1
                    "Accurate, well-structured data is key to driving sales growth and business success, and with our expertise, we help eliminate messy data, duplicate leads, and missed opportunities.\n" +
                    "We collaborate with you to fine-tune your Salesforce setup, enhance data accuracy, automate workflows, and deliver actionable insights.",

                    // paragraph 2
                    "Many businesses invest in Salesforce but struggle to keep it clean, organized, and efficient.\n" +
                    "Our expert Salesforce CRM optimization solutions empower small businesses, startups, and sales teams to fully leverage their Salesforce platform and maximize the ROI.",

                    // paragraph 3
                    "Whether you aim to boost sales performance, enhance customer engagement, or accelerate business growth, we empower you to achieve your goals."
                ],
                image1: "img/pa_sf.png", // replace with actual image URL
                image2: "img/pa_sf.png", // replace with actual image URL
                offerings:
                    [
                        {
                            title: "Data Entry & Cleanup",
                            description: "Import and organize customer data, fix errors, remove duplicates, and standardize data inputs for consistency."
                        },
                        {
                            title: "Custom Reports & Dashboards",
                            description: "Build reports that track sales pipelines, lead conversions, and customer trends, and design visual dashboards for sales and management teams."
                        },
                        {
                            title: "Data Integrity Measures",
                            description: "Implement validation rules, duplicate management, field history tracking, and Salesforce Flow Automation to ensure data accuracy and integrity."
                        },
                        {
                            title: "User Training & Documentation",
                            description: "Create easy-to-follow guides on Salesforce best practices and train employees on efficient data entry, updates, and CRM usage."
                        }
                    ]

            },

            // VA
            "Virtual Assistance": {
                title: "Virtual Assistance & Administrative Support",
                subtitle: "Smart Elevation of Your Workflow Efficiency",
                paragraphs: [
                    // paragraph 1
                    "Our proactive virtual support is crafted to help you stay organized, efficient, and focused on high-impact initiatives that drive growth and revenue.",

                    // paragraph 2
                    "Get personalized support in juggling multiple responsibilities through management of administrative tasks, inboxes, and customer support which can quickly become overwhelming.\n" +
                    "We will manage these tasks with precision, free you up from distractions, ensuring your business operates smoothly and seamlessly.",

                    // paragraph 3
                    "We provide professional support, give you the flexibility to scale without full-time overhead, and empower you to achieve your goals."
                ],
                image1: "img/pa_va.png", // replace with actual image URL
                image2: "img/pa_va.png", // replace with actual image URL
                offerings:
                    [
                        {
                            title: "Administrative Support",
                            description: "Proactive email management, calendar scheduling, travel arrangements, and CRM maintenance."
                        },
                        {
                            title: "Document and File Management",
                            description: "Cloud storage setup, and template creation for proposals, invoices, and Standard Operating Procedures (SOPs)."
                        },
                        {
                            title: "Customer Support and Engagement",
                            description: "Live chat, email support, complaint handling, and follow-ups."
                        },
                        {
                            title: "Social Media Assistance",
                            description: "Content scheduling, post engagement, and inbox management."
                        },
                        {
                            title: "Bookkeeping and Financial Assistance",
                            description: "(Accurate invoice tracking, and expense management."
                        },
                        {
                            title: "Research and Business Support",
                            description: "Proactive market research, and lead management (research, outreach, follow-up)."
                        },
                        {
                            title: "Content Creation and Editing",
                            description: "Blog assistance, presentation & report formatting."
                        },
                    ]
            },

            // Data Analytics
            "Data Analytics and Reporting": {
                title: "Data Analytics & Reporting for Small Businesses & Startups",
                subtitle: "Master Your Data, Make Better Decisions.",
                paragraphs: [
                    // paragraph 1
                    "We help you uncover trends, identify patterns, and understand customer behavior, enabling data-driven decisions that fuel business growth.",

                    // paragraph 2
                    "With our expertise, we transform raw, unstructured data into a clean, organized format, conducting in-depth analysis to help businesses uncover valuable insights, streamline operations, and maximize revenue.",

                    // paragraph 3
                    " Whether you want to enhance sales performance, optimize marketing efforts, or improve customer engagement, we will develop a customized solution that addresses your unique business needs and delivers real results."
                ],
                image1: "img/pa_data.png", // replace with actual image URL
                image2: "img/pa_data.png", // replace with actual image URL
                offerings:
                    [
                        {
                            title: "Data Cleaning & Transformation",
                            description: "Removal of duplicates, standardization of formats, error correction, and handling of missing data."
                        },
                        {
                            title: "Data Organization & Structuring",
                            description: "Spreadsheet optimization, simple database creation, and data categorization by customer segments, product types, or regions."
                        },
                        {
                            title: "Data Analysis & Business Insights",
                            description: "Trend identification, performance comparison, customer segmentation, behavioral insights, and Google Analytics setup."
                        },
                        {
                            title: "Reporting & Dashboard Creation",
                            description: "Creation of visual reports, interactive dashboards, and custom sales and performance reports for real-time KPI tracking."
                        },
                    ]
            },

            // Web Design
            "Website Design and Tech Support": {
                title: "Website Design & Tech Support",
                subtitle: "Unlock Your Online Business Potential",
                paragraphs: [
                    // paragraph 1
                    "A well-designed website is the foundation of any successful business.\n" +
                    "We craft professional, user-friendly websites, and offer ongoing tech support to ensure everything operates seamlessly.",

                    // paragraph 2
                    "Our solutions  are centered around creating clean, modern websites that deliver a flawless user experience across all devices.\n" +
                    "This empowers businesses to build a powerful online presence without the complexity of managing it.",

                    // paragraph 3
                    "From routine updates to troubleshooting and bug fixes, we offer continuous tech support to keep our clients' websites secure, current, and performing at their best."
                ],
                image1: "img/pa_web.png", // replace with actual image URL
                image2: "img/pa_web.png", // replace with actual image URL
                offerings:
                    [
                        {
                            title: "Responsive, Mobile-Friendly Web Design",
                            description: "Visually appealing websites optimized for all devices with fast page loading and smooth navigation."
                        },
                        {
                            title: "User Experience (UX) & Interface (UI) Design",
                            description: "Easy-to-navigate websites that enhance user engagement and drive conversions."
                        },
                        {
                            title: "Branding & Visual Identity",
                            description: "Cohesive brand presence across all platforms with consistent colors, fonts, and design elements."
                        },
                        {
                            title: "CMS Setup & Customization",
                            description: "WordPress websites tailored for easy content updates and client training on CMS use."
                        },
                        {
                            title: "Monthly Website Analytics & Insights",
                            description: "Actionable insights on website performance, including traffic, SEO, and user behavior, with optimization suggestions."
                        },
                        {
                            title: "Maintenance & Ongoing Support",
                            description: "Regular updates, issue resolution, and backups to ensure smooth website operation."
                        },
                    ]

            },

            // Social media
            "Social Media Management": {
                title: "Social Media Management",
                subtitle: "Maximize Your Brand’s Digital Impact",
                paragraphs: [
                    // paragraph 1
                    "In today’s digital world, social media is a powerful tool for building brand awareness, engaging customers, and driving sales.\n" +
                    "Managing it effectively takes time, creativity, and strategy.",

                    // paragraph 2
                    "Our mission is to strengthen your brand, foster lasting customer relationships, and increase sales.\n" +
                    "This empowers you to establish a compelling online presence, boost engagement, and turn followers into loyal customers.",

                    // paragraph 3
                    "We create scroll-stopping posts, engaging videos and reels, and high-quality content that sparks conversations and drives action." +
                    "We actively monitor your accounts, respond to messages, optimize ads, and deliver insightful monthly reports, ensuring you reach the right audience and achieve real measurable results."
                ],
                image1: "img/pa_social.png", // replace with actual image URL
                image2: "img/pa_social.png", // replace with actual image URL
                offerings: [
                    {
                        title: "Social Media Strategy & Content Planning",
                        description: "Tailored content strategies for major platforms including Instagram, Facebook, LinkedIn, X, and TikTok supported by competitor research."
                    },
                    {
                        title: "Content Creation & Scheduling",
                        description: "High-quality branded posts, engaging videos, and a well-organized content calendar for consistent and impactful social media presence."
                    },
                    {
                        title: "Engagement & Community Building",
                        description: "Active responses to comments and messages, fostering professional connections with followers and driving organic audience growth."
                    },
                    {
                        title: "Ads & Promotions",
                        description: " Creation and management of targeted ad campaigns to attract and convert customers, with strategic post boosting to increase reach."
                    },
                    {
                        title: "Analytics & Performance Tracking",
                        description: "Reports with key insights on engagement and growth, plus data-driven optimization to improve content effectiveness and performance."
                    },

                ]
            },
        };

        const data = solutionData[serviceName];
        if (!data) return;

        document.getElementById("solution-title").textContent = data.title;
        document.getElementById("solution-subtitle").textContent = data.subtitle;
        document.getElementById("solution-paragraph-1").textContent = data.paragraphs[0];
        document.getElementById("solution-paragraph-2").textContent = data.paragraphs[1];
        document.getElementById("solution-paragraph-3").textContent = data.paragraphs[2];
        document.getElementById("solution-image-1").src = data.image1;
        document.getElementById("solution-image-2").src = data.image2;

        const offeringsList = document.getElementById("service-list");
        offeringsList.innerHTML = "";

        data.offerings.forEach((item) => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${item.title}:</strong> ${item.description}`;
            offeringsList.appendChild(li);
        });

        //   document.getElementById("core-offerings-intro").textContent =
        // data.offeringsIntro || `Our ${serviceName} deliverables include:`;

        document.getElementById("core-offerings-intro").textContent =
            `Our ${data.title} deliverables include:`;


    }
})();

//orij

//SEO
(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const params = new URLSearchParams(window.location.search);
        const serviceName = params.get("service");

        if (!serviceName || !seoData[serviceName]) {
            // Invalid service: skip SEO injection
            return;
        }

        applySEOMetadata(serviceName);
    });

    function applySEOMetadata(serviceName) {
        const seo = seoData[serviceName];
        if (!seo) return;

        const metaTags = [
            {name: "description", content: seo.description},
            {name: "keywords", content: seo.keywords},
            {property: "og:title", content: seo.ogTitle},
            {property: "og:description", content: seo.ogDescription},
            {property: "og:image", content: seo.ogImage},
            {name: "twitter:title", content: seo.twitterTitle},
            {name: "twitter:description", content: seo.twitterDescription},
            {name: "twitter:image", content: seo.twitterImage},
        ];

        metaTags.forEach(({name, property, content}) => {
            const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
            let tag = document.querySelector(selector);

            if (tag) {
                tag.setAttribute("content", content);
            } else {
                tag = document.createElement("meta");
                if (name) tag.setAttribute("name", name);
                if (property) tag.setAttribute("property", property);
                tag.setAttribute("content", content);
                document.head.appendChild(tag);
            }
        });

        const structuredDataScript = document.createElement("script");
        structuredDataScript.type = "application/ld+json";
        structuredDataScript.textContent = JSON.stringify(seo.structuredData);
        document.head.appendChild(structuredDataScript);
    }

    //Define SEO for each service
    const seoData = {
        //VA - use
        "Virtual Assistance": {
  description: "Our Virtual Assistance service provides professional administrative support tailored to your business needs. Let us help you streamline operations and increase efficiency.",
  keywords: "Virtual Assistance, Eryx Digital Virtual Assistance, administrative support, business virtual assistant",
  ogTitle: "Eryx Digital | Services | Virtual Assistance",
  ogDescription: "Boost your business productivity with Eryx Digital's Virtual Assistance service. Expert support tailored for you.",
  ogImage: "img/virtual-assistance.jpg",
  twitterTitle: "Eryx Digital | Services | Virtual Assistance",
  twitterDescription: "Professional Virtual Assistance service to help streamline your business operations.",
  twitterImage: "img/virtual-assistance.jpg",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Virtual Assistance",
    "description": "Professional administrative support for businesses.",
    "url": "https://eryxdigital.com/virtual-assistance",
    "logo": "https://eryxdigital.com/logo.jpg",
    "sameAs": [
      "https://facebook.com/eryxdigital",
      "https://twitter.com/eryxdigital",
      "https://linkedin.com/company/eryxdigital"
    ],
    "provider": {
      "@type": "Agency",
      "name": "Eryx Digital",
      "url": "https://eryxdigital.com/virtual-assistance",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1234567890",
        "contactType": "Customer Service"
      }
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "99.99",
      "priceValidUntil": "2025-12-31",
      "url": "https://eryxdigital.com/virtual-assistance"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "bestRating": "5",
      "ratingCount": "250"
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Nairobi, Kenya"
    },
    "providerMobility": "Mobile",
    "additionalType": "https://schema.org/OnlineBusiness"
  }
},

        //Data Analytics
        "Data Analytics and Reporting": {
            description: "Leverage data-driven insights with Eryx Digital's Data Analytics service. We help businesses make informed decisions for sustainable growth.",
            keywords: "Data Analytics, Business Analytics, Eryx Digital Data Analytics, data-driven insights",
            ogTitle: "Eryx Digital | Services | Data Analytics",
            ogDescription: "Unlock the power of data with Eryx Digital's Data Analytics service. Make smarter business decisions based on real insights.",
            ogImage: "img/data-analytics.jpg",
            twitterTitle: "Eryx Digital | Services | Data Analytics",
            twitterDescription: "Make data-driven decisions with Eryx Digital's Data Analytics service.",
            twitterImage: "img/data-analytics.jpg",
            structuredData: {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Data Analytics",
                "description": "Advanced data analytics services to help your business make informed decisions.",
                "provider": {
                    "@type": "Agency",
                    "name": "Eryx Digital",
                    "url": "https://eryxdigital.com/data-analytics"
                }
            }
        }
    };
})();




