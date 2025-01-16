import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import localFont from "next/font/local";

export const gloock = localFont({ src: "../../public/Gloock-Regular.ttf" });
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface workType {
  name?: string;
  heading?: string;
  writeup: string;
  images: any[];
  tools: string[];
  youtube?: string;
  link?: any;
  type?: any;
  github?: any;
  services: string[];
}

export const myWorks: workType[] = [
  {
    name: "shride-landing",
    heading: "Shride Landing Page",
    writeup:
      "This app allows users to book bikes for rides or delivery services, combining transportation and logistics.",
    images: [
      require("public/works/shride/1.png").default,
      require("public/works/shride/2.png").default,
    ],
    tools: [
      "React, Next.js",
      "TailwindCSS",
      "Framer Motion",
    ],
    link: "https://shrideapp.com/",
    services: [
      "Landing Page",
      "Search Engine Optimization SEO",
    ],
  },
  {
    name: "shride-app",
    heading: "Shride Mobile App",
    writeup:
      "This app allows users to book bikes for rides or delivery services, combining transportation and logistics.",
    images: [
      require("public/works/shride/app1.png").default,
      require("public/works/shride/app3.png").default,
      require("public/works/shride/app2.png").default,
      require("public/works/shride/app4.png").default,
    ],
    tools: [
      "React Native, Expo",
      "Zustand",
      "React Query",
    ],
    type: 'app',
    link: "https://shrideapp.com/",
    services: [
      "Mobile App",
      "Deployment to Google Play Store",
      "Deployment to App Store",
    ],
  },
  {
    name: "treats",
    heading: "Treats By Beats",
    writeup:
      "A restaurant website developed from scratch with Stripe payment integration",
    images: [
      require("public/works/treats/1.png").default,
      require("public/works/treats/2.png").default,
      require("public/works/treats/3.png").default,
    ],
    tools: [
      "Laravel PHP and MySQL",
      "HTML, CSS, Bootstrap",
      "JQuery",
      "WebHook",
    ],
    link: "https://treatsbybeats.com/",
    services: [
      "Landing Page",
      "Admin Panel built with laravel PHP and Blade",
      "Online Store Development",
      "Search Engine Optimization SEO",
      "Stripe Payment integration",
    ],
  },
  {
    name: "maris",
    heading: "Maris Game",
    writeup:
      "An educational quiz app for college students with subscriptions and rewards paid in Naira. I developed the Admin Panel and API to be consumed by their Mobile App and Web App.<br/> I Collaborated with the mobile app team to implement Apple Pay in the backend to manage payments and user subscriptions.",
    images: [require("public/works/maris/1.png").default],
    tools: [
      "Laravel PHP for Backend and API",
      "MySQL for Database",
      "Vue.js for SPA and Pinia for state management",
      "Pusher",
      "Sentry for bug tracking in production",
    ],
    link: "https://app.esthermaris.com/",
    github: "https://github.com/flamezbaba/maris-web",
    services: [
      "Admin Panel built with laravel PHP and Blade",
      "API with Laravel PHP",
      "Replicating the Mobile App to SPA built with Vue3, TailwindCSS, Pusher",
      "Multi Payment system integration, Flutterwave and Paystack",
      "Apple Pay Payment Integration for payments on iPhone",
    ],
  },
  {
    name: "jhc",
    heading: "Jesus House Cleveland",
    writeup:
      "Jesus House Cleveland church website.",
    images: [
      require("public/works/jesushousecleveland/1.png").default,
      require("public/works/jesushousecleveland/2.png").default,
      require("public/works/jesushousecleveland/3.png").default,
    ],
    tools: [
      "wordpress",
    ],
    link: "https://jesushousecleveland.org",
    services: [
      "Church Website",
      "Search Engine Optimization SEO",
    ],
  },
  {
    name: "dreamcard",
    heading: "Dream Card Homes",
    writeup:
      "Online Real Estate Website Built From Scratch With Laravel, Inertia JS and Vue JS.<br/><br/>Nigeria’s smarter search property website. Browse through thousands of properties for Sale and for Rent with each listing filled with detailed information and photos.",
    images: [
      require("public/works/dreamcard/1.png").default,
      require("public/works/dreamcard/2.png").default,
      require("public/works/dreamcard/3.png").default,
      require("public/works/dreamcard/4.png").default,
    ],
    tools: [
      "Laravel PHP and MySQL",
      "Inertia JS",
      "Vue.js and Pinia for state management",
    ],
    link: "https://dreamcardhomes.com/",
    services: [
      "Landing Page",
      "Online Property Booking System",
      "Admin Panel for total control of the website built with Laravel PHP For Backend, and inertia js Vuejs for page views",
      "Search Engine Optimization SEO",
    ],
  },
  {
    name: "exodus",
    heading: "Exodus Website",
    writeup: "Website for a Tax Management Firm",
    images: [
      require("public/works/exodus/1.png").default,
      require("public/works/exodus/2.png").default,
      require("public/works/exodus/3.png").default,
    ],
    tools: ["Laravel PHP", "HTML, CSS, Blade", "Bootstrap, JQuery"],
    link: "https://exodusprofessionals.com.ng",
    services: ["Landing Page", "Search Engine Optimization SEO"],
  },
  {
    name: "meritline",
    heading: "Meritline Cargo",
    writeup: "Landing Page for Meritlinecargo",
    images: [
      require("public/works/meritline/1.png").default,
      require("public/works/meritline/2.png").default,
    ],
    tools: ["HTML, CSS, JavaScript", "Bootstrap, JQuery"],
    link: "https://meritlinecargo.com",
    services: ["Landing Page", "Search Engine Optimization SEO"],
  },
  {
    name: "dazzle",
    heading: "Dazzle Landing Page",
    writeup: "",
    images: [
      require("public/works/dazzle/1.png").default,
      require("public/works/dazzle/2.png").default,
    ],
    tools: ["HTML, CSS", "Next.js", "TailwindCSS", "Framer Motions"],
    link: "https://dazzle-landing-demo.vercel.app/",
    github: "https://github.com/flamezbaba/dazzle-demo",
    services: [],
  },
  {
    name: "openshop",
    heading: "OpenShop GraphQL",
    writeup: "",
    images: [require("public/works/graphql.png").default],
    tools: ["Node.js", "Express.js", "MongoDB", "GraphQL", "ApolloServer"],
    github: "https://github.com/flamezbaba/graphql-openshop",
    services: [
      "OpenShop GraphQL API Built with Express.js and GraphQL",
      "DataBase handled with MongoDB",
    ],
  },
  {
    name: "ecommerceapi",
    heading: "Ecommerce API",
    writeup: "Ecommerce API ",
    images: [require("public/works/express.png").default],
    tools: ["Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/flamezbaba/ecommerceapi/",
    services: [
      "Ecommerce API Built with Express.js and MongoDB",
      "DataBase handled with MongoDB",
      "Integration Testing done with Jest",
    ],
  },
  {
    name: "paami",
    heading: "Paami Landing Page",
    writeup: "",
    images: [require("public/works/paami.png").default],
    tools: ["React.js", "Styled-components", "SASS"],
    link: "https://paami-flamezbaba-27f877.netlify.app/",
    github: "https://github.com/flamezbaba/paamidemo",
    services: [],
  },
  {
    name: "amazon",
    heading: "Amazon Redesign",
    writeup: "Amazon Redesign Built with React.js",
    images: [require("public/works/amazon.png").default],
    tools: ["React.js", "Styled-components", "SASS"],
    link: "https://kind-raman-6df71e.netlify.app",
    github: "https://github.com/flamezbaba/amazondemo",
    services: [],
  },
  {
    name: "netflix",
    heading: "Netflix Clone",
    writeup: "Netflix Clone Built with React.js",
    images: [require("public/works/netflix.png").default],
    tools: ["React.js", "Styled-components", "SASS"],
    link: "https://netflixclone-segun.vercel.app/",
    github: "https://github.com/flamezbaba/netflixclone/",
    services: [
      "Movies Data fetch via TheMovieDB API",
      "State Management handled with Redux",
      "Integration Testing done with Cypress",
    ],
  },
  {
    name: "sunshine",
    heading: "Sunshine College",
    writeup: "",
    images: [require("public/works/sunshine.png").default],
    youtube: "h2hbnPruRkI",
    tools: [
      "Laravel PHP and MySQL",
      "HTML, CSS, Bootstrap",
      "JQuery",
    ],
    link: "https://sunshineschools.sch.ng/",
    services: [
      
    ],
  },
  {
    name: "afrogina",
    heading: "Afrogina",
    writeup: "African Store ECommerce Website",
    images: [
      require("public/works/afrogina/1.png").default,
      require("public/works/afrogina/2.jpg").default,
    ],
    tools: [
      "HTML, CSS, Bootstrap",
      "PHP, WordPress",
    ],
    link: "https://afrogina.com",
    services: [
    ],
  },
  {
    name: "chillcity",
    heading: "Chill City",
    writeup: "Drinks Store ECommerce Website",
    images: [
      require("public/works/chillcity.png").default,
    ],
    youtube: "QptPzCQR3CI",
    tools: [
      "HTML, CSS, Bootstrap",
      "PHP, WordPress",
    ],
    services: [
    ],
  },
  {
    name: "sms",
    heading: "First-SMS",
    writeup: "School Management System",
    images: [
      require("public/works/sms.png").default,
    ],
    tools: ["Laravel PHP", "HTML, CSS, Blade", "Bootstrap, JQuery"],
    youtube: "2xjE00PwOfM",
    services: [],
  },
];

// export const myWorks: workType[] = [

//   {
//     title: "Sunshine College",
//     heading: "School Website",
//     image: sunshine,
//     tools: "Laravel, Blade, Jquery, HTML/CSS/SASS, Bootstrap",
//     link: "https://sunshineschools.sch.ng/",
//     github: "",
//     ideas: [],
//   },
//   {
//     title: "Staking Web3",
//     heading: "Web3",
//     image: stakin,
//     tools: "Built using Vue.js, TailwindCss, web3.js, Firebase",
//     link: "https://stakin-sandy.vercel.app/",
//     github: "https://github.com/flamezbaba/stakin",
//     ideas: [
//       "A web3 portal for delegates to know their stake amount and rewards on Polygon(Matic) And Solana Networks.",
//       "Firebase for user Authentication",
//       "Communicated with Polygon(Matic) Smart contract and SolScan Public API",
//       "Connect to Wallet for polygon",
//       "Connect to SolFare Wallet for Solana"
//     ],
//   },
//   {
//     title: "Restuarant POS",
//     heading: "Restuarant POS built with Vue.js",
//     image: pos,
//     tools: "Laravel, Blade, Jquery, HTML/CSS/SASS",
//     link: "",
//     github: "",
//     ideas: [
//       "Backend Built with Laravel and MySQL",
//       "FrontEnd Built with vue2 and bootstrap",
//       "State Management handled with Vuex",
//     ],
//   },
//   {
//     title: "Apex Instant",
//     heading: "Apex Instant built with Vue.js",
//     image: apex,
//     tools: "Laravel, Vue.js, HTML/CSS/BOOTSTRAP",
//     link: "https://www.youtube.com/watch?v=BQJiQ13DNuc",
//     github: "https://github.com/flamezbaba/apex/",
//     ideas: [
//       "Backend API Built with Laravel and MySQL",
//       "FrontEnd Built with vue2 and bootstrap",
//       "State Management handled with Vuex",
//     ],
//   },
//   {
//     title: "Result MS",
//     heading: "Result Management System",
//     image: sms,
//     tools: "Laravel, MySQL, Blade, HTML/CSS/BOOTSTRAP",
//     link: "https://www.youtube.com/watch?v=khWpDgvrkDM",
//     github: "",
//     ideas: [
//       "Result Management System for colleges",
//       "Built with Laravel and MySQL",
//       "FrontEnd Built with Html and bootstrap",
//     ],
//   },
// ];
