// Source: IGAD presentation to the 4th Implementation Support Mission, July 2026.
// Communities of Practice are the main way the program's learning agenda is put into practice.
import { CloudSun, Factory, GraduationCap, Brain, Radar, type LucideIcon } from "lucide-react";

export type Community = {
  slug: string;
  name: string;
  icon: LucideIcon;
  summary: string;
  purpose: string;
  highlights: string[];
  /** Learning agenda topic the community supports, if any */
  topic?: string;
};

export const COMMUNITIES: Community[] = [
  {
    slug: "climate-and-health",
    name: "Climate and Health",
    icon: CloudSun,
    summary: "A regional platform for bringing climate considerations into public health systems.",
    purpose:
      "The community connects health, environment and climate officials across countries to share evidence and national experience, and to turn it into practical tools for preparing health systems for climate shocks.",
    highlights: [
      "At its April 2026 progress meeting, members endorsed three priority themes: predictive modelling (led by DRC), preparedness for climate shocks (led by Kenya), and vulnerability assessment and risk profiling (led by Rwanda).",
      "Members agreed to explore a fourth theme covering governance.",
      "Each working group is defining its scope, drafting an implementation roadmap, identifying priority technical assistance needs and preparing presentations on its outputs.",
      "IGAD convened the 72nd Greater Horn of Africa Climate Outlook Forum and produced March to May forecasts to strengthen early warning.",
    ],
  },
  {
    slug: "local-manufacturing",
    name: "Local Manufacturing",
    icon: Factory,
    summary: "Building the region's capacity to make and regulate vaccines and medicines.",
    purpose:
      "The community brings together manufacturers, regulators and ministries to share knowledge and agree a regional work plan for local vaccine and pharmaceutical production.",
    topic: "Local manufacturing",
    highlights: [
      "The community and its working groups meet quarterly and are drafting knowledge products and technical documents.",
      "An Ethiopia and Kenya exchange visit on vaccine manufacturing produced commitments on technology transfer, good manufacturing practice and capacity building.",
      "80 regional experts were trained in intellectual property licensing and technology transfer, in a training with WIPO.",
      "Recruitment began for manufacturing SMEs to join an Intellectual Property Management Clinic.",
    ],
  },
  {
    slug: "ncds-and-mental-health",
    name: "NCDs and Mental Health",
    icon: Brain,
    summary: "Bringing noncommunicable diseases and mental health into emergency preparedness.",
    purpose:
      "The community lets countries exchange survey results, research methods and programme experience so that NCD and mental health needs are part of how emergencies are planned for.",
    highlights: [
      "Its fourth meeting, on 24 June 2026, reviewed 2025 STEPS survey results from Burundi and Ethiopia, the mental health component of the DRC survey, and Rwanda's child and adolescent mental health programme.",
      "A regional research study on mental health and psychosocial support systems is under way in eight countries.",
      "A peer learning mission to Rwanda on NCDs, mental health and digital health was held from 20 to 24 July 2026.",
    ],
  },
  {
    slug: "workforce-development",
    name: "Workforce Development",
    icon: GraduationCap,
    summary: "Supporting field epidemiology training programmes across participating countries.",
    purpose:
      "The community supports countries in setting up and running Intermediate Field Epidemiology Training Programs, so that each has trained people who can detect and respond to outbreaks.",
    topic: "Workforce development",
    highlights: [
      "A virtual meeting discussed endorsing and operationalising the Intermediate programme curriculum across participating countries.",
      "Burundi plans its first cohort for October 2026, and São Tomé and Príncipe for January 2027. Ethiopia has begun operating the programme through cluster training.",
      "Learning missions to Ethiopia are planned for countries establishing their programmes.",
    ],
  },
  {
    slug: "collaborative-surveillance",
    name: "Collaborative Surveillance",
    icon: Radar,
    summary: "Sharing disease information across countries and sectors.",
    purpose:
      "The community supports surveillance that works across borders and across human, animal and environmental health, one of the program's four flagship learning topics.",
    topic: "Collaborative surveillance",
    highlights: [
      "Results of the essential health services assessment at the Moyale and Busia points of entry were presented to the community and will be shared with country stakeholders.",
    ],
  },
];

export const getCommunity = (slug: string) => COMMUNITIES.find((c) => c.slug === slug);

export const LEARNING_TOPICS = ["Collaborative surveillance", "Digital health", "Local manufacturing", "Workforce development"];
