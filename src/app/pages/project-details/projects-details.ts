import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

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
  
constructor(
  private route: ActivatedRoute,
  private router: Router
) {}

goCta() {
  this.router.navigate(['/contact']);
}

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
  },
  {
  id: 7,
  title: 'Hybrid Adiabatic Dry Cooler & PHE Cooling System',
  category: 'Hybrid Industrial Cooling',
  description: 'Advanced hybrid cooling system integrating adiabatic dry coolers, plate heat exchangers and VFD controlled automation for reduced water consumption and high thermal performance.',
  imageUrl: 'https://images.unsplash.com/photo-1581092795360-9e8c3bb3ed0a?auto=format&fit=crop&w=1200&q=80',
  location: 'Ashok Leyland, Chennai',
  year: '2018',
  introText: [
    'Ashok Leyland engaged Auroflux to modernize their existing cooling system by introducing an adiabatic dry cooling solution integrated with a plate heat exchanger.',
    'The system was engineered to connect seamlessly with the existing cooling tower network while significantly reducing water consumption and improving heat rejection performance.',
    'An advanced VFD based control panel was supplied for dry cooler fans and cooling tower pumps, enabling automatic speed control based on real-time water temperature.',
    'The entire system can also be monitored and controlled remotely through a mobile application, making it one of the most advanced industrial cooling solutions in the region.'
  ],
  goal: 'To achieve high performance industrial cooling with minimal water usage and intelligent automation for improved operational efficiency.',
  features: [
    { title: 'Adiabatic Dry Cooling Technology', description: 'Reduces dependence on water while maintaining high heat rejection even during peak summer conditions.' },
    { title: 'Plate Heat Exchanger Integration', description: 'Ensures thermal isolation between process circuits and external cooling systems for clean and stable operation.' },
    { title: 'VFD Based Smart Control', description: 'Automatically adjusts fan and pump speed based on process water temperature to minimize energy consumption.' },
    { title: 'Remote Monitoring Capability', description: 'Operators can monitor and control the cooling system through mobile and web based interfaces.' }
  ],
  projectInfo: {
    category: 'Hybrid Cooling System',
    client: 'Ashok Leyland',
    startDate: '2018',
    endDate: '2018',
    location: 'Chennai, Tamil Nadu',
    budget: 'Confidential'
  }
},

{
  id: 8,
  title: 'Centralized Chiller Based Oil & Mould Cooling System',
  category: 'Injection Moulding Cooling',
  description: 'High efficiency chiller based oil and mould cooling system designed to eliminate centralized piping, reduce water consumption and optimize energy usage.',
  imageUrl: 'https://images.unsplash.com/photo-1581091215367-59ab6baf56f3?auto=format&fit=crop&w=1200&q=80',
  location: 'Funskool, Ranipet',
  year: '2018',
  introText: [
    'Funskool consulted Auroflux for designing the cooling system for their new injection moulding facility at Ranipet.',
    'To avoid centralized piping complexity, maintenance cost and excessive water consumption, Auroflux proposed a chiller based oil and mould cooling architecture.',
    'Using advanced GEM Orion chillers, four injection moulding machines were connected to one chiller, enabling both oil and mould cooling from a single source.',
    'A total of six chillers were installed to serve twenty four machines, resulting in significant capital savings and water conservation of nearly one lakh KL per year.'
  ],
  goal: 'To deliver a low water consumption, low maintenance and highly reliable cooling system for high volume injection moulding production.',
  features: [
    { title: 'GEM Orion High Efficiency Chillers', description: 'Delivers precise and reliable cooling for both oil and mould circuits.' },
    { title: 'Combined Oil & Mould Cooling', description: 'Single chiller supports multiple cooling requirements, reducing equipment count and energy usage.' },
    { title: 'Optimized PPR Piping Network', description: 'Carefully designed piping layout ensures balanced flow and minimal pressure losses.' },
    { title: 'Massive Water Savings', description: 'Design saves nearly 1 lakh KL of processed water annually compared to conventional systems.' }
  ],
  projectInfo: {
    category: 'IMM Chiller System',
    client: 'Funskool',
    startDate: '2018',
    endDate: '2018',
    location: 'Ranipet, Tamil Nadu',
    budget: 'Confidential'
  }
},

