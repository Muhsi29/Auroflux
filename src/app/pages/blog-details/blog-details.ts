import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  imports: [CommonModule],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css',
})
export class BlogDetails {
   blogId!: number;
  selectedBlog: any;
  constructor(private route: ActivatedRoute) {}
    allBlogs = [
    {
      id: 1,
      title: 'Compressed Air Dryers: Ensuring Clean, Dry & Efficient Air Systems',
      description: 'Exploring the Inner Workings of Compressed Air Dryers...',
      image: '../../../assets/images/blog-3.webp'
    },
    {
      id: 2,
      title: 'UPVC Pipes: Advantages, Applications, Uses, and Benefits',
      description: 'The Versatility and Benefits of UPVC Pipes...',
      image: '../../../assets/images/blog-1.webp'
    },
    {
      id: 3,
      title: 'Exploring the Inner Workings of Compressed Air Dryers.',
      description: 'Discover how plate heat exchangers improve heat transfer...',
      image: '../../../assets/images/blog-4.webp'
    },
    {
      id: 4,
      title: 'The Importance of Compressed Air Dryers',
      description: 'Discover why compressed air dryers are essential...',
      image: '../../../assets/images/blog-5.webp'
    },
    {
      id: 5,
      title: 'Steel Structure Fabrications',
      description: 'Explore how steel structure fabrication delivers strength...',
      image: '../../../assets/images/blog-6.webp'
    },
    {
      id: 6,
      title: 'Navigating Life\'s Demands',
      description: 'Tips on managing life’s demands...',
      image: '../../../assets/blog-images/life-balance.jpg'
    }
  ];
    ngOnInit() {
    this.blogId = Number(this.route.snapshot.paramMap.get('id'));

    this.selectedBlog = this.allBlogs.find(
      blog => blog.id === this.blogId
    );
  }

}
