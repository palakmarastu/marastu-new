export const WP = "https://www.marastu.com/wp-content/uploads";
export const SITE_URL = "https://www.marastu.com";
export const logoDark = `${WP}/2024/07/logo.svg`;
export const logoWhite = `${WP}/2024/07/footer-logo.svg`;

export const contact = {
  india: { city: "Ahmedabad, India", address: "Level 3, Ratnanjali Square, 316, Prernatirth Derasar Rd, Prahlad Nagar, Ahmedabad, India 380015", phone: "+91 82009 82939", tel: "+918200982939" },
  sydney: { city: "Sydney, Australia", address: "418a Elizabeth St, Surry Hills NSW 2010, Australia", phone: "+61 416 022 287", tel: "+61416022287", note: "Strategic partnership with AD Media" },
  whatsapp: "918200982939",
};

/** Profiles that actually exist on marastu.com's own footer. */
export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/marastu/" },
  { name: "Instagram", href: "https://www.instagram.com/wearemarastu/" },
];

export const reviewLinks = [
  { name: "Clutch", href: "https://clutch.co/profile/marastu", logo: `${WP}/2026/04/clutch-review-logo-v3-1.svg` },
  { name: "Trustpilot", href: "https://www.trustpilot.com/review/marastu.com", logo: `${WP}/2026/04/trustpilot-review-logo-v2-1-1.svg` },
  { name: "Google Reviews", href: "https://www.google.com/search?q=Marastu%C2%AE+Reviews", logo: `${WP}/2026/04/Google-Review-Logo-v2.svg` },
  { name: "Google Partner", href: "https://www.google.com/partners", logo: "/google-partner-badge.svg" },
];

export const tools = ["ga4", "gsc", "google-tag-manager", "semrush-icon", "meta", "hubspot"].map((n) => `${WP}/2026/10/${n}.png`);

export type Testimonial = { title: string; body: string; name: string; location: string; service: string };
export const testimonials: Testimonial[] = [
  { title: "I'm impressed with Marastu®'s strategic inputs, flawless execution, and proactiveness.", body: "Since partnering with Marastu®, the client has seen a 32% increase in organic traffic, a 14% increase in leads, and more than 100 keywords ranking in the top 10 positions on Google. The team proactively addresses queries and concerns. They also deliver on time, and their strategic ideas stand out.", name: "Bethell Taylor", location: "London, England", service: "seo" },
  { title: "My experience with Marastu® has been excellent.", body: "Marastu®'s SEO work has resulted in a significant increase in lead generation, with 8–10 qualified leads received every two weeks. The team is highly accountable and responsive, with a quick turnaround and strong attention to detail. They are truly invested in the project's success.", name: "Jordan Blake", location: "Brooklyn, New York", service: "seo" },
  { title: "What stood out most was how flexible and easy they were to work with.", body: "Marastu successfully delivered high-quality, live backlinks each month, contributing to improved and sustained keyword rankings. The team managed a seamless SEO migration during the client's website relaunch. They also provided a clear project plan and communicated smoothly and regularly.", name: "Greg Habib", location: "Bellevue, Washington", service: "links" },
  { title: "What impressed me most about Marastu® was their strategic approach combined with hands-on execution.", body: "Thanks to Marastu®'s efforts, the client has seen improved organic visibility, website traffic, and keyword rankings. The team is organized and communicative, delivers tasks on time, and responds well to the client's requests and questions. Marastu®'s transparency and professionalism stand out.", name: "Madhavi Chavda", location: "Dubai, United Arab Emirates", service: "seo" },
  { title: "They tailored strategies specifically to our business.", body: "Marastu® has helped the client achieve an increase in organic traffic, improved lead quality, and higher conversion rates. The team has a reliable project management approach and is committed to growth. They deliver on time, follow through on monthly plans, and adapt quickly when priorities shift.", name: "Trinani Zalpuri", location: "Ahmedabad, India", service: "seo" },
  { title: "We're impressed by Marastu®'s commitment and quality.", body: "Marastu®'s work has generated good results, including increased website traffic, inquiries, and calls. The team is committed, delivers everything smoothly, and is always available to answer questions. Overall, the client is pleased with the engagement's outcome.", name: "Sourabh Sukhwal", location: "Udaipur, India", service: "sem" },
  { title: "I'm so impressed with their deep knowledge of digital marketing.", body: "Marastu® has delivered a high-performing, SEO-friendly website that met the client's expectations. Since launching it, the client has achieved top rankings for relevant keywords and improved their CTR. The team always delivers on time and is prompt in addressing requests and implementing revisions.", name: "Veronica Heller", location: "Conger, Minnesota", service: "seo" },
  { title: "The team delivers tasks on time and is reliable.", body: "The client has been pleased with Marastu®'s work. The team has been delivering tasks on time and is reliable. They have been seamlessly communicating via virtual meetings.", name: "Lorraine Clark", location: "United Kingdom", service: "ga4" },
];

/** Verified results — taken word-for-word from published client reviews. */
export const verifiedResults = [
  { k: "+32%", label: "organic traffic", who: "Bethell Taylor · London" },
  { k: "+14%", label: "leads", who: "Bethell Taylor · London" },
  { k: "100+", label: "keywords in Google's top 10", who: "Bethell Taylor · London" },
  { k: "8–10", label: "qualified leads every two weeks", who: "Jordan Blake · New York" },
];

export const caseStudies = [
  { client: "Enclave Dental", industry: "Dental", focus: "SEO", href: `${SITE_URL}/case-study/enclave-dental-seo/`, img: `${WP}/2026/11/Enclave-Dental-SEO-Growth-Dashboard.png`, title: "How Enclave Dental Built Stronger Organic Visibility With Marastu", summary: "How a Lake Mary, Florida dental practice moved from relying on referrals and paid ads to building a genuine organic search presence in one of Central Florida's most competitive dental markets." },
  { client: "Enclave Dental", industry: "Dental", focus: "Local SEO", href: `${SITE_URL}/case-study/enclave-dental-local-seo/`, img: `${WP}/2026/10/local-search-visibility.png`, title: "How Marastu Made Enclave Dental Easier to Find in Local Search", summary: "Enclave Dental is a general and cosmetic dental practice in Lake Mary, Florida. Marastu built a local-first search strategy around its Google Business Profile, so nearby patients searching for a dentist can find, call and get directions to the practice." },
  { client: "Enclave Dental", industry: "Dental", focus: "AI SEO", href: `${SITE_URL}/case-study/enclave-dental-ai-seo/`, img: `${WP}/2026/10/Modern-Teal-Dental-Clinic-Collage.png`, title: "Helping Enclave Dental Build Visibility Across AI Search", summary: "How Marastu approaches AI search visibility for a dental practice across ChatGPT, Google AI Overviews, Perplexity and other AI-powered search experiences." },
  { client: "Enclave Dental", industry: "Dental", focus: "Google Ads & SEM", href: `${SITE_URL}/case-study/enclave-dental-google-ads-sem/`, img: `${WP}/2026/11/Isometric-Dental-Search-Analytics-Desk.png`, title: "How Marastu Got Enclave Dental in Front of Already-Searching Patients", summary: "Enclave Dental had patients, but no way to reach the ones who didn’t already know it existed — people searching for a dentist near Lake Mary, right now. Marastu built an Ads presence designed to turn that search into a booked patient." },
  { client: "Enclave Dental", industry: "Dental", focus: "Social Media", href: `${SITE_URL}/case-study/enclave-dental-social-media/`, img: `${WP}/2026/08/Enclave-dental-clinic.webp`, title: "How Marastu Turned Enclave Dental’s Social Presence Into Real Patient Connections", summary: "Enclave Dental had patients, but no consistent presence on the platforms where new ones were already scrolling. Marastu built a social media strategy designed to turn passive followers into real, booked patients." },
  { client: "Enclave Dental", industry: "Dental", focus: "Digital Marketing", href: `${SITE_URL}/case-study/enclave-dental-digital-marketing/`, img: `${WP}/2026/09/ChatGPT-Image-Sep-11-2026-02_01_29-PM.png`, title: "One Strategy. Five Channels. One Stronger Digital Presence.", summary: "Enclave Dental needed more than individual marketing channels. The goal was to build a connected digital presence where patients could discover the practice, build familiarity and take action when the time was right." },
];

export type Tone = "primary" | "lime" | "accent" | "rose";
export type Service = {
  slug: string; name: string; short: string; tone: Tone; category: "seo" | "performance" | "analytics";
  headline: string; value: string; overview: string;
  problems: string[]; method: [string, string][]; benefits: string[]; faqs: [string, string][];
  proof: string; related: string[];
};

export const services: Service[] = [
  {
    slug: "seo-services", name: "Search Engine Optimization", short: "SEO", tone: "primary", category: "seo",
    headline: "Be found by the people already searching for you.",
    value: "Technical, on-page and content SEO built around the searches that bring revenue — not vanity rankings.",
    overview: "We audit how search engines and AI assistants see your site, fix what holds it back, and build content and authority around the topics your buyers search. Enterprise, local, ecommerce, international, SaaS and B2B programmes each get their own plan.",
    problems: ["Traffic is flat even though you publish regularly", "Pages rank, but the visitors never convert", "A site migration or redesign cost you visibility", "Competitors show up in AI answers and you don't"],
    method: [["Audit", "Technical crawl, content gaps and backlink profile."], ["Prioritise", "A roadmap ranked by impact and effort."], ["Build", "Fixes, content and links shipped monthly."], ["Report", "Rankings, traffic and leads — in plain language."]],
    benefits: ["More qualified organic traffic", "Better lead quality", "Visibility in AI search", "Transparent monthly reporting"],
    faqs: [["How long until SEO shows results?", "Most sites see early movement within three to six months; compounding growth follows from consistent work."], ["Do you cover AI SEO?", "Yes — we optimise for ChatGPT, Gemini, Perplexity and Google's AI results alongside classic search."], ["Which markets do you work in?", "We work with businesses in the USA, UK, Australia, UAE and India."]],
    proof: "seo", related: ["guest-posting-service", "google-analytics-ga4-services", "sem-services"],
  },
  {
    slug: "sem-services", name: "Search Engine Marketing", short: "SEM", tone: "rose", category: "performance",
    headline: "Paid media that pays its way.",
    value: "Google Ads, Meta, LinkedIn and Amazon campaigns structured around cost per qualified lead, not clicks.",
    overview: "We plan, build and manage paid campaigns across search, social and marketplaces, with conversion tracking set up properly from day one so every rupee, dollar or pound is accountable.",
    problems: ["Ad spend rises but leads don't", "You can't tell which campaign drives sales", "Agencies report clicks, not revenue", "Audiences and creatives have gone stale"],
    method: [["Measure", "Fix conversion tracking before spending more."], ["Structure", "Campaigns built around intent and margin."], ["Launch", "Ads, landing pages and audiences tested in parallel."], ["Optimise", "Weekly bid, budget and creative decisions."]],
    benefits: ["Lower cost per lead", "Clear return on ad spend", "Faster testing cycles", "One team across channels"],
    faqs: [["Which ad platforms do you manage?", "Google Ads, Meta Ads, LinkedIn Advertising and Amazon Advertising."], ["Is there a minimum budget?", "We recommend a budget once we understand your market and goals on a strategy call."], ["Who owns the ad accounts?", "You do. We work inside your accounts so you keep all data and history."]],
    proof: "sem", related: ["google-analytics-ga4-services", "seo-services", "performance-seo"],
  },
  {
    slug: "guest-posting-service", name: "Pay Per Link", short: "Link Building", tone: "lime", category: "seo",
    headline: "Clean, natural backlinks — you pay only for links that go live.",
    value: "We help you develop a reputable backlink profile by building contextual, dofollow links that will increase your search engine rankings and your site's traffic.",
    overview: "Building clean, natural backlinks for you & your clients. Every placement is on a real, relevant site with genuine traffic, written to editorial standards and approved by you before it goes live.",
    problems: ["Your link profile is thin compared to competitors", "Past vendors delivered spammy or private-network links", "You resell SEO and need a reliable white-label partner", "Outreach eats your team's time"],
    method: [["Brief", "Target pages, anchors and niche agreed up front."], ["Prospect", "Real sites vetted for relevance and traffic."], ["Publish", "Editorial content placed with contextual links."], ["Report", "Live URLs delivered — you pay per live link."]],
    benefits: ["Contextual dofollow links", "Real sites, real traffic", "Pay only for live links", "White-label friendly"],
    faqs: [["What's the difference between Pay Per Link and Monthly Subscription?", "Pay Per Link suits one-off needs; the Monthly Subscription (blogger outreach) delivers a steady flow of links every month."], ["Do you use private blog networks?", "No. We build links on real, independently run websites."], ["Can agencies resell your links?", "Yes — we build clean, natural backlinks for you and your clients."]],
    proof: "links", related: ["blogger-outreach-services", "seo-services", "performance-seo"],
  },
  {
    slug: "blogger-outreach-services", name: "Blogger Outreach", short: "Monthly Subscription", tone: "lime", category: "seo",
    headline: "A steady stream of authority, every month.",
    value: "A monthly blogger outreach subscription that builds your backlink profile consistently — with clear reporting.",
    overview: "Instead of one-off placements, we run ongoing outreach to bloggers and publishers in your niche, building links and brand mentions month after month to keep rankings growing.",
    problems: ["Rankings rise, then slip without fresh links", "One-off link buys feel random", "You need predictable monthly delivery", "No time to manage relationships with publishers"],
    method: [["Plan", "Monthly link targets and topics."], ["Outreach", "Personal pitches to relevant bloggers."], ["Create", "Editorial content written for each site."], ["Review", "Monthly report of every live link."]],
    benefits: ["Predictable monthly links", "Sustained keyword rankings", "Brand mentions on relevant sites", "One clear monthly report"],
    faqs: [["How many links per month?", "Plans are scoped on a strategy call based on your goals and competition."], ["Can I approve sites first?", "Yes, you can review target sites before content is published."]],
    proof: "links", related: ["guest-posting-service", "seo-services", "google-analytics-ga4-services"],
  },
  {
    slug: "google-analytics-ga4-services", name: "Google Analytics 4", short: "GA4 & GTM", tone: "accent", category: "analytics",
    headline: "Data you can actually trust.",
    value: "Transforming data into actionable insights and making data-driven decisions. We ensure an accurate GA4 implementation by tracking the right metrics effectively.",
    overview: "We bring top-notch expertise in Google Tag Manager (GTM) and Google Analytics 4 (GA4) tracking — from migration and configuration to ecommerce events, conversions and reporting dashboards.",
    problems: ["GA4 numbers don't match your sales", "Conversions aren't tracked or are double-counted", "Universal Analytics history and setup were lost", "Nobody on the team understands the reports"],
    method: [["Audit", "Review existing tags, events and properties."], ["Plan", "A measurement plan tied to business goals."], ["Implement", "GTM and GA4 configured and tested."], ["Train", "Dashboards and a walkthrough for your team."]],
    benefits: ["Accurate conversion tracking", "Clean GTM container", "Ecommerce and lead events", "Reports your team understands"],
    faqs: [["Do you handle GA4 migration?", "Yes — GA4 migration and GA4 configuration are core services."], ["Will you set up Google Tag Manager?", "Yes, we implement and organise GTM alongside GA4."], ["Can you fix an existing setup?", "Absolutely. Most projects start with an audit of what's already installed."]],
    proof: "ga4", related: ["sem-services", "seo-services", "performance-seo"],
  },
  {
    slug: "performance-seo", name: "Performance SEO", short: "Performance SEO", tone: "primary", category: "seo",
    headline: "SEO measured in leads and revenue.",
    value: "An SEO programme that ties every action to measurable business outcomes.",
    overview: "Performance SEO combines technical SEO, content, link building and analytics into one accountable programme, reported against leads and revenue rather than rankings alone.",
    problems: ["SEO reports don't connect to revenue", "Too many vendors, no single owner", "Hard to justify SEO budget internally"],
    method: [["Baseline", "Tracking and revenue attribution first."], ["Target", "Keywords chosen by commercial value."], ["Execute", "Technical, content and links in one plan."], ["Scale", "Double down on what converts."]],
    benefits: ["Revenue-focused reporting", "One accountable team", "Faster decisions", "Compounding growth"],
    faqs: [["How is this different from regular SEO?", "Every priority is ranked by expected business impact and reported against leads and revenue."]],
    proof: "seo", related: ["seo-services", "guest-posting-service", "google-analytics-ga4-services"],
  },
];

export const serviceBySlug = (s: string) => services.find((x) => x.slug === s);

export const categories = [
  { key: "seo" as const, title: "Search Engine Optimization", tone: "primary" as Tone, subs: ["Enterprise SEO", "Local SEO", "Ecommerce SEO", "International SEO", "AI SEO", "SaaS SEO", "B2B SEO", "Link Building & Blogger Outreach", "Pay Per Link"], links: ["seo-services", "performance-seo", "guest-posting-service", "blogger-outreach-services"] },
  { key: "performance" as const, title: "Performance Marketing", tone: "rose" as Tone, subs: ["Search Engine Marketing", "Google Ads", "Meta Ads", "LinkedIn Advertising", "Amazon Advertising"], links: ["sem-services"] },
  { key: "analytics" as const, title: "Analytics & Measurement", tone: "accent" as Tone, subs: ["Google Analytics 4", "Google Tag Manager", "Analytics implementation", "Conversion tracking"], links: ["google-analytics-ga4-services"] },
];

export const toneCls: Record<Tone, string> = {
  primary: "bg-primary text-primary-foreground",
  lime: "bg-lime text-ink",
  accent: "bg-accent text-accent-foreground",
  rose: "bg-rose text-primary-foreground",
};

export const clientLogos = ["dataweave", "fontsnfables", "hapi-patch-logo", "my-pet-demand-logo", "travelodeal", "uiuxminimal", "ultracare-pro", "yashovilla"].map((n) => ({ name: n.replace(/-logo$/, "").replace(/-/g, " "), src: `${WP}/2026/04/${n}.png` }));
export const founderPhoto = `${WP}/2023/11/rahul-doshi-photo.png`;
export const adMediaImg = `${WP}/2025/07/collaboration-home-img.png`;
export const whatsappHref = (msg = "Hi Marastu, I'd like to talk about growing my business.") => `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`;