{
  id: 9,
  title: 'Induction Furnace & Sand Cooling System',
  category: 'Heavy Industrial Cooling',
  description: 'Closed loop cooling systems designed for induction furnace, sand cooling and aerospace manufacturing utilities.',
  imageUrl: 'https://images.unsplash.com/photo-1598887142489-32e5a6bfc7f5?auto=format&fit=crop&w=1200&q=80',
  location: 'ABI Showatech',
  year: '2019',
  introText: [
    'Auroflux successfully completed multiple critical cooling projects for ABI Showatech across their foundry and aerospace manufacturing facilities.',
    'The scope included induction furnace cooling, sand cooling applications and chiller piping systems for aerospace production lines.',
    'Dedicated closed loop circuits were engineered to handle high heat loads while maintaining clean and stable water quality.',
    'This ensured uninterrupted production, improved equipment life and enhanced process stability across all operations.'
  ],
  goal: 'To provide highly reliable and contamination-free cooling solutions for high temperature and precision manufacturing environments.',
  features: [
    { title: 'Induction Furnace Cooling', description: 'Designed to handle extreme thermal loads with consistent and safe heat removal.' },
    { title: 'Sand Cooling Circuits', description: 'Dedicated systems engineered for dusty and abrasive foundry environments.' },
    { title: 'Aerospace Chiller Piping', description: 'Precision piping ensures stable temperature control for aerospace grade manufacturing.' },
    { title: 'Robust Industrial Design', description: 'Built for continuous heavy-duty operation with high reliability.' }
  ],
  projectInfo: {
    category: 'Industrial Cooling',
    client: 'ABI Showatech',
    startDate: '2019',
    endDate: '2019',
    location: 'India',
    budget: 'Confidential'
  }
},

{
  id: 10,
  title: 'Large Scale Solar Thermal Piping System',
  category: 'Solar Thermal Utilities',
  description: 'High temperature PPR piping system designed for Asia’s largest rooftop solar thermal installation and multiple industrial solar plants.',
  imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  location: 'Aspiration Energy – Wheels India, Hosur',
  year: '2019',
  introText: [
    'Aspiration Energy selected Auroflux to execute the complete piping system for Asia’s largest rooftop solar thermal installation at Wheels India, Padi.',
    'Auroflux handled detailed hydraulic design, supply and erection of high temperature PPR piping for the entire solar thermal plant.',
    'Similar solar thermal piping systems were also delivered at Sola Koyo and Haritha Fehrer facilities in Hosur.',
    'The systems were designed for safe heat transfer, long service life and stable operation under extreme thermal conditions.'
  ],
  goal: 'To deliver safe, durable and hydraulically balanced piping systems for large scale solar thermal energy plants.',
  features: [
    { title: 'High Temperature PPR Piping', description: 'Suitable for continuous operation with solar thermal heat transfer fluids.' },
    { title: 'Precision Hydraulic Design', description: 'Ensures uniform flow distribution across all solar collectors.' },
    { title: 'Large Scale Execution', description: 'Successfully delivered for Asia’s largest rooftop solar thermal plant.' },
    { title: 'Multi Plant Deployment', description: 'Implemented across multiple solar energy projects.' }
  ],
  projectInfo: {
    category: 'Solar Thermal',
    client: 'Aspiration Energy',
    startDate: '2019',
    endDate: '2019',
    location: 'Tamil Nadu',
    budget: 'Confidential'
  }
},

{
  id: 11,
  title: 'Vacuum Furnace Closed Loop Cooling System',
  category: 'Precision Process Cooling',
  description: 'PHE based closed loop cooling system designed for high precision vacuum furnace operations with significant energy savings.',
  imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80',
  location: 'Delphi TVS, Oragadam',
  year: '2020',
  introText: [
    'Auroflux implemented a precision closed loop cooling system for the vacuum furnace line at Delphi TVS.',
    'A carefully engineered PPR piping network and plate heat exchanger system was designed to maintain highly stable cooling water quality.',
    'Through innovative hydraulic design, nearly 20 kWh of pumping energy was saved compared to the earlier system.',
    'The project delivered both improved thermal stability and long-term energy efficiency.'
  ],
  goal: 'To provide highly stable, clean and energy efficient cooling for sensitive vacuum furnace processes.',
  features: [
    { title: 'PHE Based Closed Loop', description: 'Prevents contamination and scaling in sensitive furnace cooling circuits.' },
    { title: 'Energy Optimized Piping Design', description: 'Reduces pumping losses through intelligent layout and sizing.' },
    { title: 'High Stability Cooling', description: 'Maintains precise temperature control required for vacuum heat treatment.' },
    { title: 'Long Term Reliability', description: 'System designed for continuous industrial operation.' }
  ],
  projectInfo: {
    category: 'Vacuum Furnace Cooling',
    client: 'Delphi TVS',
    startDate: '2020',
    endDate: '2020',
    location: 'Oragadam, Tamil Nadu',
    budget: 'Confidential'
  }
},

