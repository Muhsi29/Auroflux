import { ORG_ID, SeoConfig } from './seo.service';

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
