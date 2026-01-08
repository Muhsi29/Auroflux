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
  projects: Project[] = [
    {
      id: 1,
      title: 'IMM Closed Loop Cooling System – Southern Polymers',
      description: 'Designed and installed South India’s first PHE based closed loop cooling system for injection moulding machines.',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'IMM Closed Loop Cooling System – United Industries',
      description: 'Designed and executed closed loop cooling with gravity flow outlet, reducing pumping head and improving heat transfer efficiency.',
      imageUrl: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'IMM Closed Loop Cooling System – GM Pens',
      description: 'Installed closed loop cooling system with gravity flow outlet and control panel for GM Pens’ new manufacturing facility.',
      imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Engine Testing Bed Cooling System – TAFE',
      description: 'Revamped old engine testing bed cooling system with closed loop design, VFD control panel, cooling tower and GI piping.',
      imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Compressed Air Ring Main System – Nordex India',
      description: 'Installed low pressure drop compressed air ring main system using PPR piping for blade manufacturing facility.',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Chiller & Cooling Water System Revamp – Mainetti India',
      description: 'Revamped large scale IMM cooling and piping system using PPR/HDPE piping and VFD control panels in phased execution.',
      imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
 
  ];

    openProject(id: number) {
    this.router.navigate(['/projects', id]);
  }

}