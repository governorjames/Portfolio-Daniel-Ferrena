import { PortfolioDocumentArchive, PortfolioFeaturedDocument, PortfolioNarrativeGallery } from "@/components/asset-gallery";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SpecialProjects } from "@/components/special-projects";

export const metadata = {
  title: "Portfolio",
  description: "Field leadership, customer engagement, retail execution, documented performance, and professional recognition from Daniel Ferrena's career.",
  alternates: { canonical: "/portfolio" },
};

const samsungTrainingAssetOrder = [
  "Training/Samsung:Premium Retail Services/Samsung Multi-District Training/image000000 (2).jpeg",
  "Training/Samsung:Premium Retail Services/Samsung Multi-District Training/image000000 2.jpeg",
  "Training/Samsung:Premium Retail Services/image000001.jpg",
  "Training/Samsung:Premium Retail Services/Samsung Multi-District Training/image000000 (4).jpeg",
  "Training/Samsung:Premium Retail Services/Samsung Multi-District Training/image000001 (1).jpeg",
  "Training/Samsung:Premium Retail Services/Samsung Multi-District Training/image000001.jpeg",
  "Training/Samsung:Premium Retail Services/Samsung Multi-District Training/image000000 (3).jpeg",
  "Training/Samsung:Premium Retail Services/District Training of ASMs.jpg",
  "Training/Samsung:Premium Retail Services/20220408_155057.jpg",
  "Training/Samsung:Premium Retail Services/20220414_162700.jpg",
  "Training/Samsung:Premium Retail Services/image000000 2.JPG",
  "Training/Samsung:Premium Retail Services/image000000.JPG",
  "Training/Samsung:Premium Retail Services/20220412_115253.jpg",
  "Training/Samsung:Premium Retail Services/20220322_144601.jpg",
  "Training/Samsung:Premium Retail Services/20220422_142900.jpg",
  "Training/Samsung:Premium Retail Services/20220414_124737.jpg",
  "Training/Samsung:Premium Retail Services/20220421_143642.jpg",
  "Training/Samsung:Premium Retail Services/20220325_142111.jpg",
  "Training/Samsung:Premium Retail Services/20220331_153740.jpg",
  "Training/Samsung:Premium Retail Services/image000000.jpeg",
];

const eeroTrainingAssetOrder = [
  "Training/Eero:Marketsource/District Training Geek Squad.jpeg",
  "Training/Eero:Marketsource/IMG_9647.jpeg",
  "Training/Eero:Marketsource/IMG_2494.jpeg",
  "Training/Eero:Marketsource/IMG_2490.jpeg",
  "Training/Eero:Marketsource/LnL.jpeg",
  "Training/Eero:Marketsource/IMG_0792.jpeg",
  "Training/Eero:Marketsource/IMG_0806.jpeg",
  "Training/Eero:Marketsource/IMG_0843.jpeg",
  "Training/Eero:Marketsource/IMG_0855.jpeg",
  "Training/Eero:Marketsource/IMG_0984.jpeg",
  "Training/Eero:Marketsource/IMG_1001.jpeg",
  "Training/Eero:Marketsource/IMG_1217.jpeg",
  "Training/Eero:Marketsource/IMG_1266.jpeg",
  "Training/Eero:Marketsource/IMG_1271.jpeg",
  "Training/Eero:Marketsource/IMG_1460.jpeg",
  "Training/Eero:Marketsource/IMG_2472.jpeg",
  "Training/Eero:Marketsource/IMG_1721.jpeg",
  "Training/Eero:Marketsource/IMG_1722.jpeg",
  "Training/Eero:Marketsource/IMG_1854.jpeg",
  "Training/Eero:Marketsource/IMG_1502.jpeg",
];

const sennheiserTrainingAssetOrder = [
  "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_2638.jpeg",
  "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_2662.jpeg",
  "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_2836.jpeg",
  "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_2986.jpeg",
  "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_4039.jpeg",
  "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_5218.jpeg",
  "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_5249.jpeg",
  "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_5363.jpeg",
  "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_5368.jpeg",
  "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_6552.jpeg",
  "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_6831.jpeg",
  "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_6873.jpeg",
  "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_8244.jpeg",
  "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_8954.jpeg",
  "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_4869.jpeg",
  "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_5515.jpeg",
  "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_5888.jpeg",
  "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_6039.jpeg",
];

