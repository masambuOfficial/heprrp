/**
 * Every news story and blog post on the site lives here. The hero slideshow, the
 * News & Blogs page and each article page all read from this one list.
 *
 * To add an article: copy an entry, give it a unique `slug`, set its `type` to "news" or "blog",
 * and fill in the fields. News shows under the News tab and blogs under the Blogs tab.
 * Its page is created automatically at /news/<slug>.
 */
export type ArticleType = "news" | "blog";

export type Article = {
  /** Unique, URL-safe id. The article lives at /news/<slug> */
  slug: string;
  /** "news" for announcements and updates, "blog" for perspectives and personal accounts */
  type: ArticleType;
  title: string;
  /** Short summary shown on cards and in the hero slideshow */
  excerpt: string;
  /** e.g. "Program update", "Governance". Shown as the tag on cards and pages */
  category: string;
  /** Publication date as YYYY-MM-DD */
  date: string;
  /** Path to a photo in public/images/news, e.g. "/images/news/rac-lusaka.jpg". Null shows placeholder artwork. */
  image: string | null;
  /** Describes the photo for screen readers. Leave empty if the photo is purely decorative. */
  imageAlt?: string;
  /** Optional photographer or source credit */
  imageCredit?: string;
  /** Placeholder artwork used when there is no image */
  art: "map" | "rings" | "waves" | "grid";
  /** Optional author */
  author?: string;
  /** Where the story was first published, shown as a link at the end of the article */
  source?: { name: string; url: string };
  /** Show this article in the homepage hero slideshow */
  featured?: boolean;
  /** The full article: one string per paragraph */
  body: string[];
};

