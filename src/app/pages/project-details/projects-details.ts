import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-projects-details',
  standalone: true,              // ✅ REQUIRED
  imports: [CommonModule],       // ✅ REQUIRED
  templateUrl: './projects-details.html',
  styleUrl: './projects-details.css',
})
export class ProjectsDetails implements OnInit {

  project!: Project;

  // SAME DATA (for now)
  projects: Project[] = [
    {
      id: 1,
      title: 'General Construction',
      description: 'Full details of General Construction',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5'
    },
    {
      id: 2,
      title: 'Architecture & Building',
      description: 'Full details of Architecture & Building',
      imageUrl: 'https://images.unsplash.com/photo-1487956382158-bb926046304a'
    },
    {
      id: 3,
      title: 'Interior Design',
      description: 'Full details of Interior Design',
      imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projects.find(p => p.id === id)!;
  }
}
