export type Brand = {
  name: string;
  asset: string;
  website: string;
  logoClassName?: string;
};

export const brands: Brand[] = [
  { name: "Samsung", asset: "Brand Logos/Samsung-Logo-2.png", website: "https://www.samsung.com/us/", logoClassName: "scale-[1.17]" },
  { name: "eero", asset: "Brand Logos/eero-logo.svg", website: "https://eero.com/", logoClassName: "scale-[.5]" },
  { name: "Alexa", asset: "Brand Logos/Alexa-Logo-2021.png", website: "https://www.amazon.com/alexa", logoClassName: "scale-[.85]" },
  { name: "Fitbit", asset: "Brand Logos/Fitbit-Logo-1024x640.png", website: "https://www.fitbit.com/global/us/home", logoClassName: "scale-110" },
  { name: "Google TV", asset: "Brand Logos/Google_TV_logo.svg", website: "https://tv.google/", logoClassName: "scale-[.74]" },
  { name: "Huawei", asset: "Brand Logos/Huawei-Logo.png", website: "https://www.huawei.com/en/", logoClassName: "scale-110" },
  { name: "Intel", asset: "Brand Logos/Intel-logo.jpg", website: "https://www.intel.com/", logoClassName: "scale-[.78]" },
  { name: "JBL", asset: "Brand Logos/JBL-logo.png", website: "https://www.jbl.com/" },
  { name: "Meta", asset: "Brand Logos/Meta-Logo.png", website: "https://about.meta.com/", logoClassName: "scale-[1.18]" },
  { name: "Microsoft", asset: "Brand Logos/Microsoft-logo.jpg", website: "https://www.microsoft.com/", logoClassName: "scale-[1.06]" },
  { name: "Motorola", asset: "Brand Logos/Motorola_new_logo.svg", website: "https://www.motorola.com/", logoClassName: "scale-[.75]" },
  { name: "Nespresso", asset: "Brand Logos/Nespresso-Logo.png", website: "https://www.nespresso.com/", logoClassName: "scale-[1.12]" },
  { name: "Qualcomm", asset: "Brand Logos/qualcomm-logo-1-1.png", website: "https://www.qualcomm.com/", logoClassName: "scale-[.66]" },
  { name: "Sennheiser", asset: "Brand Logos/Sennheiser-logo.png", website: "https://www.sennheiser.com/", logoClassName: "scale-[1.65]" },
  { name: "Sonos", asset: "Brand Logos/sonos-logo (1).png", website: "https://www.sonos.com/", logoClassName: "scale-[.55]" },
  { name: "Sony", asset: "Brand Logos/Sony-logo.png", website: "https://www.sony.com/", logoClassName: "scale-[1.12]" },
  { name: "WHOOP", asset: "Brand Logos/WHOOP-Logo.png", website: "https://www.whoop.com/us/en/", logoClassName: "scale-[1.12]" },
  { name: "Empire Today", asset: "Brand Logos/Empire_Today-Logo.wine.png", website: "https://www.empiretoday.com/", logoClassName: "scale-[2.4]" },
  { name: "Re-Bath", asset: "Brand Logos/re-bath-seeklogo.png", website: "https://www.rebath.com/", logoClassName: "scale-[.72]" },
];

const brandsPageOrder = [
  "Microsoft",
  "Intel",
  "Qualcomm",
  "Meta",
  "eero",
  "Alexa",
  "Samsung",
  "Sony",
  "Google TV",
  "Sennheiser",
  "JBL",
  "Sonos",
  "Motorola",
  "Huawei",
  "Nespresso",
  "Fitbit",
  "WHOOP",
  "Empire Today",
  "Re-Bath",
] as const;

export const brandsForBrandsPage = brandsPageOrder.map((name) => brands.find((brand) => brand.name === name)!);