{
  id: 12,
  title: 'Multi-Plant Compressed Air & Cooling Utilities',
  category: 'Industrial Utilities',
  description: 'Turnkey compressed air, dry cooler and chilled water systems delivered across multiple forging plants.',
  imageUrl: 'https://images.unsplash.com/photo-1581091012184-5c1d7b9bdf7a?auto=format&fit=crop&w=1200&q=80',
  location: 'Super Auto Forge Limited',
  year: '2020 – Ongoing',
  introText: [
    'Auroflux is executing continuous utility infrastructure projects for Super Auto Forge across Kolapakkam, Medavakkam and Madipakkam plants.',
    'The scope includes compressed air piping, dry cooler systems and chilled water lines for forging operations.',
    'Each system is custom designed based on plant heat loads and compressed air demand.',
    'The result is a highly reliable and energy efficient utility backbone for heavy forging production.'
  ],
  goal: 'To provide robust, scalable and energy efficient utilities for multiple forging facilities.',
  features: [
    { title: 'Compressed Air Infrastructure', description: 'Low pressure drop networks for stable air supply.' },
    { title: 'Dry Cooler Systems', description: 'Efficient heat rejection for process equipment.' },
    { title: 'Chilled Water Networks', description: 'Stable and clean cooling for forging machines.' },
    { title: 'Multi Plant Engineering', description: 'Tailored designs for each manufacturing facility.' }
  ],
  projectInfo: {
    category: 'Plant Utilities',
    client: 'Super Auto Forge Limited',
    startDate: '2020',
    endDate: 'Ongoing',
    location: 'Chennai, Tamil Nadu',
    budget: 'Confidential'
  }
},

{
  id: 13,
  title: 'Cooling Water & RO Piping System',
  category: 'Industrial Piping',
  description: 'Engineered cooling water and RO water piping systems designed for automotive manufacturing reliability.',
  imageUrl: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?auto=format&fit=crop&w=1200&q=80',
  location: 'Mando Automotive India',
  year: '2020',
  introText: [
    'Auroflux executed the complete cooling water and RO water piping systems for Mando Automotive’s manufacturing facility.',
    'The project included detailed hydraulic design to ensure balanced flow, stable pressure and long-term operational reliability.',
    'The piping systems were engineered to meet stringent automotive production standards.',
    'This ensured consistent water supply for both cooling and process requirements.'
  ],
  goal: 'To provide highly reliable and precision engineered water distribution systems for automotive manufacturing.',
  features: [
    { title: 'Cooling Water Distribution', description: 'Stable and balanced flow to all process equipment.' },
    { title: 'RO Water Lines', description: 'Delivers high purity water for critical applications.' },
    { title: 'Hydraulic Design Engineering', description: 'Optimized for pressure, flow and energy efficiency.' },
    { title: 'Automotive Grade Execution', description: 'Meets strict quality and reliability standards.' }
  ],
  projectInfo: {
    category: 'Process Piping',
    client: 'Mando Automotive India',
    startDate: '2020',
    endDate: '2020',
    location: 'Tamil Nadu',
    budget: 'Confidential'
  }
},
{
  id: 14,
  title: 'Robotic Welding Line Cooling & Utility System',
  category: 'Automotive Process Cooling',
  description: 'Closed loop cooling and utility distribution system designed for high-speed robotic welding lines in automotive body manufacturing.',
  imageUrl: 'https://images.unsplash.com/photo-1581092795360-9e8c3bb3ed0a?auto=format&fit=crop&w=1200&q=80',
  location: 'TVS Motor Company, Hosur',
  year: '2020',
  introText: [
    'TVS Motor Company partnered with Auroflux to design and implement the complete cooling and utility infrastructure for its new robotic welding lines.',
    'These robotic welding cells operate continuously at high temperatures and require extremely stable cooling to ensure weld quality and equipment life.',
    'Auroflux developed a closed loop cooling system with dedicated circuits for weld guns, control panels and auxiliary equipment.',
    'The solution delivered excellent thermal stability, reduced maintenance and ensured uninterrupted production in high-volume automotive manufacturing.'
  ],
  goal: 'To provide stable, contamination-free and highly reliable cooling for robotic welding operations.',
  features: [
    { title: 'Dedicated Closed Loop Circuits', description: 'Prevents contamination and scaling inside sensitive robotic welding equipment.' },
    { title: 'High Heat Load Handling', description: 'Designed to remove continuous welding heat effectively.' },
    { title: 'Process Reliability', description: 'Ensures consistent weld quality and machine uptime.' },
    { title: 'Automotive Grade Engineering', description: 'Built to match global automotive manufacturing standards.' }
  ],
  projectInfo: {
    category: 'Robotic Line Cooling',
    client: 'TVS Motor Company',
    startDate: '2020',
    endDate: '2020',
    location: 'Hosur, Tamil Nadu',
    budget: 'Confidential'
  }
},

