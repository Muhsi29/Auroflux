import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router'; 

interface Project {
  id:number;
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  constructor(private router: Router) {}

goCta() {
  this.router.navigate(['/contact']);
}

projects: Project[] = [
  {
    id: 1,
    title: 'IMM Closed Loop Cooling System – Southern Polymers',
    description: 'Designed and installed South India’s first PHE based closed loop cooling system for injection moulding machines.',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    title: 'IMM Closed Loop Cooling System – United Industries',
    description: 'Executed closed loop cooling with gravity flow outlet, reducing pumping head and improving heat transfer efficiency.',
    imageUrl: '../../assets/projects/project-2.jpeg'
  },
  {
    id: 3,
    title: 'IMM Closed Loop Cooling System – GM Pens',
    description: 'Installed closed loop cooling with gravity flow outlet and advanced control panel for new manufacturing facility.',
    imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    title: 'Engine Testing Bed Cooling System – TAFE',
    description: 'Upgraded engine testing bed cooling system using closed loop design, VFD panel, cooling tower and GI piping.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 5,
    title: 'Compressed Air Ring Main – Nordex India',
    description: 'Installed low pressure drop compressed air ring main system using PPR piping for blade manufacturing.',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 6,
    title: 'Chiller & Cooling Water Revamp – Mainetti India',
    description: 'Revamped large scale IMM cooling and piping system with PPR/HDPE piping and VFD control panels.',
    imageUrl: '../../assets/projects/project-6.jpg'
  },
  {
    id: 7,
    title: 'Combination Cooling System – Ashok Leyland',
    description: 'Designed and commissioned adiabatic dry coolers with PHE and VFD based automation integrated with existing cooling system.',
    imageUrl: 'https://picsum.photos/id/1073/1600/900'
  },
  {
    id: 8,
    title: 'Chiller Based IMM Cooling – Funskool',
    description: 'Designed centralized chiller based oil and mould cooling system for 24 IMM machines, saving water and capital cost.',
    imageUrl: 'https://picsum.photos/id/1011/1600/900'
  },
  {
    id: 9,
    title: 'Induction Furnace Cooling – ABI Showatech',
    description: 'Delivered closed loop cooling solutions for induction furnace, sand cooling and aerospace chiller piping systems.',
    imageUrl: 'https://picsum.photos/id/1003/1600/900'
  },
  {
    id: 10,
    title: 'Solar Thermal Plant Piping – Aspiration Energy',
    description: 'Executed complete PPR piping design and installation for Asia’s largest solar thermal rooftop projects.',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 11,
    title: 'Vacuum Furnace Closed Loop System – Delphi TVS',
    description: 'Installed PPR piping with PHE based closed loop system for high precision vacuum furnace, improving energy efficiency.',
    imageUrl: '../../assets/projects/project-11.jpg'
  },
  {
    id: 12,
    title: 'Compressed Air & Cooling Utilities – Super Auto Forge',
    description: 'Designed and executed compressed air, dry cooler and chilled water piping systems across multiple manufacturing plants.',
    imageUrl: 'https://picsum.photos/id/1040/1600/900'
  },
  {
    id: 13,
    title: 'Cooling & RO Water Piping – Mando Automotive',
    description: 'Delivered engineered cooling water and RO water piping systems with complete hydraulic design.',
    imageUrl: 'https://picsum.photos/id/1024/1600/900'
  },
  {
    id: 14,
    title: 'Closed Loop Cooling for PDC Machines – Arul Casting',
    description: 'Installed PHE based closed loop piping with advanced VFD panel system for pressure die casting machines.',
    imageUrl: 'https://picsum.photos/id/1050/1600/900'
  },
  {
    id: 15,
    title: 'Large Scale PPR Utility Piping – Sundaram Clayton',
    description: 'Executed 80,000 meter PPR piping project for cooling tower, chiller, RO and DM water lines in new manufacturing facility.',
    imageUrl: '../../assets/projects/project-15.webp'
  },
  {
    id: 16,
    title: 'Injection Moulding Utility Design – Shibaura',
    description: 'Designed and executed complete PPR piping system for machine testing facility with cooling tower heat load calculations.',
    imageUrl: '../../assets/projects/project-16.webp'
  },
  {
    id: 17,
    title: 'Chilled Water Headers – TAFE Maraimalai Nagar',
    description: 'Turnkey chilled water piping for oil and mould cooling with aluminium cladding insulation.',
    imageUrl: '../../assets/projects/project-17.webp'
  },
  {
    id: 18,
    title: 'Cooling Tower & Closed Loop Systems – VTK Industries',
    description: 'Designed and executed cooling tower, chilled water and PHE based closed loop systems for plastic and die casting plants.',
    imageUrl: '../../assets/projects/project-18.webp'
  },
  {
    id: 19,
    title: 'PPR Utility Piping – Tata Electronics & TP Solar',
    description: 'Executed PPR piping systems for multiple process applications in solar and electronics manufacturing plants.',
    imageUrl: '../../assets/projects/project-19.webp'
  },
  {
    id: 20,
    title: 'Boiler Feed Water Piping – Chettinad Cements',
    description: 'Installed PPR boiler feed water header system for AP cement manufacturing plant.',
    imageUrl: '../../assets/projects/project-20.webp'
  },
  {
    id: 21,
    title: 'Compressed Air System – Suzlon',
    description: 'Designed and installed compressed air piping system for wind turbine manufacturing facility.',
    imageUrl: '../../assets/projects/project-21.webp'
  },
  {
    id: 22,
    title: 'Compressed Air Piping – Chennai Trade Center',
    description: 'Executed compressed air piping system for new Chennai Trade Center under NCC.',
    imageUrl: '../../assets/projects/project-22.webp'
  },
  {
    id: 23,
    title: 'Green PE Cooling & RO Piping – HL Mando',
    description: 'Turnkey execution of cooling tower, chiller and RO water piping using Green PE and electrofusion fittings.',
    imageUrl: '../../assets/projects/project-23.webp'
  }
];


    openProject(id: number) {
    this.router.navigate(['/projects', id]);
  }

}