export type Project = {
  slug: string;
  title: string;
  category: string;
  emoji: string;
  /** Real screenshot, shown instead of the emoji/gradient placeholder when set. */
  image?: string;
  status: "Live" | "Concept";
  summary: string;
  tags: string[];
  liveUrl?: string;
  /** For projects where the deliverable itself is downloadable (e.g. an
   * Excel workbook) rather than a hosted live demo. */
  downloadUrl?: string;
  downloadLabel?: string;
  challenge: string;
  solution: string;
  technologies: string[];
  features: string[];
  results: string;
  lessons: string;
};

export const projects: Project[] = [
  {
    slug: "clementia",
    title: "Clementia",
    category: "AI Receptionist",
    emoji: "🤖",
    image: "/projects/clementia.jpg",
    status: "Live",
    liveUrl: "https://nolubabalorixana.app.n8n.cloud/webhook/khanyo-booking",
    summary:
      "An AI-powered receptionist that handles appointment requests, checks availability, suggests alternatives and sends confirmations automatically — currently powering booking for Khanyo Dental Clinic.",
    tags: ["n8n", "Google Gemini", "Automation"],
    challenge:
      "Businesses spend significant time manually answering customer enquiries and scheduling appointments.",
    solution:
      "Developed an AI-powered receptionist capable of handling appointment requests, checking availability, suggesting alternatives and sending confirmations. It's live behind the Book Online flow on Khanyo Dental Clinic's website.",
    technologies: ["n8n", "Google Gemini", "Google Calendar", "Google Sheets", "Gmail", "Automation"],
    features: [
      "Automated appointment booking",
      "Availability checking with alternative suggestions",
      "Automatic confirmation emails",
      "Natural customer enquiry handling",
      "Real-time calendar sync",
    ],
    results:
      "Demonstrates how conversational AI can reduce repetitive administrative tasks and improve customer response times.",
    lessons:
      "Reinforced the importance of designing clear conversational flows and fallback logic so the AI gracefully handles edge cases, and highlighted how connecting tools like Calendar, Sheets and Gmail through n8n can replace hours of manual coordination.",
  },
  {
    slug: "ai-productivity-assistant",
    title: "AI Productivity Assistant",
    category: "AI Productivity",
    emoji: "🧠",
    image: "/projects/ai-productivity-assistant.jpg",
    status: "Live",
    summary:
      "A productivity assistant that consolidates task planning, AI-assisted research and workflow organisation into one intuitive dashboard.",
    tags: ["Lovable AI", "Prompt Engineering"],
    liveUrl: "https://ai-productivity-assistant-rixana.lovable.app",
    challenge:
      "Professionals juggling multiple tasks often lose time switching between tools for planning, research and communication, leading to lower productivity and missed deadlines.",
    solution:
      "Built an AI-powered productivity assistant that consolidates task planning, prompt-driven research and workflow organisation into a single, intuitive interface.",
    technologies: ["Lovable AI", "Prompt Engineering", "Workflow Automation", "Google AI Tools"],
    features: [
      "Smart task prioritisation",
      "AI-assisted research and summarisation",
      "Daily and weekly planning dashboard",
      "Reminders and progress tracking",
    ],
    results:
      "Demonstrates the ability to design AI tools that streamline everyday administrative and productivity workflows for individuals and small teams.",
    lessons:
      "Learned how to translate everyday productivity pain points into clear product requirements, and how thoughtful UX reduces the learning curve for non-technical users adopting AI tools.",
  },
  {
    slug: "smart-chief-assist",
    title: "Smart Chief Assist",
    category: "Executive Support",
    emoji: "🗂️",
    image: "/projects/smart-chief-assist.jpg",
    status: "Live",
    summary:
      "A virtual chief-assistant application centralising task management, AI-assisted communication and quick decision-support for busy professionals.",
    tags: ["Lovable AI", "Automation"],
    liveUrl: "https://smart-chief-assist-rixananolu.lovable.app",
    challenge:
      "Small business owners and executives often lack a centralised system to manage administrative duties, communication and decision support.",
    solution:
      "Developed a virtual chief-assistant application that centralises task management, communication support and quick decision-making resources for busy professionals.",
    technologies: ["Lovable AI", "Automation", "AI Productivity Tools"],
    features: [
      "Centralised task dashboard",
      "AI-assisted communication drafting",
      "Quick-reference decision support",
      "Priority and deadline tracking",
    ],
    results:
      "Shows the capability to design executive-support tools that mirror the responsibilities of a real Executive Assistant, digitised through AI.",
    lessons:
      "Deepened understanding of executive workflow needs and reinforced the value of simplifying complex admin responsibilities into a single, accessible tool.",
  },
  {
    slug: "smart-people-pro",
    title: "Smart People Pro",
    category: "HR Administration",
    emoji: "👥",
    image: "/projects/smart-people-pro.jpg",
    status: "Live",
    summary:
      "An HR-focused platform streamlining candidate tracking, interview scheduling and employee record management through AI-supported workflows.",
    tags: ["Lovable AI", "HR Workflows"],
    liveUrl: "https://smart-people-pro.lovable.app",
    challenge:
      "HR and recruitment processes can be time-consuming, particularly around candidate tracking, interview scheduling and employee record management.",
    solution:
      "Created an HR-focused platform that streamlines candidate tracking, interview scheduling and employee record management using AI-supported workflows.",
    technologies: ["Lovable AI", "Automation", "HR Workflow Design"],
    features: [
      "Candidate and applicant tracking",
      "Interview scheduling assistant",
      "Employee record management",
      "AI-supported HR administration",
    ],
    results:
      "Demonstrates practical HR administration skills combined with AI-enhanced tooling to reduce manual paperwork.",
    lessons:
      "Strengthened knowledge of HR administrative processes and how automation can be applied ethically and effectively to human-centred workflows.",
  },
  {
    slug: "predictplay-bets",
    title: "PredictPlay Bets",
    category: "Data & Predictions",
    emoji: "📊",
    image: "/projects/predictplay-bets.jpg",
    status: "Live",
    summary:
      "A prediction and tracking platform that organises sports predictions, tracks outcomes and presents data in a clean, easy-to-navigate interface.",
    tags: ["Data Organisation", "Web Dev"],
    liveUrl: "https://predictplaybets.lovable.app",
    challenge:
      "Users interested in sports predictions often rely on scattered, unreliable information sources, making it difficult to track and compare predictions in one place.",
    solution:
      "Built a prediction and tracking platform that organises sports predictions, tracks outcomes and presents information in a clean, easy-to-navigate interface.",
    technologies: ["Lovable AI", "Data Organisation", "Web Development"],
    features: [
      "Prediction tracking dashboard",
      "Organised data presentation",
      "Clean, responsive interface",
      "Outcome comparison tools",
    ],
    results:
      "Illustrates the ability to design data-driven applications with clear, user-friendly interfaces outside of a purely administrative context.",
    lessons:
      "Gained experience structuring and presenting data clearly, and understanding user needs in a consumer-facing rather than business-facing application.",
  },
  {
    slug: "english-learning-platform",
    title: "English Learning Platform",
    category: "Education",
    emoji: "📚",
    status: "Concept",
    summary:
      "An interactive online English learning platform with lesson dashboards, class scheduling and an AI receptionist integrated for enquiries and bookings.",
    tags: ["TEFL", "AI Receptionist"],
    challenge:
      "Learners of English as a second language often need consistent, structured practice along with administrative support such as scheduling and progress tracking, which many platforms don't combine.",
    solution:
      "Designed an interactive online English learning platform featuring lesson dashboards, scheduling tools and an AI receptionist integration for enquiries and bookings.",
    technologies: ["AI Receptionist Integration", "Scheduling Tools", "Educational Content Design"],
    features: [
      "Interactive lesson dashboard",
      "Class scheduling and reminders",
      "Progress tracking",
      "AI receptionist for enquiries and bookings",
    ],
    results:
      "Combines education delivery with administrative automation, reflecting the blend of teaching support (TEFL) and AI productivity skills.",
    lessons:
      "Reinforced how administrative and AI skills can be applied to education-focused projects, and highlighted the importance of accessible, encouraging design for learners.",
  },
  {
    slug: "khanyo-dental-clinic",
    title: "Khanyo Dental Clinic",
    category: "Website Design",
    emoji: "🦷",
    image: "/projects/khanyo-dental-clinic.jpg",
    status: "Live",
    summary:
      "A clean, professional Wix website for a dental clinic, built around a warm first impression and effortless online appointment booking.",
    tags: ["Wix", "Website Design"],
    liveUrl: "https://englishfluencys20.wixsite.com/khanyo-dental-clinic",
    challenge:
      "Local healthcare practices need a simple, trustworthy web presence that makes booking an appointment effortless, without the cost or complexity of a fully custom-built site.",
    solution:
      "Designed and built a clean, professional website for Khanyo Dental Clinic on Wix Harmony, pairing warm, reassuring visuals with a straightforward online booking flow.",
    technologies: ["Wix Studio", "Wix Harmony", "Wix Bookings"],
    features: [
      "Warm, professional homepage design",
      "Online appointment booking page",
      "Mobile-responsive layout",
      "Clear, simple navigation",
    ],
    results:
      "Demonstrates the ability to deliver a polished, client-ready website quickly on Wix — directly reflecting the Wix Website Support service offered.",
    lessons:
      "Reinforced how much a clean layout and clear calls-to-action matter for service-based businesses, where the main goal is getting a visitor to book, not just browse.",
  },
  {
    slug: "sales-executive-dashboard",
    title: "Sales Executive Dashboard",
    category: "Data & Analytics",
    emoji: "📈",
    image: "/projects/sales-executive-dashboard.jpg",
    status: "Live",
    summary:
      "An executive-ready sales performance dashboard in Excel — KPI cards, trend charts, and AI-generated business insights, built from a raw data export.",
    tags: ["Excel", "Data Analysis", "Dashboard Design"],
    downloadUrl: "/documents/Sales_Executive_Dashboard_PRO.xlsx",
    downloadLabel: "Download the Workbook",
    challenge:
      "Executives need a fast, visual read on business performance — revenue, margin, orders, and category/regional trends — without digging through raw spreadsheet rows themselves.",
    solution:
      "Built a single-sheet executive dashboard in Excel from a pre-aggregated sales export: KPI summary cards, monthly revenue and category/region charts, a top-categories table, and a written executive summary — plus an AI-generated insights and recommendations section interpreting what the numbers actually mean for the business.",
    technologies: ["Microsoft Excel", "Formulas & KPI Cards", "Data Visualisation", "AI-Assisted Analysis"],
    features: [
      "At-a-glance KPI cards (revenue, profit, orders, customers)",
      "Monthly revenue and category/region performance charts",
      "Top-performing categories table",
      "Written executive summary and AI-generated insights",
      "Strategic recommendations based on the data",
    ],
    results:
      "Turns a flat data export into something a busy executive can actually read in under a minute — and demonstrates comfort combining traditional Excel skill with AI-assisted interpretation of the numbers.",
    lessons:
      "Reinforced that a dashboard's real job is answering 'so what?', not just displaying numbers — the executive summary and recommendations sections matter as much as the charts themselves. Also documented clearly where the source data's limits were (no order- or customer-level detail), rather than presenting figures with false precision.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}