// Published Marastu articles imported from the existing blog; no generated copy.
export type BlogPost = { slug: string; title: string; excerpt: string; date: string; category: string; readingMinutes: number; image: string; content: string; toc: { id: string; title: string; level: number }[] };
export const blogPosts: BlogPost[] = [
  {
    "slug": "dental-marketing-budget",
    "title": "How Much Should a Dental Practice Spend on Google Ads?",
    "excerpt": "Two dental practices sit on the same busy road. One spends a few hundred pounds on Google Ads each month and gets a trickle of calls. The other spends several times that and fills its diary every week. Which one is wasting money? Neither, necessarily. The first practice might be underspending, so its adverts never […]",
    "date": "2026-07-10",
    "category": "Google Ads",
    "readingMinutes": 8,
    "image": "https://www.marastu.com/wp-content/uploads/2026/11/calculator-on-desk.jpg",
    "content": "<p>Two dental practices sit on the same busy road. One spends a few hundred pounds on Google Ads each month and gets a trickle of calls. The other spends several times that and fills its diary every week. Which one is wasting money?</p>\n<p>Neither, necessarily. The first practice might be underspending, so its adverts never get enough clicks to show what works. The second might have the right budget but a poor campaign, so every pound works harder than it should. The amount matters, but what you do with it matters more.</p>\n<p>If you’ve been asking yourself how much to spend, you’re in the right place. This guide walks through the numbers, the trade-offs and a simple way to set a dental marketing budget you can defend.</p>\n\n\n<figure><img alt=\"Calculator sitting on a desk\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/calculator-on-desk.jpg\"/></figure>\n\n\n<h2 id=\"section-1\">Start with the bigger picture</h2>\n<p>Before you look at Google Ads on its own, it helps to ask how much should dental practice spend on marketing as a whole. There’s no single figure, but many practices set aside somewhere between 5 and 10 percent of their revenue. Newer practices that need to fill the book often sit at the top of that range. Established practices with plenty of referrals can spend less.</p>\n<p>Once you have that total, Google Ads is one slice of it, alongside your website, local search, reviews and referrals. A common split gives paid search a meaningful share while the rest keeps your organic presence healthy. Paid ads work quickly but stop the moment you stop paying, so it’s wise not to put everything into them. A realistic dental marketing budget starts with that total and then breaks it into channels, instead of picking an ad figure out of thin air.</p>\n<h2 id=\"section-2\">What affects the cost of dental Google Ads</h2>\n<p>Dental terms are competitive, and prices vary a lot by treatment and by area. Understanding what drives the price helps you set a realistic dental marketing budget instead of guessing.</p>\n<p>The main factors are:</p>\n<ul>\n<li><strong>Location:</strong> Clicks in a big city cost more than in a small town because more practices compete for the same searches.</li>\n<li><strong>Treatment type:</strong> Implants, aligners and cosmetic work tend to cost more per click than a routine check up.</li>\n<li><strong>Competition:</strong> If three nearby practices bid on the same terms, the auction pushes prices up.</li>\n<li><strong>Quality:</strong> Relevant adverts and a fast, clear landing page can lower what you pay for each click.</li>\n<li><strong>Timing:</strong> Emergency searches, evenings and weekends can behave differently from standard working hours.</li>\n</ul>\n<p>So the honest answer to dental google ads cost is “it depends,” but you can narrow it down fast. Open Google’s Keyword Planner, type in your main treatments and your town, and check the suggested bid range. That gives you a starting point built on your own market.</p>\n<h2 id=\"section-3\">Work backwards from the patients you want</h2>\n<p>The most useful way to set a budget is to start with the result and work back. Here’s a simple method.</p>\n<p>First, decide how many new patients you want from ads each month. Second, estimate how many enquiries it takes to win one patient. Many practices convert somewhere between a quarter and a half of the people who call or book. Third, multiply by your expected cost per click and the number of clicks it takes to get an enquiry.</p>\n<p>For example, if you want five new implant patients and roughly one in three enquiries turns into a patient, you need about fifteen enquiries. If a typical landing page turns one in ten clicks into an enquiry, that’s around a hundred and fifty clicks. Multiply that by your average click price and you have a monthly figure.</p>\n<p>This is also how you get to a realistic cost per lead dentist teams can track. Divide your total ad spend by the number of enquiries, and you have your cost per lead. Divide it by the number of patients booked, and you have your cost per patient. Those two numbers tell you far more than the click price alone.</p>\n<h2 id=\"section-4\">Know what a patient is worth</h2>\n<p>Spending feels very different when you know what comes back. A new patient is rarely a one-off. Over several years they may come for check ups, hygiene visits, fillings and perhaps larger treatments.</p>\n<p>Work out the average value of a new patient over, say, three years. Then compare it with your cost per patient from ads. If you pay a modest amount to win a patient worth many times more, the campaign pays for itself comfortably. If the two numbers are close, something needs fixing.</p>\n<p>Treatment value matters even more. One implant or full set of aligners can be worth thousands, so a higher cost per lead can still make sense. This is where high roi dental google ads campaigns usually come from: focusing the money on the treatments where each patient is worth the most, instead of spreading it thinly across everything.</p>\n\n\n<figure><img alt=\"Laptop with analytics charts on a desk\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/laptop-with-charts-on-desk.jpg\"/></figure>\n\n\n<h2 id=\"section-5\">A sensible way to split the money</h2>\n<p>You don’t need a complicated plan. A simple structure works well for most practices.</p>\n<p>Put the largest share into your highest value treatments, such as implants or cosmetic dentistry. Keep a smaller, steady amount on emergency and new patient searches, which often convert fast. Leave a little room for testing, such as a new advert style or a different landing page.</p>\n<p>If you’re not sure where to begin, start small and learn. A modest dental marketing budget run properly for two or three months will teach you more than a big budget run badly for two weeks. Once you can see which treatments bring enquiries at a good price, move money towards them and away from the rest. Tracking dental google ads cost for each treatment separately shows you which ones deserve more money and which should wait.</p>\n<h2 id=\"section-6\">Reading your first month of results</h2>\n<p>The first month is mostly about learning, so judge it gently. Look at how many people saw your adverts, how many clicked, how many called or filled in a form and how many ended up booking. Each step tells you something different.</p>\n<p>If plenty of people click but few enquire, the landing page probably needs work. If few people click at all, the advert wording or the keywords may be off. If enquiries arrive but few turn into patients, look at how quickly the team responds and how the first call is handled. Fixing the weakest step first usually brings the best return for the least extra spend.</p>\n<p>For a wider view of how paid search fits into the whole picture, our <a href=\"https://www.marastu.com/blog/google-ads-for-dentists-guide/\">Google Ads for Dentists: A Complete Guide</a> covers keywords, adverts and landing pages in detail.</p>\n<h2 id=\"section-7\">Where budgets get wasted</h2>\n<p>Even a good budget can leak. The most common problems are easy to fix once you know where to look.</p>\n<p>Broad keywords bring in searches that have nothing to do with your services, like “dentist jobs” or “free dental care.” Adding negative keywords removes them. Poor landing pages waste the click you already paid for, so send each advert to a page that matches it. Missed calls turn paid enquiries into lost patients, so make sure someone answers or calls back quickly.</p>\n<p>Watching the cost per lead dentist campaigns produce each month shows quickly when something has gone wrong. Many owners also check results too rarely. A weekly look in the first months and a monthly review afterwards keeps things healthy. If you ever find yourself thinking you want to optimize google ads for my dental practice, this checklist is the first place to begin, because small fixes usually bring the biggest gains.</p>\n\n\n<figure><img alt=\"Modern dental treatment room with chair and equipment\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/modern-dental-office-treatment-room.jpg\"/></figure>\n\n\n<h2 id=\"section-8\">When to adjust the budget</h2>\n<p>A budget isn’t fixed forever. Owners often ask how much should dental practice spend on marketing once, then never revisit the answer. Review it every quarter and ask a few questions. Are you getting enquiries at a cost that makes sense? Is the diary full in some weeks and empty in others? Has a new competitor moved in nearby?</p>\n<p>If your Google Ads dental practice campaign is working and you have spare capacity, raising spend on the best performing treatments is a good move. If the diary is full, you can ease off or shift towards higher value work. And if results are poor despite a reasonable budget, resist the urge to simply add more money. Fix the campaign first, then scale.</p>\n<p>Seasonality can matter too. Searches for cosmetic work often rise before holidays and weddings, while emergency searches stay fairly steady all year. A flexible plan lets you lean into those moments instead of spending evenly every month.</p>\n<h2 id=\"section-9\">Should you manage it yourself?</h2>\n<p>Running a Google Ads dental practice account takes time to learn and monitor. Some practice managers handle the basics well, especially for a single clinic. Others find that an agency saves money overall, because specialists know the benchmarks, the keyword traps and the rules around healthcare adverts.</p>\n<p>If you want help, look for an agency that reports on calls and booked patients, not just clicks, and that lets you own the account. Our <a href=\"https://www.marastu.com/dental-digital-marketing/sem-for-dentists-google-ads/\">PPC for dentists</a> service works this way, with clear reporting and no hidden fees.</p>\n<h2 id=\"section-10\">Frequently Asked Questions</h2>\n\n<strong>How much should a small dental practice spend on Google Ads?</strong>\n<p>There’s no fixed figure, but a small practice can start with a modest monthly amount and grow it once results appear. Many begin by testing one or two treatments before spreading the money wider.</p>\n\n<strong>What percentage of revenue should go to marketing?</strong>\n<p>Many practices set aside 5 to 10 percent of revenue for all marketing, with Google Ads as one part of that total.</p>\n\n<strong>How long before Google Ads brings patients?</strong>\n<p>Calls can start within days of launch, though it usually takes a few weeks to learn what works and tidy the campaign.</p>\n\n<strong>Is Google Ads worth it for dentists?</strong>\n<p>For most practices with a good website and a team that answers the phone, yes. The key is tracking cost per patient and comparing it with what each patient is worth.</p>\n\n\n<h2 id=\"section-11\">Build a budget that works</h2>\n<p>A good dental marketing budget isn’t about spending the most. It’s about spending with a purpose, tracking the results and adjusting as you learn. If you’d like a clear plan with real numbers for your area, <a href=\"https://www.marastu.com/\">Marastu</a> can review your goals, suggest a sensible budget and set up campaigns you can measure. Get in touch and we’ll show you what’s realistic.</p>",
    "toc": [
      {
        "id": "section-1",
        "title": "Start with the bigger picture",
        "level": 2
      },
      {
        "id": "section-2",
        "title": "What affects the cost of dental Google Ads",
        "level": 2
      },
      {
        "id": "section-3",
        "title": "Work backwards from the patients you want",
        "level": 2
      },
      {
        "id": "section-4",
        "title": "Know what a patient is worth",
        "level": 2
      },
      {
        "id": "section-5",
        "title": "A sensible way to split the money",
        "level": 2
      },
      {
        "id": "section-6",
        "title": "Reading your first month of results",
        "level": 2
      },
      {
        "id": "section-7",
        "title": "Where budgets get wasted",
        "level": 2
      },
      {
        "id": "section-8",
        "title": "When to adjust the budget",
        "level": 2
      },
      {
        "id": "section-9",
        "title": "Should you manage it yourself?",
        "level": 2
      },
      {
        "id": "section-10",
        "title": "Frequently Asked Questions",
        "level": 2
      },
      {
        "id": "section-11",
        "title": "Build a budget that works",
        "level": 2
      }
    ]
  },
  {
    "slug": "dental-seo-vs-traditional-marketing",
    "title": "Dental SEO vs Traditional Marketing: Which Is Better?",
    "excerpt": "For years, a new dental practice had a fairly predictable marketing plan. Put a sign above the door, print some leaflets, place an advert in the local paper and hope the phone rings. Plenty of practices built a loyal patient base that way. Then patients changed how they look for a dentist. Today someone who […]",
    "date": "2026-07-07",
    "category": "SEO",
    "readingMinutes": 7,
    "image": "https://www.marastu.com/wp-content/uploads/2026/11/open-laptop-wooden-desk.jpg",
    "content": "<p>For years, a new dental practice had a fairly predictable marketing plan. Put a sign above the door, print some leaflets, place an advert in the local paper and hope the phone rings. Plenty of practices built a loyal patient base that way.</p>\n<p>Then patients changed how they look for a dentist. Today someone who needs a check up or a sore tooth looked at has probably picked up their phone before they ever glance at a leaflet. They type something like “dentist near me,” scan the first few results, read a few reviews and book.</p>\n<p>That shift raises an obvious question for practice owners. Should you keep spending on the old methods, move to dental SEO marketing, or do a bit of both? This article compares them fairly, so you can decide where your money should go.</p>\n\n\n<figure><img alt=\"Open laptop on a wooden desk\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/open-laptop-wooden-desk.jpg\"/></figure>\n\n\n<h2 id=\"section-1\">What counts as traditional dental marketing</h2>\n<p>Traditional dental marketing covers the offline methods practices have used for decades. That includes printed leaflets and flyers, adverts in local newspapers and magazines, direct mail, radio spots, signage, sponsorship of local events and word of mouth through existing patients.</p>\n<p>These methods aren’t useless. A well placed sign still catches people walking past, and a good recommendation from a friend remains one of the strongest forms of trust. The weakness is that most of them are hard to measure. If someone books after seeing a leaflet, you rarely know whether it was the leaflet, a recommendation or a search they did later.</p>\n<p>Traditional dental marketing also tends to reach a broad audience. Your advert lands in front of everyone who picks up the paper, whether or not they need a dentist this month.</p>\n<h2 id=\"section-2\">What dental SEO actually does</h2>\n<p>SEO stands for search engine optimisation. In plain terms, dental SEO marketing is the work of making your practice easier to find when people search on Google. That includes your website content, your technical setup, your Google Business Profile, your reviews and the links pointing to your site.</p>\n<p>When it works, your practice appears when someone searches for a service you offer, in the area you serve. That person is already looking. They have a need and are comparing options right now, which makes them a far warmer prospect than a stranger who glances at a flyer.</p>\n<p>If you’d like the full picture of how it fits together, see our guide to <a href=\"https://www.marastu.com/blog/how-to-get-more-dental-patients/\">dental SEO marketing</a> and how it helps attract more patients.</p>\n<h2 id=\"section-3\">Cost: where does the money go?</h2>\n<p>Cost is where many owners start, so let’s look at it directly.</p>\n<p>Traditional methods carry steady, visible costs. You pay for printing, distribution, advert space or sponsorship each time, and when you stop, the effect stops too. A newspaper advert has a short life. A leaflet might sit in a drawer for a few weeks and then vanish.</p>\n<p>SEO marketing for dentists works differently. There’s an upfront effort to build the foundations, then ongoing work to keep climbing and protect your position. The effect tends to build over time, because a page that ranks well can keep bringing patients for months or years without you paying per click or per print.</p>\n<p>The trade-off is patience. SEO usually takes a few months to show clear movement, while a leaflet drop can produce calls within days. If you want a closer look at what SEO costs, our breakdown of <a href=\"https://www.marastu.com/blog/how-much-does-dental-seo-cost/\">SEO marketing for dentists</a> pricing explains typical ranges and what affects them.</p>\n<h2 id=\"section-4\">Patient acquisition: who walks through the door?</h2>\n<p>Think about the kind of patient each approach brings.</p>\n<p>Offline marketing is good at building local awareness and reinforcing your name. It can remind people you exist, which helps when they later need a dentist. It also suits older patients, who may be less likely to search online.</p>\n<p>SEO for dental practice websites brings in people at the moment of need. Someone with a broken tooth searches for an emergency appointment. Someone planning a smile makeover searches for veneers. Because they come from a search they typed themselves, their intent is clear, and they’re often ready to book.</p>\n<p>Digital channels also let you see exactly what happened. You can tell how many people found you through search, how many called and which pages they visited. That kind of visibility makes it easier to improve and to justify the spend.</p>\n<h2 id=\"section-5\">Visibility and trust</h2>\n<p>Visibility isn’t only about being seen. It’s about being seen at the right moment and in a way that earns trust.</p>\n<p>In Google’s local results, patients compare practices side by side. They see ratings, reviews, opening hours and photos before they ever visit your website. A strong profile with plenty of recent reviews can persuade someone in seconds. A flyer can’t do that, because it has no reviews attached.</p>\n<p>That’s why many practices find that search visibility and offline reputation work together. A patient might hear about you from a neighbour, then search your name to check you out. Most digital marketing for dental practices now starts with this kind of search visibility, because it puts your best reviews where people already look. If what they find is strong, the recommendation turns into a booking. If your online presence is thin, you can lose that patient even though the personal recommendation was good.</p>\n\n\n<figure><img alt=\"Laptop on a desk showing a website\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/laptop-on-desk-website.jpg\"/></figure>\n\n\n<h2 id=\"section-6\">Long-term growth</h2>\n<p>Here the gap tends to widen. Traditional marketing is mostly a series of one-off pushes. Each campaign needs fresh money, and its effect fades.</p>\n<p>Dental SEO marketing behaves more like an asset. The content you publish, the reviews you collect and the links you earn all stay in place. Over time they compound, so the work you did last year still helps this year. That’s why practices that invest steadily often find their cost of winning a patient falls as time goes on, and why SEO for dental practice sites can become one of the most cost effective channels you have.</p>\n<p>It isn’t magic, though. Rankings need maintenance, because competitors improve and Google changes how it ranks pages. Think of it as looking after a garden rather than building a wall: it keeps paying off as long as you keep tending it.</p>\n\n\n<figure><img alt=\"Dental treatment room with a desk and chair\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/dental-room-with-desk-and-chair.jpg\"/></figure>\n\n\n<h2 id=\"section-7\">A quick side by side view</h2>\n<p>Here’s how they compare on the points that matter most.</p>\n<ul>\n<li><strong>Speed:</strong> Traditional methods can bring calls within days. SEO usually takes a few months to build.</li>\n<li><strong>Measurement:</strong> SEO is far easier to track. Offline results are often guesswork.</li>\n<li><strong>Cost over time:</strong> SEO tends to become more efficient. Offline costs repeat with every campaign.</li>\n<li><strong>Intent:</strong> SEO reaches people who are actively searching. Offline reaches a wider, less targeted audience.</li>\n<li><strong>Reach:</strong> Offline can help with older patients and local awareness. SEO covers everyone searching online, which is most people now.</li>\n</ul>\n<h2 id=\"section-8\">Do you need to choose?</h2>\n<p>Not really. For most practices, the strongest approach is a blend that leans on search. Think of your main digital marketing seo dentist work as the engine, and treat the traditional pieces as support. In that setup, dental SEO marketing does the heavy lifting and everything else reinforces it.</p>\n<p>A sensible plan might look like this. Keep your signage and a few local relationships, because they cost little and build familiarity. Make a good Google Business Profile and a clear website the centre of your effort. Use reviews and referrals to link the two. And, where it makes sense, add paid ads for short term pushes.</p>\n<p>This kind of digital marketing for dental practices lets you test small and grow what works. If you’re unsure where to start, look at where your last twenty new patients came from. If most mention Google or a friend’s recommendation, you already have your answer.</p>\n<h2 id=\"section-9\">When traditional methods still make sense</h2>\n<p>There are cases where offline work deserves more weight. A practice in a small community, where almost everyone knows each other, may find that sponsoring a local team or attending events brings a steady stream of patients. A practice that mainly serves older patients may find print advertising still reaches them well.</p>\n<p>Even then, it pays to back it up online. People who hear about you will search for you, and what they see should match the reputation you’ve built.</p>\n<h2 id=\"section-10\">What effective online marketing looks like</h2>\n<p>Effective online marketing for dental practices has a few common ingredients: a fast, clear website, pages built around real patient searches, an active Google Business Profile, a steady flow of reviews and a plan to measure results. None of this is flashy, but it works because it matches how patients actually behave.</p>\n<p>If you’d like experts to handle it, our <a href=\"https://www.marastu.com/dental-digital-marketing/seo-for-dentists/\">Dental SEO services</a> are built around exactly these steps.</p>\n<h2 id=\"section-11\">Frequently Asked Questions</h2>\n\n<strong>Is SEO better than traditional marketing for dentists?</strong>\n<p>For most practices, yes, because SEO reaches patients at the moment they search and results are easier to measure. Traditional methods still help with local awareness, so the best plan is usually a mix that leans on search.</p>\n\n<strong>How long does dental SEO take compared with offline marketing?</strong>\n<p>Offline marketing can bring calls within days, while SEO usually takes three to six months to show clear results. The benefit of SEO is that it keeps working after the first push.</p>\n\n<strong>Can I do both at the same time?</strong>\n<p>Yes. Many practices keep low cost offline methods and put most of their effort into search, then adjust based on where new patients come from.</p>\n\n<strong>What is the cheapest way to start with dental SEO?</strong>\n<p>Claim and complete your Google Business Profile, ask happy patients for reviews and improve your main service pages. These steps cost little and often make a visible difference.</p>\n\n\n<h2 id=\"section-12\">Ready to decide where to invest?</h2>\n<p>Choosing between old and new methods doesn’t have to be a guess. If you’d like a clear view of where your next patients are likely to come from, <a href=\"https://www.marastu.com/\">Marastu</a> can look at your practice, your area and your goals, and suggest a plan that fits. Get in touch and we’ll show you what’s realistic.</p>",
    "toc": [
      {
        "id": "section-1",
        "title": "What counts as traditional dental marketing",
        "level": 2
      },
      {
        "id": "section-2",
        "title": "What dental SEO actually does",
        "level": 2
      },
      {
        "id": "section-3",
        "title": "Cost: where does the money go?",
        "level": 2
      },
      {
        "id": "section-4",
        "title": "Patient acquisition: who walks through the door?",
        "level": 2
      },
      {
        "id": "section-5",
        "title": "Visibility and trust",
        "level": 2
      },
      {
        "id": "section-6",
        "title": "Long-term growth",
        "level": 2
      },
      {
        "id": "section-7",
        "title": "A quick side by side view",
        "level": 2
      },
      {
        "id": "section-8",
        "title": "Do you need to choose?",
        "level": 2
      },
      {
        "id": "section-9",
        "title": "When traditional methods still make sense",
        "level": 2
      },
      {
        "id": "section-10",
        "title": "What effective online marketing looks like",
        "level": 2
      },
      {
        "id": "section-11",
        "title": "Frequently Asked Questions",
        "level": 2
      },
      {
        "id": "section-12",
        "title": "Ready to decide where to invest?",
        "level": 2
      }
    ]
  },
  {
    "slug": "how-to-advertise-on-amazon-for-beginners",
    "title": "How to Run Amazon Ads for Beginners: A Step-by-Step Guide",
    "excerpt": "You’ve listed your product, written a decent title and added good photos. A few sales trickle in, but nothing like what you hoped for. Then you notice that the products ahead of you in the search results carry a small “Sponsored” tag. They’re paying to be there. That’s usually the moment sellers start wondering how […]",
    "date": "2026-07-02",
    "category": "Amazon Ads",
    "readingMinutes": 8,
    "image": "https://www.marastu.com/wp-content/uploads/2026/11/stack-of-brown-cardboard-boxes.jpg",
    "content": "<p>You’ve listed your product, written a decent title and added good photos. A few sales trickle in, but nothing like what you hoped for. Then you notice that the products ahead of you in the search results carry a small “Sponsored” tag. They’re paying to be there.</p>\n<p>That’s usually the moment sellers start wondering how to advertise on Amazon. The idea can feel intimidating. There are campaign types, bids, match types and a handful of metrics with unfamiliar names. It’s easy to worry that you’ll burn through a budget before you understand what’s happening.</p>\n<p>The good news is that the basics are simple. This guide explains how Amazon ads work, walks through your first campaign step by step and shares a few habits that keep beginners out of trouble.</p>\n\n\n<figure><img alt=\"Stack of brown cardboard boxes ready for shipping\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/stack-of-brown-cardboard-boxes.jpg\"/></figure>\n\n\n<h2 id=\"section-1\">How Amazon ads work</h2>\n<p>Amazon advertising is a pay per click system. You choose which products to promote, pick the searches you’d like to appear for, and set how much you’ll pay when a shopper clicks. If nobody clicks, you pay nothing.</p>\n<p>When a shopper searches, Amazon runs a quick auction. It looks at how relevant your product is to the search, how much you’re willing to bid and how likely the shopper is to buy. Your advert can then appear at the top of results, in the middle of the page or on a product detail page.</p>\n<p>Because ads sit right where people shop, they can bring buyers quickly. That’s why a clear amazon advertising guide starts with one idea: you’re paying to put a good listing in front of people who already want to buy. Learning how to advertise on Amazon is mostly about learning to work with that auction instead of fighting it.</p>\n<h2 id=\"section-2\">Check your listing before you spend</h2>\n<p>Ads send traffic, but they can’t fix a weak listing. Before spending anything, make sure your product page is ready to convert.</p>\n<p>Look at your main image, title, bullet points and description. Check that your price is competitive and that you have some reviews, since shoppers rarely trust a page with none. Make sure the product is in stock and that your offer is eligible to win the featured buy box, because ads usually won’t show without it.</p>\n<p>Knowing how to advertise on Amazon won’t help if the page itself doesn’t convert. If the listing is shaky, fix it first. Every click you pay for lands on that page, and a page that doesn’t convert turns your budget into a leak.</p>\n<h2 id=\"section-3\">Step 1: Choose the right campaign type</h2>\n<p>Amazon offers several ad formats, but beginners usually start with one.</p>\n<ul>\n<li><strong>Sponsored Products:</strong> Ads for individual products that appear in search results and on product pages. This is the simplest place to begin.</li>\n<li><strong>Sponsored Brands:</strong> Banner style ads that feature your logo and several products, usually requiring brand registry.</li>\n<li><strong>Sponsored Display:</strong> Ads that can reach shoppers on and off Amazon, useful later for retargeting.</li>\n</ul>\n<p>For your first campaign, stick with Sponsored Products. It’s easy to set up and easy to read, which is also what most amazon ppc for beginners guides suggest, and it makes it the best way to learn how to run amazon ads without too many moving parts.</p>\n<h2 id=\"section-4\">Step 2: Pick automatic or manual targeting</h2>\n<p>You have two main ways to decide where your ads show.</p>\n<p>With automatic targeting, Amazon chooses the searches and products for you based on your listing. It’s quick, it needs little setup and it helps you discover which search terms actually bring sales.</p>\n<p>With manual targeting, you choose the keywords yourself and decide how closely a search must match. You’ll see three match types: broad, phrase and exact. Broad catches a wide range of searches, phrase needs your words in order and exact stays tightest.</p>\n<p>Many beginners start with automatic targeting to gather data, then move winning terms into a manual campaign. This is one of the most common amazon ads best practices, because it lets Amazon find terms you might not have thought of.</p>\n<h2 id=\"section-5\">Step 3: Set a budget and a bid</h2>\n<p>Your daily budget is the most you’re willing to spend each day. Your bid is how much you’ll pay for each click.</p>\n<p>Start modestly. Anyone learning how to advertise on Amazon should treat the first budget as tuition. A small budget run for a couple of weeks will teach you more than a large one that disappears in a day. For bids, look at the suggested range Amazon shows and begin near the middle. You can adjust later once you see real results.</p>\n<p>It also helps to know your numbers before you launch. Work out your profit per sale, then decide how much of that you can afford to spend on advertising. That limit guides everything else, because there’s no point paying more to win a sale than the sale earns you.</p>\n<h2 id=\"section-6\">Step 4: Write your campaign settings clearly</h2>\n<p>When you learn how to run amazon ads, tidy settings matter more than people expect. Name your campaigns so you can find them later. A clear name such as the product, the match type and the date saves a lot of confusion once you’re running several.</p>\n<p>Group similar products together and keep different goals in separate campaigns. Mixing everything makes the results hard to read, and you’ll struggle to tell what’s working.</p>\n\n\n<figure><img alt=\"Graphs of website performance analytics\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/performance-analytics-graphs-1.jpg\"/></figure>\n\n\n<h2 id=\"section-7\">Step 5: Add negative keywords</h2>\n<p>Negative keywords stop your ads showing for searches you don’t want. If you sell premium leather wallets, you probably don’t want clicks from people searching “free wallet” or “wallet pattern.”</p>\n<p>Start with a short list of obvious exclusions, then add more as the data comes in. This keeps your spend focused on shoppers who might actually buy, and it’s one of the quickest ways to save money in the early weeks.</p>\n<h2 id=\"section-8\">Step 6: Launch and give it time</h2>\n<p>Once the campaign is live, resist the urge to change things every hour. Amazon’s system needs time to learn, and shoppers need time to find and click your ads.</p>\n<p>Patience is one of the simplest amazon ads best practices, and also one of the hardest to follow. Give the campaign at least a week or two before drawing conclusions, and longer for products with slow buying cycles. Frequent tinkering makes it hard to tell what caused a change. Write down every adjustment with its date so that, when results move, you can look back and see what you did and when. A short note in a spreadsheet is enough, and it turns guesswork into a record you can learn from.</p>\n<h2 id=\"section-9\">Step 7: Read the results</h2>\n<p>Amazon shows several metrics, but a handful matter most.</p>\n<ul>\n<li><strong>Impressions:</strong> How often your ad was shown.</li>\n<li><strong>Clicks and click through rate:</strong> How many shoppers clicked and what share of viewers that was.</li>\n<li><strong>Spend:</strong> How much the clicks cost.</li>\n<li><strong>Sales:</strong> Revenue linked to your ads.</li>\n<li><strong>ACOS:</strong> Your ad spend as a percentage of ad sales. Lower is generally better, though what’s acceptable depends on your margins.</li>\n</ul>\n<p>The search term report is especially useful. It shows the exact searches that triggered your ads and which ones led to sales. Terms that sell are candidates for exact match campaigns. Terms that spend money without sales are candidates for negative keywords.</p>\n<h2 id=\"section-10\">Step 8: Improve, then scale</h2>\n<p>After the first few weeks, you can start to improve. Raise bids on terms that bring profitable sales, lower or pause those that don’t, and add new keywords from your search term report.</p>\n<p>This is the point where it pays to learn more about <a href=\"https://www.marastu.com/blog/how-to-optimize-amazon-ppc-campaigns/\">amazon ppc optimization</a>, which covers bidding, search term reviews and campaign structure in more depth. Once your campaigns are profitable, you can scale by raising budgets and adding more products.</p>\n\n\n<figure><img alt=\"Laptop on a white table for online selling\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/laptop-on-white-table.jpg\"/></figure>\n\n\n<h2 id=\"section-11\">Common beginner mistakes</h2>\n<p>Most amazon ppc for beginners problems come from the same few errors, and they catch almost everyone at the start.</p>\n<p><strong>Spending too little to learn anything.</strong> A tiny budget may never get enough clicks to give useful data.</p>\n<p><strong>Changing too much too soon.</strong> If you edit bids, budgets and keywords all at once, you can’t tell which change mattered.</p>\n<p><strong>Ignoring negatives.</strong> Irrelevant clicks quietly drain budgets.</p>\n<p><strong>Chasing sales at any cost.</strong> Winning a sale for more than it earns isn’t growth, it’s a loss.</p>\n<p><strong>Forgetting the listing.</strong> Ads can’t rescue a weak product page.</p>\n<h2 id=\"section-12\">When to get help</h2>\n<p>You can run your first campaigns yourself, and many sellers do. But as you add products and budgets grow, the work can take a lot of time. Learning how to advertise on Amazon is a good first step, and some sellers choose to work with specialists in <a href=\"https://www.marastu.com/sem-services/amazon-ads/\">amazon PPC management services</a> so they can focus on sourcing, stock and customer service while experts handle the daily optimisation.</p>\n<p>If you’re considering that route, look for clear reporting, honest conversations about margins and no long lock in contracts.</p>\n<h2 id=\"section-13\">Frequently Asked Questions</h2>\n\n<strong>How to promote products on Amazon without a big budget?</strong>\n<p>Start with one product, one automatic Sponsored Products campaign and a small daily budget. Improve your listing and collect reviews at the same time, because organic sales and ads support each other.</p>\n\n<strong>How to run ad campaign on Amazon for a new product?</strong>\n<p>Choose Sponsored Products, start with automatic targeting to gather data, add negative keywords as search terms appear and review results after a couple of weeks before making changes.</p>\n\n<strong>How much should I spend on my first Amazon ads?</strong>\n<p>There’s no fixed number. Begin with a budget you’re comfortable with, keep it steady for a couple of weeks and adjust once you know your cost per sale.</p>\n\n<strong>How long does it take to see results?</strong>\n<p>Clicks can come within hours, but it usually takes two to four weeks to gather enough data to judge a campaign properly.</p>\n\n\n<h2 id=\"section-14\">Start with a clear plan</h2>\n<p>Running your first campaigns doesn’t need to be complicated. Start small, learn from the data and improve a little at a time. If you’d like help building a setup that makes sense for your products and margins, <a href=\"https://www.marastu.com/\">Marastu</a> can guide you from the first campaign to steady, profitable growth. Get in touch and we’ll talk through what’s realistic.</p>",
    "toc": [
      {
        "id": "section-1",
        "title": "How Amazon ads work",
        "level": 2
      },
      {
        "id": "section-2",
        "title": "Check your listing before you spend",
        "level": 2
      },
      {
        "id": "section-3",
        "title": "Step 1: Choose the right campaign type",
        "level": 2
      },
      {
        "id": "section-4",
        "title": "Step 2: Pick automatic or manual targeting",
        "level": 2
      },
      {
        "id": "section-5",
        "title": "Step 3: Set a budget and a bid",
        "level": 2
      },
      {
        "id": "section-6",
        "title": "Step 4: Write your campaign settings clearly",
        "level": 2
      },
      {
        "id": "section-7",
        "title": "Step 5: Add negative keywords",
        "level": 2
      },
      {
        "id": "section-8",
        "title": "Step 6: Launch and give it time",
        "level": 2
      },
      {
        "id": "section-9",
        "title": "Step 7: Read the results",
        "level": 2
      },
      {
        "id": "section-10",
        "title": "Step 8: Improve, then scale",
        "level": 2
      },
      {
        "id": "section-11",
        "title": "Common beginner mistakes",
        "level": 2
      },
      {
        "id": "section-12",
        "title": "When to get help",
        "level": 2
      },
      {
        "id": "section-13",
        "title": "Frequently Asked Questions",
        "level": 2
      },
      {
        "id": "section-14",
        "title": "Start with a clear plan",
        "level": 2
      }
    ]
  },
  {
    "slug": "how-to-optimize-amazon-ppc-campaigns",
    "title": "How to Optimize Amazon PPC Campaigns for Better ROI",
    "excerpt": "You launched your Amazon ads a few weeks ago. Clicks are coming in and so are some sales, but when you look at the numbers, something feels off. You’re spending a lot, ACOS is higher than you’d like and it’s hard to tell which keywords are earning their keep and which are quietly draining your […]",
    "date": "2026-06-30",
    "category": "Amazon Ads",
    "readingMinutes": 8,
    "image": "https://www.marastu.com/wp-content/uploads/2026/11/laptop-with-charts-on-desk.jpg",
    "content": "<p>You launched your Amazon ads a few weeks ago. Clicks are coming in and so are some sales, but when you look at the numbers, something feels off. You’re spending a lot, ACOS is higher than you’d like and it’s hard to tell which keywords are earning their keep and which are quietly draining your budget.</p>\n<p>This is the stage where most sellers get stuck. Getting ads live is the easy part. Making them profitable takes steady, careful work, and that work is where the real gains hide.</p>\n<p>This guide walks through how to improve the campaigns you already have. It covers what to measure, where money usually leaks and the changes that tend to make the biggest difference.</p>\n\n\n<figure><img alt=\"Laptop with analytics charts on a desk\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/laptop-with-charts-on-desk.jpg\"/></figure>\n\n\n<h2 id=\"section-1\">Start with the right numbers</h2>\n<p>You can’t improve what you don’t measure, so begin with a handful of metrics.</p>\n<ul>\n<li><strong>ACOS:</strong> Ad spend divided by ad sales, shown as a percentage. It tells you how much you pay to earn each pound or dollar of ad revenue.</li>\n<li><strong>ROAS:</strong> The reverse of ACOS. It shows how much revenue you earn for each unit you spend.</li>\n<li><strong>Click through rate:</strong> The share of people who saw your ad and clicked it. A low rate often points to a weak title or image.</li>\n<li><strong>Conversion rate:</strong> The share of clicks that ended in a sale. A low rate often points to a weak listing, price or reviews.</li>\n<li><strong>TACOS:</strong> Ad spend as a share of your total sales, including organic ones. It shows whether ads are helping the whole business, not just themselves.</li>\n</ul>\n<p>Before changing anything, work out your break even ACOS. That’s the percentage of each sale you can spend on ads before you stop making a profit. Any amazon ppc optimization effort should aim to bring your real ACOS below that line.</p>\n<p>For the groundwork behind these ideas, our guide on <a href=\"https://www.marastu.com/blog/how-to-advertise-on-amazon-for-beginners/\">how to run amazon ads</a> covers campaign types, targeting and your first setup.</p>\n<h2 id=\"section-2\">Clean up your search terms</h2>\n<p>The search term report is the most valuable document in your account. It lists the exact searches shoppers typed before seeing and clicking your ads, along with the spend and sales each one produced.</p>\n<p>Go through it regularly and sort the terms into three groups.</p>\n<p>First, terms that sell well at a healthy ACOS. These deserve more attention, so move them into exact match campaigns where you can control the bid tightly. Second, terms that get lots of clicks but no sales. After a reasonable number of clicks, add these as negative keywords. Third, terms with too little data to judge. Leave them alone until they collect more clicks.</p>\n<p>This simple habit often cuts wasted spend within the first few weeks. It’s also the foundation of good amazon ppc bid optimization, because you can only set sensible bids once you know which terms really earn money.</p>\n<h2 id=\"section-3\">Optimize your bids</h2>\n<p>Bidding is where small adjustments add up. A bid that’s too low means you’re never seen. A bid that’s too high means you win clicks that cost more than the sale is worth.</p>\n<p>A sensible approach looks like this:</p>\n<ul>\n<li><strong>Raise bids</strong> on keywords that convert well and sit below your target ACOS, especially if their impressions are low.</li>\n<li><strong>Lower bids</strong> on keywords that spend steadily but convert poorly.</li>\n<li><strong>Pause or remove</strong> terms that have collected plenty of clicks without a single sale.</li>\n<li><strong>Review placements</strong> to see whether top of search, product pages or the rest of search results perform best for you.</li>\n</ul>\n<p>Make changes in measured steps instead of dramatic jumps. Wait long enough between adjustments to see the effect, and keep notes so you can tell which change produced which result.</p>\n\n\n<figure><img alt=\"White spiral notebook on a wooden desk\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/white-spiral-notebook-on-desk.jpg\"/></figure>\n\n\n<h2 id=\"section-4\">Structure campaigns so you can read them</h2>\n<p>A messy account makes problems hard to spot. When dozens of products and keywords sit in one campaign, one weak term can hide behind several strong ones.</p>\n<p>Try grouping products by theme, and separate your goals. For example, keep a campaign for discovering new terms apart from one for proven winners. Keep branded terms away from generic ones, because they behave very differently. Use clear names so you can scan the account quickly.</p>\n<p>Many experienced sellers run a simple loop: an automatic campaign finds new search terms, a broad or phrase campaign tests the promising ones, and an exact match campaign runs the proven winners at tight bids. Terms move along that path as they earn their place.</p>\n<h2 id=\"section-5\">Use negative keywords as a steady habit</h2>\n<p>Negative keywords are one of the cheapest ways to improve results. Every irrelevant click you block is money you keep.</p>\n<p>Add negatives at both campaign and ad group level where it makes sense. Look for words that show a different intent, such as “free,” “used,” “repair,” “manual” or the names of competing products you don’t want to appear for. Keep a shared list and update it each time you review search terms.</p>\n<p>It also helps to stop your own campaigns competing with each other. If an automatic campaign and an exact campaign bid on the same term, you pay against yourself. A negative exact keyword in the automatic campaign sends that traffic to the one you want.</p>\n<h2 id=\"section-6\">Match your budget to performance</h2>\n<p>Budgets should follow results, not wishes. Campaigns that deliver sales below your target ACOS deserve more budget, especially if they often run out before the end of the day. Campaigns that spend without returns should be trimmed.</p>\n<p>Check for campaigns capped by their budget. If a profitable campaign stops showing in the afternoon, you’re missing sales you could have had. On the other hand, a campaign that never uses its budget might need a higher bid or broader targeting.</p>\n<p>Seasons matter too. Demand for many products rises and falls through the year, so plan to lift budgets before busy periods and ease off afterwards.</p>\n<h2 id=\"section-7\">Fix what happens after the click</h2>\n<p>Not every problem lives inside your ad account. If clicks are strong but sales are weak, look at the listing.</p>\n<p>Check that your main image stands out, your title is clear and your price is competitive. Read your reviews and look for repeated complaints. Make sure the product page answers the questions shoppers ask. A listing that converts well lowers your ACOS without touching a single bid, because the same clicks produce more sales.</p>\n<h2 id=\"section-8\">What an optimisation tool can do</h2>\n<p>As accounts grow, checking everything by hand becomes slow. An amazon ppc optimization tool can help by automating routine jobs. It can adjust bids on a schedule, flag search terms that waste money, suggest negative keywords and build reports so you spot trends faster.</p>\n<p>Tools save time, but they aren’t a replacement for judgement. They follow rules you set, so if your targets or structure are wrong, the tool will faithfully carry out the wrong plan. Use one as an assistant that handles the repetitive work while you decide the strategy.</p>\n<h2 id=\"section-9\">When to use a professional service</h2>\n<p>Some sellers reach a point where managing ads takes more time than the rest of the business. That’s when an amazon ppc optimization service can make sense. Specialists review your account regularly, apply proven methods and watch for changes in the marketplace that you might miss.</p>\n<p>If you’re weighing up that step, our <a href=\"https://www.marastu.com/sem-services/amazon-ads/\">amazon PPC management services</a> can look at your account and show where the biggest savings sit. If you do hire an amazon ppc optimization service, check what’s included, how often they report and whether you keep full access to your own account. Whichever route you choose, ask for clear reporting, honest targets and full access to your own account.</p>\n<h2 id=\"section-10\">Mistakes that hold ROI back</h2>\n<p>A few habits quietly hurt results even in well run accounts.</p>\n<p><strong>Judging terms too early.</strong> A keyword with five clicks and no sales isn’t proven bad yet. Give it enough clicks to decide, otherwise you cut terms that might have become winners.</p>\n<p><strong>Chasing the lowest ACOS.</strong> A very low ACOS can mean you’re only bidding on a few safe terms and missing growth. Sometimes accepting a slightly higher ACOS on a growing product earns more total profit.</p>\n<p><strong>Ignoring organic rank.</strong> Ads and organic sales feed each other. If ads lift sales, your organic position often improves too, which lowers your overall spend share over time.</p>\n<p><strong>Making every change at once.</strong> When bids, budgets and keywords all move together, you can’t tell which change helped. Change a few things, wait, then review.</p>\n\n\n<figure><img alt=\"Graphs of website performance analytics\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/performance-analytics-graphs-1.jpg\"/></figure>\n\n\n<h2 id=\"section-11\">A simple weekly routine</h2>\n<p>You don’t need to live in the dashboard. A steady routine works better than occasional panic.</p>\n<p>Each week, check spend against budget, review the search term report, add negatives and adjust a handful of bids. Each month, look at your best and worst campaigns, restructure where needed and compare ACOS against your break even point. Each quarter, step back and ask whether your products, prices and goals still match the way you’re advertising.</p>\n<h2 id=\"section-12\">Frequently Asked Questions</h2>\n\n<strong>How to optimize Amazon PPC campaigns quickly?</strong>\n<p>Start with the search term report. Add negative keywords for terms that spend without selling, move winners into exact match and trim bids on weak keywords. These three steps usually bring the quickest improvement.</p>\n\n<strong>What is a good ACOS on Amazon?</strong>\n<p>It depends on your margins. A good ACOS is one that sits below your break even point and still leaves room for profit, so work that figure out before setting a target.</p>\n\n<strong>How often should I change my bids?</strong>\n<p>Review them weekly, but avoid big swings. Give changes several days to take effect so you can see what worked.</p>\n\n<strong>Do I need a tool to optimise my campaigns?</strong>\n<p>No, but a tool becomes helpful as your account grows and manual checks start to take too long.</p>\n\n\n<h2 id=\"section-13\">Turn spend into steady returns</h2>\n<p>Optimising your ads is a continuing process, not a one time fix. Small, regular improvements to bids, search terms and structure add up to a much healthier return. If you’d like an expert eye on your account, <a href=\"https://www.marastu.com/\">Marastu</a> can audit your campaigns and show you where your budget could work harder. Get in touch and we’ll talk through the options.</p>",
    "toc": [
      {
        "id": "section-1",
        "title": "Start with the right numbers",
        "level": 2
      },
      {
        "id": "section-2",
        "title": "Clean up your search terms",
        "level": 2
      },
      {
        "id": "section-3",
        "title": "Optimize your bids",
        "level": 2
      },
      {
        "id": "section-4",
        "title": "Structure campaigns so you can read them",
        "level": 2
      },
      {
        "id": "section-5",
        "title": "Use negative keywords as a steady habit",
        "level": 2
      },
      {
        "id": "section-6",
        "title": "Match your budget to performance",
        "level": 2
      },
      {
        "id": "section-7",
        "title": "Fix what happens after the click",
        "level": 2
      },
      {
        "id": "section-8",
        "title": "What an optimisation tool can do",
        "level": 2
      },
      {
        "id": "section-9",
        "title": "When to use a professional service",
        "level": 2
      },
      {
        "id": "section-10",
        "title": "Mistakes that hold ROI back",
        "level": 2
      },
      {
        "id": "section-11",
        "title": "A simple weekly routine",
        "level": 2
      },
      {
        "id": "section-12",
        "title": "Frequently Asked Questions",
        "level": 2
      },
      {
        "id": "section-13",
        "title": "Turn spend into steady returns",
        "level": 2
      }
    ]
  },
  {
    "slug": "google-ads-for-dentists",
    "title": "Google Ads for Dentists: A Complete Guide",
    "excerpt": "Someone wakes up at 3am with a throbbing tooth. At 8am they pick up their phone and search “emergency dentist open now.” The first few results they see are adverts. Many tap the first one, call, and book. They never scroll down to see who ranks organically. That’s the pull of Google Ads for Dentists. […]",
    "date": "2026-06-26",
    "category": "Google Ads",
    "readingMinutes": 8,
    "image": "https://www.marastu.com/wp-content/uploads/2026/11/performance-analytics-graphs-1.jpg",
    "content": "<p>Someone wakes up at 3am with a throbbing tooth. At 8am they pick up their phone and search “emergency dentist open now.” The first few results they see are adverts. Many tap the first one, call, and book. They never scroll down to see who ranks organically.</p>\n<p>That’s the pull of Google Ads for Dentists. It puts your practice in front of people at the exact moment they want what you offer. No waiting for months for rankings to build. That’s the appeal of <a href=\"https://www.marastu.com/dental-digital-marketing/sem-for-dentists-google-ads/\">PPC for dentists</a>. If it’s set up well, you can start getting calls within days.</p>\n<p>But it’s also easy to waste money. Clicks cost real pounds, and dental terms are among the pricier ones. This guide explains how it all works, what to set up, and how to avoid the most common mistakes.</p>\n<figure><img alt=\"Graphs of website performance analytics\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/performance-analytics-graphs-1.jpg\"/></figure>\n<h2 id=\"section-1\">How Google Ads works for a dental practice</h2>\n<p>Google Ads is a pay per click system. You choose what people search for, write an advert and set a budget. When someone searches those words, your advert can appear above or below the normal results. You pay only when they click.</p>\n<p>This is the foundation of Dental PPC Marketing. Dental PPC marketing gives you things organic search can’t: you control the message, the location and the timing. You can run ads only in the mornings, only within three miles, or only for one treatment.</p>\n<p>The system works as an auction. Google decides which adverts appear based on how much you’re willing to pay, and also how relevant your advert and landing page are. A well made advert with a good page can win a better position at a lower price than a lazy one.</p>\n<h2 id=\"section-2\">Who should consider it</h2>\n<p>Dental PPC advertising suits practices that:</p>\n<ul>\n<li>Need new patients quickly, such as a new clinic or a practice that’s lost clients</li>\n<li>Want to promote a high value treatment like implants, clear aligners or full smile makeovers</li>\n<li>Offer emergency appointments, where urgency drives searches</li>\n<li>Have capacity in the diary and want to fill it</li>\n<li>Want to test which services and areas perform best before investing in long term SEO</li>\n</ul>\n<p>Google Ads for dental practices is less suited to a website that’s slow, confusing or hard to book from. Fix that first, because ads send people to the site, and a weak site wastes the clicks.</p>\n<p>If you’re trying to decide between ads and organic growth, we compare them in Google Ads vs SEO for dental practices.</p>\n<p>For a clearer view of budgets, see how much a dental practice should spend on Google Ads.</p>\n<h2 id=\"section-3\">Choosing the right keywords</h2>\n<p>Keywords are the search phrases that trigger your adverts. Choosing the right ones is the heart of any Dental Google Ads Campaign.</p>\n<p>Good keywords for dentists tend to fall into groups:</p>\n<ul>\n<li><strong>Emergency:</strong> “emergency dentist near me,” “toothache dentist today”</li>\n<li><strong>High value treatments:</strong> “dental implants cost,” “invisalign dentist”</li>\n<li><strong>General:</strong> “dentist accepting new patients,” “family dentist [town]”</li>\n<li><strong>Cosmetic:</strong> “teeth whitening,” “veneers [town]”</li>\n</ul>\n<p>Use match types carefully. Broad match can bring in a lot of irrelevant searches, like “dentist jobs” or “dental school.” Phrase and exact match give you more control. Then add negative keywords to block searches you don’t want, such as “free,” “training,” “jobs,” “salary” and “courses.”</p>\n<p>Expect competitive terms like “dental implants” to cost more per click than “emergency dentist,” and costs vary by area. Check Google’s Keyword Planner for estimates in your town.</p>\n<h2 id=\"section-4\">Writing adverts that get clicks</h2>\n<p>Your advert has a few lines to convince someone. Make them count. Good dental practice Google ads read like a helpful receptionist, not a billboard.</p>\n<p>A strong dental advert usually:</p>\n<ul>\n<li>Uses the searcher’s own words in the headline</li>\n<li>Mentions the location</li>\n<li>Says something that sets you apart, such as “Same day appointments” or “Free consultation”</li>\n<li>Includes a clear next step, like “Book online” or “Call now”</li>\n</ul>\n<p>For example: “Emergency Dentist in Leeds | Seen Today | Call Now.” Plain, specific and useful.</p>\n<p>Add extensions where you can, such as your phone number, address, extra links and short highlights like “Evening appointments” or “Interest free payment plans.” These take up more space on the screen and give people more ways to act.</p>\n<h2 id=\"section-5\">Landing pages decide whether clicks turn into patients</h2>\n<p>Google Ads for dental practices lives or dies on the landing page. This is where many campaigns fall apart. You pay for the click, but the patient lands on your homepage and has to hunt for what they wanted.</p>\n<p>Send each advert group to a page that matches it. An advert about Invisalign should land on a page about Invisalign, with a clear heading, a short explanation, a few photos or reviews, prices or a price range, and a booking form or phone number right at the top.</p>\n<p>Keep the page simple. Remove distracting menus if you can. Make sure it loads fast on a phone, since most clicks come from mobile. Even small improvements here can reduce your cost per patient noticeably.</p>\n<figure><img alt=\"Laptop on a desk showing a website\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/laptop-on-desk-website.jpg\"/></figure>\n<h2 id=\"section-6\">Targeting by location and time</h2>\n<p>Dental PPC advertising works hardest when it’s local. Dentistry is local, so limit your adverts to the area you can realistically serve. Set a radius around your clinic, or target specific postcodes. Check your location settings, because the default sometimes includes people who are merely “interested in” your area rather than in it.</p>\n<p>Use ad scheduling to show your adverts when someone can answer the phone. If you don’t offer a call back service, paying for calls at 11pm that go to voicemail is a waste. Many practices turn up bids on weekday mornings and for emergency searches on weekends, when patients are most likely to need care.</p>\n<h2 id=\"section-7\">Budgeting and bidding</h2>\n<p>Google Ads for Dentists rewards a cautious start. Start small and learn. Set a daily budget you’re comfortable with, and watch what each lead costs.</p>\n<p>Google offers automated bidding strategies, such as maximise conversions or target cost per action. They work well once you have good conversion tracking in place. Without tracking, the algorithm has nothing to learn from, and your money goes to whoever clicks most, not whoever books.</p>\n<p>A rough guide: dental practice Google ads rarely pay off on a tiny, untracked budget, and Google Ads for dental clinics in busy cities face higher costs. Many practices begin with a few hundred pounds a month per treatment area, then scale as they see what works. One new implant or aligner patient can be worth thousands over time, so the numbers can add up quickly in your favour if tracking shows it’s working.</p>\n<h2 id=\"section-8\">Set up conversion tracking from day one</h2>\n<p>Google Ads for dentists can’t be judged on clicks alone, and you can’t improve what you don’t measure. Track the actions that matter:</p>\n<ul>\n<li>Phone calls from the advert and from the landing page</li>\n<li>Online booking form submissions</li>\n<li>Clicks on the “call” button on mobile</li>\n<li>Appointment requests by email or chat</li>\n</ul>\n<p>Ideally, link this to your booking system so you can see which adverts led to actual patients, not just enquiries. Many practices find that the campaign with the most clicks isn’t the one that brings the most patients.</p>\n<h2 id=\"section-9\">Common mistakes to avoid</h2>\n<p><strong>Sending everything to the homepage.</strong> It dilutes your message and lowers conversions.</p>\n<p><strong>Not using negative keywords.</strong> You pay for irrelevant clicks.</p>\n<p><strong>Letting calls go unanswered.</strong> A missed call from an advert is a lost patient, and money spent. Train the team to answer quickly and handle enquiries properly.</p>\n<p><strong>Setting it and forgetting it.</strong> Campaigns need checking weekly at first, then at least monthly.</p>\n<p><strong>Ignoring the wider picture.</strong> Ads work best alongside good reviews, a complete Google Business Profile and a decent site. Our guide on how to get more patients for a dental practice shows how the pieces fit.</p>\n<p><strong>Overlooking social proof.</strong> <a href=\"https://www.marastu.com/blog/how-dentists-can-get-more-google-reviews/\">Dental patient reviews</a> often decide whether someone who clicked your advert picks up the phone or moves on, so keep collecting them while your campaign runs.</p>\n<p><strong>Breaking advertising rules.</strong> Dental advertising has regulations around claims, before and after photos and price statements. Check the rules from your own regulator, and Google’s policies on healthcare.</p>\n<h2 id=\"section-10\">Types of campaigns worth knowing</h2>\n<p>Dental PPC marketing doesn’t stop at standard search ads. Beyond those, a few other formats can help:</p>\n<ul>\n<li><strong>Local Services or call only ads:</strong> Useful for emergency enquiries</li>\n<li><strong>Performance Max:</strong> Automated campaigns across Google’s channels, best used once you have solid tracking</li>\n<li><strong>Display and remarketing:</strong> Reminds visitors who left your site without booking</li>\n<li><strong>YouTube:</strong> Good for building familiarity with a service such as implants</li>\n</ul>\n<p>Start with search, which captures people already looking. Expand later.</p>\n<h2 id=\"section-11\">When to bring in an agency</h2>\n<p>You can manage Google Ads for Dental Clinics yourself, but it takes time to learn and monitor. Dental PPC advertising is easy to start and hard to master. Specialist agencies know the benchmarks, the keyword traps and the compliance rules. A good one will give you clear reports on calls and booked patients, not just clicks.</p>\n<p>Whichever route you take, aim for transparency. You should own the account, see the spend and understand what you’re paying for. Our dental PPC service is built around exactly that.</p>\n<figure><img alt=\"Laptop with analytics charts on a desk\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/laptop-with-charts-on-desk.jpg\"/></figure>\n<h2 id=\"section-12\">Frequently Asked Questions</h2>\n\n<strong>How much do Google Ads for dentists cost?</strong>\n<p>It varies by area and treatment. Clicks for emergency and implant searches can cost several pounds each, sometimes more in big cities. Most practices start with a modest monthly budget, track the cost per patient and scale from there.</p>\n\n<strong>How quickly will I see results?</strong>\n<p>Calls can start within days of launch, though it usually takes a few weeks to learn what works and tidy the campaign.</p>\n\n<strong>Are Google Ads better than SEO?</strong>\n<p>They do different jobs. Ads bring patients fast but stop when you stop paying. SEO builds slowly and keeps working. Many practices use both.</p>\n\n<strong>Can I advertise any dental treatment?</strong>\n<p>Most, but you must follow Google’s healthcare policies and your regulator’s advertising rules. Claims about results or pricing need care.</p>\n\n\n<h2 id=\"section-13\">Start bringing in patients</h2>\n<p>A well run campaign can fill your diary quickly, while a poorly run one drains your budget. If you’d like a clear plan, with real numbers for your area, <a href=\"https://www.marastu.com/\">Marastu</a> can help you set up, track and improve your campaigns. Get in touch and we’ll show you what’s realistic.</p>",
    "toc": [
      {
        "id": "section-1",
        "title": "How Google Ads works for a dental practice",
        "level": 2
      },
      {
        "id": "section-2",
        "title": "Who should consider it",
        "level": 2
      },
      {
        "id": "section-3",
        "title": "Choosing the right keywords",
        "level": 2
      },
      {
        "id": "section-4",
        "title": "Writing adverts that get clicks",
        "level": 2
      },
      {
        "id": "section-5",
        "title": "Landing pages decide whether clicks turn into patients",
        "level": 2
      },
      {
        "id": "section-6",
        "title": "Targeting by location and time",
        "level": 2
      },
      {
        "id": "section-7",
        "title": "Budgeting and bidding",
        "level": 2
      },
      {
        "id": "section-8",
        "title": "Set up conversion tracking from day one",
        "level": 2
      },
      {
        "id": "section-9",
        "title": "Common mistakes to avoid",
        "level": 2
      },
      {
        "id": "section-10",
        "title": "Types of campaigns worth knowing",
        "level": 2
      },
      {
        "id": "section-11",
        "title": "When to bring in an agency",
        "level": 2
      },
      {
        "id": "section-12",
        "title": "Frequently Asked Questions",
        "level": 2
      },
      {
        "id": "section-13",
        "title": "Start bringing in patients",
        "level": 2
      }
    ]
  },
  {
    "slug": "how-dentists-can-get-more-google-reviews",
    "title": "How Dentists Can Get More Google Reviews",
    "excerpt": "Picture two dental practices on the same street. One has 28 reviews, the latest from eight months ago. The other has 340, with several from this week. A person who has just moved to the area and needs a dentist has about half a minute to decide. Which phone number do they tap? Reviews do […]",
    "date": "2026-06-22",
    "category": "Local SEO",
    "readingMinutes": 7,
    "image": "https://www.marastu.com/wp-content/uploads/2026/11/modern-dental-office-treatment-room.jpg",
    "content": "<p>Picture two dental practices on the same street. One has 28 reviews, the latest from eight months ago. The other has 340, with several from this week. A person who has just moved to the area and needs a dentist has about half a minute to decide. Which phone number do they tap?</p>\n<p>Reviews do two jobs at once. They help you appear higher in local search, and they persuade a nervous stranger to book. That makes them one of the most useful things a practice can invest time in, and the cost is nearly nothing.</p>\n<p>The tricky bit is getting them. Most happy patients never think to leave one unless they’re asked, and most practices never find a smooth way to ask. This guide fixes that.</p>\n<figure><img alt=\"Modern dental treatment room with chair and equipment\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/modern-dental-office-treatment-room.jpg\"/></figure>\n<h2 id=\"section-1\">Why reviews matter so much for dentists</h2>\n<p>If your profile itself needs work first, our walkthrough of <a href=\"https://www.marastu.com/blog/how-to-optimise-google-business-profile-for-dentists/\">Google Reviews for Dentists</a> and the rest of the profile is a good place to begin.</p>\n<p>Dentistry is a trust business. People are often anxious, sometimes in pain, and they’re about to let a stranger work inside their mouth. They want reassurance, and Dental Patient Reviews are the fastest way to get it.</p>\n<p>Treat this as part of your wider online reputation management for dentists, which also means watching other sites such as Facebook and Trustpilot. It isn’t a one off campaign. It’s a habit.</p>\n<h2 id=\"section-2\">Make the review link easy to find</h2>\n<p>Friction kills reviews. If a patient has to search for your practice, find the right listing, scroll to the review button and work out how to use it, most will give up.</p>\n<p>Reviews also feed Google’s local ranking. The number, the average rating, how recent they are and the words patients use all help decide who shows up in the map results. It’s a core part of <a href=\"https://www.marastu.com/dental-digital-marketing/local-seo-for-dentists/\">local SEO for dentists</a>, and neglecting it is one of the main reasons a good practice stays invisible.</p>\n<p>Instead, grab your direct review link from your Google Business Profile. Open your profile, choose the option to ask for reviews and copy the link. You can also create a short version or a QR code. Use that link everywhere: in text messages, emails, receipts, on cards at reception and on your website.</p>\n<p>More Dental Clinic Google Reviews start with a link that takes two taps. Checking that your profile is complete before you start is wise, since patients will land on it. Our guide to how to optimise Google Business Profile for dentists covers that.</p>\n<h2 id=\"section-3\">Ask at the right moment</h2>\n<p>Timing makes a huge difference. The best moment is right after a positive experience, while it’s fresh. That might be:</p>\n<ul>\n<li>When a patient says thank you at the front desk</li>\n<li>After a successful check up or hygiene visit</li>\n<li>Following a cosmetic treatment, when the patient is delighted with the result</li>\n<li>After a patient mentions they were nervous but it went well</li>\n<li>When someone compliments a team member by name</li>\n</ul>\n<p>A same day text with the link works well. Something like: “Thanks for visiting us today, Sarah. If you had a good experience, would you mind sharing a quick review? It really helps our small team. Here’s the link.” Short, warm and personal.</p>\n<h2 id=\"section-4\">Get the whole team involved</h2>\n<p>Reviews shouldn’t depend on one person remembering. Make it a normal part of your process.</p>\n<p>Tell the reception team how to ask, using simple words they feel comfortable with. Let nurses and hygienists know they can mention it too. Share good reviews in team meetings so people see the effect. Some practices mention team members by name in reviews and celebrate each time, which keeps morale high and encourages good service.</p>\n<p>Aim for a target, such as five to ten new Dental Clinic Google Reviews a month, and track it. Small, steady numbers beat a huge burst followed by silence.</p>\n<h2 id=\"section-5\">Use more than one way to ask</h2>\n<p>Different patients respond to different prompts, so mix them:</p>\n<ul>\n<li><strong>Text message:</strong> Quick, personal and the most effective for many practices</li>\n<li><strong>Email follow up:</strong> Good for patients who prefer email, and can go out with an appointment summary</li>\n<li><strong>QR code at reception:</strong> Handy for people sitting in the waiting area or leaving</li>\n<li><strong>Printed card with the appointment slip:</strong> A gentle reminder at checkout</li>\n<li><strong>Website banner or page:</strong> A small prompt for regular visitors</li>\n</ul>\n<p>Don’t overdo it. One request per visit is plenty.</p>\n<figure><img alt=\"QR code displayed on a table\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/qr-code-on-table.jpg\"/></figure>\n<h2 id=\"section-6\">Stay on the right side of the rules</h2>\n<p>Some practices make mistakes here without realising it. Google’s policies are strict, and breaking them can get reviews removed or your profile penalised.</p>\n<p>Don’t:</p>\n<ul>\n<li>Pay for reviews or offer rewards or discounts in exchange for them</li>\n<li>Write fake reviews or ask staff or family to do it</li>\n<li>Review gate, which means only asking happy patients and steering unhappy ones elsewhere</li>\n<li>Post reviews from a clinic computer or shared network in bulk</li>\n</ul>\n<p>Honest, voluntary reviews from real patients are the only kind that last. Dental regulators also have rules about advertising and patient testimonials, so check the guidance from your own regulatory body to be safe.</p>\n<h2 id=\"section-7\">Respond to every review</h2>\n<p>Replying shows you listen. It also helps your ranking a little, and it matters to future patients who read the exchange.</p>\n<p>For positive reviews, a short, personal thank you works. Avoid copying the same line every time, because it looks automated. Mention something specific if appropriate, such as “We’re so glad your nerves settled once you got in the chair.”</p>\n<p>Dental patient reviews that name a treatment or team member carry extra weight with Google and with readers. For negative reviews, take a breath before you write. Be polite, brief and calm. Apologise that the experience fell short, offer to talk offline and give a direct contact. Never argue in public. And never share any patient details, even to correct a mistake, since doing so can breach confidentiality rules. Future patients judge you more on how you handle criticism than on the complaint itself.</p>\n<h2 id=\"section-8\">Handling bad reviews and fake ones</h2>\n<p>A single poor review among many good ones won’t hurt you. In fact, a spotless 5.0 can look suspicious.</p>\n<p>If a review is clearly fake, abusive, off topic or from someone who was never a patient, you can flag it to Google for removal. It isn’t guaranteed, but it’s worth trying. If it’s a genuine complaint, treat it as feedback. Sometimes it points to a real problem in booking, waiting times or communication that’s worth fixing.</p>\n<h2 id=\"section-9\">Use your reviews beyond Google</h2>\n<p>Good reviews shouldn’t stay in one place. Pull a few of the best into your website, with permission where required. Feature quotes on treatment pages, such as an implant review next to your implant service. Share them on social media. Add a “what our patients say” section to your homepage.</p>\n<p>This extends the value of every review and supports your dental practice reputation management across channels. It also adds fresh, useful content that people actually want to read.</p>\n<h2 id=\"section-10\">Track the results</h2>\n<p>Good online reputation management for dentists doesn’t need fancy software. A simple spreadsheet with the month, the number of new reviews, the average rating and a note on anything unusual is enough to spot a pattern early. Share it with the team each month so everyone sees the effect of their effort.</p>\n<p>Look at your numbers once a month. How many new reviews did you get? What’s your average rating? Which team members get mentioned? Did your calls and direction requests rise?</p>\n<p>Dental practice reputation management is mostly consistency. Use what you find. If texts bring in more reviews than cards, send more texts. If reviews dried up in the summer, check whether the team was on leave and the habit slipped.</p>\n<p>For the bigger picture, read our complete guide to <a href=\"https://www.marastu.com/blog/google-maps-seo-for-dentists/\">Google Maps ranking for dentists</a>.</p>\n<p>Our local SEO checklist for dental clinics covers the remaining steps.</p>\n<figure><img alt=\"Laptop on a desk showing a website\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/laptop-on-desk-website.jpg\"/></figure>\n<h2 id=\"section-11\">Frequently Asked Questions</h2>\n\n<strong>How to ask patients for Google reviews without being awkward?</strong>\n<p>Keep it short, warm and specific. Mention that reviews help a small practice reach people who need care, then give them an easy link. Asking after a positive moment feels natural, and most happy patients are glad to help.</p>\n\n<strong>How to encourage patients to leave reviews?</strong>\n<p>Make it easy, ask at the right time and thank people who do it. A direct link by text, a QR code at reception and a team that mentions it politely do most of the work. Never offer rewards, since that breaks Google’s rules.</p>\n\n<strong>How many reviews should a dental practice have?</strong>\n<p>There’s no fixed number. A good aim is to match or beat the practices ranking above you, and keep adding new ones every month.</p>\n\n<strong>What if a patient leaves a negative review?</strong>\n<p>Respond calmly, apologise where it’s fair, invite them to talk offline and keep patient details private. Prospective patients read the response, and a professional reply builds trust.</p>\n\n\n<h2 id=\"section-12\">Let us help you build the habit</h2>\n<p>Getting reviews is simple, but it works only when it’s done consistently. <a href=\"https://www.marastu.com/\">Marastu</a> can set up systems for requesting, tracking and replying to reviews so the process runs without extra work for your team. Get in touch and we’ll help you turn happy patients into your best advertising.</p>",
    "toc": [
      {
        "id": "section-1",
        "title": "Why reviews matter so much for dentists",
        "level": 2
      },
      {
        "id": "section-2",
        "title": "Make the review link easy to find",
        "level": 2
      },
      {
        "id": "section-3",
        "title": "Ask at the right moment",
        "level": 2
      },
      {
        "id": "section-4",
        "title": "Get the whole team involved",
        "level": 2
      },
      {
        "id": "section-5",
        "title": "Use more than one way to ask",
        "level": 2
      },
      {
        "id": "section-6",
        "title": "Stay on the right side of the rules",
        "level": 2
      },
      {
        "id": "section-7",
        "title": "Respond to every review",
        "level": 2
      },
      {
        "id": "section-8",
        "title": "Handling bad reviews and fake ones",
        "level": 2
      },
      {
        "id": "section-9",
        "title": "Use your reviews beyond Google",
        "level": 2
      },
      {
        "id": "section-10",
        "title": "Track the results",
        "level": 2
      },
      {
        "id": "section-11",
        "title": "Frequently Asked Questions",
        "level": 2
      },
      {
        "id": "section-12",
        "title": "Let us help you build the habit",
        "level": 2
      }
    ]
  },
  {
    "slug": "how-to-optimise-google-business-profile-for-dentists",
    "title": "How to Optimise Google Business Profile for Dentists",
    "excerpt": "Your Google Business Profile is probably the most valuable free marketing tool your dental practice has. It’s the box that appears on the right of a branded search, and the listing that shows in the map pack when someone types “dentist near me.” For many patients, it’s the first and only thing they see before […]",
    "date": "2026-06-18",
    "category": "Local SEO",
    "readingMinutes": 7,
    "image": "https://www.marastu.com/wp-content/uploads/2026/11/open-laptop-wooden-desk.jpg",
    "content": "<p>Your Google Business Profile is probably the most valuable free marketing tool your dental practice has. It’s the box that appears on the right of a branded search, and the listing that shows in the map pack when someone types “dentist near me.” For many patients, it’s the first and only thing they see before deciding whether to call.</p>\n<p>Yet, when we review practices, a large share of their profiles are half finished. A missing category here, outdated hours there, five photos from three years ago. These small gaps cost real bookings.</p>\n<p>This guide shows you how to do Google Business Profile optimization for dentists properly, field by field. You can do all of it yourself, and most of it in an afternoon.</p>\n<figure><img alt=\"Open laptop on a wooden desk\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/open-laptop-wooden-desk.jpg\"/></figure>\n<h2 id=\"section-1\">A quick note on names</h2>\n<p>You’ll still hear people say Google My Business for dentists, which was the old name for the tool. Google changed it, and the profile is now managed directly through Search and Maps. Same thing, new label. If your team still talks about GMB, don’t worry, it’s the same profile. Just know that when you search for help online, “Google Business Profile” gets you the most current advice.</p>\n<h2 id=\"section-2\">Step 1: Claim and verify your profile</h2>\n<p>Claiming your Google My Business for dentists listing is the first job. Search for your practice name on Google. If a profile appears with an option to “claim this business,” click it and follow the steps. Google will ask you to verify, usually by a video, a phone call, a postcard or an email.</p>\n<p>If someone else claimed it before you, such as a former employee or an agency you no longer work with, you can request ownership. It takes patience, but it’s worth chasing, because you can’t properly manage a profile you don’t control.</p>\n<h2 id=\"section-3\">Step 2: Get your business name exactly right</h2>\n<p>Use your real, registered trading name, the one on your signage and website. Don’t add keywords or locations to it. “Riverside Dental Practice” is fine. “Riverside Dental Practice | Best Dentist Cheap Implants Leeds” will get you suspended.</p>\n<p>Many practices think keyword stuffing helps their GMB ranking for dentists. It might for a short time, but Google actively looks for this and removes the listings that do it.</p>\n<h2 id=\"section-4\">Step 3: Choose the right categories</h2>\n<p>Pick one primary category. For most clinics, that’s “Dentist.” If you’re a specialist, such as an orthodontist or an endodontist, use the specialist category instead.</p>\n<p>Then add secondary categories that truly apply: “Cosmetic dentist,” “Emergency dental service,” “Teeth whitening service,” “Dental implants provider,” and so on. Only add what you really offer. More isn’t better here. Relevance is.</p>\n<p>Categories are one of the strongest signals Google uses, so it’s worth reviewing them every few months. Google adds and renames them from time to time.</p>\n<h2 id=\"section-5\">Step 4: Fill in your services</h2>\n<p>The services section lets you list each treatment and add a short description. Many practices skip it, which means you can stand out simply by filling it in.</p>\n<p>List everything: check ups, hygiene visits, fillings, crowns, root canal treatment, whitening, clear aligners, implants, emergency appointments, children’s dentistry. Write a plain sentence under each. For example: “Same day emergency appointments for toothache, broken teeth and lost fillings.” That helps both Google and the patient understand what you offer.</p>\n<h2 id=\"section-6\">Step 5: Write a useful description</h2>\n<p>You get 750 characters, and only the first 250 or so show before people tap to read more. Put the important part up front: who you are, where you are and what you do best.</p>\n<p>Write like a person. “We’re a friendly family dental practice in central Bath, offering everything from routine check ups to implants and Invisalign. New patients are always welcome” works far better than a list of keywords. Mention a couple of key treatments and your area, naturally.</p>\n<h2 id=\"section-7\">Step 6: Add accurate hours, including holidays</h2>\n<p>Wrong hours cause more frustration than almost anything. A patient turning up to a closed door will leave a bad review, and rightly so.</p>\n<p>A wrong set of hours on a Google My Business for dentists listing quickly becomes a bad review. Set your regular hours, add special hours for bank holidays and Christmas, and update them whenever your schedule changes. If you offer emergency slots outside normal times, say so clearly in your description and on your website.</p>\n<figure><img alt=\"Dentist chair in a treatment room\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/dentist-chair-in-treatment-room.jpg\"/></figure>\n<h2 id=\"section-8\">Step 7: Add your booking link and contact details</h2>\n<p>Add your phone number, your website address and a direct booking link if your system supports it. Use a local number if you can, and make sure it matches the number on your website exactly.</p>\n<p>Consistency across the internet matters for local rankings. Name, address and phone number should be identical everywhere. This is a basic building block of local SEO for dental clinics, and it supports everything else you do.</p>\n<h2 id=\"section-9\">Step 8: Upload real photos</h2>\n<p>Profiles with plenty of photos attract more clicks, directions requests and calls. Upload pictures of:</p>\n<ul>\n<li>The outside of your building, so people recognise it</li>\n<li>Reception and waiting area</li>\n<li>Treatment rooms and equipment</li>\n<li>Your team, smiling and in uniform</li>\n<li>Parking or entrance details if they’re hard to find</li>\n</ul>\n<p>Avoid stock images. Patients want to see where they’ll actually sit. Photos are one of the easiest wins in local SEO for dental clinics. Add a few new photos each month so the profile stays fresh. Short videos work too, such as a quick tour or a hello from the principal dentist.</p>\n<h2 id=\"section-10\">Step 9: Build a steady stream of reviews</h2>\n<p>Reviews influence both your ranking and the patient’s decision to book. Both the number and the freshness count.</p>\n<p>Make asking part of your routine. Send a text after the appointment with a direct review link, and train the team to mention it politely. Reply to every review, thanking patients for kind words and answering complaints calmly and without sharing private details.</p>\n<p>Done well, Google reviews for dentists become your most persuasive form of marketing. We’ve written a full guide on this: <a href=\"https://www.marastu.com/blog/how-dentists-can-get-more-google-reviews/\">how dentists can get more Google reviews</a>.</p>\n<h2 id=\"section-11\">Step 10: Post regularly</h2>\n<p>Google lets you share updates, offers and events directly on your profile. Posts are an underused part of Google My Business for dentists, and they give you a chance to show activity. Mention new treatments, seasonal offers, new team members, awareness weeks or opening hour changes. Keep them short, add a photo and include a button to book or call.</p>\n<p>You can also read our tips on <a href=\"https://www.marastu.com/blog/google-maps-seo-for-dentists/\">how to rank a dental practice on Google Maps</a>.</p>\n<h2 id=\"section-12\">Step 11: Use questions and answers</h2>\n<p>Anyone can ask a question on your profile, and sometimes strangers answer wrongly. Check this section regularly. Add your own common questions and answers too, such as “Do you accept new NHS patients?”, “Is there wheelchair access?” and “Do you offer payment plans?” It helps patients and keeps the information accurate.</p>\n<p>For a wider view of how your profile connects to everything else, see our <a href=\"https://www.marastu.com/dental-digital-marketing/local-seo-for-dentists/\">local SEO for dentists</a> service.</p>\n<h2 id=\"section-13\">Step 12: Link it to a website that does its job</h2>\n<p>Your profile and website support each other. A strong profile gets you seen, but if your site is slow, thin or confusing, patients leave. Make sure your website has proper pages for services and locations, and that it loads quickly on a phone. Our article on why a site isn’t ranking explains what usually goes wrong, and covers <a href=\"https://www.marastu.com/blog/why-dental-website-not-ranking-google/\">dental website optimization</a> in more detail.</p>\n<h2 id=\"section-14\">Common mistakes to avoid</h2>\n<ul>\n<li>Having duplicate listings for the same clinic</li>\n<li>Using a virtual office or non existent address</li>\n<li>Leaving old phone numbers on the profile</li>\n<li>Ignoring negative reviews</li>\n<li>Setting the wrong service area</li>\n<li>Treating Google reviews for dentists as a one off push, then going silent for months</li>\n</ul>\n<h2 id=\"section-15\">What to expect</h2>\n<p>Google Business Profile optimization for dentists is never really finished, so put a monthly reminder in the diary. A tidy, complete profile often shows improvement within weeks, since Google updates local results quickly. Bigger gains in local SEO for dental clinics tend to come over two to four months, as reviews and activity build up.</p>\n<p>If you’d rather have professional help, you might wonder what it costs. We lay out the numbers in our guide on <a href=\"https://www.marastu.com/blog/how-much-does-dental-seo-cost/\">dental SEO cost</a>.</p>\n<figure><img alt=\"Orange dental chair with medical equipment\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/orange-dental-chair-with-equipment.jpg\"/></figure>\n<h2 id=\"section-16\">Frequently Asked Questions</h2>\n\n<strong>How to be first on Google Maps?</strong>\n<p>No one can guarantee first place, but you can improve your chances by choosing the right categories, completing every field, keeping your details consistent online, collecting reviews and linking to a strong website. Proximity matters a lot too, so you’ll rank best for searches near your clinic.</p>\n\n<strong>How to get top rated on Google Maps?</strong>\n<p>Deliver a good patient experience, then make it easy for happy patients to say so. Ask for reviews at the right time, respond to everyone and fix problems you hear about. A rating of 4.6 or above with plenty of recent reviews tends to perform well.</p>\n\n<strong>Can I change my business name on Google?</strong>\n<p>Yes, but only to your real trading name. Changes may trigger a review, and your profile can be hidden briefly while Google checks.</p>\n\n<strong>How often should I update my profile?</strong>\n<p>Post weekly if you can, add photos monthly and review all the details every quarter.</p>\n\n\n<h2 id=\"section-17\">Want a specialist to take it from here?</h2>\n<p><a href=\"https://www.marastu.com/\">Marastu</a> manages profiles for dental practices every day, from the first clean up to ongoing posts and review support. Contact us and we’ll look at your profile, point out the quick wins and show you what’s holding you back.</p>",
    "toc": [
      {
        "id": "section-1",
        "title": "A quick note on names",
        "level": 2
      },
      {
        "id": "section-2",
        "title": "Step 1: Claim and verify your profile",
        "level": 2
      },
      {
        "id": "section-3",
        "title": "Step 2: Get your business name exactly right",
        "level": 2
      },
      {
        "id": "section-4",
        "title": "Step 3: Choose the right categories",
        "level": 2
      },
      {
        "id": "section-5",
        "title": "Step 4: Fill in your services",
        "level": 2
      },
      {
        "id": "section-6",
        "title": "Step 5: Write a useful description",
        "level": 2
      },
      {
        "id": "section-7",
        "title": "Step 6: Add accurate hours, including holidays",
        "level": 2
      },
      {
        "id": "section-8",
        "title": "Step 7: Add your booking link and contact details",
        "level": 2
      },
      {
        "id": "section-9",
        "title": "Step 8: Upload real photos",
        "level": 2
      },
      {
        "id": "section-10",
        "title": "Step 9: Build a steady stream of reviews",
        "level": 2
      },
      {
        "id": "section-11",
        "title": "Step 10: Post regularly",
        "level": 2
      },
      {
        "id": "section-12",
        "title": "Step 11: Use questions and answers",
        "level": 2
      },
      {
        "id": "section-13",
        "title": "Step 12: Link it to a website that does its job",
        "level": 2
      },
      {
        "id": "section-14",
        "title": "Common mistakes to avoid",
        "level": 2
      },
      {
        "id": "section-15",
        "title": "What to expect",
        "level": 2
      },
      {
        "id": "section-16",
        "title": "Frequently Asked Questions",
        "level": 2
      },
      {
        "id": "section-17",
        "title": "Want a specialist to take it from here?",
        "level": 2
      }
    ]
  },
  {
    "slug": "how-much-does-dental-seo-cost",
    "title": "How Much Does Dental SEO Cost?",
    "excerpt": "It’s the first thing every practice owner wants to know, and it’s the one thing many agencies dodge. So let’s be upfront about it. There isn’t one fixed price, but there are sensible ranges, and there are clear reasons why one quote looks nothing like another. This guide explains what dental SEO cost usually looks […]",
    "date": "2026-06-16",
    "category": "SEO",
    "readingMinutes": 7,
    "image": "https://www.marastu.com/wp-content/uploads/2026/11/teeth-x-ray-image.jpg",
    "content": "<p>It’s the first thing every practice owner wants to know, and it’s the one thing many agencies dodge. So let’s be upfront about it. There isn’t one fixed price, but there are sensible ranges, and there are clear reasons why one quote looks nothing like another.</p>\n<p>This guide explains what dental SEO cost usually looks like, what you’re paying for, what pushes the price up or down, and how to tell a fair quote from a poor one. By the end, you should be able to set a realistic budget and ask the right questions when someone sends you a proposal.</p>\n<p>A note before we start: the figures below are general ranges based on what practices commonly see in the UK market. Your own price depends on your area, your goals and the agency you choose.</p>\n<figure><img alt=\"Teeth x-ray image\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/teeth-x-ray-image.jpg\"/></figure>\n<h2 id=\"section-1\">The short answer</h2>\n<p>For most practices, ongoing dental SEO pricing falls somewhere between £500 and £2,000 a month. Smaller practices in less crowded towns often sit at the lower end. Multi site groups, or clinics fighting for patients in big cities, can spend well above that.</p>\n<p>You’ll also see one off projects. A website audit might run from a few hundred pounds to around £1,500, depending on how deep it goes. A rebuild of key service pages might be quoted as a fixed project.</p>\n<p>That range is the headline dental SEO cost for most practices, but it’s worth knowing what sits behind it. If you meet someone offering “full dental SEO for £100 a month,” be careful. Real work takes time, and time costs money.</p>\n<h2 id=\"section-2\">How agencies charge</h2>\n<p>There are three common models, and each suits a different situation.</p>\n<p><strong>Monthly retainer.</strong> You pay a set amount each month for an agreed set of tasks. This is the most common arrangement, because SEO is ongoing. Rankings take months to build and need continuing care.</p>\n<p><strong>Project based.</strong> You pay a fixed fee for a defined piece of work, such as an audit, a new set of service pages or a technical clean up. It suits practices that have in house help and just need a specialist for a specific job. Project work is also a good way to test dental SEO pricing before committing to a retainer.</p>\n<p><strong>Hourly or consulting.</strong> You pay for time, often for advice or training. It’s handy for practices with a marketing person who needs direction, but less practical for full campaigns.</p>\n<h2 id=\"section-3\">What affects the price</h2>\n<p>Several things change the number on the quote.</p>\n<p><strong>Competition in your area.</strong> Ranking in a small market town is easier than ranking in central London or Manchester. More competition means more work, and that costs more.</p>\n<p><strong>Where your website stands today.</strong> A fresh, well built site needs less repair than an older one with technical problems, thin content and no structure.</p>\n<p><strong>How many services and locations you cover.</strong> Promoting five treatments in one town is a smaller job than promoting twenty treatments across four clinics.</p>\n<p>Each of these shifts dental SEO pricing, which is why two agencies can quote very differently for the same practice.</p>\n<p><strong>Your goals.</strong> Wanting to fill a few appointment slots is different from wanting to become the leading implant provider in your region.</p>\n<p><strong>The size and skill of the team.</strong> Cheaper isn’t always worse, and expensive isn’t always better, but experienced specialists do charge more, and for good reason.</p>\n<h2 id=\"section-4\">What dental practice SEO services include</h2>\n<p>A typical package covers some or all of these:</p>\n<ul>\n<li>Keyword research for your treatments and area</li>\n<li>A technical audit and ongoing fixes</li>\n<li>On page optimisation of titles, headings and content</li>\n<li>New service page and blog content</li>\n<li>Google Business Profile management</li>\n<li>Review strategy and reputation support</li>\n<li>Link building and local citations</li>\n<li>Monthly reporting and a catch up call</li>\n</ul>\n<p>When comparing dental practice SEO services, check exactly which of these are included. Two quotes of the same price can cover very different amounts of work. Professional dental SEO services should be able to show you each item in writing.</p>\n<h2 id=\"section-5\">Local SEO services cost</h2>\n<p>Many practices only need local visibility, since patients come from the surrounding area. Local SEO services cost less than full national campaigns, and for a single clinic they’re often the best place to begin.</p>\n<p>Expect local focused packages to start from around £300 to £800 a month, covering Google Business Profile work, review strategy, local citations and location based content. If you’re only starting out, our article on <a href=\"https://www.marastu.com/blog/how-to-optimise-google-business-profile-for-dentists/\">Google Business Profile optimisation for dentists</a> shows what you can do on your own at no cost.</p>\n<figure><img alt=\"Laptop with analytics charts on a desk\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/laptop-with-charts-on-desk.jpg\"/></figure>\n<h2 id=\"section-6\">Dental marketing packages and the wider picture</h2>\n<p>Some agencies bundle SEO with other channels, such as paid ads, social media and email. Dental marketing packages like these can offer better value, since the channels support each other, but they also cost more in total.</p>\n<p>If you’re planning your overall dental marketing budget, it helps to see SEO as one of several tools. Many practices put 5 to 10 percent of revenue toward marketing in total, and SEO takes a share of that. Dental marketing cost varies a lot, so think in terms of what return you expect. If one new implant patient is worth several thousand pounds over time, even a modest monthly spend can pay for itself quickly.</p>\n<p>For a broader view of how to attract patients using several channels, take a look at our guide on <a href=\"https://www.marastu.com/blog/how-to-get-more-dental-patients/\">how to get more patients for a dental practice</a>.</p>\n<h2 id=\"section-7\">A simple example</h2>\n<p>Say a single clinic in a mid sized town pays £800 a month. That might cover keyword research, two new service pages, a few blog posts, Google Business Profile updates, review support and a monthly report. If that clinic gains five new patients a month who each bring in £300 of treatment in their first year, the maths looks reasonable. If the same money goes on vague reports and recycled content, it doesn’t. That’s why the price on paper matters less than what you actually get for it, and why your agency should tie its work to calls and bookings, not just rankings.</p>\n<h2 id=\"section-8\">Is cheap dental SEO worth it?</h2>\n<p>Usually not. A rock bottom dental SEO cost usually means shortcuts, such as automated reports, copied content and low quality links bought in bulk. These can leave your site worse off, and cleaning up the damage later costs more than doing it properly first.</p>\n<p>On the other hand, a high price doesn’t guarantee quality. What matters is transparency. A good agency will tell you what they plan to do, why, and how they’ll measure it.</p>\n<h2 id=\"section-9\">Red flags in a quote</h2>\n<p>Watch out for these:</p>\n<p>You can read more about our <a href=\"https://www.marastu.com/dental-digital-marketing/seo-for-dentists/\">SEO for Dentists</a>.</p>\n<ul>\n<li>A guaranteed number one ranking. Nobody can promise that</li>\n<li>No explanation of the actual work</li>\n<li>Long contracts with hefty cancellation fees</li>\n<li>Vague reports that talk about “impressions” but not patients</li>\n<li>Reluctance to give you access to your own accounts</li>\n<li>Pressure to sign today</li>\n</ul>\n<h2 id=\"section-10\">Questions to ask before you sign</h2>\n<ol>\n<li>What exactly is included each month?</li>\n<li>Who will work on my account, and what is their experience with dental practices?</li>\n<li>How will you measure success? Calls? Bookings? Rankings?</li>\n<li>How long before I should expect to see results?</li>\n<li>Do I own my website, profile and content if we part ways?</li>\n<li>Can I see examples of similar practices you’ve worked with?</li>\n</ol>\n<h2 id=\"section-11\">How to get the most from your spend</h2>\n<p>Paying the dental SEO cost is only half of it. A few habits help the work pay off:</p>\n<ul>\n<li>Respond quickly when your agency asks for photos, team details or approvals</li>\n<li>Keep asking patients for reviews</li>\n<li>Track enquiries by source, so you know what’s working</li>\n<li>Be patient. SEO builds slowly, and the first three months are mostly foundations</li>\n<li>Fix website problems promptly, since technical issues can undo months of effort</li>\n</ul>\n<p>If your site isn’t performing and you aren’t sure why, read our article on <a href=\"https://www.marastu.com/blog/why-dental-website-not-ranking-google/\">dental website optimization and why a site isn’t ranking on Google</a> before you spend anything. It may point to quick fixes.</p>\n<figure><img alt=\"White dental chair in a clinic room\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/white-dental-chair-in-clinic.jpg\"/></figure>\n<h2 id=\"section-12\">Frequently Asked Questions</h2>\n\n<strong>How much does SEO cost per month for a dental practice?</strong>\n<p>Most practices pay between £500 and £2,000 a month for ongoing work. Local focused packages for single clinics sometimes start lower, and large multi location groups often spend more. The right number depends on your competition and your goals.</p>\n\n<strong>Is there a minimum contract length?</strong>\n<p>Many agencies ask for six to twelve months, because SEO takes time. Be wary of anything much longer, and always check the exit terms.</p>\n\n<strong>Can I pay for SEO once and be done?</strong>\n<p>Not really. A one off project can lay a strong foundation, but rankings need ongoing care as competitors improve and Google changes.</p>\n\n<strong>What return can I expect?</strong>\n<p>It varies. Many practices see more calls and bookings within three to six months, and the value tends to compound after that. Ask your agency to agree measurable targets at the start.</p>\n\n\n<h2 id=\"section-13\">Get a clear quote</h2>\n<p>If you’d like a straight answer on what it would cost to grow your practice online, <a href=\"https://www.marastu.com/\">Marastu</a> can put together a proposal based on your area, your site and your goals. See how we approach SEO for Dentists, then get in touch and we’ll talk it through. No pressure and no jargon.</p>\n",
    "toc": [
      {
        "id": "section-1",
        "title": "The short answer",
        "level": 2
      },
      {
        "id": "section-2",
        "title": "How agencies charge",
        "level": 2
      },
      {
        "id": "section-3",
        "title": "What affects the price",
        "level": 2
      },
      {
        "id": "section-4",
        "title": "What dental practice SEO services include",
        "level": 2
      },
      {
        "id": "section-5",
        "title": "Local SEO services cost",
        "level": 2
      },
      {
        "id": "section-6",
        "title": "Dental marketing packages and the wider picture",
        "level": 2
      },
      {
        "id": "section-7",
        "title": "A simple example",
        "level": 2
      },
      {
        "id": "section-8",
        "title": "Is cheap dental SEO worth it?",
        "level": 2
      },
      {
        "id": "section-9",
        "title": "Red flags in a quote",
        "level": 2
      },
      {
        "id": "section-10",
        "title": "Questions to ask before you sign",
        "level": 2
      },
      {
        "id": "section-11",
        "title": "How to get the most from your spend",
        "level": 2
      },
      {
        "id": "section-12",
        "title": "Frequently Asked Questions",
        "level": 2
      },
      {
        "id": "section-13",
        "title": "Get a clear quote",
        "level": 2
      }
    ]
  },
  {
    "slug": "why-dental-website-not-ranking-google",
    "title": "Why Is My Dental Website Not Ranking on Google?",
    "excerpt": "You paid for the website. You added your services, your photos and your phone number. You even wrote a few paragraphs about your team. And yet when you search for a dentist in your own town, you’re nowhere to be seen. It’s frustrating, and it’s more common than most practice owners realise. The good news […]",
    "date": "2026-06-12",
    "category": "SEO",
    "readingMinutes": 7,
    "image": "https://www.marastu.com/wp-content/uploads/2026/11/performance-analytics-graphs-1.jpg",
    "content": "<p>You paid for the website. You added your services, your photos and your phone number. You even wrote a few paragraphs about your team. And yet when you search for a dentist in your own town, you’re nowhere to be seen.</p>\n<p>It’s frustrating, and it’s more common than most practice owners realise. The good news is that a website that isn’t ranking almost always has identifiable reasons, and most of them can be fixed. This article walks through the usual suspects, roughly in the order we check them when a practice comes to us.</p>\n<p>Think of it as a diagnosis for your dental website SEO. Read through, tick off the ones that sound familiar, and you’ll have a decent idea where to start with your own dental website SEO.</p>\n<figure><img alt=\"Graphs of website performance analytics\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/performance-analytics-graphs-1.jpg\"/></figure>\n<h2 id=\"section-1\">1. Google can’t see your pages properly</h2>\n<p>The first question is whether Google has your pages at all. A surprising number of dental sites are built with settings that quietly tell search engines to stay away. A “noindex” tag left on after the build, a robots file that blocks key folders, or a site that’s only reachable through a staging link can all keep you out of the results.</p>\n<p>Open Google Search Console and look at the indexing report. If your main service pages aren’t listed, fix that before anything else. A simple dental website audit starts right here, because no amount of content helps if the pages can’t be indexed.</p>\n<h2 id=\"section-2\">2. The site is too thin</h2>\n<p>Many dental websites have five pages: Home, About, Services, Gallery and Contact. The Services page lists twelve treatments in bullet points, each one a few words long.</p>\n<p>Google needs more to go on. It wants to see that you’re a real authority on each service. A page on dental implants should cover who they’re for, how the procedure works, recovery time, aftercare, cost and common questions. That’s several hundred words at least, not a bullet point.</p>\n<p>If you want to appear for more searches, you need more useful pages. It really is that straightforward.</p>\n<h2 id=\"section-3\">3. You’re not targeting the right keywords</h2>\n<p>This is where many practices go wrong. The page says “high quality dental care for the whole family,” which sounds fine, but nobody searches for that.</p>\n<p>People search for “dentist accepting new patients,” “tooth pain emergency,” “composite bonding cost” and “invisalign near me.” Finding and using the right keywords for dental website pages is the backbone of SEO for dental websites. Without it, you’re writing for yourself instead of your patients.</p>\n<p>Building a list of keywords for dental website pages takes an hour and pays off for months. Use Google’s own suggestions, the “People also ask” box and Search Console data to see what real people type. Then make sure each service page focuses on one main phrase and a few related ones.</p>\n<h2 id=\"section-4\">4. Your page titles and headings are generic</h2>\n<p>Look at the titles of your pages as they appear in a browser tab. If several say “Home” or “Services” or just your practice name, you’re missing a big opportunity.</p>\n<p>Titles tell Google what each page is about. A title such as “Teeth Whitening in Bristol | Smile Studio” does far more than “Services”. The same goes for headings inside the page. Plain, descriptive headings that include what the section covers help both Google and the patient reading it.</p>\n<h2 id=\"section-5\">5. The site is slow</h2>\n<p>Patients are impatient, particularly on mobile. If your page takes four or five seconds to appear, many will leave before it loads. Google notices that behaviour, and it also measures speed directly.</p>\n<p>Dental website speed optimization usually isn’t hard. The main culprits are oversized photos, bulky themes, too many plugins and slow hosting. Compress your images, remove plugins you don’t use, switch on caching and look at your hosting plan. Test your pages with Google’s PageSpeed Insights and aim to fix whatever it flags in red.</p>\n<h2 id=\"section-6\">6. It doesn’t work well on phones</h2>\n<p>More than half of dental searches come from a phone. If your buttons are tiny, your text spills off the screen or your phone number can’t be tapped to call, you’ll lose patients even if you rank.</p>\n<p>Google mostly judges your site by its mobile version, so a poor mobile experience hurts rankings too. Test your own site on a real phone, not just by shrinking your browser window. Mobile fixes are a core part of dental website optimization.</p>\n<figure><img alt=\"Smartphone beside a keyboard on a desk\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/smartphone-beside-keyboard.jpg\"/></figure>\n<h2 id=\"section-7\">7. Your local signals are weak</h2>\n<p>For a dental practice, local rankings matter as much as regular ones. If your name, address and phone number differ between your website and your listings, or your Google Business Profile is half finished, you’ll struggle.</p>\n<p>Check that your details match everywhere. Complete your profile and keep it active. Our guide on <a href=\"https://www.marastu.com/blog/how-to-optimise-google-business-profile-for-dentists/\">Google Business Profile optimization for dentists</a> shows what a finished profile looks like.</p>\n<h2 id=\"section-8\">8. You have very few reviews</h2>\n<p>Reviews help your local ranking and your conversion rate. A practice with a handful of old reviews looks inactive next to one with hundreds of recent ones. If this is you, start asking every satisfied patient for a review, and make it simple with a direct link.</p>\n<h2 id=\"section-9\">9. There’s duplicate or copied content</h2>\n<p>Some practices use text supplied by a software provider or copied from another dentist’s website. Others publish identical pages for several locations with only the town name changed.</p>\n<p>Google tends to ignore copied content, because it adds nothing new. Write your own. Describe your own approach, your own team and your own patients’ typical concerns. It doesn’t need to be fancy. It needs to be yours, and rewriting it is among the simplest dental website optimization jobs there is.</p>\n<h2 id=\"section-10\">10. You have no backlinks, or bad ones</h2>\n<p>Links from other websites work like votes of confidence. If no one links to you, Google has little reason to think you matter. If the links you do have come from spammy directories or old link schemes, they can hold you back.</p>\n<p>A good backlink for dental website purposes comes from a source that’s real and relevant: a local newspaper, a charity you support, a school you’ve sponsored, a dental association, a local business directory with real checks. A few of these are worth more than hundreds of junk links. Avoid anyone who promises a hundred links for a small fee.</p>\n<h2 id=\"section-11\">11. You’re not publishing anything</h2>\n<p>Fresh content is a quiet strength of dental website SEO. A website that never changes starts to look stale. A regular blog or news section, with posts that answer real patient questions, gives Google more pages to rank and gives patients a reason to trust you. It doesn’t need to be daily. Two good posts a month will do more than ten rushed ones.</p>\n<p>You can read more about our <a href=\"https://www.marastu.com/dental-digital-marketing/seo-for-dentists/\">SEO for Dentists</a>.</p>\n<h2 id=\"section-12\">12. Competitors are simply doing more</h2>\n<p>SEO for dental websites is a race with no finish line. Sometimes nothing is “wrong” with your site. The practices above you have just put in more work: more pages, more reviews, more links, better content. In that case the answer is to see what they’re doing and do it better.</p>\n<p>We’ve covered that in <a href=\"https://www.marastu.com/blog/how-much-does-dental-seo-cost/\">dental SEO cost</a>.</p>\n<p>Search for your main service in your town and open the top three results. How many pages do they have? How long is their content? How many reviews do they have? That gives you a realistic idea of the gap.</p>\n<h2 id=\"section-13\">Where to start</h2>\n<p>You can’t fix everything on one afternoon, and you don’t have to. Here’s a sensible order for dental website SEO:</p>\n<ol>\n<li>Make sure Google can index your site</li>\n<li>Fix speed and mobile problems</li>\n<li>Rewrite titles and headings</li>\n<li>Add or expand service pages</li>\n<li>Finish your Google profile and collect reviews</li>\n<li>Start building content and links</li>\n</ol>\n<p>Our <a href=\"https://www.marastu.com/blog/dental-website-seo-checklist/\">dental website SEO checklist</a> goes through these steps in more detail, and works as a handy list to tick off. It’s also worth knowing what professional help costs, so you can decide how much to take on yourself.</p>\n<p>If you’re after wider ideas, see our article on how to improve Google rankings for dentists.</p>\n<figure><img alt=\"Panoramic dental x-ray\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/panoramic-dental-x-ray.jpg\"/></figure>\n<h2 id=\"section-14\">Frequently Asked Questions</h2>\n\n<strong>What are the best strategies for dental website visibility?</strong>\n<p>The strategies that work most reliably are service pages built around real patient searches, a complete and active Google Business Profile, a steady flow of reviews, a fast mobile friendly site, and a handful of relevant local links. Do these consistently and your visibility will grow over time.</p>\n\n<strong>What does dental website search engine optimization actually involve?</strong>\n<p>It covers three areas: technical work so Google can read your site, content so you answer patient questions, and authority through reviews and links. All three need attention, because weakness in one holds back the others.</p>\n\n<strong>How long before I see my website rank?</strong>\n<p>Most practices see early movement after two to three months and stronger results after six. Competitive cities can take longer.</p>\n\n<strong>Should I hire an agency or do it myself?</strong>\n<p>Many practice owners handle the basics, then bring in help for technical issues and ongoing strategy. It depends on your time and how competitive your area is.</p>\n\n\n<h2 id=\"section-15\">Let’s find out what’s holding your site back</h2>\n<p>If you’d like a clear answer instead of guesswork, <a href=\"https://www.marastu.com/\">Marastu</a> can review your site and tell you exactly what’s stopping it from ranking. Take a look at our SEO for Dentists service, or get in touch for a straight conversation about your practice.</p>\n",
    "toc": [
      {
        "id": "section-1",
        "title": "1. Google can’t see your pages properly",
        "level": 2
      },
      {
        "id": "section-2",
        "title": "2. The site is too thin",
        "level": 2
      },
      {
        "id": "section-3",
        "title": "3. You’re not targeting the right keywords",
        "level": 2
      },
      {
        "id": "section-4",
        "title": "4. Your page titles and headings are generic",
        "level": 2
      },
      {
        "id": "section-5",
        "title": "5. The site is slow",
        "level": 2
      },
      {
        "id": "section-6",
        "title": "6. It doesn’t work well on phones",
        "level": 2
      },
      {
        "id": "section-7",
        "title": "7. Your local signals are weak",
        "level": 2
      },
      {
        "id": "section-8",
        "title": "8. You have very few reviews",
        "level": 2
      },
      {
        "id": "section-9",
        "title": "9. There’s duplicate or copied content",
        "level": 2
      },
      {
        "id": "section-10",
        "title": "10. You have no backlinks, or bad ones",
        "level": 2
      },
      {
        "id": "section-11",
        "title": "11. You’re not publishing anything",
        "level": 2
      },
      {
        "id": "section-12",
        "title": "12. Competitors are simply doing more",
        "level": 2
      },
      {
        "id": "section-13",
        "title": "Where to start",
        "level": 2
      },
      {
        "id": "section-14",
        "title": "Frequently Asked Questions",
        "level": 2
      },
      {
        "id": "section-15",
        "title": "Let’s find out what’s holding your site back",
        "level": 2
      }
    ]
  },
  {
    "slug": "google-maps-seo-for-dentists",
    "title": "Google Maps Ranking Tips for Dental Practices",
    "excerpt": "Type “dentist near me” into Google and look at what appears first. It’s not a list of websites. It’s a map with three practices underneath it, each with a star rating, opening hours and a call button. Most people never scroll past those three. Those three spots are where a huge share of new patients […]",
    "date": "2026-06-09",
    "category": "Local SEO",
    "readingMinutes": 7,
    "image": "https://www.marastu.com/wp-content/uploads/2026/11/modern-dental-office-treatment-room.jpg",
    "content": "<p>Type “dentist near me” into Google and look at what appears first. It’s not a list of websites. It’s a map with three practices underneath it, each with a star rating, opening hours and a call button. Most people never scroll past those three.</p>\n<p>Those three spots are where a huge share of new patients come from, and they’re worth fighting for. The encouraging part is that you don’t need a big budget to compete. You need a well kept profile, steady reviews and a website that backs up what your profile says.</p>\n<p>Here’s how Google Maps SEO for Dentists works in practice, and what you can do about it this month. If you’ve been wondering how to rank on Google Maps, this is where to start, because Google Maps ranking for dentists comes down to a few habits.</p>\n<figure><img alt=\"Modern dental treatment room with chair and equipment\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/modern-dental-office-treatment-room.jpg\"/></figure>\n<h2 id=\"section-1\">How Google decides who goes on the map</h2>\n<p>Google has said that local results depend mainly on three things: relevance, distance and prominence.</p>\n<p>Relevance is how well your profile matches what someone searched for. Distance is how close you are to the searcher, or to the area they named. Prominence is how well known and trusted you appear to be, based on reviews, links, mentions and your general presence online.</p>\n<p>You can’t move your clinic, so distance is mostly out of your hands. But relevance and prominence are very much in your control, and that’s where the gains are. If you’re asking how to improve Google Maps ranking, those are the two levers to pull.</p>\n<h2 id=\"section-2\">Claim and complete your Google Business Profile</h2>\n<p>Everything in Google Business Profile optimization for dentists starts here. If you haven’t claimed your profile yet, do it today. If you have, open it and check how much of it is actually filled in.</p>\n<p>A strong Google Business Profile for Dentists includes:</p>\n<ul>\n<li>Your exact business name, with no extra keywords added to it</li>\n<li>A primary category of “Dentist” and secondary categories that match what you offer, such as “Cosmetic dentist” or “Emergency dental service”</li>\n<li>Accurate opening hours, including holidays</li>\n<li>A clear description of your practice and services</li>\n<li>A booking link and phone number</li>\n<li>A full list of services, each with a short description</li>\n<li>Plenty of real photos of the reception, treatment rooms, team and exterior</li>\n</ul>\n<p>We’ve written a separate walkthrough on <a href=\"https://www.marastu.com/blog/how-to-optimise-google-business-profile-for-dentists/\">Google Business Profile optimisation for dentists</a> that goes through each field. Think of it as the companion to this article.</p>\n<p>One warning. Don’t stuff your business name with keywords like “Best Dentist London Cheap Implants.” Google can suspend profiles that do this, and then you vanish entirely.</p>\n<h2 id=\"section-3\">Choose categories and services carefully</h2>\n<p>The primary category matters more than almost anything else on the profile. Pick “Dentist” unless you are a specialist, in which case choose the category that fits, such as “Orthodontist” or “Periodontist”.</p>\n<p>Add secondary categories for the other things you do, but only those that are true. Then list every service in the services section. This helps Google match you to searches like “tooth extraction near me” or “Invisalign provider,” which is the core of Local SEO for Dental Clinics.</p>\n<h2 id=\"section-4\">Make reviews a habit, not an event</h2>\n<p>Of everything on this list, reviews are probably the most powerful. Both the number and the quality matter, and so does how recently they were left. A practice with 300 reviews from the past few years will generally beat one with 40 reviews from long ago.</p>\n<p>The trick is making Google Reviews for Dentists part of how your practice runs, not something you think about every few months. After a good appointment, send a text with a direct review link. Train the front desk to mention it politely. Put a QR code on a card at reception.</p>\n<p>Please reply to every review. Thank people by name where appropriate, and answer criticism calmly and without defensiveness. Never share patient details in a reply, even to correct the record. We’ve gone into more detail on this in our article on <a href=\"https://www.marastu.com/blog/how-dentists-can-get-more-google-reviews/\">how dentists can get more Google reviews</a>.</p>\n<p>Strong Google reviews for dentists also lift the number of calls that come straight from the map. Never buy reviews or offer rewards in exchange for them. Google’s policies forbid it, and patients can usually tell.</p>\n<h2 id=\"section-5\">Keep your name, address and phone consistent</h2>\n<p>Google compares your details across the web. If your clinic is listed as “Smile Dental Care” on one directory and “Smile Dental Clinic Ltd” on another, or has an old phone number on a third, it makes Google less sure which is right.</p>\n<p>Pick one exact format for your name, address and phone number and use it everywhere: your website, social profiles, dental directories, council listings and any other place your practice appears. Fix old listings, remove duplicates and make sure the details match your profile letter for letter.</p>\n<figure><img alt=\"Smartphone beside a keyboard on a desk\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/smartphone-beside-keyboard.jpg\"/></figure>\n<h2 id=\"section-6\">Support your profile with your website</h2>\n<p>Your website and your map listing work as a pair. The listing gets you seen, and the website proves you deserve to be there.</p>\n<p>Make sure your site has a page for each treatment, a clear contact page with your address and an embedded map, and a page for each location if you have more than one clinic. Mention your town and nearby areas in a natural way. This is the practical side of Local SEO for Dental Practices (and local SEO for dental clinics with several sites), and it’s covered in more depth in our <a href=\"https://www.marastu.com/blog/dental-website-seo-checklist/\">dental SEO guide</a>.</p>\n<p>Good Google Maps ranking for dentists needs both halves working together. Add a link from your website to your Google profile, and make sure the website address on your profile points to the right page, usually your homepage or the location page.</p>\n<h2 id=\"section-7\">Post updates and keep it fresh</h2>\n<p>Google Business Profile lets you post updates, offers and events. Many practices ignore this feature, which is exactly why using it gives you an edge.</p>\n<p>Share a short update once or twice a week. A new treatment, a seasonal offer, a team member joining, a reminder about emergency slots. Add new photos regularly too. A Google Business Profile for dentists that looks active signals a practice that’s open and looking after its patients. Regular posting is a simple part of Google Maps SEO for dentists that most rivals skip.</p>\n<p>You can also use the questions and answers section. Seed it yourself with the questions you hear most, such as “Do you accept NHS patients?” or “Is there parking?”, and answer them clearly.</p>\n<h2 id=\"section-8\">Think about “dentist near me” searches</h2>\n<p>A lot of patients use the phrase “near me,” and Google works out their location automatically. That’s why Dentist Near Me SEO is mostly about proving you’re relevant to your area.</p>\n<p>Mention neighbourhoods, landmarks and transport links on your site. Add directions to your contact page. Dentist near me SEO also rewards speed, so check from a phone as well. Get listed with local organisations, and earn links from local sources. All of this tells Google that your practice belongs to the area, which helps it show you to the people nearby.</p>\n<h2 id=\"section-9\">Track what’s working</h2>\n<p>You can’t improve what you don’t measure. Your Google Business Profile has a performance section showing how many people found you, what they searched, and how many called, asked for directions or visited your site. Check it monthly.</p>\n<p>It’s also worth searching for your key terms from a few different spots around your area, since results change with location. Free or low cost tools can show your ranking across a map grid, which makes it easy to see where you’re strong and where you’ve got a gap. That tells you how to improve Google Maps ranking where it’s weakest.</p>\n<h2 id=\"section-10\">Mistakes that hold practices back</h2>\n<p>A few things come up again and again when we audit local profiles:</p>\n<p>For the wider view of how local search fits with your other marketing, take a look at our overview of <a href=\"https://www.marastu.com/blog/how-to-get-more-dental-patients/\">dental SEO strategies</a>.</p>\n<ul>\n<li>Unclaimed or duplicate listings</li>\n<li>Wrong opening hours, especially around bank holidays</li>\n<li>Few photos, or only stock images</li>\n<li>Unanswered reviews</li>\n<li>A website that doesn’t mention the location anywhere</li>\n<li>Changing the business name to add keywords</li>\n</ul>\n<p>Fixing these alone often moves a practice up a few places, and Google Maps ranking for dentists often improves just from cleaning them up.</p>\n<figure><img alt=\"Orange dental chair with medical equipment\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/orange-dental-chair-with-equipment.jpg\"/></figure>\n<h2 id=\"section-11\">Frequently Asked Questions</h2>\n\n<strong>How long does it take to rank higher on Google Maps?</strong>\n<p>Small changes can show up within weeks, but steady gains usually take two to four months. Competitive city centres take longer.</p>\n\n<strong>How many reviews do I need?</strong>\n<p>For Google reviews for dentists there’s no magic number. Aim to keep ahead of the practices ranking above you, and keep adding new ones regularly.</p>\n\n<strong>Does my website affect my Google Maps position?</strong>\n<p>Yes. Google looks at your site content, links and local signals alongside your profile. A weak website holds back a good profile.</p>\n\n<strong>Can I rank in areas where I don’t have a clinic?</strong>\n<p>It’s difficult. Local SEO for dental practices works best close to your address, because distance is a strong factor, so you’ll mostly appear near your physical address. Location pages can help you show up for neighbouring areas, but results vary.</p>\n\n\n<h2 id=\"section-12\">Get help from specialists</h2>\n<p>Climbing the map takes consistency more than cleverness. If you’d like someone to audit your profile, fix the weak spots and manage reviews and updates for you, our team does this every day through <a href=\"https://www.marastu.com/dental-digital-marketing/local-seo-for-dentists/\">local SEO for dentists</a>. Send us a message and we’ll show you how you currently compare with the practices ranking above you.</p>\n",
    "toc": [
      {
        "id": "section-1",
        "title": "How Google decides who goes on the map",
        "level": 2
      },
      {
        "id": "section-2",
        "title": "Claim and complete your Google Business Profile",
        "level": 2
      },
      {
        "id": "section-3",
        "title": "Choose categories and services carefully",
        "level": 2
      },
      {
        "id": "section-4",
        "title": "Make reviews a habit, not an event",
        "level": 2
      },
      {
        "id": "section-5",
        "title": "Keep your name, address and phone consistent",
        "level": 2
      },
      {
        "id": "section-6",
        "title": "Support your profile with your website",
        "level": 2
      },
      {
        "id": "section-7",
        "title": "Post updates and keep it fresh",
        "level": 2
      },
      {
        "id": "section-8",
        "title": "Think about “dentist near me” searches",
        "level": 2
      },
      {
        "id": "section-9",
        "title": "Track what’s working",
        "level": 2
      },
      {
        "id": "section-10",
        "title": "Mistakes that hold practices back",
        "level": 2
      },
      {
        "id": "section-11",
        "title": "Frequently Asked Questions",
        "level": 2
      },
      {
        "id": "section-12",
        "title": "Get help from specialists",
        "level": 2
      }
    ]
  },
  {
    "slug": "dental-website-seo-checklist",
    "title": "Dental Website SEO Checklist",
    "excerpt": "A dental website can look lovely and still bring in almost nobody. We see it all the time. A practice spends a good amount on a new design, launches it with a bit of fanfare, and then wonders why the phone isn’t ringing any more than before. Looks are only part of the picture. For […]",
    "date": "2026-06-03",
    "category": "SEO",
    "readingMinutes": 7,
    "image": "https://www.marastu.com/wp-content/uploads/2026/11/open-laptop-wooden-desk.jpg",
    "content": "<p>A dental website can look lovely and still bring in almost nobody. We see it all the time. A practice spends a good amount on a new design, launches it with a bit of fanfare, and then wonders why the phone isn’t ringing any more than before.</p>\n<p>Looks are only part of the picture. For a website to bring in patients, Google has to understand it, trust it and think it’s a good answer to what someone typed in. That’s what Dental SEO is about, and the good news is that most of it comes down to a short list of things you can check one by one.</p>\n<p>This checklist covers ten of them. Work through it with your website open in another tab. Some items will take five minutes. A few will take a proper afternoon. Either way, you’ll finish with a clear list of what to fix first.</p>\n<figure><img alt=\"Open laptop on a wooden desk\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/open-laptop-wooden-desk.jpg\"/></figure>\n<h2 id=\"section-1\">1. Check that Google can find and read your site</h2>\n<p>Start with the boring technical basics, because nothing else matters if Google can’t get in.</p>\n<p>Search for your practice name followed by “site:” in Google, or just type “site:yourdomain.com” into the search bar. You’ll see roughly how many pages Google has stored. If it’s far fewer than you expect, something is blocking them.</p>\n<p>Common culprits include a “noindex” tag left over from when the site was being built, a robots.txt file that blocks important folders, and a missing sitemap. Open Google Search Console, which is free, and look at the Pages report. It tells you which pages are indexed and which aren’t, with reasons.</p>\n<h2 id=\"section-2\">2. Make sure the site is secure and works on a phone</h2>\n<p>Your site should load on https, with the padlock showing. If it doesn’t, browsers will warn visitors before they even see your homepage, and that’s the end of that booking.</p>\n<p>Then pick up your phone and use your own site as a patient would. Can you tap the phone number to call? Is the text readable without pinching and zooming? Does the booking button sit where your thumb can reach it? Most dental searches happen on mobile, so a clumsy mobile experience costs you real patients.</p>\n<p>Good dentist website design is not about being flashy. It’s about being simple to use for someone who’s in pain and wants an appointment today.</p>\n<h2 id=\"section-3\">3. Test your page speed</h2>\n<p>Slow pages lose visitors and rank worse. Run your homepage and your main service pages through Google’s PageSpeed Insights.</p>\n<p>The usual reasons dental sites run slow are oversized photos, too many plugins, heavy sliders and cheap hosting. Compress your images, drop anything decorative that you don’t need, and consider better hosting if the problem persists. This kind of dental website optimization is often the cheapest win on the whole list.</p>\n<h2 id=\"section-4\">4. Give every service its own page</h2>\n<p>This is the one we recommend most often. If implants, whitening, braces, emergency care and children’s dentistry all live on a single “Services” page, Google has no way to rank you for any of them individually.</p>\n<p>Each treatment deserves a dedicated page with its own title, its own headings and enough useful text to answer a patient’s real questions: what is it, who is it for, how long does it take, is it painful, what does it cost, what happens afterwards. Aim for at least 500 to 800 words of useful, plain writing.</p>\n<h2 id=\"section-5\">5. Target the right keywords</h2>\n<p>Keywords are the words your patients type. Good ones balance volume with intent. “Dentist” is too broad. “Emergency dentist open Sunday in Leeds” is specific and the person searching is ready to book.</p>\n<p>Make a short list for each service page. Put the main phrase in the page title, the first paragraph, one or two headings and the web address. Then use related phrases naturally through the text. Tie your keywords to a content plan too, because dental content marketing works best when every post answers a real patient question. Don’t stuff them in. If a sentence sounds odd when you read it aloud, rewrite it.</p>\n<p>If you want to see how this fits into the wider plan, our piece on <a href=\"https://www.marastu.com/blog/how-to-get-more-dental-patients/\">dental SEO strategies</a> explains how keywords connect to patient growth.</p>\n<figure><img alt=\"Smartphone beside a keyboard on a desk\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/smartphone-beside-keyboard.jpg\"/></figure>\n<h2 id=\"section-6\">6. Write proper titles and meta descriptions</h2>\n<p>The page title and meta description are what people see in search results. They act like a shop window.</p>\n<p>Keep titles under about 60 characters and descriptions under about 155. Include the treatment, the town and a reason to click. “Invisalign in Manchester | Free Consultation” beats “Services | Home”. Writing them is the quickest piece of dental website optimization you can finish in an hour. Every page needs its own, because duplicates confuse search engines and look lazy to patients.</p>\n<h2 id=\"section-7\">7. Use headings and structure properly</h2>\n<p>Each page should have one main heading, followed by sub headings that break the content into clear sections. This isn’t only for Google. Patients skim. Clear headings let them find the part they care about in seconds, and they’re part of good dentist website design as much as SEO.</p>\n<p>Short paragraphs, bullet points where they help, and plain language all make a page easier to read. Dental Content Marketing works best when it sounds like a friendly dentist explaining something across the desk, not a textbook.</p>\n<h2 id=\"section-8\">8. Add local signals</h2>\n<p>Your website should make it obvious where you are and who you serve. Put your full name, address and phone number in the footer of every page, matching your Google Business Profile exactly. Add an embedded map on your contact page. Create location pages if you serve more than one town. Mention nearby areas and landmarks where it’s natural.</p>\n<p>Local dental practice marketing depends on them. These signals feed straight into how you appear on the map. We’ve covered that in detail in our guide to <a href=\"https://www.marastu.com/blog/google-maps-seo-for-dentists/\">Google Maps ranking for dentists</a>, and it’s worth reading alongside this checklist.</p>\n<h2 id=\"section-9\">9. Build trust with real content</h2>\n<p>Search engines increasingly favour pages that show real experience. For a dental practice, that means:</p>\n<ul>\n<li>Photos of your actual team, clinic and equipment</li>\n<li>Short biographies with qualifications and registration numbers</li>\n<li>Patient reviews and before and after photos (with consent)</li>\n<li>Clear information on prices, payment plans and insurance</li>\n<li>A blog or news section that answers common patient questions</li>\n</ul>\n<p>This is where Dental Practice Marketing and SEO overlap. A blog post that answers “Does teeth whitening damage enamel?” attracts people who are researching, and builds trust with those who are ready to book. Update it a few times a month rather than posting a burst and then going quiet for half a year.</p>\n<h2 id=\"section-10\">10. Earn links and mentions</h2>\n<p>Links from other trustworthy websites tell Google your practice is real and respected. You don’t need hundreds. A handful of good ones carry weight.</p>\n<p>You can read more about our <a href=\"https://www.marastu.com/dental-digital-marketing/seo-for-dentists/\">SEO for Dentists</a>.</p>\n<p>Easy places to start: your local chamber of commerce, your professional association, local charities you support, school or sports sponsorships, and local news if you have a story to tell. Make sure any directory listings, such as your dental council profile, link back to your website.</p>\n<p>Good dental marketing strategies treat links as a slow, steady habit. Avoid cheap link packages. They can do more harm than good.</p>\n<h2 id=\"section-11\">Putting the checklist to work</h2>\n<p>Print the list, score each item as done, partly done or not started, and begin with the ones that affect the whole site: indexing, mobile, speed and service pages. These are the foundation. Titles, headings and content come next, then local signals and links.</p>\n<p>Many practices find they have four or five items sorted already, which is a good place to start from. Strong dental practice marketing begins with a website that works, and the best dental marketing strategies all lean on one. Dental Website SEO is rarely about doing something dramatic. It’s about getting lots of small things right and keeping them right.</p>\n<p>If you’ve gone through the list and your pages still sit on page three, we’ve put together a separate article on <a href=\"https://www.marastu.com/blog/why-dental-website-not-ranking-google/\">why a dental website might not be ranking on Google</a>, which digs into the less obvious causes.</p>\n<p>If you want the bigger picture of how SEO fits into patient growth, read how to get more patients for a dental practice.</p>\n<figure><img alt=\"Row of dental instruments on a tray\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/row-of-dental-instruments.jpg\"/></figure>\n<h2 id=\"section-12\">Frequently Asked Questions</h2>\n\n<strong>How often should I review my dental website SEO?</strong>\n<p>A quick check every month and a full review every quarter is a sensible rhythm. Search results shift, competitors improve and your own services change.</p>\n\n<strong>Can I do dental SEO myself?</strong>\n<p>Yes, for the basics. Claiming your Google Business Profile, writing good service pages and collecting reviews are all things a practice manager can handle. Technical work and ongoing strategy usually go faster with specialist help.</p>\n\n<strong>How long until I see results?</strong>\n<p>Small fixes like titles and speed can show effects in a few weeks. New pages and content typically take three to six months to build momentum.</p>\n\n<strong>Do I need a new website to improve my rankings?</strong>\n<p>Not usually. Many sites just need cleaner structure, better content and faster loading. A rebuild only makes sense if the site is old, slow or impossible to edit.</p>\n\n\n<h2 id=\"section-13\">Need a hand with the checklist?</h2>\n<p>If you’d like an expert to go through your site and tell you exactly what needs attention, <a href=\"https://www.marastu.com/\">Marastu</a> offers SEO for Dentists built around what practices actually need. Reach out and we’ll tell you where you stand.</p>\n",
    "toc": [
      {
        "id": "section-1",
        "title": "1. Check that Google can find and read your site",
        "level": 2
      },
      {
        "id": "section-2",
        "title": "2. Make sure the site is secure and works on a phone",
        "level": 2
      },
      {
        "id": "section-3",
        "title": "3. Test your page speed",
        "level": 2
      },
      {
        "id": "section-4",
        "title": "4. Give every service its own page",
        "level": 2
      },
      {
        "id": "section-5",
        "title": "5. Target the right keywords",
        "level": 2
      },
      {
        "id": "section-6",
        "title": "6. Write proper titles and meta descriptions",
        "level": 2
      },
      {
        "id": "section-7",
        "title": "7. Use headings and structure properly",
        "level": 2
      },
      {
        "id": "section-8",
        "title": "8. Add local signals",
        "level": 2
      },
      {
        "id": "section-9",
        "title": "9. Build trust with real content",
        "level": 2
      },
      {
        "id": "section-10",
        "title": "10. Earn links and mentions",
        "level": 2
      },
      {
        "id": "section-11",
        "title": "Putting the checklist to work",
        "level": 2
      },
      {
        "id": "section-12",
        "title": "Frequently Asked Questions",
        "level": 2
      },
      {
        "id": "section-13",
        "title": "Need a hand with the checklist?",
        "level": 2
      }
    ]
  },
  {
    "slug": "how-to-get-more-dental-patients",
    "title": "Dental SEO Strategies to Attract More Patients to Your Practice",
    "excerpt": "Most dentists we speak to say the same thing in the first five minutes. The clinic is good, the team is skilled, the chairs are comfortable, and yet the appointment book has gaps. Meanwhile a clinic two streets away seems to be fully booked every week. The difference is rarely clinical skill. It is almost […]",
    "date": "2026-05-31",
    "category": "SEO",
    "readingMinutes": 9,
    "image": "https://www.marastu.com/wp-content/uploads/2026/11/dental-room-with-desk-and-chair.jpg",
    "content": "<p>Most dentists we speak to say the same thing in the first five minutes. The clinic is good, the team is skilled, the chairs are comfortable, and yet the appointment book has gaps. Meanwhile a clinic two streets away seems to be fully booked every week.</p>\n<p>The difference is rarely clinical skill. It is almost always visibility and trust. Patients pick a dentist the way they pick a restaurant: they search, they scan a few results, they read reviews, and they book the one that feels safe. If your practice isn’t showing up in that moment, you don’t get a chance to impress anyone.</p>\n<p>This guide covers how to get more dental patients with a mix of search, local visibility, advertising, referrals and better follow up. You don’t need to do all of it at once. Pick the parts that fit your practice and build from there. Knowing how to get more dental patients is mostly about doing a few things steadily.</p>\n<figure><img alt=\"Dental treatment room with a desk and chair\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/dental-room-with-desk-and-chair.jpg\"/></figure>\n<h2 id=\"section-1\">Why most dental practices stall</h2>\n<p>Before the tactics, it helps to understand why growth stops. In our experience there are three common reasons.</p>\n<p>First, the practice relies on word of mouth alone. Referrals are wonderful, but they are slow and you can’t control them. When a few loyal patients move away, new bookings dry up.</p>\n<p>Second, the website exists but does nothing. It’s a digital brochure with a phone number on it. It doesn’t answer the questions patients are typing into Google, so it never gets found.</p>\n<p>Third, nobody owns marketing. The principal dentist is busy treating patients, the front desk is busy answering calls, and marketing happens when someone finds a spare hour. That rarely happens.</p>\n<p>Fixing these three things is the foundation of any set of dental practice growth strategies. Everything below builds on them, and it’s also the quickest answer to how to get more dental patients when the diary looks thin.</p>\n<h2 id=\"section-2\">Start with how patients actually search</h2>\n<p>People don’t search for “comprehensive restorative dentistry.” They search for “dentist near me,” “emergency dentist open today,” “teeth whitening cost,” or “dentist for anxious patients.” The words are plain and the intent is urgent.</p>\n<p>If you want to grow your dental practice, your website needs a page for each of the services you want more of, written in the same plain language. One page for implants, one for Invisalign, one for emergency care, one for children’s dentistry. Each page should explain what the treatment involves, who it suits, roughly what it costs, and how to book.</p>\n<p>This is the core of SEO for Dentists, and it is the dental patient acquisition strategy with the best long term return, because a page that ranks keeps bringing patients in without you paying for every click. If you’d like the full picture of how it works, our <a href=\"https://www.marastu.com/dental-digital-marketing/seo-for-dentists/\">SEO for Dentists</a> page walks through it.</p>\n<p>A quick way to test your own site: search for the treatment you most want to sell, plus your town. If you don’t appear on the first page, that’s your starting point.</p>\n<h2 id=\"section-3\">Local search is where most new patients come from</h2>\n<p>Dentistry is local. Nobody drives an hour for a check up. So if you’re asking how to attract new dental patients nearby, the most useful step is to show up in the map results that appear at the top of a local search.</p>\n<p>That comes down to a handful of basics:</p>\n<ul>\n<li>A fully completed Google Business Profile with correct opening hours, services, photos and a booking link</li>\n<li>Consistent name, address and phone details everywhere your practice is listed</li>\n<li>A steady flow of genuine reviews</li>\n<li>Service pages and location pages on your website that mention the areas you serve</li>\n</ul>\n<p>We’ve written a separate guide on <a href=\"https://www.marastu.com/blog/google-maps-seo-for-dentists/\">Google Maps ranking for dentists</a> that goes deep on this, so we won’t repeat it all here. The short version is that a well kept profile and a good review count can do more for you than a redesigned website.</p>\n<h2 id=\"section-4\">Use reviews as your quiet salesperson</h2>\n<p>Think about the last time you booked a service from someone you’d never met. You probably read what other people said first. Dental patients do exactly the same, and they are often nervous, which makes social proof even more important.</p>\n<p>Treat reviews as part of your wider new patient marketing for dentists, not an afterthought. Ask every happy patient for a review. Do it at the right moment, which is usually right after a good appointment, and make it easy with a direct link sent by text or email. Reply to every review, good or bad, in a calm and human voice. A thoughtful reply to a critical review often builds more trust than a page of five stars.</p>\n<h2 id=\"section-5\">Website changes that turn visitors into bookings</h2>\n<p>Traffic only matters if people act on it, and no set of dental practice growth strategies works without that. A few small fixes make a big difference to dental patient acquisition:</p>\n<ul>\n<li>Put a clear “Book an appointment” button at the top of every page, not just the homepage</li>\n<li>Make sure the site loads fast on a phone, because most dental searches happen on mobile</li>\n<li>Show real photos of your team and your clinic instead of stock images</li>\n<li>List prices or at least price ranges for common treatments, since cost is the biggest worry for many patients</li>\n<li>Add a short, friendly page for nervous patients explaining what to expect</li>\n</ul>\n<p>None of this is complicated. It just needs someone to sit down and do it properly.</p>\n<figure><img alt=\"Laptop with analytics charts on a desk\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/laptop-with-charts-on-desk.jpg\"/></figure>\n<h2 id=\"section-6\">Paid ads for faster results</h2>\n<p>SEO takes time, usually a few months before you see steady movement. If you need patients sooner, Google Ads can fill the gap. You pay when someone clicks, and you can target a specific treatment in a specific area, such as “emergency dentist” within five miles of your clinic.</p>\n<p>Used well, ads help you grow your dental practice around a new service, such as clear aligners or sedation dentistry, while your organic pages catch up. Used badly, they burn through budget quickly. Send ad clicks to a dedicated landing page, not your homepage, and track every call and form so you know what each patient costs you.</p>\n<h2 id=\"section-7\">Referral programmes that actually get used</h2>\n<p>A dental patient referral program works best when it’s simple. Nobody wants to fill in a form or remember a code.</p>\n<p>Some practices offer a small thank you, such as a discount on the next hygiene visit, to both the patient who refers and the friend who books. Others skip the reward and just make it easy: a printed card at reception, a link in the follow up email, a short mention at the end of a treatment plan conversation.</p>\n<p>Whatever you choose, tell your patients it exists. A lot of practices have a referral scheme that nobody knows about. Knowing how to attract new dental patients through people who already trust you is the cheapest route of all.</p>\n<h2 id=\"section-8\">Keep the patients you already have</h2>\n<p>It costs far more to find a new patient than to keep an existing one. That’s why dental patient retention deserves as much attention as anything else on this list.</p>\n<p>Simple habits go a long way. Book the next recall appointment before the patient leaves the chair. Send a friendly reminder a week before and a day before. Follow up after major treatment with a short message asking how they’re feeling. Send a birthday message. These small touches make patients feel looked after, and people who feel looked after stay.</p>\n<p>Good dental patient retention also feeds your referrals, because patients who stay also refer. A loyal patient base is the best marketing asset a practice has.</p>\n<h2 id=\"section-9\">Improve case acceptance without sounding pushy</h2>\n<p>Getting people through the door is only half the job. If someone is offered a treatment plan and says “I’ll think about it,” you’ve lost the booking and often the patient.</p>\n<p>Better dental case acceptance usually comes from clearer communication, not harder selling. Show the patient their own scans or photos. Explain what happens if the problem is left alone. Offer payment options up front. Give them a written summary they can show a partner. People say yes when they feel informed and unhurried.</p>\n<h2 id=\"section-10\">A few dental marketing ideas that cost little</h2>\n<p>If you’re working with a modest budget, here are a few dental marketing ideas worth trying:</p>\n<p>If your site is already live but not performing, <a href=\"https://www.marastu.com/blog/why-dental-website-not-ranking-google/\">this article on why a dental website isn’t ranking</a> will help you find the cause.</p>\n<ul>\n<li>Short videos of the team explaining common treatments, posted on your site and social pages</li>\n<li>A monthly email with oral health tips and a seasonal offer</li>\n<li>Partnerships with local gyms, schools and employers</li>\n<li>A “meet the dentist” page that shows personality, not just qualifications</li>\n<li>Community involvement, such as sponsoring a local sports team or running a school visit</li>\n</ul>\n<p>These won’t transform your numbers overnight, but they build recognition, and recognition is what makes a patient choose you over a stranger.</p>\n<h2 id=\"section-11\">Putting it into a plan</h2>\n<p>If someone asked us how to get more dental patients in a single sentence, we’d say: be easy to find, easy to trust and easy to book.</p>\n<p>It’s easy to read a list of dental practice growth strategies like this and feel overwhelmed. Here’s a simple order for how to attract new dental patients that works for most practices:</p>\n<ol>\n<li>Fix your Google Business Profile and start collecting reviews</li>\n<li>Build or improve your service pages so they can rank</li>\n<li>Make your website easier to book from</li>\n<li>Add paid ads for the treatments you most want to grow</li>\n<li>Tighten up recalls, follow ups and your referral process</li>\n</ol>\n<p>Do the first two well and you’ll already be ahead of many nearby practices, and you’ll have a real answer to how to get more dental patients without guessing. For anyone who wants a deeper walk through the technical side, our <a href=\"https://www.marastu.com/blog/dental-website-seo-checklist/\">dental SEO guide</a> breaks it down step by step.</p>\n<figure><img alt=\"Dental implant model with teeth\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/11/dental-implant-model-with-teeth.jpg\"/></figure>\n<h2 id=\"section-12\">Frequently Asked Questions</h2>\n\n<strong>How much should a dental practice spend on marketing?</strong>\n<p>There’s no single number, but many practices set aside somewhere between 5 and 10 percent of their revenue. A newer practice that needs to fill its book quickly often spends toward the higher end. An established practice with plenty of referrals can spend less and focus on keeping things steady. What matters most is tracking what each channel brings in, so you can move money towards what works.</p>\n\n<strong>How long does dental SEO take to work?</strong>\n<p>Most practices begin to see movement within three to six months, though competitive areas can take longer. Local map results often improve faster than standard website rankings.</p>\n\n<strong>Is Google Ads or SEO better for a dental practice?</strong>\n<p>They do different jobs. Ads bring patients quickly but stop when you stop paying. SEO builds slowly and keeps working. Most growing practices use both.</p>\n\n<strong>What is the fastest way to get new patients?</strong>\n<p>Optimising your Google Business Profile and running targeted local ads are usually the quickest routes. Both can start producing enquiries within weeks.</p>\n\n\n<h2 id=\"section-13\">Ready to fill your appointment book?</h2>\n<p>If you want to grow your dental practice for good, it takes steady effort across search, reviews, your website and the way you treat patients. If you’d rather have a team handle the marketing side while you focus on dentistry, <a href=\"https://www.marastu.com/\">Marastu</a> works with dental practices to build exactly this kind of plan. Get in touch and we’ll look at where your practice stands today and what would make the biggest difference first.</p>",
    "toc": [
      {
        "id": "section-1",
        "title": "Why most dental practices stall",
        "level": 2
      },
      {
        "id": "section-2",
        "title": "Start with how patients actually search",
        "level": 2
      },
      {
        "id": "section-3",
        "title": "Local search is where most new patients come from",
        "level": 2
      },
      {
        "id": "section-4",
        "title": "Use reviews as your quiet salesperson",
        "level": 2
      },
      {
        "id": "section-5",
        "title": "Website changes that turn visitors into bookings",
        "level": 2
      },
      {
        "id": "section-6",
        "title": "Paid ads for faster results",
        "level": 2
      },
      {
        "id": "section-7",
        "title": "Referral programmes that actually get used",
        "level": 2
      },
      {
        "id": "section-8",
        "title": "Keep the patients you already have",
        "level": 2
      },
      {
        "id": "section-9",
        "title": "Improve case acceptance without sounding pushy",
        "level": 2
      },
      {
        "id": "section-10",
        "title": "A few dental marketing ideas that cost little",
        "level": 2
      },
      {
        "id": "section-11",
        "title": "Putting it into a plan",
        "level": 2
      },
      {
        "id": "section-12",
        "title": "Frequently Asked Questions",
        "level": 2
      },
      {
        "id": "section-13",
        "title": "Ready to fill your appointment book?",
        "level": 2
      }
    ]
  }
];
export const blogPostBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);

