import construction from "../../../assets/under-construction.jpg";
import MSMS from "../../../assets/MSMS.png";
import PROPVIEWER from "../../../assets/PROPVIEWER.png";
import HB from "../../../assets/HABITAT-SIMULATION.png";
import TA from "../../../assets/text-adventure.jpg";
import Wallet from "../../../assets/Wallet.jpeg";

export const projectsData = [    
    {
        id: 1,
        image: TA,
        title: "Pyramid Hunt",
        description: "Text-based pyramid exploration game. Gather artifacts, interact with NPC's, and teleport through rooms. Victory requires the most coveted treasures. Unravel mysteries, emerge triumphant, and become a legend.",
        category: "other",
    },
    {
        id: 2,
        image: HB,
        title: "Habitat Simulator",
        description: "Witness the evolution of an ecosystem over time through captivating visuals. Simulate the effects of natural disasters, weather patterns, limited food supply, and evolutionary traits to understand the potential outcomes on the ecosystem. Gain valuable insights into the delicate balance of nature and explore the fascinating interplay of environmental factors.",
        category: "app",
    },
    {
        id: 3,
        image: PROPVIEWER,
        title: "London Property Marketplace",
        description: "Find your dream home in London with ease. Explore a large property database, compare vibrant neighborhoods, and access essential statistics for an informed decision-making process.",
        category: "app",
    },
    {
        id: 4,
        image: MSMS,
        title: "Music School Management System",
        description: "Simplify student lesson scheduling with our user-friendly software. Students can easily book lessons based on their preferred time slots and teachers. All bookings will be in a pending state until confirmed by an admin user with privileged access, ensuring smooth coordination and efficient management of lesson schedules.",
        category: "web",
    },
    {
        id: 5,
        image: Wallet,
        title: "Crypto Wallet Application",
        description: "Your comprehensive financial analysis app. Connect your bank, stocks, and crypto accounts to gain real-time insights into your balances. Track and visualize balance fluctuations through sophisticated line charts, empowering you to make informed financial decisions. Stay in control of your finances with ease and convenience.",
        category: "app",
    },
    {
        id: 6,
        image: construction,
        title: "Cookify",
        description: "Under Construction...",
        category: "web",
    },

]

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'app',
    },
    {
        name: 'other',
    },
]