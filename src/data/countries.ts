export type Cohort = "first" | "new";

export type Country = {
  slug: string;
  name: string;
  capital: string;
  cohort: Cohort;
  /** Regional coordinating institution; null until confirmed with the client */
  partner: "IGAD" | "ECSA-HC" | null;
  /** Flag colour used on the map, chosen so neighbouring countries contrast */
  color: string;
  /** The flag's main colours, shown as a strip in tooltips and on country pages */
  flag: string[];
};

// First-phase list and coordinating institutions follow IGAD's published HEPRRP updates.
// Angola, Botswana and Mozambique are newly engaged; confirm their coordinating institution.
export const COUNTRIES: Country[] = [
  { slug: "angola", name: "Angola", capital: "Luanda", cohort: "new", partner: null, color: "#CC092F", flag: ["#CC092F", "#000000", "#FFCB00"] },
  { slug: "botswana", name: "Botswana", capital: "Gaborone", cohort: "new", partner: null, color: "#75AADB", flag: ["#75AADB", "#FFFFFF", "#000000"] },
  { slug: "burundi", name: "Burundi", capital: "Gitega", cohort: "first", partner: "ECSA-HC", color: "#1EB53A", flag: ["#CE1126", "#FFFFFF", "#1EB53A"] },
  { slug: "drc", name: "Democratic Republic of Congo", capital: "Kinshasa", cohort: "first", partner: "ECSA-HC", color: "#007FFF", flag: ["#007FFF", "#F7D618", "#CE1021"] },
  { slug: "ethiopia", name: "Ethiopia", capital: "Addis Ababa", cohort: "first", partner: "IGAD", color: "#078930", flag: ["#078930", "#FCDD09", "#DA121A", "#0F47AF"] },
  { slug: "kenya", name: "Kenya", capital: "Nairobi", cohort: "first", partner: "IGAD", color: "#BB0000", flag: ["#000000", "#BB0000", "#006600", "#FFFFFF"] },
  { slug: "malawi", name: "Malawi", capital: "Lilongwe", cohort: "first", partner: "ECSA-HC", color: "#CE1126", flag: ["#000000", "#CE1126", "#339E35"] },
  { slug: "mozambique", name: "Mozambique", capital: "Maputo", cohort: "new", partner: null, color: "#FCE100", flag: ["#007168", "#000000", "#FCE100", "#D21034"] },
  { slug: "rwanda", name: "Rwanda", capital: "Kigali", cohort: "first", partner: "ECSA-HC", color: "#FAD201", flag: ["#00A1DE", "#FAD201", "#20603D"] },
  { slug: "sao-tome", name: "São Tomé and Príncipe", capital: "São Tomé", cohort: "first", partner: "ECSA-HC", color: "#12AD2B", flag: ["#12AD2B", "#FFCE00", "#D21034", "#000000"] },
  { slug: "zambia", name: "Zambia", capital: "Lusaka", cohort: "first", partner: "ECSA-HC", color: "#198A00", flag: ["#198A00", "#DE2010", "#000000", "#EF7D00"] },
];

export const COHORT_LABEL: Record<Cohort, string> = { first: "First phase", new: "Newly engaged" };

export const partnerLabel = (c: Country) => c.partner ?? "To be confirmed";

export function getCountry(slug: string) {
  return COUNTRIES.find((c) => c.slug === slug);
}