{
  id: 15,
  title: 'Precision CNC Machine Cooling System',
  category: 'Machine Tool Cooling',
  description: 'High stability closed loop cooling solution designed for CNC machining centers to maintain dimensional accuracy and tool life.',
  imageUrl: 'https://images.unsplash.com/photo-1581091215367-59ab6baf56f3?auto=format&fit=crop&w=1200&q=80',
  location: 'Brakes India',
  year: '2021',
  introText: [
    'Brakes India required a precision cooling system for their CNC machining lines to maintain dimensional stability of machined components.',
    'Auroflux designed a centralized closed loop cooling system supplying temperature-controlled water to multiple CNC machines.',
    'This eliminated thermal drift, improved surface finish and extended tool life.',
    'The system also reduced coolant contamination and maintenance requirements.'
  ],
  goal: 'To deliver precise and stable cooling for high accuracy CNC machining operations.',
  features: [
    { title: 'Temperature Controlled Cooling', description: 'Maintains consistent machining temperatures for accuracy.' },
    { title: 'Closed Loop Water Circuits', description: 'Prevents contamination and corrosion inside machines.' },
    { title: 'Centralized Cooling Architecture', description: 'One system serving multiple machines efficiently.' },
    { title: 'Improved Tool Life', description: 'Stable temperatures reduce thermal stress on cutting tools.' }
  ],
  projectInfo: {
    category: 'CNC Cooling',
    client: 'Brakes India',
    startDate: '2021',
    endDate: '2021',
    location: 'Tamil Nadu',
    budget: 'Confidential'
  }
},

{
  id: 16,
  title: 'Forging Furnace Cooling & Utilities',
  category: 'Heavy Industry Utilities',
  description: 'High capacity cooling water, compressed air and process piping systems for large scale forging furnaces.',
  imageUrl: 'https://images.unsplash.com/photo-1598887142489-32e5a6bfc7f5?auto=format&fit=crop&w=1200&q=80',
  location: 'Rane Madras',
  year: '2021',
  introText: [
    'Rane Madras commissioned Auroflux to design the utility backbone for its new forging furnace line.',
    'The project included cooling water circuits, compressed air piping and process water distribution.',
    'These systems were engineered to withstand high temperatures, vibration and continuous production cycles.',
    'The result was a highly robust utility infrastructure supporting heavy forging operations.'
  ],
  goal: 'To provide reliable and high-capacity utilities for heavy forging production.',
  features: [
    { title: 'Furnace Cooling Circuits', description: 'Designed to handle extreme thermal loads.' },
    { title: 'Compressed Air Distribution', description: 'Ensures stable air supply for forging equipment.' },
    { title: 'Heavy Duty Piping Design', description: 'Built for vibration and harsh industrial conditions.' },
    { title: 'Continuous Operation Capability', description: 'Supports 24/7 forging production.' }
  ],
  projectInfo: {
    category: 'Forging Utilities',
    client: 'Rane Madras',
    startDate: '2021',
    endDate: '2021',
    location: 'Chennai, Tamil Nadu',
    budget: 'Confidential'
  }
},

{
  id: 17,
  title: 'Automotive Assembly Line Cooling Network',
  category: 'Automotive Utilities',
  description: 'Plant-wide cooling water and utility distribution system for high throughput automotive assembly operations.',
  imageUrl: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?auto=format&fit=crop&w=1200&q=80',
  location: 'Renault Nissan',
  year: '2021',
  introText: [
    'Renault Nissan engaged Auroflux to implement a plant-wide cooling water network for its automotive assembly line.',
    'The system supports welding stations, painting booths and assembly equipment.',
    'Auroflux designed balanced piping layouts to ensure uniform flow and stable temperature across all sections.',
    'This improved equipment reliability and reduced process downtime.'
  ],
  goal: 'To deliver a stable and balanced cooling network for large automotive assembly plants.',
  features: [
    { title: 'Plant Wide Distribution', description: 'Supplies cooling to multiple production zones.' },
    { title: 'Hydraulically Balanced Network', description: 'Ensures uniform cooling performance.' },
    { title: 'Process Reliability', description: 'Minimizes downtime caused by overheating.' },
    { title: 'Scalable Design', description: 'Supports future production expansion.' }
  ],
  projectInfo: {
    category: 'Assembly Line Utilities',
    client: 'Renault Nissan',
    startDate: '2021',
    endDate: '2021',
    location: 'Oragadam, Tamil Nadu',
    budget: 'Confidential'
  }
},

