import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';



interface Slide {
  subtitle: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-home-1',
  imports: [CommonModule],
  templateUrl: './home-1.html',
  styleUrl: './home-1.css',
})
export class Home1 implements OnInit, OnDestroy {
currentSlide = 0;
  autoScrollInterval: any;
  isAnimating = false;

  slides: Slide[] = [
    {
      subtitle: 'BUILDING A BETTER TOMORROW',
      title: 'Reliable Solutions For Every Build',
      description: 'Transform your vision into reality with our comprehensive construction services. We deliver excellence in every project, ensuring quality and timely completion.',
      image: 'assets/images/banner-1.jpeg'
    },
    {
      subtitle: 'YOUR VISION, OUR BLUEPRINT',
      title: 'Strong Foundations Stronger Futures',
      description: 'Partner with industry experts who understand the importance of structural integrity and innovative design solutions for sustainable development.',
      image: 'assets/images/banner-2.jpeg'
    },
    {
      subtitle: 'CRAFTING EXCELLENCE',
      title: 'Your Trusted Partner In Construction',
      description: 'Experience unmatched craftsmanship and dedication to quality. We bring years of expertise to create spaces that stand the test of time.',
      image: 'assets/images/banner-3.webp'
    }
  ];

  ngOnInit(): void {
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  startAutoScroll(): void {
    this.autoScrollInterval = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  stopAutoScroll(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  nextSlide(): void {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    setTimeout(() => {
      this.isAnimating = false;
    }, 1200);
  }

  prevSlide(): void {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    setTimeout(() => {
      this.isAnimating = false;
    }, 1200);
  }

  goToSlide(index: number): void {
    if (this.isAnimating || index === this.currentSlide) return;
    this.isAnimating = true;
    this.currentSlide = index;
    this.stopAutoScroll();
    this.startAutoScroll();
    setTimeout(() => {
      this.isAnimating = false;
    }, 1200);
  }

  onLearnMore(): void {
    console.log('Learn More clicked');
    // Add your navigation logic here
  }

  onWatchVideo(): void {
    console.log('Watch Video clicked');
    // Add your video modal logic here
  }
}
