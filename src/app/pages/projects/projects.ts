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
      title: 'General Construction',
      description: 'There are many variations of a passages of Lorem Ipsum available.',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Architecture & Building',
      description: 'There are many variations of a passages of Lorem Ipsum available.',
      imageUrl: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Interior Design',
      description: 'There are many variations of a passages of Lorem Ipsum available.',
      imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Renovation',
      description: 'There are many variations of a passages of Lorem Ipsum available.',
      imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Infrastructure',
      description: 'There are many variations of a passages of Lorem Ipsum available.',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Commercial Building',
      description: 'There are many variations of a passages of Lorem Ipsum available.',
      imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
 
  ];

    openProject(id: number) {
    this.router.navigate(['/projects', id]);
  }

}