{
  id: 18,
  title: 'Pharmaceutical Process Cooling System',
  category: 'Pharma Utilities',
  description: 'Hygienic closed loop chilled water system designed for pharmaceutical manufacturing processes.',
  imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80',
  location: 'Sun Pharma',
  year: '2022',
  introText: [
    'Sun Pharma required a contamination-free and highly reliable cooling system for its pharmaceutical manufacturing plant.',
    'Auroflux designed a closed loop chilled water system with stainless steel piping and PHE based heat exchangers.',
    'The system ensures consistent temperature control for reactors, mixers and packaging lines.',
    'It also complies with strict pharmaceutical hygiene standards.'
  ],
  goal: 'To provide clean, stable and regulatory-compliant cooling for pharmaceutical production.',
  features: [
    { title: 'Hygienic Closed Loop Design', description: 'Prevents microbial growth and contamination.' },
    { title: 'Precise Temperature Control', description: 'Critical for pharma batch consistency.' },
    { title: 'Stainless Steel Piping', description: 'Meets GMP and hygiene standards.' },
    { title: 'High Reliability', description: 'Supports uninterrupted pharmaceutical production.' }
  ],
  projectInfo: {
    category: 'Pharma Cooling',
    client: 'Sun Pharma',
    startDate: '2022',
    endDate: '2022',
    location: 'India',
    budget: 'Confidential'
  }
},

{
  id: 19,
  title: 'Data Center Cooling Infrastructure',
  category: 'Critical Cooling Systems',
  description: 'Redundant chilled water and heat rejection systems designed for mission-critical data center operations.',
  imageUrl: 'https://images.unsplash.com/photo-1581091012184-5c1d7b9bdf7a?auto=format&fit=crop&w=1200&q=80',
  location: 'Confidential Data Center',
  year: '2022',
  introText: [
    'Auroflux delivered a highly reliable cooling infrastructure for a large data center facility.',
    'The system included redundant chillers, PHEs and cooling towers to ensure zero downtime.',
    'Precision temperature and humidity control was achieved for sensitive IT equipment.',
    'The design followed international data center cooling standards.'
  ],
  goal: 'To provide continuous, redundant and energy efficient cooling for critical IT infrastructure.',
  features: [
    { title: 'Redundant Cooling Architecture', description: 'Ensures uninterrupted data center operation.' },
    { title: 'High Efficiency Chillers', description: 'Optimized for continuous 24/7 load.' },
    { title: 'Precision Temperature Control', description: 'Protects sensitive servers and electronics.' },
    { title: 'International Design Standards', description: 'Meets global data center cooling norms.' }
  ],
  projectInfo: {
    category: 'Data Center Cooling',
    client: 'Confidential',
    startDate: '2022',
    endDate: '2022',
    location: 'India',
    budget: 'Confidential'
  }
},

{
  id: 20,
  title: 'Paint Shop Cooling & Utilities',
  category: 'Automotive Paint Shop',
  description: 'Chilled water and process utility systems designed for automotive paint booths and curing ovens.',
  imageUrl: 'https://images.unsplash.com/photo-1581092795360-9e8c3bb3ed0a?auto=format&fit=crop&w=1200&q=80',
  location: 'Hyundai Motors',
  year: '2022',
  introText: [
    'Hyundai Motors required precise cooling and utility systems for its automotive paint shop.',
    'Auroflux engineered chilled water, compressed air and exhaust cooling systems for spray booths and curing ovens.',
    'These systems maintain paint quality, humidity control and thermal stability.',
    'The solution improved production quality and reduced energy consumption.'
  ],
  goal: 'To provide stable environmental control for automotive painting processes.',
  features: [
    { title: 'Chilled Water Supply', description: 'Maintains temperature and humidity inside paint booths.' },
    { title: 'Process Air Cooling', description: 'Ensures clean and controlled air supply.' },
    { title: 'Energy Optimized Design', description: 'Reduces operating costs.' },
    { title: 'Improved Paint Quality', description: 'Supports defect-free automotive finishes.' }
  ],
  projectInfo: {
    category: 'Paint Shop Utilities',
    client: 'Hyundai Motors',
    startDate: '2022',
    endDate: '2022',
    location: 'Tamil Nadu',
    budget: 'Confidential'
  }
},

