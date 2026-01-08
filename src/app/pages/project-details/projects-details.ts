import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface ProjectInfo {
  category: string;
  client: string;
  startDate: string;
  endDate: string;
  location: string;
  budget: string;
}

interface Feature {
  title: string;
  description: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  introText: string[];
  goal: string;
  features: Feature[];
  projectInfo: ProjectInfo;
  location?: string;
  year?: string;
}

@Component({
  selector: 'app-projects-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects-details.html',
  styleUrl: './projects-details.css',
})
export class ProjectsDetails implements OnInit {
  project!: Project;

 projects: Project[] = [
  {
    id: 1,
    title: 'IMM Closed Loop Cooling System',
    category: 'Injection Moulding Cooling System',
    description: 'PHE based closed loop cooling system designed to ensure clean mould operation, stable temperature control and long-term system reliability.',
    imageUrl: '../../../assets/images/service-1.webp',
    location: 'Southern Polymers, Thirumazhisai',
    year: '2009',
    introText: [
      'Auroflux designed and installed South India’s first Plate Heat Exchanger based closed loop cooling system for injection moulding machines at Southern Polymers.',
      'An intermediate heat exchanger was engineered to completely isolate cooling tower raw water from the oil coolers and mould circuits, ensuring contamination-free operation and extended mould life.',
      'This innovative design ensured consistent cooling performance, improved system hygiene, and sustainable operation suitable for long-term industrial use.'
    ],
    goal: 'To implement a sustainable, clean and efficient closed loop cooling system that enhances mould life and ensures consistent injection moulding performance.',
    features: [
      {
        title: 'PHE Based Closed Loop System',
        description: 'Designed with plate heat exchanger technology to deliver precise temperature control, efficient heat transfer, and stable system operation.'
      },
      {
        title: 'Intermediate Heat Exchanger',
        description: 'Prevents raw cooling tower water from entering sensitive mould and oil cooler circuits, eliminating scaling and contamination risks.'
      },
      {
        title: 'Clean and Reliable Mould Cooling',
        description: 'Ensures moulds remain clean as new, improving product quality and reducing maintenance downtime.'
      },
      {
        title: 'Sustainable System Design',
        description: 'Engineered for long-term performance with improved energy efficiency and reduced water-related operational issues.'
      }
    ],
    projectInfo: {
      category: 'IMM Cooling System',
      client: 'Southern Polymers',
      startDate: '2009',
      endDate: '2009',
      location: 'Thirumazhisai, Tamil Nadu',
      budget: 'Confidential'
    }
  },

  {
    id: 2,
    title: 'IMM Closed Loop Cooling System with Gravity Flow',
    category: 'Injection Moulding Cooling System',
    description: 'Closed loop cooling system incorporating gravity flow outlet design to reduce pumping head and improve heat transfer efficiency.',
    imageUrl: '../../../assets/images/service-2.webp',
    location: 'United Industries, Gerugambakkam & Pillaipakkam',
    year: '2009',
    introText: [
      'Auroflux designed and executed closed loop cooling systems for multiple injection moulding machines at United Industries facilities.',
      'The project covered 8–10 machines at Gerugambakkam and 18–20 machines at Pillaipakkam, ensuring uniform cooling performance across production lines.',
      'A gravity flow outlet design was introduced to reduce pumping head, lower energy consumption, and enhance overall heat transfer efficiency.'
    ],
    goal: 'To optimize cooling system efficiency while minimizing energy consumption through intelligent hydraulic and gravity flow design.',
    features: [
      {
        title: 'Closed Loop Cooling Design',
        description: 'Ensures stable, contamination-free cooling water circulation for both moulds and oil coolers.'
      },
      {
        title: 'Gravity Flow Outlet System',
        description: 'Reduces pump load by utilizing gravity, resulting in lower operating costs and improved system reliability.'
      },
      {
        title: 'Energy Optimized Operation',
        description: 'Designed to reduce pumping power requirements without compromising cooling performance.'
      },
      {
        title: 'Multi-Plant Execution',
        description: 'Successfully implemented across two facilities with varying machine capacities and layouts.'
      }
    ],
    projectInfo: {
      category: 'IMM Cooling System',
      client: 'United Industries',
      startDate: '2009',
      endDate: '2009',
      location: 'Tamil Nadu',
      budget: 'Confidential'
    }
  },

  {
    id: 3,
    title: 'IMM Closed Loop Cooling System – GM Pens',
    category: 'Injection Moulding Cooling System',
    description: 'Closed loop cooling system with gravity flow outlet designed for a new injection moulding manufacturing facility.',
   imageUrl: '../../../assets/images/service-3.webp',
    location: 'GM Pens, Thirubhuvanai, Pondicherry',
    year: '2010',
    introText: [
      'Auroflux set up a closed loop cooling system for GM Pens at their new manufacturing facility in Thirubhuvanai, Pondicherry.',
      'The system was designed with gravity flow outlets to minimize pumping requirements while ensuring reliable and efficient cooling.',
      'This approach provided consistent cooling performance suitable for continuous injection moulding operations.'
    ],
    goal: 'To deliver an energy efficient and dependable cooling system tailored to a newly established production facility.',
    features: [
      {
        title: 'Closed Loop Cooling Network',
        description: 'Ensures clean water circulation with consistent temperature control across moulds and oil coolers.'
      },
      {
        title: 'Gravity Flow Outlet Design',
        description: 'Minimizes pumping head and reduces overall energy consumption.'
      },
      {
        title: 'Integrated Control Panel',
        description: 'Provides controlled and reliable system operation for continuous production.'
      },
      {
        title: 'Facility-Specific Engineering',
        description: 'Designed to match plant layout and future expansion requirements.'
      }
    ],
    projectInfo: {
      category: 'IMM Cooling System',
      client: 'GM Pens',
      startDate: '2010',
      endDate: '2010',
      location: 'Pondicherry',
      budget: 'Confidential'
    }
  },

  {
    id: 4,
    title: 'Engine Testing Bed Cooling System',
    category: 'Industrial Cooling System',
    description: 'Revamp of engine testing bed cooling system with closed loop design and advanced VFD based control.',
    imageUrl: '../../../assets/images/service-4.webp',
    location: 'TAFE',
    year: '2014',
    introText: [
      'At the request of the R&D division of TAFE, Auroflux revamped the entire old cooling system for engine testing beds.',
      'The project included the design and installation of a closed loop cooling system integrated with advanced VFD control panels.',
      'A GEM cooling tower and GI piping system were incorporated to ensure robust and reliable operation under testing conditions.'
    ],
    goal: 'To modernize the engine testing cooling infrastructure for improved reliability, efficiency and operational control.',
    features: [
      {
        title: 'Closed Loop Cooling System',
        description: 'Provides stable and contamination-free cooling for engine testing operations.'
      },
      {
        title: 'VFD Based Pump Control',
        description: 'Optimizes pump speed based on load conditions, reducing energy consumption.'
      },
      {
        title: 'GEM Cooling Tower Integration',
        description: 'Ensures effective heat rejection during continuous engine testing.'
      },
      {
        title: 'Industrial Grade GI Piping',
        description: 'Designed to withstand high temperature and pressure conditions in testing environments.'
      }
    ],
    projectInfo: {
      category: 'Engine Testing Cooling',
      client: 'TAFE',
      startDate: '2014',
      endDate: '2014',
      location: 'India',
      budget: 'Confidential'
    }
  },

  {
    id: 5,
    title: 'Compressed Air Ring Main System',
    category: 'Compressed Air System',
    description: 'Compressed air ring main system designed for lowest pressure drop and efficient air distribution.',
    imageUrl: '../../../assets/images/service-5.webp',
    location: 'Nordex India, Mappedu',
    year: '2017',
    introText: [
      'Auroflux installed a compressed air ring main system for NORDEX India’s blade manufacturing facility at Mappedu.',
      'The system was engineered to achieve the lowest possible pressure drop across the network.',
      'Advanced PPR piping was used to ensure durability, corrosion resistance and long-term performance.'
    ],
    goal: 'To deliver an efficient compressed air distribution system that minimizes energy loss and supports high-demand manufacturing.',
    features: [
      {
        title: 'Ring Main Air Distribution',
        description: 'Ensures uniform air pressure at all consumption points across the facility.'
      },
      {
        title: 'Low Pressure Drop Design',
        description: 'Reduces compressor load and operational energy costs.'
      },
      {
        title: 'PPR Piping System',
        description: 'Provides smooth internal surfaces, minimizing friction losses and corrosion.'
      },
      {
        title: 'Manufacturing Grade Execution',
        description: 'Designed to meet the continuous operational demands of blade manufacturing.'
      }
    ],
    projectInfo: {
      category: 'Compressed Air System',
      client: 'Nordex India',
      startDate: '2017',
      endDate: '2017',
      location: 'Mappedu, Tamil Nadu',
      budget: 'Confidential'
    }
  },

  {
    id: 6,
    title: 'Chiller & Cooling Water System Revamp',
    category: 'IMM Cooling System Revamp',
    description: 'Large scale revamp of cooling water and piping systems for injection moulding machines.',
    imageUrl: '../../../assets/images/service-6.png',
    location: 'Mainetti India Pvt Ltd',
    year: '2018 - 2019',
    introText: [
      'Auroflux undertook one of the largest cooling system revamp projects for Mainetti India Pvt Ltd.',
      'The project involved revamping cooling water piping for over 70 injection moulding machines in a phased manner.',
      'Advanced VFD based control panels and PHE based closed loop systems were implemented without disrupting ongoing production.'
    ],
    goal: 'To deliver an energy efficient, reliable and scalable cooling solution for large scale IMM operations.',
    features: [
      {
        title: 'PHE Based Closed Loop Cooling',
        description: 'Ensures clean cooling water supply for moulds and oil coolers with stable thermal performance.'
      },
      {
        title: 'Advanced VFD Control Panels',
        description: 'Optimizes energy consumption across a large and complex cooling network.'
      },
      {
        title: 'HDPE / PPR Piping Network',
        description: 'Precision designed piping ensuring required flow rates and long-term durability.'
      },
      {
        title: 'Phased Project Execution',
        description: 'Completed within six months through planned shutdowns without affecting production.'
      }
    ],
    projectInfo: {
      category: 'Cooling System Revamp',
      client: 'Mainetti India Pvt Ltd',
      startDate: '2018',
      endDate: '2019',
      location: 'India',
      budget: 'Confidential'
    }
  }
];


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projects.find(p => p.id === id)!;
  }

  getFeatureIcon(index: number): string {
    const icons = [
      'fas fa-cogs',
      'fas fa-thermometer-half',
      'fas fa-shield-alt',
      'fas fa-leaf'
    ];
    return icons[index] || 'fas fa-star';
  }
}