import construction from "../../../assets/under-construction.jpg";
import MSMS from "../../../assets/MSMS.png";
import PROPVIEWER from "../../../assets/PROPVIEWER.png";
import HB from "../../../assets/HABITAT-SIMULATION.png";
import TA from "../../../assets/text-adventure.jpg";
import Wallet from "../../../assets/Wallet.jpeg";
import Pacman from "../../../assets/pacman.png";
import AutomataToolkit from "../../../assets/chooseStateSimulator.png";
import RaceCarDataProcessingApplication from "../../../assets/raceCarDataApplication.png";

export const project_list = [    
    {
        id: 1,
        image: TA,
        title: "Pyramid Hunt",
        description: "Text-based pyramid exploration game. Gather artifacts, interact with NPC's, and teleport through rooms. Victory requires the most coveted treasures. Unravel mysteries, emerge triumphant, and become a legend.",
        category: "other",
        github: "https://github.com/Shozab-N18/Pyramid-Hunt"
    },
    {
        id: 2,
        image: HB,
        title: "Predator Prey Simulator",
        description: "Witness the evolution of an ecosystem over time through captivating visuals. Simulate the effects of natural disasters, weather patterns, limited food supply, and evolutionary traits to understand the potential outcomes on the ecosystem. Gain valuable insights into the delicate balance of nature and explore the fascinating interplay of environmental factors.",
        category: "app",
        github: "https://github.com/Shozab-N18/Predator-Prey-Simulator"
    },
    {
        id: 3,
        image: PROPVIEWER,
        title: "London Property Marketplace",
        description: "Find your dream home in London with ease. Explore a large property database, compare vibrant neighborhoods, and access essential statistics for an informed decision-making process.",
        category: "app",
        github: "https://github.com/Shozab-N18/London-Property-Viewer"
    },
    {
        id: 4,
        image: MSMS,
        title: "Music School Management System",
        description: "Simplify student lesson scheduling with our user-friendly software. Students can easily book lessons based on their preferred time slots and teachers. All bookings will be in a pending state until confirmed by an admin user with privileged access, ensuring smooth coordination and efficient management of lesson schedules.",
        category: "web",
        github: "https://github.com/AFaverooo/Koala"
    },
    {
        id: 5,
        image: Wallet,
        title: "Crypto Wallet Application",
        description: "Your comprehensive financial analysis app. Connect your bank, stocks, and crypto accounts to gain real-time insights into your balances. Track and visualize balance fluctuations through sophisticated line charts, empowering you to make informed financial decisions. Stay in control of your finances with ease and convenience.",
        category: "app",
        github: "https://github.com/Shozab-N18/Wallet-In-One"
    },
    {
        id: 6,
        image: RaceCarDataProcessingApplication,
        title: "RaceCarDataProcessingApplication",
        description: "The RaceCarDataProcessingApplication is a C# .NET application designed to process race car data. It reads data from a file, applies predefined conditions to the data, calculates new data channels, and plots the results.",
        category: "app",
        github: "https://github.com/Shozab-N18/MGP-ASSIGNMENT"
    },
    {
        id: 7,
        image: Pacman,
        title: "Pacman",
        description: "Pacman AI built with an MDP solver. The MDP solver uses value iteration to find the optimal policy for the pacman to take. Parameters in code can be fine-tuned to change the behaviour of the pacman. The pacman can be made to be more aggressive, more defensive, or more random.",
        category: "app",
        github: "https://github.com/Shozab-N18/6CCS3AIN-Pacman-MDP-solver"
    },
    {
        id: 8,
        image: AutomataToolkit,
        title: "Automata Animated Visual Toolkit",
        description: "The Automata-Animated-Visual-Toolkit is a Java-based tool designed to help students and educators understand the fundamentals of automata theory. It provides an animated visual toolkit for simulating both deterministic and non-deterministic finite automata (DFA and NFA). The toolkit allows users to create, visualize, and simulate automata in a user-friendly environment.",
        category: "app",
        github: "https://github.com/Shozab-N18/Automata-Animated-Visual-Toolkit"
    },

].sort((P1, P2) => P2.id - P1.id);

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