// Sample articles summarising HEPRRP news published by IGAD. Dates are placeholders. Replace with the site's own stories.
export const ARTICLES: Article[] = [
  {
    slug: "eleven-countries-working-together",
    type: "news",
    title: "Eleven countries now working together on health emergencies",
    excerpt:
      "With Angola, Botswana and Mozambique newly engaged, the program spans Eastern, Central and Southern Africa, with IGAD and ECSA-HC coordinating regional support.",
    category: "Program update",
    date: "2025-11-15",
    image: null,
    art: "map",
    featured: true,
    body: [
      "With Angola, Botswana and Mozambique newly engaged, the program now spans eleven countries across Eastern, Central and Southern Africa, with IGAD and ECSA-HC coordinating regional support.",
      "The full story will be added here.",
    ],
  },
  {
    slug: "regional-advisory-committee-lusaka",
    type: "news",
    title: "East and Southern Africa Countries Renew Commitment to Health Emergency Preparedness and Response",
    excerpt:
      "Delegates at the 3rd Regional Advisory Committee meeting in Lusaka reaffirmed their commitment to stronger readiness and response, pledging closer collaboration as health emergencies increase across the region.",
    category: "Governance",
    date: "2025-11-20",
    image: "/images/news/rac-lusaka.jpg",
    imageAlt: "Delegates and partners gathered for a group photo at the 3rd Regional Advisory Committee meeting in Lusaka, Zambia",
    imageCredit: "3rd Regional Advisory Committee meeting, Lusaka, Zambia, 18 to 20 November 2025",
    art: "rings",
    author: "Mohamed Djama",
    source: {
      name: "IGAD",
      url: "https://igad.int/east-and-southern-africa-countries-renew-commitment-to-health-emergency-preparedness-and-response/",
    },
    featured: true,
    body: [
      "Delegates from participating countries in the Health Emergency Preparedness, Response and Resilience (HEPRR) programme for East and Southern Africa convening at the 3rd Regional Advisory Committee (RAC) meeting in Lusaka, Zambia, reaffirmed their commitment to strengthening readiness and response mechanisms and pledging closer collaboration in tackling the escalating number of health emergencies affecting the region.",
      "The 3rd RAC, held from 18 to 20 November 2025, brought together HEPRR – MPA program participating countries; Ethiopia, Kenya, Botswana, Burundi, Democratic Republic of Congo, Rwanda, São Tomé and Príncipe, Malawi, Mozambique and Zambia —and partners to enhance coordinated action and strengthen regional collaboration for health emergency preparedness and response.",
      "The RAC serves as the Program's strategic governance and oversight body mandated with providing strategic direction, fostering regional collaboration, ensuring alignment between national and regional priorities, and strengthening stakeholder engagement.",
      "At the RAC meeting, delegates and partners shared valuable lessons and best practices, enriching collective knowledge across the region. Several plenary and panel sessions were held, covering topics such as strengthening public health stewardship, cross-border coordination and collaboration, accelerating health manufacturing in Africa, and digital interventions to enhance preparedness and response in health emergencies.",
      "In his opening remarks, the Minister of Health, Government of Zambia, Hon. Dr Elijah Muchima stressed the need for unity to solve persistent health challenges, specifically citing fragmented surveillance, unequal emergency financing, and limitations in vaccine access at both country and regional levels. Hon. Muchima said that the rising political will, technological innovation, and expanding partnerships must now be consolidated into a regional roadmap for resilient health systems. He emphasized: \"Through solidarity and shared purpose, we can transform this platform into a true engine of regional health security, one that leaves no member state behind.\"",
      "Representing the IGAD Executive Secretary, the Director Planning and Coordination, Dr. Anthony Awira remarked that the increasing participation in the HEPRR program was a recognition that no single country could manage modern health threats alone.",
      "Dr. Awira highlighted that during the two years of the HEPPRP implementation, the region faced serious health threats, including cholera, mpox, Ebola, and Marburg, but countries successfully contained these outbreaks before they escalated into widespread crises. He noted: \"Other countries are advancing their capabilities to develop and produce safe and quality medicines, learning from each other through peer exchanges, joint training, and strategic partnerships.\"",
      "The Director General of the East, Central and Southern Health Community (ECSA-HC), Dr. Ntuli Kapologwe said that emerging challenges such as climate-driven health emergencies and increasing cross-border mobility, which heightens vulnerability, are reason to view health security as a regional matter rather than a national issue. He stated: \"Our systems must therefore be strong, interoperable, and coordinated across borders.\"",
      "Participants recommended a comprehensive set of actions to strengthen health emergency preparedness across the region. They called for bolstering joint planning among the countries and the regional entities (IGAD and ECSA-HC), strengthening National Public Health Institutes (NPHI), prioritizing workforce development, and enhancing laboratory and surveillance system capacities.",
      "Participants further underscored the urgency of advancing the climate–health agenda, fast-tracking regional Medicines Regulatory Harmonization, and expanding capacity-building initiatives, alongside fostering strategic partnerships, technological innovation, and workforce skills development to bolster readiness for emerging health threats.",
      "The meeting also endorsed the HEPRRP Learning Agenda, charting a clear course for evidence-informed action to strengthen health emergency preparedness and response across the region.",
      "During the Pre-RAC session held on 17 November, 2025, project implementation units presented their country-level progress, reviewed key implementation challenges and opportunities, and engaged in strategic discussions on regional collaboration and policy alignment.",
      "As part of the post-RAC sessions, delegates undertook learning missions to the Zambia National Public Health Institute (ZNPHI) and the Zambia Medicines Regulatory Authority (ZAMRA), coordinated by the Ministry of Health of Zambia, to observe practical approaches to health emergency preparedness and response.",
      "Dr. Ramesh Govindaraj, Lead Specialist for the Health, Nutrition, and Population Global Practice at the World Bank, emphasized that the RAC provided an important opportunity to identify areas requiring accelerated progress and to secure the commitments needed to achieve it. He urged countries to adopt fast-paced and well-coordinated interventions, noting that sporadic emergencies can quickly escalate, claiming lives and livelihoods and disrupting economic activity.",
      "The Health Emergency Preparedness, Response and Resilience Program (HEPRRP) is a regional program which aims to strengthen health system resilience and multisectoral preparedness and response to health emergencies in Eastern and Southern Africa. The program is implemented in phases through a Multiphase Programmatic Approach (MPA).",
      "The IGAD Secretariat and ECSA-HC are the regional coordinating institutions of the World Bank funded HEPRR program.",
    ],
  },
  {
    slug: "climate-and-health-community-of-practice",
    type: "news",
    title: "A new regional community of practice on climate and health",
    excerpt:
      "Health, environment and climate officials from nine countries met in Machakos, Kenya, to launch a network for sharing evidence and national experience.",
    category: "Communities of Practice",
    date: "2025-11-10",
    image: null,
    art: "waves",
    featured: true,
    body: [
      "Health, environment and climate officials from nine countries met in Machakos, Kenya, to launch a network for sharing evidence and national experience.",
      "The full story will be added here.",
    ],
  },
  {
    slug: "border-health-risk-assessment-training",
    type: "news",
    title: "Training experts to assess health risks at borders and points of entry",
    excerpt:
      "Public health experts from five countries trained as trainers in strategic risk assessment and contingency planning for cross-border settings.",
    category: "Workforce development",
    date: "2025-07-18",
    image: null,
    art: "grid",
    featured: true,
    body: [
      "Public health experts from five countries trained as trainers in strategic risk assessment and contingency planning for cross-border settings.",
      "The full story will be added here.",
    ],
  },
  {
    slug: "ebola-ministerial-meeting",
    type: "news",
    title: "IGAD health ministers meet on the Ebola outbreak",
    excerpt:
      "IGAD convened its Council of Health Ministers virtually on 29 May 2026, declared the outbreak an event of regional concern and allocated US$ 8.5 million for regional support.",
    category: "Emergency response",
    date: "2026-05-29",
    image: null,
    art: "rings",
    body: [
      "On 29 May 2026, IGAD convened an emergency virtual meeting of its Council of Health Ministers on the Ebola virus disease outbreak, working with regional partners including the World Health Organization, the International Federation of Red Cross and Red Crescent Societies, the Pandemic Fund Secretariat and Africa CDC.",
      "The ministers declared the outbreak an event of regional concern.",
      "IGAD allocated US$ 8.5 million from the Pandemic Fund portfolio for regional support: US$ 7 million, or US$ 1 million for each of its seven member states, and a further US$ 1.5 million for technical assistance and regional coordination.",
      "IGAD also developed and shared a guidance note on Ebola virus disease, and prioritised preparedness and response activities at cross-border settings.",
    ],
  },
  {
    slug: "burundi-field-epidemiology-training",
    type: "news",
    title: "Burundi moves to establish an Intermediate Field Epidemiology Training Program",
    excerpt:
      "A stakeholder meeting in Bujumbura brought partners together to plan the program, with the first cohort expected in October 2026.",
    category: "Workforce development",
    date: "2026-05-21",
    image: null,
    art: "grid",
    body: [
      "From 19 to 21 May 2026, IGAD supported a stakeholder meeting in Bujumbura, Burundi, to help the Ministry of Health establish an Intermediate Field Epidemiology Training Program (I-FETP).",
      "AFENET, FAO, WHO and Africa CDC attended alongside the Ministry of Health and other line sectors. A technical working group was formed to move the discussion forward, and a steering committee will be established.",
      "The first cohort of the Intermediate program is planned to launch in October 2026. The Ministry has asked for technical assistance focused on training trainers and mentors.",
      "The curriculum has also been reviewed and validated, with content on antimicrobial resistance, infection prevention and control, and climate and health to be developed and added.",
    ],
  },
  {
    slug: "genpar-regional-training-addis-ababa",
    type: "news",
    title: "Eleven countries train on gender and equity in health emergencies",
    excerpt:
      "The regional GENPAR training in Addis Ababa helped countries build gender and equity into their preparedness and response work.",
    category: "Gender and equity",
    date: "2026-03-31",
    image: null,
    art: "waves",
    body: [
      "In March 2026, the regional GENPAR training in Addis Ababa, Ethiopia, brought together participants from all eleven participating countries.",
      "The training built a shared understanding of the GENPAR toolkit, strengthened understanding of the gender and equity factors that shape health emergencies, and improved skills in collecting and analysing disaggregated data. Each country developed an action plan.",
      "Afterwards, countries received virtual technical assistance to build gender and equity into their annual work plans, and national training of trainers sessions were delivered in selected countries, including Ethiopia. Tailored support also helped DRC integrate gender and equity into its Ebola surveillance and response.",
    ],
  },
  {
    slug: "ncd-mental-health-peer-learning-rwanda",
    type: "news",
    title: "Peer learning mission to Rwanda on NCDs, mental health and digital health",
    excerpt:
      "Experts from participating countries visited Rwanda from 20 to 24 July 2026 to learn from its experience.",
    category: "Communities of Practice",
    date: "2026-07-24",
    image: null,
    art: "map",
    body: [
      "From 20 to 24 July 2026, experts from participating countries took part in a peer learning mission to Rwanda to learn from its experience with noncommunicable diseases, mental health and digital health. The Rwanda Biomedical Centre hosted the visit.",
      "The mission followed the fourth meeting of the Community of Practice on NCDs and Mental Health in June, which reviewed 2025 STEPS survey results from Burundi, Ethiopia and DRC and Rwanda's experience with child and adolescent mental health.",
    ],
  },
];

