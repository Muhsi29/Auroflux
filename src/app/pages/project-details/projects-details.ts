import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router'; // Add this import

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  introText: string[];
  goal: string;
  features: string[];
  footerNote: string;
  projectInfo: {
    category: string;
    client: string;
    startDate: string;
    endDate: string;
    location: string;
    budget: string;
  };
}

@Component({
  selector: 'app-projects-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './projects-details.html',
  styleUrl: './projects-details.css',
})
export class ProjectsDetails implements OnInit {
  project!: Project;

  projects: Project[] = [
    {
      id: 1,
      title: 'General Construction',
      category: 'Construction, Architecture',
      description: 'Building Excellence Every Step of the Way',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5',
      introText: [
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the Xbuild the best company in the world class middle of text.',
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'
      ],
      goal: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
      features: [
        'Proactively pontificate client-centered relationships',
        'Release of Letraset sheets containing Lorem Ipsum',
        'Is there a waiting list for desired work to be started',
        'Release of Letraset sheets containing Lorem Ipsum'
      ],
      footerNote: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
      projectInfo: {
        category: 'Rubix carabil tower',
        client: 'David Malan',
        startDate: '25 June, 2024',
        endDate: '08 July, 2024',
        location: 'NewYork - 4648 Rocky, USA',
        budget: '$10 Million'
      }
    },
    {
      id: 2,
      title: 'Architecture & Building',
      category: 'Architecture, Design',
      description: 'Modern Architecture & Sustainable Building',
      imageUrl: 'https://images.unsplash.com/photo-1487956382158-bb926046304a',
      introText: [
        'Modern architecture combines aesthetic appeal with functional design. This project represents our commitment to sustainable building practices and innovative construction methods.',
        'Through careful planning and execution, we have created a structure that not only meets but exceeds environmental standards while providing exceptional living spaces.'
      ],
      goal: 'To create an architectural masterpiece that combines functionality with aesthetic excellence while maintaining sustainable building practices.',
      features: [
        'Innovative sustainable design solutions',
        'Energy-efficient building materials',
        'Smart home technology integration',
        'Eco-friendly construction methods'
      ],
      footerNote: 'This project demonstrates our commitment to creating buildings that are both beautiful and environmentally responsible.',
      projectInfo: {
        category: 'Skyline residences',
        client: 'Sarah Johnson',
        startDate: '15 March, 2024',
        endDate: '30 September, 2024',
        location: 'Los Angeles - 1234 Sunset Blvd, USA',
        budget: '$15 Million'
      }
    },
    {
      id: 3,
      title: 'Interior Design',
      category: 'Interior Design, Renovation',
      description: 'Contemporary Interior Design Solutions',
      imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
      introText: [
        'Interior design is about creating spaces that reflect the personality and needs of the occupants. This project showcases our ability to transform ordinary spaces into extraordinary living environments.',
        'Every element has been carefully selected to create harmony between form and function, resulting in spaces that are both practical and visually stunning.'
      ],
      goal: 'To design interior spaces that maximize functionality while creating beautiful, harmonious environments that enhance quality of life.',
      features: [
        'Custom furniture and fixture design',
        'Smart space utilization solutions',
        'Premium material selection',
        'Lighting design optimization'
      ],
      footerNote: 'Our interior design approach focuses on creating timeless spaces that evolve with the needs of the occupants.',
      projectInfo: {
        category: 'Luxury penthouse',
        client: 'Michael Chen',
        startDate: '10 January, 2024',
        endDate: '25 May, 2024',
        location: 'Chicago - 5678 Lakeview Ave, USA',
        budget: '$8.5 Million'
      }
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projects.find(p => p.id === id)!;
  }
}