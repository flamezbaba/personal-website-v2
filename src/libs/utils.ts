import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import localFont from "next/font/local";

import netflix from "public/works/netflix.png";
import dazzle from "public/works/dazzle.png";
import maris from "public/works/maris.png";
import hmfinance from "public/works/hmfinance.png";
import paami from "public/works/paami.png";
import amazon from "public/works/amazon.png";
import sunshine from "public/works/sunshine.png";
import pos from "public/works/pos.png";
import apex from "public/works/apex.png";
import stakin from "public/works/stakin.png";
import sms from "public/works/sms.png";
import graphql from "public/works/graphql.png";
import express from "public/works/express.png";

export const gloock = localFont({ src: "../../public/Gloock-Regular.ttf" });
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface workType {
  title?: string;
  heading?: string;
  image?: any;
  tools?: any;
  link?: any;
  github?: any;
  ideas?: string[];
}

export const myWorks: workType[] = [
  {
    title: "Maris Game",
    heading: "Maris Game",
    image: maris,
    tools: "Vue.js, Pinia, Laravel, MySQL, RESTAPI, HTML/CSS/SASS",
    link: "https://app.esthermaris.com/",
    github: "https://github.com/flamezbaba/maris-web",
    ideas: [
      "Backend Built with Laravel and MySQL",
      "API built with Laravel, feeds both mobile app and web app",
      "Web App built with vue3",
      "State Management handled with Pinia",
    ],
  },
  {
    title: "Dazzle",
    heading: "Dazzle Landing Page",
    image: dazzle,
    tools: "Next.js, TailwindCSS, Framer Motions, HTML/CSS",
    link: "https://dazzle-landing-demo.vercel.app/",
    github: "https://github.com/flamezbaba/dazzle-demo",
    ideas: [
    ],
  },
  {
    title: "OpenShop GraphQL",
    heading: "OpenShop GraphQL API ",
    image: express,
    tools: "Node.js, Express.js, MongoDB, GraphQL, ApolloServer",
    link: "",
    github: "https://github.com/flamezbaba/graphql-openshop/",
    ideas: [
      "OpenShop GraphQL API Built with Express.js and GraphQL",
      "DataBase handled with MongoDB",
    ],
  },
  {
    title: "HMFinance ERP",
    heading: "HMFinance ERP",
    image: hmfinance,
    tools: "Vue.js, Inertia.js, Laravel, TailwindCSS, HTML/CSS",
    link: "",
    github: "",
    ideas: [
      "Enterprise Resource Management Platform built for a loan company to manage their day-to-day activities",
      "Backend Built with Laravel and MySQL",
      "FrontEnd Built with vue3 and inertia.js",
    ],
  },
  {
    title: "Netflix Clone",
    heading: "Netflix Clone Built with React.js",
    image: netflix,
    tools: "React, Redux, Styled-components, HTML/CSS/SASS",
    link: "https://netflixclone-segun.vercel.app/",
    github: "https://github.com/flamezbaba/netflixclone/",
    ideas: [
      "Movies Data fetch via TheMovieDB API",
      "State Management handled with Redux",
      "Integration Testing done with Cypress",
    ],
  },
  {
    title: "Ecommerce API",
    heading: "Ecommerce API",
    image: graphql,
    tools: "Node.js, Express.js, MongoDB",
    link: "",
    github: "https://github.com/flamezbaba/ecommerceapi/",
    ideas: [
      "Ecommerce API Built with Express.js and MongoDB",
      "DataBase handled with MongoDB",
      "Integration Testing done with Jest",
    ],
  },
  {
    title: "Paami Drink",
    heading: "Paami Drink Landing Built with React.js",
    image: paami,
    tools: "React, Styled-components, HTML/CSS/SASS",
    link: "https://paami-flamezbaba-27f877.netlify.app/",
    github: "https://github.com/flamezbaba/paamidemo",
    ideas: [],
  },
  {
    title: "Amazon Redesign",
    heading: "Amazon Redesign Built with React.js",
    image: amazon,
    tools: "React, Styled-components, HTML/CSS/SASS",
    link: "https://kind-raman-6df71e.netlify.app",
    github: "https://github.com/flamezbaba/amazondemo",
    ideas: [],
  },
  {
    title: "Sunshine College",
    heading: "School Website",
    image: sunshine,
    tools: "Laravel, Blade, Jquery, HTML/CSS/SASS, Bootstrap",
    link: "https://sunshineschools.sch.ng/",
    github: "",
    ideas: [],
  },
  {
    title: "Staking Web3",
    heading: "Web3",
    image: stakin,
    tools: "Built using Vue.js, TailwindCss, web3.js, Firebase",
    link: "https://stakin-sandy.vercel.app/",
    github: "https://github.com/flamezbaba/stakin",
    ideas: [
      "A web3 portal for delegates to know their stake amount and rewards on Polygon(Matic) And Solana Networks.",
      "Firebase for user Authentication",
      "Communicated with Polygon(Matic) Smart contract and SolScan Public API",
      "Connect to Wallet for polygon",
      "Connect to SolFare Wallet for Solana"
    ],
  },
  {
    title: "Restuarant POS",
    heading: "Restuarant POS built with Vue.js",
    image: pos,
    tools: "Laravel, Blade, Jquery, HTML/CSS/SASS",
    link: "",
    github: "",
    ideas: [
      "Backend Built with Laravel and MySQL",
      "FrontEnd Built with vue2 and bootstrap",
      "State Management handled with Vuex",
    ],
  },
  {
    title: "Apex Instant",
    heading: "Apex Instant built with Vue.js",
    image: apex,
    tools: "Laravel, Vue.js, HTML/CSS/BOOTSTRAP",
    link: "https://www.youtube.com/watch?v=BQJiQ13DNuc",
    github: "https://github.com/flamezbaba/apex/",
    ideas: [
      "Backend API Built with Laravel and MySQL",
      "FrontEnd Built with vue2 and bootstrap",
      "State Management handled with Vuex",
    ],
  },
  {
    title: "Result MS",
    heading: "Result Management System",
    image: sms,
    tools: "Laravel, MySQL, Blade, HTML/CSS/BOOTSTRAP",
    link: "https://www.youtube.com/watch?v=khWpDgvrkDM",
    github: "",
    ideas: [
      "Result Management System for colleges",
      "Built with Laravel and MySQL",
      "FrontEnd Built with Html and bootstrap",
    ],
  },
];
