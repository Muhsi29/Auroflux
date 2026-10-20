import { ORG_ID, SeoConfig } from './seo.service';

export interface Faq {
  question: string;
  answer: string;
}

/**
 * Shown on the home page and published as FAQPage structured data (AEO).
 * Questions follow the target keywords in "Auroflux SEO Keywords.pdf"; answers
 * only state facts that appear elsewhere on the site.
 */
export const HOME_FAQ: Faq[] = [
  {
    question: 'What does Auroflux Technology do?',
    answer:
      'Auroflux Technology is an industrial piping and engineering company in Chennai. We provide turnkey industrial engineering solutions: PPR/HDPE electrofusion utility piping, process cooling and chilled water systems, compressed air piping systems, and turnkey fire fighting systems, from design to commissioning.',
  },
  {
    question: 'Is Auroflux an industrial piping contractor in Chennai?',
    answer:
      'Yes. Auroflux is an industrial utility piping contractor with a Chennai office at No.2, Balaji Nagar, Numbal Road, Iyyapanthangal, Chennai – 600 077, a godown in Vanagaram, Chennai, and our registered office in Arakonam. We take up industrial piping projects across Tamil Nadu and India.',
  },
  {
    question: 'What industrial piping systems does Auroflux install?',
    answer:
      'We design, supply and install PPR piping systems for industries, HDPE piping with electrofusion (EF) fittings, metallic piping in GI, MS and SS, and PVC, CPVC and UPVC piping. We also undertake structural fabrication in MS and SS.',
  },
  {
    question: 'Do you design and install compressed air piping systems?',
    answer:
      'Yes. We design compressed air systems for minimal pressure loss and install compressed air piping, including PPR ring main systems such as the one we delivered for Nordex India. We also supply GEM compressed air dryers (10 to 5000 cfm), compressed air filters and auto drain valves.',
  },
  {
    question: 'Do you build process cooling and chilled water piping systems?',
    answer:
      'Yes. We design and execute process cooling systems for manufacturing industries, including closed loop cooling with plate heat exchangers, cooling tower and chiller piping, and chilled water systems. Examples include injection moulding cooling for Southern Polymers and Funskool and an engine testing bed cooling system for TAFE.',
  },
  {
    question: 'Do you offer industrial piping design and engineering?',
    answer:
      'Yes. Our industrial engineering consultancy covers process cooling tower, chiller and compressed air system design, and piping design with calculations, P&ID and bill of materials (BoM). We also handle project execution and piping erection as a turnkey engineering contractor.',
  },
  {
    question: 'Which process chillers, cooling towers and air dryers do you supply?',
    answer:
      'We supply Gem Orion industrial process chillers (1 TR to 30 TR), GEM FRP cooling towers (10 TR to 1000 TR), GEM dry cooling towers (50 kW to 5 MW) and GEM compressed air dryers, along with VFD control panels for industrial pumps, pressure vessels and Marley HVLS fans.',
  },
  {
    question: 'Does Auroflux provide cooling tower and chiller maintenance?',
    answer:
      'Yes. We repair and maintain process chillers, cooling towers, compressed air dryers and plate heat exchangers.',
  },
  {
    question: 'Are you a turnkey fire fighting system contractor?',
    answer:
      'Yes. We deliver complete turnkey fire fighting systems: fire risk assessment and design, hydrant and sprinkler installation, fire alarm and detection, pump room setup, piping and valve installation, and testing and commissioning.',
  },
  {
    question: 'When was Auroflux founded?',
    answer: 'Auroflux was founded in 2007 by Raja Srinivasan.',
  },
  {
    question: 'Which companies has Auroflux worked with?',
    answer:
      'Our process cooling, compressed air and utility piping projects for automobile and manufacturing plants include Ashok Leyland, TAFE, Delphi TVS, Funskool, Nordex India, Mainetti India and Super Auto Forge. Our clients also include Samsung, Toshiba Machine, HCL, MRF, L&T, TATA Steel and Adani.',
  },
  {
    question: 'How do I get a quote from Auroflux?',
    answer:
      'Call or WhatsApp +91 79043 59589, email raja@auroflux.com, or send your requirement through the form on our Contact page.',
  },
];

const AREA_SERVED = [
  { '@type': 'City', name: 'Chennai' },
  { '@type': 'State', name: 'Tamil Nadu' },
  { '@type': 'Country', name: 'India' },
];

/** [name shown on the site, keyword-aligned service type, description] */
const SERVICES = [
  [
    'PPR & HDPE Industrial Piping',
    'Industrial utility piping contractor',
    'Design, supply and installation of PPR piping systems for industries, HDPE piping with electrofusion fittings and GI, MS and SS metallic piping.',
  ],
  [
    'Engineering Consultancy Services',
    'Industrial engineering consultancy',
    'Industrial process cooling tower, chiller and compressed air system design.',
  ],
  [
    'Project Execution & Erection',
    'Industrial project execution and piping erection',
    'End-to-end industrial project execution and piping erection services.',
  ],
  [
    'Cooling & Chilled Water Systems',
    'Process cooling and chilled water piping systems',
    'Energy-efficient process cooling, cooling tower and chiller piping, and chilled water system design and installation.',
  ],
  [
    'Compressed Air System Design',
    'Compressed air piping system design and installation',
    'Compressed air system design and compressed air piping installation with minimal pressure losses.',
  ],
  [
    'Piping Design & Engineering',
    'Industrial piping design and engineering',
    'Industrial piping design with calculations, P&ID and bill of materials (BoM).',
  ],
  [
    'Repair & Maintenance Services',
    'Cooling tower, chiller and compressed air maintenance',
    'Repair and maintenance of process chillers, cooling towers, compressed air dryers and plate heat exchangers.',
  ],
  [
    'Complete Turnkey Fire Fighting Systems',
    'Turnkey fire fighting system contractor',
    'Fire risk assessment, hydrant and sprinkler systems, fire alarm and detection, pump rooms, piping and valves, testing and commissioning.',
  ],
];