/** All articles, newest first */
export const ALL_ARTICLES: Article[] = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));

/** Articles shown in the homepage hero slideshow, newest first */
export const HERO_ARTICLES: Article[] = ALL_ARTICLES.filter((a) => a.featured);

export const getArticle = (slug: string): Article | undefined => ARTICLES.find((a) => a.slug === slug);

export const articleHref = (a: Pick<Article, "slug">): string => `/news/${a.slug}`;

export const NEWS_PAGE = { label: "News & Blogs", href: "/news" } as const;

/** The tabs on the News & Blogs page. `hash` lets links open a specific tab. */
export const ARTICLE_TABS: { type: ArticleType; label: string; hash: string; empty: string }[] = [
  { type: "news", label: "News", hash: "news", empty: "No news yet. Check back soon." },
  { type: "blog", label: "Blogs", hash: "blogs", empty: "No blog posts yet. Check back soon." },
];

/** Link to the News & Blogs page opened on the right tab for this article */
export const listHref = (a: Pick<Article, "type">): string =>
  `${NEWS_PAGE.href}#${a.type === "blog" ? "blogs" : "news"}`;

/** "2025-11-20" becomes "20 November 2025" */
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** How long each hero slide stays up, in milliseconds */
export const SLIDE_MS = 7000;