// Original case-study detail sections, sanitized at import; counters use published final values.
export type CaseSection = { id: string; title: string; html: string };
const originalCaseSections: Record<string, CaseSection[]> = {
  "enclave-dental-ai-seo": [
    {
      "id": "overview",
      "title": "Building Enclave Dental’s Visibility Across AI Search",
      "html": "\n\n\n\n\n\n<p>Marastu worked with Enclave Dental to strengthen its online visibility and help potential patients discover relevant dental information across search experiences. The work focused on the content, technical foundations, and brand information that support discoverability in traditional search and AI-powered platforms.</p>\n<p>The engagement brought together practical SEO improvements and AI search visibility considerations, helping establish a stronger foundation for how Enclave Dental’s services and information can be discovered online.</p>\n<h3>What the engagement covered</h3>\n<ul>\n<li>\n\n\n\n<p>Marastu worked on useful, relevant content that helps people discover Enclave Dental and understand its services. Content was structured around the questions patients search for, including educational content published under Dr. Shah’s byline, so information is clear for people and easier for search and AI systems to interpret.</p>\n\n\n</li>\n<li>\n\n\n\n<p>The engagement included a review of the website’s technical health and a rebuild of its technical foundations, along with stronger internal linking between service and location pages. These changes help important pages be reached, read and understood by search engines and AI-powered platforms.</p>\n\n\n</li>\n<li>\n\n\n\n<p>Clear, consistent business information and credible references online support both discoverability and credibility. Marastu worked on consistent local citations and ongoing authority-building so that Enclave Dental’s details are easier to verify and trust.</p>\n\n\n</li>\n</ul>\n\n\n\n\n\n<figure>\n<img alt=\"AI SEO strategy and search visibility\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/10/Modern-Teal-Dental-Clinic-Collage.png\"/>\n</figure>\n\n\n\n\n"
    },
    {
      "id": "services",
      "title": "AI SEO Workstreams",
      "html": "\n\n\n\n\n\n\n\n\n\n\nUnderstand\n\n<h3>Enclave Dental Search Visibility Analysis</h3>\n<p>Audited Enclave Dental’s website, technical health and Google Business Profile, and reviewed the local competitive landscape to identify where prospective patients were not finding its services.</p>\n\n\n\n\n\n\nOptimise\n\n<h3>Content and Search Optimisation</h3>\n<p>Restructured Enclave Dental’s on-page content around real patient search intent, making it clearer, more relevant to patient searches and easier for search systems to understand.</p>\n\n\n\n\n\n\nCreate\n\n<h3>Dental Content Strategy</h3>\n<p>Built a patient-question content plan and published ongoing educational content under Dr. Shah’s byline, explaining Enclave Dental’s services and answering the questions prospective patients ask.</p>\n\n\n\n\n\n\nMake Accessible\n\n<h3>Technical SEO Foundations</h3>\n<p>Rebuilt the technical foundations of Enclave Dental’s website and strengthened internal linking between service and location pages, supporting accurate understanding of its content by search systems.</p>\n\n\n\n\n\n\nBuild Trust\n\n<h3>Local Presence and Brand Credibility</h3>\n<p>Worked on consistent local citations and a review plan, supporting the consistent business information and credible online references that help patients find and evaluate Enclave Dental.</p>\n\n\n\n\n\n\nMeasure\n\n<h3>Search Performance and Visibility</h3>\n<p>Used monthly ranking and traffic data to assess performance and focus further effort on the areas driving the most visibility and enquiries.</p>\n\n\n\n"
    },
    {
      "id": "process",
      "title": "Our Approach to Enclave Dental",
      "html": "\n\n\n\n<p>A structured approach to strengthening Enclave Dental’s online visibility, improving its search presence and building a clearer, more trustworthy digital footprint for prospective patients.</p>\n\n<ol>\n<li>\n\nAudit\n<h3>Assessing Existing Visibility</h3>\n<p>Reviewed Enclave Dental’s existing search presence, website content and local visibility to identify opportunities for improvement.</p>\n\n</li>\n<li>\n\nIdentify\n<h3>Identifying Growth Opportunities</h3>\n<p>Identified content, technical SEO and brand-information gaps that could limit discovery by prospective patients.</p>\n\n</li>\n<li>\n\nImprove\n<h3>Strengthening Website SEO</h3>\n<p>Improved the website’s content structure, accessibility and search-focused foundations to help search engines understand the practice.</p>\n\n</li>\n<li>\n\nStrengthen\n<h3>Building Local Trust</h3>\n<p>Focused on clear business information, local search signals and credible online references to support patient discovery.</p>\n\n</li>\n</ol>\n\n"
    },
    {
      "id": "measurement",
      "title": "How We Evaluated AI Search Visibility for Enclave Dental",
      "html": "\n\n\n\n<p>We assessed Enclave Dental’s online discoverability through organic search performance, local search visibility, brand information and measurable patient-intent signals. These indicators help show how improvements to the practice’s online presence can support discovery and enquiries.</p>\n\n\n\n<img alt=\"\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/10/icon-search.png\"/>\n<h3>Organic Search Performance</h3>\n<p>Evaluated organic traffic, search impressions, clicks and keyword visibility to understand how easily potential patients can discover Enclave Dental.</p>\n\n\n<img alt=\"\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/10/icon-cursor.png\"/>\n<h3>Local Search Visibility</h3>\n<p>Assessed Google Business Profile engagement, including calls and direction requests, to understand how local patients interact with the practice.</p>\n\n\n<img alt=\"\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/10/icon-shield.png\"/>\n<h3>Brand Information and Trust</h3>\n<p>Reviewed the clarity and consistency of Enclave Dental’s online information and the credibility signals that help prospective patients evaluate the practice.</p>\n\n\n<img alt=\"\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/10/icon-trend.png\"/>\n<h3>Measurable Patient-Intent Signals</h3>\n<p>Compared available before-and-after metrics to understand changes in visibility and engagement, while distinguishing measured results from estimated AI search impact.</p>\n\n\n\n"
    },
    {
      "id": "ai-answers",
      "title": "Helping Patients Find Enclave Dental Where They Now Ask Questions",
      "html": "\n\n\n\n<figure>\n<img alt=\"Illustration of an AI search answer that recommends a business and cites its sources, shown beneath a search question\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/10/Modern-Dental-Clinic-Showcase.png\"/>\n</figure>\n\n\n\n<p>Patients increasingly ask AI tools who to trust and what to choose. Marastu works to make the practice easier to find, understand and reference when they do, while keeping traditional search foundations strong.</p>\n<ul>\n<li>Content written to answer real customer questions</li>\n<li>Clear technical signals and structured data</li>\n<li>Consistent brand information backed by credible references</li>\n</ul>\n\n\n\n\n"
    },
    {
      "id": "client-testimonial",
      "title": "What They’re Saying",
      "html": "\n\n\n\n\n\n\n        ★★★★★\n      \n<h3>\n        “They consistently deliver milestones on time, keep us informed with regular updates, and respond quickly.”\n      </h3>\n<p>\n        Marastu transformed our online presence and delivered measurable growth.\n        Their SEO, web development and digital marketing efforts increased website\n        traffic by over 60%, qualified patient leads by 45%, and appointment\n        bookings by approximately 35%.\n      </p>\n\n<img alt=\"Dr. Shachi Shah, DDS\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/08/Dr.-Shachi-Shah-DDS.webp\"/>\n\n<strong>Dr. Shachi Shah</strong>\nFounder, Enclave Dental\n\n\n<a href=\"https://clutch.co/go-to-review/73b919d1-ac95-4cc7-b81e-30a7d588f57d/473017\">\n        Read Full Review on Clutch\n        →\n</a>\n\n\n"
    }
  ],
  "enclave-dental-digital-marketing": [
    {
      "id": "section-1",
      "title": "From Every Channel to Every Appointment",
      "html": "\n\n\n\n\n\n\n\n<p>There's a difference between running separate marketing channels and building one connected digital presence. Enclave Dental needed the second — and with it, a real path to growth.</p>\n<p>Here's what that delivered:</p>\n\n\n<h3>Key Tenets of Marastu's Value Proposition</h3>\n\n\n\nStronger Online Visibility\n\n<p>Enclave Dental built a stronger and more consistent digital presence across the channels where potential patients were actively searching and engaging. The focus was on making the practice easier to discover and keeping Enclave Dental visible throughout the patient decision-making journey.</p>\n\n\n\nHigher-Intent Patient Engagement\n\n<p>The integrated strategy helped connect Enclave Dental with potential patients at different stages of intent. SEO supported discovery, SEM captured active demand and social media helped maintain familiarity, creating a more connected path toward meaningful patient engagement.</p>\n\n\n\nA Connected Digital Strategy\n\n<p>Rather than treating each marketing channel independently, SEO, SEM and social media worked together to support one complete patient journey. This created a stronger digital foundation focused on discovery, trust, engagement and ultimately encouraging patients to take action.</p>\n\n\n\n\n\n\n\n\n\n\n<figure><img alt=\"Enclave Dental — a connected digital presence for the practice's future\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/09/ChatGPT-Image-Sep-11-2026-02_01_29-PM.png\"/></figure>\n\n\n\n<!--EOF Vision & Future-->\n"
    },
    {
      "id": "client-snapshot",
      "title": "Client Snapshot",
      "html": "\n\n\n\n\n\n\nClient Profile\n<img alt=\"Enclave Dental logo\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/08/enclave_dental_logo_86920d0ea9.svg\"/>\nDr. Shachi Shah, DDS\n\n<p>General &amp; Cosmetic Dentistry</p>\n<p>Lake Mary, Florida</p>\n\n\n\n\nIndustry<strong>Healthcare: General &amp; Cosmetic Dentistry</strong>\nMarket<strong>Lake Mary, FL, serving Sanford, Longwood, Altamonte Springs &amp; Casselberry</strong>\nDigital Marketing Focus<strong>Integrated SEO, Local SEO, AI SEO SEM &amp; Social Media Strategy</strong>\nEngagement<strong>Ongoing partnership, ~1.5 years</strong>\n\n\n\n"
    },
    {
      "id": "the-challenge",
      "title": "The Challenge",
      "html": "\n\n\n\n\n\n<p>Enclave Dental was struggling with organic visibility in a competitive local market. Patients searching for relevant dental services were consistently finding larger, more established practices ahead of Enclave Dental in the results. To become more discoverable throughout the patient research journey, the practice needed stronger service pages, a more solid technical foundation, improved local SEO visibility and content that spoke directly to the searches patients were already running.</p>\n<p>Paid search needed to capture high-intent patients at exactly the right moment, but it could not work as an isolated channel. The challenge was to build a more focused SEM strategy that connected search intent with relevant landing experiences, so that potential patients actively looking for dental services could be reached with the right message and their immediate interest could be turned into meaningful enquiries and booked appointments.</p>\n<p>Social media needed to build familiarity and trust beyond the moment of search. Enclave Dental needed consistent, engaging content that kept the practice visible, helped patients feel more familiar with the brand, and supported the wider patient journey by reinforcing trust and keeping the practice top of mind long before patients were ready to book.</p>\n\n\n"
    },
    {
      "id": "channel-roles",
      "title": "One Strategy. Five Channels.",
      "html": "\n\n\n\n<p>Each channel played a different role, but together they created a stronger patient journey.</p>\n\n\n<!-- SEO — live case study URL -->\n\n<!-- Local SEO — live case study URL -->\n\n<!-- Local SEO — live case study URL -->\n\n<!-- SEM — no live URL yet, matches the PASTE_SEM_URL_HERE placeholder used on the SEO/SMM source pages -->\n\n<!-- SMM — no live URL yet, matches the PASTE_SMM_URL_HERE placeholder used on the SEO/SEM source pages -->\n\n\n\n"
    },
    {
      "id": "patient-journey",
      "title": "Different Channels. One Patient Journey.",
      "html": "\n\n\n\n<p>From discovery to trust to action, every channel supported the next step.</p>\n\n<ul>\n<li>\nDiscover\n<p>Patients search for dental services and explore their options.</p>\n</li>\n<li>\nGet Found\n<p>SEO and SEM help Enclave Dental appear when patient intent is highest.</p>\n</li>\n<li>\nBuild Familiarity\n<p>Social media creates repeated visibility and a clearer sense of the practice behind the brand.</p>\n</li>\n<li>\nBuild Trust\n<p>Consistent messaging across channels reinforces credibility and keeps Enclave Dental top of mind.</p>\n</li>\n<li>\nTake Action\n<p>Interest moves towards website visits, enquiries and appointments.</p>\n</li>\n</ul>\n\n"
    },
    {
      "id": "seo-impact",
      "title": "Building Long-Term Visibility",
      "html": "\n\n\n\n<p>A local-first SEO strategy moved Enclave Dental from relying on referrals to earning a genuine organic search presence across one of Central Florida's most competitive dental markets.</p>\n\n\n\n<strong>+60%</strong>Organic Traffic Growth\n\n\n\n\n\n\n\n<h3>Key Results</h3>\n<p>The core numbers behind Enclave Dental's organic search growth.</p>\n\n\n<strong>60%</strong>\nOrganic Traffic Growth\n\n\n<strong>68+</strong>\nPage-One Keywords\n\n\n<strong>90+</strong>\nTotal Ranking Keywords\n\n\n\n\nKey Takeaways\n<ul>\n<li>A service and location content architecture improved topical relevance across key pages.</li>\n<li>A technical SEO clean-up removed barriers to indexing and crawlability.</li>\n<li>Ongoing authority-building turned organic search into a genuine new-patient channel rather than a background presence.</li>\n</ul>\n\n\n\n\n"
    },
    {
      "id": "sem-impact",
      "title": "Capturing Demand When Intent Is High",
      "html": "\n\n\n\n<p>Paid search reached the people already searching for a dentist near Lake Mary, turning clicks that were previously going to competitors into booked appointments.</p>\n\n\n\n<h3>Performance Growth Over Time</h3>\n\n\n\n\nBefore\nAfter\n\n<p>Before-and-after percentage growth for each metric across a 6-month period.</p>\n\n\n<h3>Key Results</h3>\n<p>The core numbers behind Enclave Dental's paid search performance.</p>\n\n\n<strong>182%</strong>\nRevenue Growth\n\n\n<strong>125%</strong>\nQualified Calls\n\n\n<strong>267%</strong>\nDirection Requests\n\n\n\n\nKey Takeaways\n<ul>\n<li>Service-specific ad groups aligned spend with the searches most likely to convert.</li>\n<li>Full conversion tracking connected every click to real calls, directions and appointments.</li>\n<li>High-intent clicks that were previously going to competitors turned into booked appointments.</li>\n</ul>\n\n\n\n\n"
    },
    {
      "id": "smm-impact",
      "title": "Turning Visibility Into Patient Attention",
      "html": "\n\n\n\n<p>A consistent, engaging social presence kept Enclave Dental familiar to potential patients well before they were ready to book.</p>\n\n\n\n<h3>Overall Social Media Performance</h3>\n\n\nViews\n\n462.8K\n\n\nInteractions\n\n786\n\n\nReach\n\n81.8K\n\n\n<p>Total social media performance across the last 16 months.</p>\n\n\n<h3>Key Results</h3>\n<p>The core numbers behind Enclave Dental's social media performance.</p>\n\n\n<strong>462.8K</strong>\nViews\n\n\n<strong>786</strong>\nInteractions\n\n\n<strong>81.8K</strong>\nReach\n\n\n\n\nKey Takeaways\n<ul>\n<li>Booking-focused Reels consistently outperformed passive informational posts.</li>\n<li>Clear calls to action gave patients a reason to take the next step.</li>\n<li>Consistent content kept Enclave Dental familiar well before patients were ready to book.</li>\n</ul>\n\n\n\n\n"
    },
    {
      "id": "connected-results",
      "title": "Five Channels. One Stronger Patient Journey.",
      "html": "\n\n\n\n<p>SEO created visibility. SEM captured demand. Social media built familiarity and trust. Together, the three channels created a stronger and more connected digital presence for Enclave Dental.</p>\n\n\n\n<h3>Discover</h3>\n<p>Build long-term visibility and help patients discover Enclave Dental.</p>\n\n\n<h3>Get Found</h3>\n<p>Help nearby patients find your practice through local search.</p>\n\n\n<h3>Search Visibility</h3>\n<p>Help AI platforms recognize and surface Enclave Dental..</p>\n\n\n<h3>Capture Intent</h3>\n<p>Reach potential patients when they are actively searching and ready to act.</p>\n\n\n<h3>Build Trust</h3>\n<p>Create familiarity and keep Enclave Dental top of mind.</p>\n\n\n\n<p>Digital growth did not come from relying on a single channel. SEO helped Enclave Dental get discovered, SEM captured demand when intent was highest and social media built familiarity before patients were ready to act.</p>\n<p>Together, the strategy created a connected digital presence designed to support the complete patient journey, from discovery to trust and action.</p>\n\n\n"
    },
    {
      "id": "section-10",
      "title": "What They're Saying",
      "html": "\n\n\n\n\n\n★★★★★\n<h3>\"They consistently deliver milestones on time, keep us informed with regular updates, and respond quickly.\"</h3>\n<p>Marastu has transformed our online presence and delivered measurable growth for Enclave Dental. Their SEO, web development, and digital marketing efforts increased website traffic by over 60%, qualified patient leads by 45%, and appointment bookings by approximately 35%. The team is strategic, responsive, highly organized, and consistently delivers on time. We've been especially impressed by their expertise, communication, and genuine commitment to our success.</p>\n\n<img alt=\"Dr. Shachi Shah, DDS\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/08/Dr.-Shachi-Shah-DDS.webp\"/>\n\n<strong>Dr. Shachi Shah</strong>\nFounder, Enclave Dental\n\n\n<a href=\"https://clutch.co/go-to-review/73b919d1-ac95-4cc7-b81e-30a7d588f57d/473017\">Read Full Review on Clutch </a>\n\n\n"
    }
  ],
  "enclave-dental-local-seo": [
    {
      "id": "section-1",
      "title": "Helping Lake Mary Patients Find Enclave Dental",
      "html": "\n\n\n\n\n\n<p>When someone nearby searches for a dentist, a treatment or a practice they can trust, Enclave Dental needs to be one of the first they see. This case study shows how Marastu approached local search for the practice, and what the Google Business Profile results show.</p>\n\n\n\n\n"
    },
    {
      "id": "client-snapshot",
      "title": "Client Snapshot",
      "html": "\n\n\n\n\n\n\nClient Profile\n<img alt=\"Enclave Dental logo\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/08/enclave_dental_logo_86920d0ea9.svg\"/>\nDr. Shachi Shah, DDS\n\n<p>General &amp; Cosmetic Dentistry</p>\n<p>Lake Mary, Florida</p>\n\n\n\n\nIndustry<strong>Healthcare: General &amp; Cosmetic Dentistry</strong>\nMarket<strong>Lake Mary, FL, serving Sanford, Longwood, Altamonte Springs &amp; Casselberry</strong>\nLocal SEO Focus<strong>Google Business Profile, Local Keywords, Service + Location Pages, Citations &amp; Reviews</strong>\nEngagement<strong>Ongoing partnership, ~1.5 years</strong>\n\n\n\n"
    },
    {
      "id": "local-challenge",
      "title": "The Local Search Challenge",
      "html": "\n\n\n\n\n\n\n<p>Enclave Dental is a modern general and cosmetic dental practice in Lake Mary, Florida, led by owner dentist Dr. Shachi Shah. Its patient flow leaned on referrals and paid channels, while its presence in organic search stayed thin next to larger, longer-established dental groups nearby.</p>\n\n\n<p>Lake Mary sits inside one of Central Florida's most competitive dental markets, with practices across Sanford, Longwood, Altamonte Springs and Casselberry competing for the same searches: “dentist near me”, dental implants, Invisalign and smile makeovers. Enclave Dental's Google Business Profile wasn't optimised to turn local searches into booked appointments, and the practice ranked outside the local map pack for core services like implants and Invisalign.</p>\n\n\n\n"
    },
    {
      "id": "local-approach",
      "title": "The Local SEO Approach",
      "html": "\n\n\n\n\n<p>Understand → Strategise → Execute → Refine</p>\n\n\nUnderstand\n<p>Audited Enclave Dental's Google Business Profile and website, and mapped the competitive landscape across Lake Mary, Sanford, Longwood and Altamonte Springs to see where local visibility was being lost.</p>\n\n\nStrategise\n<p>Built a local-first roadmap centred on service + location pages (implants, Invisalign, smile makeovers, root canals), plus a citation and review plan to strengthen local pack rankings.</p>\n\n\nExecute\n<p>Put consistent local citations in place and restructured on-page content around real patient search intent, with stronger internal linking between service and location pages.</p>\n\n\nRefine\n<p>Used monthly ranking and traffic data to focus on what was working, expanding content around dental implants and cosmetic dentistry as the strongest drivers.</p>\n\n\n\n"
    },
    {
      "id": "local-strategy",
      "title": "Targeting How Lake Mary Patients Search",
      "html": "\n\n\n\n\n<p>Local patients search by location, by treatment and by what they want to do next. The strategy for Enclave Dental was built around all three.</p>\n\n\n<h3>Location</h3>\n<p>“Dentist near me” and other searches from patients in and around Lake Mary</p>\n\n\n<h3>Treatment</h3>\n<p>Dental implants, Invisalign, smile makeovers and root canals, each with its own service + location page</p>\n\n\n<h3>Intent</h3>\n<p>Calling the practice or getting directions straight from the Google Business Profile</p>\n\n\n\n<img alt=\"Illustration of local search visibility: a search for “dentist near me” shows Enclave Dental in Lake Mary on the map, alongside related local searches\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/10/local-search-visibility.png\"/>\n\n\n"
    },
    {
      "id": "local-results",
      "title": "Local Visibility That Reached Real Patients",
      "html": "\n\n\n\n\n\n\n\n<p>Nearby patients were already searching. Marastu made sure Enclave Dental was easy to find, easy to trust and easy to contact.</p>\n<p>Here's what that delivered:</p>\n\n\n<h3>Key Results</h3>\n\n\n\n\nGoogle Business Profile CallsUp from 30% before\n<strong>225%</strong>\n\n\n\n\nGoogle Business Profile DirectionsUp from 5% before\n<strong>35%</strong>\n\n\n\n\nTotal Keyword Visibility\n<strong>83%</strong>\n\n\n\n\nQualified Enquiries\n<strong>35%</strong>\n\n\n\n\n\n\n\n\n\n\n\n<h4>Capture</h4><p>Found on Google Search and Maps when nearby patients look</p>\n<h4>Convert</h4><p>Calls and direction requests from the Business Profile</p>\n<h4>Measure</h4><p>Keyword visibility tracked across local searches</p>\n<h4>Grow</h4><p>Qualified enquiries from local search</p>\n\n\n\n\n"
    },
    {
      "id": "local-chart",
      "title": "Google Business Profile Calls and Directions",
      "html": "\n\n\n\n\n<!-- TO CONFIRM: the Jun 2025 to Aug 2026 axis dates come from the earlier version of this page; the SEO case study gives no dates for these figures. -->\n<!-- Before/After values verified against Enclave Dental SEO Case Study > Local Search Actions (Calls 30% > 225%, Directions 5% > 35%). Percentages only; not absolute counts. -->\n\nLocal Search Performance: Jun 25 to Aug 26 (start and end values only; no monthly data)\n\n\n\n\n\n\nGoogle Business Profile Calls\nGoogle Business Profile Directions\n\n\n\n"
    },
    {
      "id": "local-impact",
      "title": "What This Means for Enclave Dental",
      "html": "\n\n\n\n\n\n\n\n\nThe Impact\n<h3>More Patients Reaching Enclave Dental Directly From Local Search.</h3>\n\n<strong>LOCAL VISIBILITY</strong>\n\n<p>The Google Business Profile figures show more nearby patients choosing to call Enclave Dental or ask for directions, with 83% total keyword visibility and 35% qualified enquiries reported alongside them. For a practice that once relied on referrals and paid channels, local search is now a more direct route to new patients.</p>\n\n\n\n\n"
    },
    {
      "id": "local-testimonial",
      "title": "What They’re Saying",
      "html": "\n\n\n\n\n\n★★★★★\n<h3>“They consistently deliver milestones on time, keep us informed with regular updates, and respond quickly.”</h3>\n<p>Marastu transformed our online presence and delivered measurable growth. Their SEO, web development and digital marketing efforts increased website traffic by over 60%, qualified patient leads by 45%, and appointment bookings by approximately 35%.</p>\n\n<img alt=\"Dr. Shachi Shah, DDS\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/08/Dr.-Shachi-Shah-DDS.webp\"/>\n\n<strong>Dr. Shachi Shah</strong>\nFounder, Enclave Dental\n\n\n<a href=\"https://clutch.co/go-to-review/73b919d1-ac95-4cc7-b81e-30a7d588f57d/473017\">Read Full Review on Clutch </a>\n\n\n"
    }
  ],
  "enclave-dental-social-media": [
    {
      "id": "section-1",
      "title": "From Social Scrolls to Patient Connections",
      "html": "\n\n\n\n<img alt=\"\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/08/Enclave-dental-clinic.webp\"/>\n\n\n\n\n\n\n\n\nSocial Media Success\n\n<p>There’s a difference between being seen and being remembered. Enclave Dental needed a stronger social presence — and with a strategic, engaging, and consistent approach, Marastu turned their social channels into a platform that builds trust, sparks conversations, and brings in real patients.</p>\n<p>Here’s what that delivered:</p>\n\n<h3>Key Results</h3>\n\n\n\nIncreased reach and visibility\n\n\n\nStronger brand presence\n\n\n\nHigher audience engagement\n\n\n\nMore profile visits and patient interest\n\n\n\n\n\n\n<img alt=\"\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2023/11/corner-right-01.svg\"/>\n\n\n<!--EOF Social Media Success CTA-->\n"
    },
    {
      "id": "client-snapshot",
      "title": "Client Snapshot",
      "html": "\n\n\n\n\n\n\nClient Profile\n<img alt=\"Enclave Dental logo\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/08/enclave_dental_logo_86920d0ea9.svg\"/>\nDr. Shachi Shah, DDS\n\n<p>General &amp; Cosmetic Dentistry</p>\n<p>Lake Mary, Florida</p>\n\n<!-- TODO: replace href with the verified Enclave Dental website URL -->\n\n\n\nIndustry<strong>Healthcare: General &amp; Cosmetic Dentistry</strong>\nMarket<strong>Lake Mary, FL serving Sanford, Longwood, Altamonte Springs &amp; Casselberry</strong>\nSMM Focus<strong>Social Media Strategy, Content Creation &amp; Community Engagement</strong>\nEngagement<strong>Ongoing partnership, ~1.5 years</strong>\n\n\n\n"
    },
    {
      "id": "impact-results",
      "title": "Turning Scrolls into Real Patient Attention.",
      "html": "\n\n\n\nThe Impact\n\n\n\n\n<strong>462.8K</strong>\nViews\n\n\n<strong>786</strong>\nInteractions\n\n\n<strong>81.8K</strong>\nReach (IG)\n\n\n<strong>0d 0h 0m</strong>\nWatch Time\n\n\n<p>“Sixteen months in, Reels are clearly outperforming, with a small number of posts driving most of the engagement. Organic content is now helping build genuine reach on Instagram.”</p>\n\n\n"
    },
    {
      "id": "the-challenge",
      "title": "The Challenge",
      "html": "\n\n\n\n<p>Dental practices compete in a crowded digital space where simply posting treatment information is no longer enough to earn attention or build trust. With patients constantly seeing content from multiple practices, Enclave Dental needed a stronger way to stand out and create a genuine connection with its audience.</p>\n<p>The challenge was to move beyond routine social media posts and build a presence that felt engaging, relevant, and memorable. Enclave Dental needed content that could capture attention, encourage meaningful interactions, strengthen trust, and keep the practice top of mind when potential patients were ready to choose a dentist.\n  </p>\n"
    },
    {
      "id": "the-approach",
      "title": "The Approach",
      "html": "\n\n\n\n\n<p>Educate → Engage → Build Trust → Stay Top of Mind</p>\n\n\nEducate\n<p>Create helpful, easy-to-understand content that answers common patient questions, explains treatments, and makes dental care feel less overwhelming. The goal was to give people useful information they could actually take away, while showing Enclave Dental’s knowledge and expertise.</p>\n\n\nEngage\n<p>Create content that feels relatable and encourages people to interact rather than simply scroll past. Through conversations, comments, questions, and interactive posts, we focused on building a stronger and more genuine connection with the local audience.</p>\n\n\nBuild Trust\n<p>Showcase the people, expertise, patient experience, and personality behind Enclave Dental. By sharing authentic and informative content consistently, we helped potential patients become more familiar with the practice and feel more confident about choosing it.</p>\n\n\nStay Top of Mind\n<p>Maintain a consistent and recognizable social presence so Enclave Dental stays familiar to potential patients over time. By regularly showing up with valuable and relevant content, the practice remained memorable when someone was finally ready to book an appointment.</p>\n\n\n\n"
    },
    {
      "id": "what-we-changed",
      "title": "What We Changed",
      "html": "\n\n\n\n\n\n<a href=\"https://www.marastu.com/sem-services/social-media-advertising/\">Social Media Strategy</a>\n<a href=\"https://www.marastu.com/sem-services/social-media-advertising/\">Content Planning &amp; Calendars</a>\n<a href=\"https://www.marastu.com/sem-services/social-media-advertising/\">Audience </a>\n<a href=\"https://www.marastu.com/sem-services/social-media-advertising/\">Content Creation</a>\n<a href=\"https://www.marastu.com/sem-services/social-media-advertising/\">Competitor Research</a>\n<a href=\"https://www.marastu.com/sem-services/social-media-advertising/\">Engagement Strategy</a>\n<a href=\"https://www.marastu.com/sem-services/social-media-advertising/\">Community Management</a>\n<a href=\"https://www.marastu.com/sem-services/social-media-advertising/\">Brand Voice &amp; Messaging</a>\n<a href=\"https://www.marastu.com/sem-services/social-media-advertising/\">Visual Consistency</a>\n<a href=\"https://www.marastu.com/sem-services/social-media-advertising/\">Performance Tracking</a>\n\n\n"
    },
    {
      "id": "performance-analytics",
      "title": "Performance at a Glance",
      "html": "\n\n\n\n<p>Real, measurable growth across the key actions that matter most.</p>\n\n\n\n<h3>Overall Social Media Performance</h3>\n\n\nViews\n\n462.8K\n\n\nInteractions\n\n786\n\n\nReach\n\n81.8K\n\n\n<p>Total social media performance across the last 16 months.</p>\n\n\n<h3>Organic vs Paid Performance</h3>\n\n\n44%\n56%\n\n\n<strong>44%</strong> Organic Views\n<strong>56%</strong> Paid Views\n\n\n<p>Share of total Instagram views by traffic source.</p>\n\n\n\n"
    },
    {
      "id": "content-winners",
      "title": "Booking-focused content drove the strongest Instagram performance.",
      "html": "\n\n\n\n<p>Across 16 months, the highest-performing content consistently focused on bookings, appointments, and clear calls to action. Reels designed to encourage patients to take the next step generated significantly more views than passive informational posts.</p>\n\n\n\n<h3>Top Content Winners</h3>\n<ol>\n<li>\n\nBooking Hook Reel\n\n\n34.1KViews\n</li>\n<li>\n\nTeam Intro Reel\n\n\n26.5KViews\n</li>\n<li>\n\nAppointment CTA\n\n\n20.4KViews\n</li>\n<li>\n\n“Sign To Book” Reel\n\n\n19.6KViews\n</li>\n<li>\n\nAppointment Reminder\n\n\n863Views\n</li>\n</ol>\n\n\n<h3>Instagram Performance</h3>\n\n\n32.2K\nViews\n\n\n81.8K\nReach\n\n\n454\nInteractions\n\n\n44%\nOrganic Share\n\n\n\n\n\n<h4>Views by Source</h4>\nOrganic <strong>44%</strong>\nPaid <strong>56%</strong>\n\n\n\n\n\nKey Takeaway\n<p>The strongest Instagram content was built around action. Booking-focused Reels, appointment prompts, and clear calls to action consistently outperformed passive posts, showing that social content was most effective when it gave potential patients a clear reason to engage and take the next step.</p>\n\n\n"
    },
    {
      "id": "smm-journey",
      "title": "The Social Media Journey",
      "html": "\n\n\n\n<p>From inconsistent posting to a social presence built to create attention, trust and action.</p>\n\n<ul>\n<li>\n\n<h4>Before</h4>\n<p>Enclave Dental had a loyal base of patients coming through referrals, but almost no presence on the social platforms where new patients were already spending their time. Posting was inconsistent, with no real strategy behind it.</p>\n\n</li>\n<li>\n\n<h4>Strategy</h4>\n<p>We built a content plan centred on educating, engaging, and building trust with the local audience — publishing consistently, tracking what actually resonated, and doubling down on the formats that drove real interest.</p>\n\n</li>\n<li>\n\n<h4>After</h4>\n<p>Enclave Dental now has an active, growing social presence that keeps the practice top of mind — turning scrolls and views into genuine interest and booked appointments.</p>\n\n</li>\n</ul>\n\n"
    },
    {
      "id": "section-10",
      "title": "What They’re Saying",
      "html": "\n\n\n\n\n\n★★★★★\n<h3>“They consistently deliver milestones on time, keep us informed with regular updates, and respond quickly.”</h3>\n<p>Marastu has transformed our online presence and delivered measurable growth for Enclave Dental. Their SEO, web development, and digital marketing efforts increased website traffic by over 60%, qualified patient leads by 45%, and appointment bookings by approximately 35%. The team is strategic, responsive, highly organized, and consistently delivers on time. We’ve been especially impressed by their expertise, communication, and genuine commitment to our success.</p>\n\n<img alt=\"Dr. Shachi Shah, DDS\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/08/Dr.-Shachi-Shah-DDS.webp\"/>\n\n<strong>Dr. Shachi Shah</strong>\nFounder, Enclave Dental\n\n\n<a href=\"https://clutch.co/go-to-review/73b919d1-ac95-4cc7-b81e-30a7d588f57d/473017\">Read Full Review on Clutch </a>\n\n\n"
    }
  ],
  "enclave-dental-google-ads-sem": [
    {
      "id": "section-1",
      "title": "From Ad Click to Appointment Booked",
      "html": "\n\n\n\n\n\n\n\n<p>There’s a difference between having patients and being discoverable to new ones. Enclave Dental had the first. Marastu built the second—and with it, a real path to growth.</p>\n<p>Here’s what that delivered:</p>\n\n\n<h3>Key Results</h3>\n\n\n\n\nWebsite Traffic\n<strong>60%</strong>\n\n\n\n\nAppointment Bookings\n<strong>35%</strong>\n\n\n\n\nQualified Patient Leads\n<strong>45%</strong>\n\n\n\n\n\n\n\n\n\n\n<!-- TODO: replace src below with the final WordPress Media Library URL — container, sizing, border-radius and positioning are unchanged and don't need to be touched -->\n<figure><img alt=\"A New Era Marastu's Vision for the Future\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/09/ChatGPT-Image-Sep-9-2026-10_17_52-AM.png\"/></figure>\n\n\n\n<!--EOF Vision & Future-->\n"
    },
    {
      "id": "client-snapshot",
      "title": "Client Snapshot",
      "html": "\n\n\n\n\n\n\nClient Profile\n<img alt=\"Enclave Dental logo\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/08/enclave_dental_logo_86920d0ea9.svg\"/>\nDr. Shachi Shah, DDS\n\n<p>General &amp; Cosmetic Dentistry</p>\n<p>Lake Mary, Florida</p>\n\n<!-- TODO: replace href with the verified Enclave Dental website URL -->\n\n\n\nIndustry<strong>Healthcare: General &amp; Cosmetic Dentistry</strong>\nMarket<strong>Lake Mary, FL serving Sanford, Longwood, Altamonte Springs &amp; Casselberry</strong>\nSEM Focus<strong>Paid Search (Google Ads), Landing Page Optimisation &amp; Conversion Tracking</strong>\nEngagement<strong>Ongoing partnership, ~1.5 years</strong>\n\n\n\n"
    },
    {
      "id": "impact-results",
      "title": "Real Growth. Real Patient Actions.",
      "html": "\n\n\nThe Impact\n\n<p>From increased visibility to meaningful actions, every metric reflects the impact of a well-executed SEM strategy.</p>\n\nTurning Search Intent Into Real Results\n\n\n\n\n\nCalls\n<!-- TODO: replace placeholder value with the verified qualified-call percentage -->\n<strong>125%</strong>\n\n<p>Qualified patient calls generated</p>\n\n\n\n\n\nRevenue\n<!-- TODO: replace placeholder value with the verified revenue percentage -->\n<strong>182%</strong>\n\n<p>Revenue generated</p>\n\n\n\n\n\nMembership Plans\n<!-- TODO: replace placeholder value with the verified membership plan percentage -->\n<strong>68%</strong>\n\n<p>New patient membership plans activated</p>\n\n\n\n\n\nDirections\n<!-- TODO: replace placeholder value with the verified direction-request percentage -->\n<strong>267%</strong>\n\n<p>High-intent direction requests</p>\n\n\n\n"
    },
    {
      "id": "the-challenge",
      "title": "The Challenge",
      "html": "\n\n\n\n<p>Referrals had served Enclave Dental well, building a full and established patient base. But that growth had reached its ceiling. Every new patient came from someone who already knew the practice, which meant the much larger group of people actively searching for a dentist in Lake Mary right now with no idea Enclave Dental existed was going to a competitor instead high-intent searches.</p>\n<p>Lake Mary sits inside one of Central Florida’s most competitive dental markets, with practices across Sanford, Longwood, Altamonte Springs and Casselberry all competing for clicks on searches like “dentist near me,” dental implants, Invisalign and smile makeovers. Every missed click was a missed appointment and without a structured campaign built around conversion tracking and true patient intent, Enclave Dental was leaving high-value searches on the table.</p>\n\n\n"
    },
    {
      "id": "sem-strategy",
      "title": "The Approach",
      "html": "\n\n\n\n\n\n\n<figure>\n\n</figure>\n\n<h4>Understand</h4>\n<p>Audited Enclave Dental’s paid search account structure, competitor bidding activity, and patient search behaviour across Lake Mary, Sanford, Longwood and Altamonte Springs to see exactly where high-intent clicks were being lost to competitors.</p>\n\n\n\n<figure>\n\n</figure>\n\n<h4>Strategise</h4>\n<p>Built a campaign strategy centred on high-intent keyword and audience research, service-specific ad groups (implants, smile makeovers, root canals), and a bidding and budget allocation model weighted toward the searches most likely to convert.</p>\n\n\n\n<figure>\n\n</figure>\n\n<h4>Execute</h4>\n<p>Launched campaigns with aligned landing pages for every ad group, full conversion tracking across form fills and phone calls, and call and appointment tracking connected directly back to campaign performance.</p>\n\n\n\n<figure>\n\n</figure>\n\n<h4>Refine</h4>\n<p>Used ongoing performance data — cost per lead, conversion rate, call quality — to reallocate budget toward what was converting, cutting spend on searches that generated clicks but not appointments.</p>\n\n\n\n\n"
    },
    {
      "id": "what-we-changed",
      "title": "What We Changed",
      "html": "\n\n\n\n\n\n<a href=\"https://www.marastu.com/sem-services/\">Campaign Strategy</a>\n<a href=\"https://www.marastu.com/sem-services/\">Campaign Targeting</a>\n<a href=\"https://www.marastu.com/sem-services/\">Conversion Setup</a>\n<a href=\"https://www.marastu.com/sem-services/\">Keyword Research</a>\n<a href=\"https://www.marastu.com/sem-services/\">Audience Research</a>\n<a href=\"https://www.marastu.com/sem-services/\">Landing Page</a>\n<a href=\"https://www.marastu.com/sem-services/\">Bidding</a>\n<a href=\"https://www.marastu.com/sem-services/\">Budget Allocation</a>\n<a href=\"https://www.marastu.com/sem-services/\">Ongoing Optimization</a>\n\n\n"
    },
    {
      "id": "performance-analytics",
      "title": "Performance at a Glance",
      "html": "\n\n\n\n<p>Real, measurable growth across the key actions that matter most.</p>\n\n\n\n<h3>Performance Growth Over Time</h3>\n\n\n\n\nCalls\nRevenue\nMembership Plan\nDirections\n\n<p>Percentage growth in each metric across a 6-month period.</p>\n\n\n<h3>Before vs After Comparison</h3>\n\n<!-- Before-bar values below are a small illustrative baseline count per\n               metric (not the same \"100\" normalized index used for bar-height math\n               below) — heights are unchanged and still encode each metric's real\n               percentage growth; only the printed labels changed. -->\n\n\n4\n+125%\n\nCalls\n\n\n\n3\n+182%\n\nRevenue\n\n\n\n5\n+68%\n\nMembership Plan\n\n\n\n2\n+267%\n\nDirections\n\n\n\n\n\n"
    },
    {
      "id": "sem-journey",
      "title": "The SEM Journey",
      "html": "\n\n\n\n\n\n\n\n\n\n\n<h4>Before</h4>\n<p>Enclave Dental had a base of patients coming through referrals, but no consistent way to reach new patients actively searching for a dentist nearby. Growth depended on who already knew the practice.</p>\n\n\n\n\n\n\n\n<h4>Strategy</h4>\n<p>We built a plan around reaching people at the exact moment they were searching, tracked every result from day one, and adjusted continuously based on what was actually working.</p>\n\n\n\n\n\n\n\n<h4>After</h4>\n<p>Enclave Dental now has a steady, measurable way to reach new patients — not a one-time boost, but a system built to keep growing.</p>\n\n\n\n\n"
    },
    {
      "id": "section-9",
      "title": "What They’re Saying",
      "html": "\n\n\n\n\n\n★★★★★\n<h3>“They consistently deliver milestones on time, keep us informed with regular updates, and respond quickly.”</h3>\n<p>Marastu has transformed our online presence and delivered measurable growth for Enclave Dental. Their SEO, web development, and digital marketing efforts increased website traffic by over 60%, qualified patient leads by 45%, and appointment bookings by approximately 35%. The team is strategic, responsive, highly organized, and consistently delivers on time. We’ve been especially impressed by their expertise, communication, and genuine commitment to our success.</p>\n\n<img alt=\"Dr. Shachi Shah, DDS\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/08/Dr.-Shachi-Shah-DDS.webp\"/>\n\n<strong>Dr. Shachi Shah</strong>\nFounder, Enclave Dental\n\n\n<a href=\"https://clutch.co/go-to-review/73b919d1-ac95-4cc7-b81e-30a7d588f57d/473017\">Read Full Review on Clutch </a>\n\n\n"
    }
  ],
  "enclave-dental-seo": [
    {
      "id": "section-1",
      "title": "Turning Local Search Into New Patients",
      "html": "\n\n\n\n\n\n<p>For an independent dental practice competing against larger, longer-established groups, organic search wasn't a nice-to-have — it was the missing channel. Here's how Marastu closed that gap for Enclave Dental.</p>\n\n\n\n\n"
    },
    {
      "id": "client-snapshot",
      "title": "Client Snapshot",
      "html": "\n\n\n\n\n\n\nClient Profile\n<img alt=\"Enclave Dental logo\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/08/enclave_dental_logo_86920d0ea9.svg\"/>\nDr. Shachi Shah, DDS\n\n<p>General &amp; Cosmetic Dentistry</p>\n<p>Lake Mary, Florida</p>\n\n\n\n\nIndustry<strong>Healthcare: General &amp; Cosmetic Dentistry</strong>\nMarket<strong>Lake Mary, FL, serving Sanford, Longwood, Altamonte Springs &amp; Casselberry</strong>\nSEO Focus<strong>Local SEO, Technical SEO &amp; Content Strategy</strong>\nEngagement<strong>Ongoing partnership, ~1.5 years</strong>\n\n\n\nKey Results\n\n\n\n<strong>60%</strong>\nOrganic Traffic Growth\n\n\n\n<strong>68+</strong>\nPage-One Keywords\n\n\n\n<strong>1.45×</strong>\nQualified Leads\n\n\n\n\n"
    },
    {
      "id": "the-challenge",
      "title": "The Challenge",
      "html": "\n\n\n\n\n\n\n<p>Enclave Dental is a modern general and cosmetic dental practice in Lake Mary, Florida, led by owner dentist Dr. Shachi Shah. Like many independent, doctor-owned practices, its early patient flow leaned heavily on word-of-mouth referrals and paid channels — while its presence in organic search stayed thin next to larger, longer-established dental groups nearby.</p>\n\n\n<p>Lake Mary sits inside one of Central Florida's most competitive dental markets, with practices across Sanford, Longwood, Altamonte Springs and Casselberry all chasing the same searches for \"dentist near me,\" dental implants, Invisalign and smile makeovers. Enclave Dental's website wasn't structured to compete for these terms: service pages were thin, technical foundations were incomplete, and the Google Business Profile wasn't optimised to turn local searches into booked appointments.</p>\n\n\n\n"
    },
    {
      "id": "the-approach",
      "title": "The Approach",
      "html": "\n\n\n\n\n<p>Understand → Strategise → Execute → Refine</p>\n\n\nUnderstand\n<p>Audited Enclave Dental's website, technical health, and Google Business Profile, and mapped the competitive landscape across Lake Mary, Sanford, Longwood and Altamonte Springs to see exactly where visibility was being lost.</p>\n\n\nStrategise\n<p>Built a local-first SEO roadmap centred on service + location pages (implants, Invisalign, smile makeovers, root canals), a patient-question content calendar, and a citation and review plan to strengthen local pack rankings.</p>\n\n\nExecute\n<p>Rebuilt technical foundations, restructured on-page content around real patient search intent, published ongoing educational content under Dr. Shah's byline, and strengthened internal linking between service and location pages.</p>\n\n\nRefine\n<p>Used monthly ranking and traffic data to double down on what was working — expanding content around dental implants and cosmetic dentistry once they proved to be the strongest visibility and enquiry drivers.</p>\n\n\n\n"
    },
    {
      "id": "what-we-changed",
      "title": "What We Changed",
      "html": "\n\n\n\n<p>Only the areas of work relevant to this client's strategy.</p>\n\n\n<a href=\"https://www.marastu.com/enterprise-seo-services/\">Technical SEO</a>\n<a href=\"https://www.marastu.com/seo-services/\">Content Strategy</a>\n<a href=\"https://www.marastu.com/seo-services/\">On-Page Optimisation</a>\n<a href=\"https://www.marastu.com/seo-services/\">Internal Linking</a>\n<a href=\"https://www.marastu.com/seo-services/local-seo-services/\">Local SEO</a>\n<a href=\"https://www.marastu.com/guest-posting-service/\">Authority Building</a>\n\n\n"
    },
    {
      "id": "seo-journey",
      "title": "The SEO Journey",
      "html": "\n\n\n\n\n\n\n\n\nBefore\n\n\n\nStrategy\n\n\n\nAfter\n\n\n\n\n<p>Organic visibility was limited mostly to branded searches. Most new patients found Enclave Dental through referrals or paid ads, and the practice ranked outside the local map pack for core services like implants and Invisalign.</p>\n\n\n<p>A service + location content architecture, a technical SEO clean-up, consistent local citations, and ongoing authority-building through educational content published under Dr. Shah's own name.</p>\n\n\n<p>[Insert verified after-state once current data is confirmed — e.g. local pack visibility for core services and a steady rise in organically booked appointments.]</p>\n\n\n\n"
    },
    {
      "id": "growth-charts-section",
      "title": "Growth & Visibility",
      "html": "\n\n\n\n\n\n\n<strong>+60%</strong>Organic Traffic Growth\n\n\n\n\n\n\n\n<strong>68+</strong>Page-One Keywords\n\n\n\n\n\n\nTotal Ranking Keywords\nPage-One Keywords\n\n\n\n\n\n\n\n"
    },
    {
      "id": "content-engine-section",
      "title": "Building the Content Engine",
      "html": "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<strong>250+</strong>\nBlogs Published\n<p>Since Marastu took over the content strategy.</p>\n\n\n\n\n"
    },
    {
      "id": "search-to-patients",
      "title": "From Search to Patients",
      "html": "\n\n\n\n\n\n\n\n\nBefore → After\n<h3>Organic Appointments</h3>\n<strong>45%</strong>Growth\n<p>Organic search now drives a significantly larger share of new patient appointments for Enclave Dental, up 45% from where it stood before the engagement began.</p>\n\n\n\n\n"
    },
    {
      "id": "local-search-actions",
      "title": "Local Search Actions",
      "html": "\n\n\n\n<p>Growth in direct actions from Enclave Dental's Google Business Profile.</p>\n\n\n\n\n<h4>Driving Directions</h4>\n\nBefore<strong>5%</strong>\n\nAfter<strong>35%</strong>\n\n\n\n\n\n\n\n\n<h4>Calls</h4>\n\nBefore<strong>30%</strong>\n\nAfter<strong>225%</strong>\n\n\n\n\n\n\n\n\n"
    },
    {
      "id": "results-section",
      "title": "The Growth Story",
      "html": "\n\n\n\n\n\n\n\n\n\n<strong>60%</strong>\nOrganic Traffic Growth\n\n\n\n\n\n<strong>83%</strong>\nTotal Keyword Visibility\n\n\n\n\n\n<strong>35%</strong>\nQualified Enquiries\n\n\n\n\n\n"
    },
    {
      "id": "section-12",
      "title": "What They're Saying",
      "html": "\n\n\n\n\n\n★★★★★\n<h3>\"They consistently deliver milestones on time, keep us informed with regular updates, and respond quickly.\"</h3>\n<p>Marastu has transformed our online presence and delivered measurable growth for Enclave Dental. Their SEO, web development, and digital marketing efforts increased website traffic by over 60%, qualified patient leads by 45%, and appointment bookings by approximately 35%. The team is strategic, responsive, highly organized, and consistently delivers on time. We've been especially impressed by their expertise, communication, and genuine commitment to our success.</p>\n\n<img alt=\"Dr. Shachi Shah, DDS\" loading=\"lazy\" src=\"https://www.marastu.com/wp-content/uploads/2026/08/Dr.-Shachi-Shah-DDS.webp\"/>\n\n<strong>Dr. Shachi Shah</strong>\nFounder, Enclave Dental\n\n\n<a href=\"https://clutch.co/go-to-review/73b919d1-ac95-4cc7-b81e-30a7d588f57d/473017\">Read Full Review on Clutch </a>\n\n\n"
    }
  ]
};
export const caseStudySlug = (study: (typeof caseStudies)[number]) => new URL(study.href).pathname.split("/").filter(Boolean).at(-1) ?? "";
export const caseStudyBySlug = (slug: string) => caseStudies.find((study) => caseStudySlug(study) === slug);
/** Published digital-marketing results; no inferred monthly data or channel attribution. */
export const digitalMarketingGraphs = {
  "seo-impact": {
    caption: "Organic traffic · indexed comparison (before = 100)",
    rows: [{ label: "Before", value: 100, display: "100", tone: "muted" }, { label: "After", value: 160, display: "160 · +60%", tone: "lime" }],
    metrics: [{ label: "Page-one keywords", value: "68+" }, { label: "Total ranking keywords", value: "90+" }],
  },
  "sem-impact": {
    caption: "Paid search · percentage growth over 6 months",
    rows: [{ label: "Revenue", value: 182, display: "+182%", tone: "lime" }, { label: "Qualified calls", value: 125, display: "+125%", tone: "accent" }, { label: "Direction requests", value: 267, display: "+267%", tone: "rose" }],
    metrics: [],
  },
  "smm-impact": {
    caption: "Social media · total performance over 16 months",
    rows: [{ label: "Views", value: 462800, display: "462.8K", tone: "accent" }, { label: "Reach", value: 81800, display: "81.8K", tone: "lime" }],
    metrics: [{ label: "Interactions", value: "786" }],
  },
} as const;

export const digitalMarketingJourney = [
  { channel: "SEO", stage: "Discover", detail: "Build long-term visibility and help patients discover Enclave Dental.", slug: "enclave-dental-seo" },
  { channel: "Local SEO", stage: "Get Found", detail: "Help nearby patients find your practice through local search.", slug: "enclave-dental-local-seo" },
  { channel: "AI SEO", stage: "Search Visibility", detail: "Help AI platforms recognize and surface Enclave Dental.", slug: "enclave-dental-ai-seo" },
  { channel: "SEM", stage: "Capture Intent", detail: "Reach potential patients when they are actively searching and ready to act.", slug: "enclave-dental-google-ads-sem" },
  { channel: "Social Media", stage: "Build Trust", detail: "Create familiarity and keep Enclave Dental top of mind.", slug: "enclave-dental-social-media" },
];
export const caseStudySections = (slug: string): CaseSection[] => originalCaseSections[slug] ?? [];