export const SEO_PAGES = {
  home: {
    title: 'Industrial Piping & Engineering Solutions in Chennai | Auroflux',
    description:
      'Industrial piping contractor in Chennai: PPR/HDPE piping, process cooling, chilled water and compressed air systems, from design to turnkey execution.',
    path: '/',
    schema: [
      {
        '@type': 'FAQPage',
        '@id': 'https://auroflux.com/#faq',
        mainEntity: HOME_FAQ.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  },
  about: {
    title: 'About Auroflux | Industrial Engineering Company in Chennai',
    description:
      'Founded in 2007 by Raja Srinivasan, Auroflux is a Chennai industrial engineering company delivering turnkey piping, cooling and compressed air projects.',
    path: '/about',
    pageType: 'AboutPage',
    image: '/assets/images/about--section-1.webp',
    breadcrumb: [{ name: 'About', path: '/about' }],
  },
  products: {
    title: 'Industrial PPR & HDPE Piping, Chillers & Air Dryers | Auroflux',
    description:
      'Industrial PPR piping systems, HDPE piping, metallic pipes, process chillers, FRP and dry cooling towers, compressed air dryers and VFD control panels.',
    path: '/products',
    pageType: 'CollectionPage',
    image: '/assets/images/Product-1.webp',
    breadcrumb: [{ name: 'Products', path: '/products' }],
  },
  services: {
    title: 'Industrial Piping, Process Cooling & Compressed Air | Auroflux',
    description:
      'Industrial piping design and engineering, process cooling and chilled water systems, compressed air piping, project execution and turnkey fire fighting.',
    path: '/services',
    image: '/assets/images/service-1.webp',
    breadcrumb: [{ name: 'Services', path: '/services' }],
    schema: SERVICES.map(([name, serviceType, description]) => ({
      '@type': 'Service',
      name,
      serviceType,
      description,
      provider: { '@id': ORG_ID },
      areaServed: AREA_SERVED,
    })),
  },
  projects: {
    title: 'Industrial Piping & Process Cooling Projects | Auroflux',
    description:
      'Process cooling, chilled water and compressed air piping projects for automobile and manufacturing plants: Ashok Leyland, TAFE, Delphi TVS and Funskool.',
    path: '/projects',
    pageType: 'CollectionPage',
    image: '/assets/projects/project-1.png',
    breadcrumb: [{ name: 'Projects', path: '/projects' }],
  },
  clients: {
    title: 'Our Clients | Auroflux Industrial Engineering, Chennai',
    description:
      'Industrial piping and cooling projects for leading manufacturers including Samsung, Toshiba Machine, HCL, MRF, L&T, TATA Steel, TVS, Ashok Leyland and Adani.',
    path: '/our-clients',
    breadcrumb: [{ name: 'Our Clients', path: '/our-clients' }],
  },
  gallery: {
    title: 'Industrial Piping & Cooling Project Gallery | Auroflux',
    description:
      'Photos of Auroflux industrial piping installations, process cooling systems, piping infrastructure, plant engineering, site executions and our team.',
    path: '/gallery',
    pageType: 'CollectionPage',
    image: '/assets/gallery/gallery-1/1.webp',
    breadcrumb: [{ name: 'Gallery', path: '/gallery' }],
  },
  testimonials: {
    title: 'Client Testimonials | Auroflux Industrial Engineering',
    description:
      'Appreciation letters for Auroflux industrial piping and cooling work from Ashok Leyland, Greaves Cotton, Funskool India, United Industries and more.',
    path: '/testimonials',
    breadcrumb: [{ name: 'Testimonials', path: '/testimonials' }],
  },
  blogs: {
    title: 'Industrial Piping, Cooling & Compressed Air Blog | Auroflux',
    description:
      'Engineering articles on industrial piping, compressed air dryers, plate heat exchangers, process cooling and steel structure fabrication from Auroflux.',
    path: '/blogs',
    pageType: 'CollectionPage',
    image: '/assets/images/blog-1.webp',
    breadcrumb: [{ name: 'Blogs', path: '/blogs' }],
  },
  contact: {
    title: 'Contact Auroflux | Industrial Piping Contractor in Chennai',
    description:
      'Get a quote for industrial piping, process cooling or compressed air systems. Call +91 79043 59589 or email raja@auroflux.com. Offices in Chennai & Arakonam.',
    path: '/contact',
    pageType: 'ContactPage',
    breadcrumb: [{ name: 'Contact', path: '/contact' }],
  },
} satisfies Record<string, SeoConfig>;
