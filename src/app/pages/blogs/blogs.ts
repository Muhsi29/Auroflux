import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blogs',
  imports: [CommonModule,RouterModule],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css',
})
export class Blogs implements OnInit {
    allBlogs: any[] = [
          {
      id: 1,
      title: 'UPVC Pipes: Advantages, Applications, Uses, and Benefits',
      description: 'The Versatility and Benefits of UPVC Pipes: A Guide to Modern Plumbing Solutions...',
      image: '../../../assets/images/blog-1.webp',
      link: '#'
    },
       {
      id: 2,
      title: 'Exploring the Inner Workings of Compressed Air Dryers.',
      description: 'Discover how plate heat exchangers improve heat transfer efficiency, reduce energy consumption, and support reliable performance across industrial applications...',
      image: '../../../assets/images/blog-3.webp',
      link: '#'
    },
    {
      id: 3,
      title: 'Compressed Air Dryers: Ensuring Clean, Dry & Efficient Air Systems',
      description: 'Exploring the Inner Workings of Compressed Air Dryers...',
      image: '../../../assets/images/blog-4.webp',
      link: '#'
    },
    {
      id: 4,
      title: 'The Importance of Compressed Air Dryers: Keeping Your System Efficient and Reliable',
      description: 'Discover why compressed air dryers are essential for preventing moisture damage and ensuring efficient, reliable system performance...',
      image: '../../../assets/images/blog-5.webp',
      link: '#'
    },
    {
      id: 5,
      title: 'Steel Structure Fabrications: Strength, Efficiency, and Sustainability',
      description: 'Explore how steel structure fabrication delivers superior strength, cost efficiency, and sustainable solutions for modern construction...',
      image: '../../../assets/images/blog-6.webp',
      link: '#'
    },
    // {
    //   id: 6,
    //   title: 'Navigating Life\'s Demands',
    //   description: 'Tips on managing life\'s demands, from work-life balance to emotional well-being.',
    //   image: '../../../assets/blog-images/life-balance.jpg',
    //   link: '#'
    // },
    // Add more blogs as needed...
  ];

  // Pagination properties
  currentPage: number = 1;
  itemsPerPage: number = 8; // Show 8 blogs per page (2 rows of 4)
  displayedBlogs: any[] = [];
  totalPages: number = 1;
  pageNumbers: number[] = [];

  ngOnInit() {
    this.calculatePagination();
    this.updateDisplayedBlogs();
  }

  calculatePagination() {
    this.totalPages = Math.ceil(this.allBlogs.length / this.itemsPerPage);
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  updateDisplayedBlogs() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedBlogs = this.allBlogs.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedBlogs();
      // Scroll to top of blogs section
      document.querySelector('.blogs-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Optional: Add more blogs dynamically
  loadMoreBlogs() {
    // You can implement infinite scroll or load more functionality here
  }

}
