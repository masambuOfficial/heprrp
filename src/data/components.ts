// Source: IGAD presentation to the 4th Implementation Support Mission, July 2026.
// These are the components of IGAD's regional work under HEPRRP.

export type SubComponent = {
  id: string;
  title: string;
  summary: string;
  highlights: string[];
};

export type ProgramComponent = {
  id: number;
  title: string;
  summary: string;
  subs: SubComponent[];
};

export const COMPONENTS: ProgramComponent[] = [
  {
    id: 1,
    title: "Strengthening regional systems",
    summary: "Strengthening the preparedness and resilience of regional systems to manage health emergencies.",
    subs: [
      {
        id: "1.1",
        title: "Multisectoral collaboration and partnerships",
        summary: "Building the partnerships that let countries and sectors act together.",
        highlights: [
          "Memorandum of understanding signed with Mozambique; the Botswana agreement is being revised.",
          "Regional Economic Communities take part in IGAD's regional activities, and IGAD joins theirs. An inter-REC meeting with SADC, focused on local manufacturing, was planned for August 2026 in Addis Ababa.",
          "On 29 May 2026 IGAD convened its Health Ministers on the Ebola outbreak. The ministers declared the outbreak an event of regional concern, and IGAD allocated US$ 8.5 million from the Pandemic Fund portfolio for regional support.",
          "A framework for four climate and health priorities (preparedness to climate shocks, risk profiling, predictive modelling and vulnerability assessment) is being put into practice through the Community of Practice.",
          "IGAD convened the 72nd Greater Horn of Africa Climate Outlook Forum and produced March to May forecasts to strengthen early warning.",
        ],
      },
      {
        id: "1.2",
        title: "Health workforce development",
        summary: "Training the field epidemiologists countries need to detect and respond.",
        highlights: [
          "A stakeholder meeting in Bujumbura, 19 to 21 May 2026, brought together Burundi's Ministry of Health, AFENET, FAO, WHO and Africa CDC to help establish an Intermediate Field Epidemiology Training Program. The first cohort is planned for October 2026.",
          "Ethiopia has started operating the Intermediate program through cluster training. São Tomé and Príncipe plans its first cohort for January 2027.",
          "The Intermediate program curriculum was reviewed and validated, with antimicrobial resistance, infection prevention and control, and climate and health content to follow.",
          "A workshop customised the Frontline FETP curriculum to strengthen noncommunicable disease surveillance.",
        ],
      },
      {
        id: "1.3",
        title: "Health commodities and local manufacturing",
        summary: "Supporting access to quality health commodities and building regional vaccine and pharmaceutical manufacturing capacity.",
        highlights: [
          "The Community of Practice on local health manufacturing meets quarterly, with working groups developing knowledge products.",
          "An Ethiopia and Kenya exchange visit on vaccine manufacturing produced commitments on vaccine technology transfer, good manufacturing practice and capacity building.",
          "80 regional experts, from manufacturers, regulators, ministries of health and national IP offices, were trained in intellectual property licensing and technology transfer.",
          "Recruitment began for pharmaceutical manufacturing SMEs to join an Intellectual Property Management Clinic with WIPO.",
          "Regional consultations are supporting the Ethiopian Food and Drug Authority's quality control laboratory to serve as a regional reference laboratory.",
        ],
      },
      {
        id: "1.4",
        title: "Cross-border health collaboration",
        summary: "Keeping essential health services running, and outbreaks contained, where borders meet.",
        highlights: [
          "A draft roadmap integrates gender and equity into cross-border activities.",
          "IGAD took part in the high-level meeting on multi-country cross-border cooperation in Brazzaville, 4 and 5 May 2026.",
          "Essential health service availability was assessed at the Moyale and Busia points of entry, with results shared through the surveillance Community of Practice.",
          "National advocacy workshops were prepared for Kenya, Ethiopia and Burundi on the regional cross-border MOU.",
          "Cross-border activities were prioritised to prepare for and respond to Ebola.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Surveillance, emergency management and NCDs",
    summary: "Collaborative surveillance and laboratory capacity, emergency coordination, and integration of noncommunicable diseases and mental health.",
    subs: [
      {
        id: "2.1",
        title: "Collaborative surveillance and laboratory systems",
        summary: "Strengthening multisectoral disease surveillance and laboratory capacity across countries.",
        highlights: ["Collaborative surveillance is one of the program's four flagship learning topics."],
      },
      {
        id: "2.2",
        title: "Emergency management and coordination",
        summary: "Supporting regional and national emergency coordination.",
        highlights: [],
      },
      {
        id: "2.3",
        title: "Noncommunicable diseases and mental health",
        summary: "Integrating mental health and psychosocial support into emergency preparedness, response and cross-border programming.",
        highlights: [
          "A situational assessment of mental health and psychosocial support systems is under way in eight participating countries, with local research teams of three members per country.",
          "Ethical approval has been obtained in six of the eight countries, and data collection has started in three.",
          "32 data collectors have been deployed, and 54 collectors and research team members were oriented on the protocol and tools.",
          "The Community of Practice met on 24 June 2026 to review the 2025 STEPS survey results from Burundi, Ethiopia and DRC, and Rwanda's experience with child and adolescent mental health.",
          "A peer learning mission to Rwanda on NCDs, mental health and digital health was held from 20 to 24 July 2026.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Project management",
    summary: "Monitoring, learning, gender and equity, safeguards and day-to-day management of the project.",
    subs: [
      {
        id: "3.1",
        title: "Monitoring and evaluation",
        summary: "Tracking results against the agreed framework.",
        highlights: [
          "The IGAD results framework was revised with the first additional financing. It has two project development objectives and five intermediate results indicators.",
          "Bi-annual progress reports are submitted for each half-year.",
          "IGAD supported the Zambia and Botswana implementation support missions and the Mozambique baseline assessment.",
        ],
      },
      {
        id: "3",
        title: "Communications and visibility",
        summary: "Making the program's work visible and its knowledge easy to reach.",
        highlights: [
          "A draft 2026 to 2030 communications strategy and programme visual identity guidelines have been developed.",
          "More than 25 regional events were supported: over 6 in person and over 20 high-level virtual engagements.",
          "Two quarterly newsletters, the 2025 Regional Advisory Committee outcome report and six thematic knowledge products were produced.",
          "Virtual meetings are run with simultaneous interpretation in English, French and Portuguese.",
        ],
      },
      {
        id: "3.2",
        title: "Learning agenda, gender and equity",
        summary: "Turning experience into evidence, and making sure preparedness works for everyone.",
        highlights: [
          "The learning agenda, endorsed by the Regional Advisory Committee in 2025, focuses on four flagship topics: collaborative surveillance, digital health, local manufacturing and workforce development. Communities of Practice are the main way it is put into practice.",
          "The regional GENPAR training in Addis Ababa in March 2026 brought together participants from all 11 countries to apply the gender and equity toolkit.",
          "Follow-up virtual support helped countries integrate gender and equity into their annual work plans, and a national training of trainers was held in Ethiopia.",
          "Tailored support helped DRC integrate gender and equity into Ebola surveillance and response.",
        ],
      },
      {
        id: "3.3",
        title: "Safeguards and project management",
        summary: "Environmental and social standards, procurement and financial management.",
        highlights: [
          "The grievance redress mechanism committee is operational.",
          "A five-year strategic plan has been developed.",
          "A Climate and Health Expert and a Health Equity Specialist have been recruited.",
        ],
      },
    ],
  },
];

export const COMPONENT_NOTE = "Progress reported at the 4th Implementation Support Mission, July 2026.";