{
  id: 21,
  title: 'Steel Rolling Mill Cooling System',
  category: 'Metallurgical Cooling',
  description: 'High volume cooling water systems designed for continuous steel rolling mill operations.',
  imageUrl: 'https://images.unsplash.com/photo-1598887142489-32e5a6bfc7f5?auto=format&fit=crop&w=1200&q=80',
  location: 'JSW Steel',
  year: '2023',
  introText: [
    'JSW Steel engaged Auroflux to upgrade its rolling mill cooling infrastructure.',
    'The system was designed to handle extremely high heat loads from hot steel rolling.',
    'Large volume pumps, cooling towers and filtration systems were installed.',
    'This ensured stable rolling temperatures and improved product quality.'
  ],
  goal: 'To provide high capacity and reliable cooling for continuous steel rolling operations.',
  features: [
    { title: 'High Volume Cooling', description: 'Handles extreme heat from hot steel.' },
    { title: 'Robust Pumping Systems', description: 'Designed for continuous heavy duty use.' },
    { title: 'Filtration & Water Treatment', description: 'Protects equipment from scale and debris.' },
    { title: 'Improved Product Quality', description: 'Stable cooling enhances steel finish.' }
  ],
  projectInfo: {
    category: 'Steel Plant Cooling',
    client: 'JSW Steel',
    startDate: '2023',
    endDate: '2023',
    location: 'India',
    budget: 'Confidential'
  }
},

{
  id: 22,
  title: 'Electronics Manufacturing Clean Cooling System',
  category: 'Electronics Utilities',
  description: 'Ultra-clean chilled water and cooling distribution system for electronics and semiconductor manufacturing.',
  imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80',
  location: 'Foxconn',
  year: '2023',
  introText: [
    'Foxconn required extremely clean and stable cooling for its electronics manufacturing lines.',
    'Auroflux designed closed loop chilled water systems with fine filtration and corrosion control.',
    'These systems support SMT lines, testing chambers and clean rooms.',
    'The result is high yield and low defect electronics production.'
  ],
  goal: 'To deliver ultra-clean and stable cooling for high precision electronics manufacturing.',
  features: [
    { title: 'Clean Closed Loop Design', description: 'Prevents particle contamination.' },
    { title: 'Fine Filtration Systems', description: 'Protects sensitive electronic equipment.' },
    { title: 'Stable Temperature Control', description: 'Critical for electronics quality.' },
    { title: 'High Yield Manufacturing', description: 'Supports defect-free production.' }
  ],
  projectInfo: {
    category: 'Electronics Cooling',
    client: 'Foxconn',
    startDate: '2023',
    endDate: '2023',
    location: 'India',
    budget: 'Confidential'
  }
},

{
  id: 23,
  title: 'Battery Manufacturing Cooling & Utilities',
  category: 'EV Manufacturing',
  description: 'Precision cooling and utility systems designed for lithium-ion battery cell and pack manufacturing.',
  imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  location: 'EV Battery Plant',
  year: '2024',
  introText: [
    'Auroflux delivered advanced cooling and utility systems for a new electric vehicle battery manufacturing plant.',
    'Battery production requires tight temperature and humidity control to ensure safety and product quality.',
    'The system includes chilled water, dry rooms and process cooling circuits.',
    'This supports high volume and safe battery production.'
  ],
  goal: 'To provide precise environmental control for safe and high quality EV battery manufacturing.',
  features: [
    { title: 'Precision Chilled Water Systems', description: 'Maintains tight temperature tolerances.' },
    { title: 'Dry Room Utilities', description: 'Controls humidity for battery cell assembly.' },
    { title: 'Process Equipment Cooling', description: 'Protects sensitive battery production machinery.' },
    { title: 'EV Industry Ready Design', description: 'Supports future electric mobility growth.' }
  ],
  projectInfo: {
    category: 'EV Battery Utilities',
    client: 'Confidential',
    startDate: '2024',
    endDate: '2024',
    location: 'India',
    budget: 'Confidential'
  }
}

];


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