export default function PortfolioPage() {
  return <main id="main-content"><SiteHeader />
    <section className="page-shell py-16 md:py-28"><div className="translate-y-4 md:translate-y-6"><p className="eyebrow">Portfolio</p><h1 className="display mt-6 max-w-5xl text-5xl font-semibold md:text-8xl">Leadership, Built Through Execution.</h1><p className="mt-9 max-w-3xl text-xl leading-8 text-[#6e6e73]">A portfolio of field leadership, retail execution, and customer engagement built across nationally recognized brands—showcasing how teams were developed, customers were engaged, and results were delivered.</p>
      <nav aria-label="Portfolio sections" className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#d2d2d7] pt-5 text-sm font-semibold text-[#424245]">
        <a href="#training-field-leadership" className="hover:text-[#0066cc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc]">Training &amp; Field Leadership</a>
        <a href="#customer-engagement-brand-advocacy" className="hover:text-[#0066cc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc]">Customer Engagement &amp; Brand Advocacy</a>
        <a href="#special-projects-innovation" className="hover:text-[#0066cc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc]">Special Projects &amp; Innovation</a>
        <a href="#performance-recognition" className="hover:text-[#0066cc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc]">Performance &amp; Recognition</a>
      </nav>
    </div></section>

    <section id="training-field-leadership" className="scroll-mt-28 bg-white pt-20 pb-8 md:pt-28 md:pb-12"><div className="page-shell"><p className="eyebrow">01 · Training &amp; Field Leadership</p><h2 className="display mt-5 max-w-5xl text-4xl font-semibold md:text-7xl">Preparing Teams to Represent Brands with Confidence.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-[#6e6e73]">From district training sessions and product launches to in-store coaching and team development, these moments reflect a hands-on leadership style focused on preparing retail teams for successful execution.</p></div>
      <PortfolioNarrativeGallery title="Training & Field Leadership" directories={["Training/Eero:Marketsource", "Training/Samsung:Premium Retail Services", "Training/Training:2020 Companies", "Training/Training:Other 3PL Agencies", "Territories"]} assetOrder={[...samsungTrainingAssetOrder, ...eeroTrainingAssetOrder, ...sennheiserTrainingAssetOrder]} trailingAssetOrder={["Training/Training:2020 Companies/Intel:2020 Companies/IMG_20241208_160227889_HDR.jpg", "Training/Training:2020 Companies/Meta:2020 Companies/IMG_20251012_154727858_HDR.jpg"]} excludedAssets={[
        "Training/Samsung:Premium Retail Services/Summer of Samsung.png",
        "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_6524.jpg",
        "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_7620.jpg",
        "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_8357.jpg",
        "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_9017.jpg",
        "Training/Training:2020 Companies/Sennheiser:2020 Companies/IMG_9018.jpg",
        "Training/Samsung:Premium Retail Services/image000000 2.JPG",
        "Training/Samsung:Premium Retail Services/image000000.JPG",
        "Training/Samsung:Premium Retail Services/Samsung Multi-District Training/image000000.jpeg",
        "Training/Samsung:Premium Retail Services/Samsung Multi-District Training/image000003.jpeg",
        "Training/Eero:Marketsource/IMG_1726.jpeg",
        "Training/Eero:Marketsource/IMG_1855.jpeg",
        "Training/Eero:Marketsource/IMG_0792.jpeg",
        "Training/Eero:Marketsource/IMG_0855.jpeg",
        "Training/Training:2020 Companies/Sennheiser:2020 Companies/Headshot.JPG",
        "Territories/Orlando North - Motorola:BDS Solutions.jpg"
      ]} variant={0} layout="row-grid" collapseFailedAssets loadEagerly collapseUntilLoaded validateVisualMedia />
    </section>

    <section id="customer-engagement-brand-advocacy" className="scroll-mt-28 pt-20 pb-8 md:pt-28 md:pb-12"><div className="page-shell"><p className="eyebrow">02 · Customer Engagement &amp; Brand Advocacy</p><h2 className="display mt-5 max-w-5xl text-4xl font-semibold md:text-7xl">Building Brand Advocacy Through Customer Engagement.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-[#6e6e73]">Every customer interaction was an opportunity to educate, build trust, and create enthusiasm for the brands I represented—turning product knowledge into meaningful retail experiences.</p></div>
      <PortfolioNarrativeGallery title="Customer Engagement & Brand Advocacy" directories={["Customer Interactions:Sales/Sennheiser:2020", "Customer Interactions:Sales/Creative Channel Services", "Customer Interactions:Sales/Eero:Marketsource", "Customer Interactions:Sales/Huawei:Mosaic", "Customer Interactions:Sales/Meta:2020 Companies", "Customer Interactions:Sales/Motorola:BDS Connected Solutions", "Customer Interactions:Sales/Samsung:Premium Retail Services", "Misc 2020 Companies Field Pictures/Empire Today Field Pics", "Misc 2020 Companies Field Pictures/Rebath Field Pics"]} assetSources={{ "Misc 2020 Companies Field Pictures/Rebath Field Pics/IMG_20240517_125748.jpg": "/portfolio-assets/optimized/rebath-field-20240517.jpg", "Misc 2020 Companies Field Pictures/Rebath Field Pics/IMG_20240601_152926.jpg": "/portfolio-assets/optimized/rebath-field-20240601.jpg", "Misc 2020 Companies Field Pictures/Rebath Field Pics/IMG_20240705_112022477_HDR.jpg": "/portfolio-assets/optimized/rebath-field-20240705.jpg" }} excludedAssets={["Customer Interactions:Sales/Creative Channel Services/IMG_2269 copy.JPG", "Customer Interactions:Sales/Creative Channel Services/IMG_2270.JPG", "Customer Interactions:Sales/Eero:Marketsource/IMG_1526.jpeg", "Customer Interactions:Sales/Motorola:BDS Connected Solutions/IMG_20201120_151336643.jpg"]} variant={1} layout="row-grid" collapseFailedAssets loadEagerly collapseUntilLoaded validateVisualMedia />
    </section>

    <section id="special-projects-innovation" className="scroll-mt-28 bg-white py-20 md:py-28"><div className="page-shell"><p className="eyebrow">03 · Special Projects &amp; Innovation</p><h2 className="display mt-5 max-w-5xl text-4xl font-semibold md:text-7xl">Building Resources That Help Teams Perform.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-[#6e6e73]">Beyond day-to-day field execution, I created training resources, presentations, and practical tools designed to make information easier to understand, share, and apply.</p></div>
      <SpecialProjects />
    </section>

    <section id="performance-recognition" className="scroll-mt-28 bg-white py-20 md:py-28"><div className="page-shell"><p className="eyebrow">04 · Performance &amp; Recognition</p><h2 className="display mt-5 max-w-5xl text-4xl font-semibold md:text-7xl">Recognition Earned Through Results.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-[#6e6e73]">Across multiple programs, I was recognized as a top performer and team leader—a reflection of the relationships I built and the results I delivered in the field.</p></div>
      <PortfolioFeaturedDocument title="Letter of Recommendation" caption="Recommendation from a MarketSource Program Manager recognizing outstanding results, adaptability, and team leadership." src="/portfolio-assets/optimized/marketsource-letter-of-recommendation.png" />
      <div className="page-shell mt-12 grid gap-5 md:mt-16 md:grid-cols-2"><PortfolioDocumentArchive directory="Awards:Recognition:Achievements/Marketsource/Sales Reports" title="Sales Performance Examples" assets={["Awards:Recognition:Achievements/2020 Companies/Great looking Sennheiser sales report.jpg"]} assetSources={{ "Awards:Recognition:Achievements/2020 Companies/Great looking Sennheiser sales report.jpg": "/portfolio-assets/optimized/sennheiser-q4-sales-report-cropped.jpg" }} excludedAssets={["Awards:Recognition:Achievements/Marketsource/Sales Reports/Q3 2019/June 2019/eero SMART Card - Start of Q3 2019 - Orlando.png"]} /><PortfolioDocumentArchive directory="Awards:Recognition:Achievements/Marketsource/Top Eero Locations in Nation" title="Top Performing Stores" assets={["Awards:Recognition:Achievements/Mosaic/Top Store of the District - Samsung:Mosaic.png"]} previewAssets={["Awards:Recognition:Achievements/Marketsource/Top Eero Locations in Nation/IMG_0003.JPG", "Awards:Recognition:Achievements/Marketsource/Top Eero Locations in Nation/IMG_1063.JPG", "Awards:Recognition:Achievements/Marketsource/Top Eero Locations in Nation/IMG_3174.jpeg"]} /></div>
    </section>
    <SiteFooter />
  </main>;
}
