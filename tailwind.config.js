import { SDGGoal, Project, ChatMessage } from './types';

export const SDG_LIST: SDGGoal[] = [
  {
    number: 1,
    name: "No Poverty",
    color: "#E5243B",
    tagline: "End poverty in all its forms everywhere.",
    description: "More than 700 million people live in extreme poverty worldwide.",
    realWorldChallenge: "Designing decentralized community micro-grants for flood-prone rural agriculture.",
    quizQuestion: {
      question: "What is universally considered the extreme poverty monetary threshold by the World Bank?",
      options: ["$2.15 per day", "$5.00 per day", "$10.00 per day", "$1.00 per week"],
      correctIndex: 0,
      explanation: "In 2022, the World Bank updated the international extreme poverty line to $2.15 per person per day."
    }
  },
  {
    number: 6,
    name: "Clean Water and Sanitation",
    color: "#26BDE2",
    tagline: "Ensure availability and sustainable management of water and sanitation for all.",
    description: "1 in 4 health care facilities lacks basic water services globally.",
    realWorldChallenge: "Building IoT solar bio-sand filtration sensors for municipal school fountains.",
    quizQuestion: {
      question: "Which sector accounts for roughly 70% of global freshwater withdrawals?",
      options: ["Household taps", "Agriculture", "Industrial manufacturing", "Data centers"],
      correctIndex: 1,
      explanation: "Agricultural irrigation consumes approximately 70% of global accessible freshwater."
    }
  },
  {
    number: 11,
    name: "Sustainable Cities and Communities",
    color: "#FD9D24",
    tagline: "Make cities and human settlements inclusive, safe, resilient and sustainable.",
    description: "Rapid urbanization puts stress on public transit, air quality, and waste infrastructure.",
    realWorldChallenge: "School hyper-local micro-forest cooling corridors to counteract heat islands.",
    quizQuestion: {
      question: "What is an urban heat island effect primarily caused by?",
      options: [
        "Volcanic activity near city centres",
        "Paved surfaces, dark roofs, and loss of vegetative canopy",
        "Ocean currents",
        "Excessive smartphone usage"
      ],
      correctIndex: 1,
      explanation: "Impermeable concrete and asphalt absorb and re-emit solar radiation, driving urban temperatures up 2–8°F."
    }
  },
  {
    number: 13,
    name: "Climate Action",
    color: "#3F7E44",
    tagline: "Take urgent action to combat climate change and its impacts.",
    description: "Greenhouse gas emissions continue to drive global temperature anomalies.",
    realWorldChallenge: "Auditing school kitchen single-use food packaging emissions with circular composting.",
    quizQuestion: {
      question: "Which gas has a global warming potential over 28 times higher than CO2 over a 100-year span?",
      options: ["Nitrogen", "Methane (CH4)", "Oxygen", "Argon"],
      correctIndex: 1,
      explanation: "Methane is significantly more potent at trapping atmospheric heat than carbon dioxide over a century."
    }
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "proj-101",
    title: "Urban Miyawaki Micro-Forest & Cooling Corridor",
    sdgs: [11, 13, 15],
    leadSchool: "Oakridge International STEM Academy",
    partnerSchools: ["Lycée Saint-Germain (France)", "Kyoto Eco-Lab High"],
    description: "Transforming 400 sqm of asphalt parking into a dense, biodiverse indigenous micro-forest to lower local campus temperature by 2.4°C and collect runoff.",
    status: "Active Build",
    impactState: "Measured",
    impactMetrics: "380 native saplings planted; 1.8°C thermal drop verified by campus thermal cameras.",
    progress: 68,
    team: ["Amina Chen (Lead)", "Devon Miller (Sensor Eng)", "Tariq Al-Mansoor (Ecologist)", "Sofia Rossi (Policy)"],
    tasks: [
      { id: "t1", title: "Deploy Arduino ambient temperature sensors along Zone C", assignee: "Devon Miller", priority: "High", deadline: "Tomorrow", status: "In Progress" },
      { id: "t2", title: "Complete soil microbial moisture audit report", assignee: "Tariq Al-Mansoor", priority: "Medium", deadline: "Oct 28", status: "Completed" },
      { id: "t3", title: "Draft Community Maintenance Pact with student council", assignee: "Amina Chen", priority: "Medium", deadline: "Nov 02", status: "Todo" }
    ],
    ideas: [
      {
        id: "id-1",
        title: "Install student-built drip irrigation powered by rooftop solar runoff",
        author: "Devon Miller",
        pros: ["Reduces manual watering labor by 80%", "Uses 100% recycled rainwater"],
        cons: ["Requires waterproof battery enclosure ($45 cost)"],
        votesInFavor: 7,
        votesAgainst: 1,
        status: "Consensus Reached",
        resolutionNotes: "Approved by team mentor Mr. Vance. Budget allocated from science lab fund."
      },
      {
        id: "id-2",
        title: "Open weekend guided tours to primary school classes",
        author: "Sofia Rossi",
        pros: ["Extends SDG 4 education impact across younger grades"],
        cons: ["Risk of trampled saplings without cordoned walkways"],
        votesInFavor: 4,
        votesAgainst: 3,
        status: "Open Discussion"
      }
    ]
  },
  {
    id: "proj-102",
    title: "Solar Bio-Sand Greywater Recycling Loop",
    sdgs: [6, 9, 12],
    leadSchool: "Oakridge International STEM Academy",
    partnerSchools: ["Nairobi Green Springs Academy"],
    description: "Designing a decentralized physical filtration unit that recycles cafeteria rinse water for grounds landscaping.",
    status: "Discovery",
    impactState: "Estimated",
    impactMetrics: "Estimated 1,200 Litres/week reusable greywater output based on current washbasin flow.",
    progress: 32,
    team: ["Amina Chen", "Kavita Rao", "Lucas Sterling"],
    tasks: [
      { id: "t4", title: "Spectrophotometer test for cafeteria oil particulates", assignee: "Kavita Rao", priority: "High", deadline: "Nov 05", status: "Todo" }
    ],
    ideas: []
  }
];

export const INITIAL_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: "m-1",
    author: "Dr. Marcus Vance",
    avatar: "MV",
    role: "Teacher",
    timestamp: "10:14 AM",
    content: "Welcome to the Sprint 3 workspace team! Please verify your soil probe telemetry before this afternoon's check-in.",
    isSimulatedDemo: true,
    channel: "#general"
  },
  {
    id: "m-2",
    author: "Devon Miller",
    avatar: "DM",
    role: "Student",
    timestamp: "10:22 AM",
    content: "Node 4 was showing noise, but it was just a loose grounding wire on pin 7. Telemetry is now streaming smoothly!",
    isSimulatedDemo: true,
    channel: "#general"
  },
  {
    id: "m-3",
    author: "Amina Chen",
    avatar: "AC",
    role: "Team Lead",
    timestamp: "10:26 AM",
    content: "Great work Devon! I have updated our milestones in the project tracker. Let's make sure our democracy board proposal is voted on by 2 PM.",
    isSimulatedDemo: true,
    channel: "#general"
  }
];