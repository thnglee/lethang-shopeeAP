export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  icon: string; // Icon for project cards/tiles
  image: string; // Main hero image for detail page
  video?: string;
  description: string;
  techStack: string[];
  externalLink?: string;
  githubLink?: string;
  gallery?: string[]; // Additional images for detail page
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "sculptique",
    title: "Sculptique",
    category: "DROPSHIPPING STOREFRONT",
    icon: "/sculptique/scul.png",
    image: "/sculptique/scultique.png",
    description:
      "A Shopify storefront built for the supplements dropshipping niche. Integrated Meta Pixel for conversion tracking, set up Judge.me for social proof, and added Kaching Bundle to improve AOV. Optimized mobile UX to reduce drop-off for paid traffic.",
    techStack: [
      "Meta Pixel",
      "Facebook Ads",
      "Shopify",
      "Judge.me",
      "Kaching Bundle",
      "AOV Optimization",
      "Conversion Rate Optimization",
    ],
    externalLink: "https://sculptique-html.vercel.app/",
    githubLink: "https://github.com/thnglee/Sculptique-Shopify",
  },
  {
    id: "02",
    slug: "fiber",
    title: "fiber",
    category: "AI PRODUCTIVITY TOOL",
    icon: "/fiber/fiber-icon.png", // Icon for project card
    image: "/fiber/fiber.png", // Main hero image
    video: "/fiber/fiber.mp4",
    description:
      "A browser extension for Vietnamese news summarization and real-time fact-checking, built using the OpenAI and Tavily APIs. A side project that helped me get more comfortable working with AI tools and TypeScript.",
    techStack: [
      "Plasmo",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "OpenAI API",
      "Tavily API",
    ],
    externalLink: "https://fiber.vercel.app",
    githubLink: "https://github.com/thnglee/fiber",
    gallery: [
      "/fiber/fiber1.png",
      "/fiber/fiber2.png",
      "/fiber/fiber3.png",
      "/fiber/fiber4.png",
    ],
  },
  {
    id: "03",
    slug: "nextcapy",
    title: "nextcapy",
    category: "D2C PRODUCT — NEXTSTART",
    icon: "/capy/capy-icon.png", // Icon for project card
    image: "/capy/capy1.jpg", // Main hero image
    description: `A D2C product built during the NextStart Incubator program — an AI companion device for children. I worked on market research, defined target audience segments, and contributed to the go-to-market strategy alongside the product and tech teams.`,
    techStack: ["Market Research", "Audience Segmentation", "Go-to-Market", "Vue.js", "Docker"],
    externalLink: "https://nextcapy.studio",
    githubLink: "https://github.com/NextCapy/capy-client",
    gallery: ["/capy/capy2.jpg"],
  },
  {
    id: "04",
    slug: "taichinhxanh",
    title: "taichinhxanh.info",
    category: "GROWTH LANDING PAGE",
    icon: "/tcx/tcx-icon.png", // Icon for project card
    image: "/tcx/tcx.jpg", // Main hero image
    video: "/tcx/tcx.mp4",
    description:
      "A landing page for TCX JSC., built to support a funding round. Focused on clear structure, a simple CTA flow, and trust-building elements to reduce bounce and encourage action.",
    techStack: ["Conversion Optimization", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    externalLink: "https://taichinhxanh.info",
    githubLink: "https://github.com/thnglee/tcx",
  },
];
