import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';

interface Client {
  name: string;
  description: string;
  img: string;
  link: string;
  category: string;
}

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements AfterViewInit, OnDestroy {
  @ViewChild('sliderTrack') sliderTrack!: ElementRef<HTMLDivElement>;
  
  // Client data with Unsplash images
  clients: Client[] = [
    { 
      name: 'United Industrial Plastics', 
      description: 'Provided full consultancy and erection services for plastic manufacturing plant with cooling system optimization.', 
      img: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?q=80&w=1200&auto=format&fit=crop',
      link: '/projects',
      category: 'Plastic Manufacturing'
    },
    { 
      name: 'Mainetti India Pvt Ltd', 
      description: 'Expert consultancy including erection and structural planning for compressed air systems.', 
      img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop',
      link: '/projects',
      category: 'Industrial Solutions'
    },
    { 
      name: 'Ashok Leyland', 
      description: 'Complete industrial cooling and machinery consultancy for automotive manufacturing plant.', 
      img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1200&auto=format&fit=crop',
      link: '/projects',
      category: 'Automotive Industry'
    },
    { 
      name: 'MRF Vapocure Paints', 
      description: 'Industrial coating consultancy solutions with specialized compressed air systems.', 
      img: 'https://images.unsplash.com/photo-1581094795959-bcac6b6bd2b3?q=80&w=1200&auto=format&fit=crop',
      link: '/projects',
      category: 'Paint Manufacturing'
    },
    { 
      name: 'TVS Motors', 
      description: 'Automotive plant consultancy with specialized machinery installation and cooling solutions.', 
      img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop',
      link: '/projects',
      category: 'Automotive Industry'
    },
    { 
      name: 'Bosch Limited', 
      description: 'Industrial automation and compressed air system consultancy with energy optimization.', 
      img: 'https://images.unsplash.com/photo-1581094795959-bcac6b6bd2b3?q=80&w=1200&auto=format&fit=crop',
      link: '/projects',
      category: 'Automation Solutions'
    },
    { 
      name: 'Ford India', 
      description: 'Automotive manufacturing plant cooling system consultancy and implementation.', 
      img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1200&auto=format&fit=crop',
      link: '/projects',
      category: 'Automotive Industry'
    },
    { 
      name: 'Caterpillar India', 
      description: 'Heavy equipment manufacturing plant consultancy with chilled water systems.', 
      img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop',
      link: '/projects',
      category: 'Heavy Machinery'
    },
    { 
      name: 'Hyundai Motors', 
      description: 'Automobile plant setup and machinery installation consultancy with cooling towers.', 
      img: 'https://images.unsplash.com/photo-1581094795959-bcac6b6bd2b3?q=80&w=1200&auto=format&fit=crop',
      link: '/projects',
      category: 'Automotive Industry'
    },
    { 
      name: 'Saint-Gobain India', 
      description: 'Glass manufacturing plant consultancy and system optimization for compressed air.', 
      img: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?q=80&w=1200&auto=format&fit=crop',
      link: '/projects',
      category: 'Glass Manufacturing'
    }
  ];
  
  // Slider variables
  currentPosition = 0;
  currentDot = 0;
  dots: number[] = [];
  autoSlideInterval: any;
  isAutoSliding = true;
  cardWidth = 320; // Fixed card width
  gap = 30; // Gap between cards
  
  constructor() {
    // Initialize dots array - one dot per card
    this.dots = Array(this.clients.length).fill(0).map((_, i) => i);
  }
  
  ngAfterViewInit(): void {
    // Add transition style
    this.sliderTrack.nativeElement.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    // Start auto slide after a short delay
    setTimeout(() => {
      this.startAutoSlide();
    }, 1000);
  }
  
  ngOnDestroy(): void {
    this.stopAutoSlide();
  }
  
  // Calculate max scroll position
  private getMaxScrollPosition(): number {
    const trackWidth = this.sliderTrack.nativeElement.scrollWidth;
    const containerWidth = this.sliderTrack.nativeElement.parentElement?.offsetWidth || 0;
    return Math.max(0, trackWidth - containerWidth);
  }
  
  // Go to specific slide
  goToSlide(slideIndex: number): void {
    this.currentPosition = slideIndex * (this.cardWidth + this.gap);
    const maxScroll = this.getMaxScrollPosition();
    
    if (this.currentPosition > maxScroll) {
      this.currentPosition = maxScroll;
    }
    
    this.sliderTrack.nativeElement.style.transform = `translateX(-${this.currentPosition}px)`;
    this.currentDot = slideIndex;
    this.resetAutoSlide();
  }
  
  // Next slide
  nextSlide(): void {
    const maxScroll = this.getMaxScrollPosition();
    
    if (this.currentDot >= this.clients.length - 1) {
      // Loop back to first card
      this.currentPosition = 0;
      this.currentDot = 0;
    } else {
      this.currentPosition += (this.cardWidth + this.gap);
      this.currentDot++;
      
      if (this.currentPosition > maxScroll) {
        this.currentPosition = maxScroll;
      }
    }
    
    this.sliderTrack.nativeElement.style.transform = `translateX(-${this.currentPosition}px)`;
    this.resetAutoSlide();
  }
  
  // Previous slide
  prevSlide(): void {
    if (this.currentDot <= 0) {
      // Loop to last card
      this.currentDot = this.clients.length - 1;
      this.currentPosition = this.currentDot * (this.cardWidth + this.gap);
    } else {
      this.currentPosition -= (this.cardWidth + this.gap);
      this.currentDot--;
    }
    
    this.sliderTrack.nativeElement.style.transform = `translateX(-${this.currentPosition}px)`;
    this.resetAutoSlide();
  }
  
  // Auto slide functions
  private startAutoSlide(): void {
    if (this.isAutoSliding) {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 4000);
    }
  }
  
  private stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
  
  private resetAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
  
  // Card hover events
  onCardMouseEnter(cardIndex: number): void {
    this.isAutoSliding = false;
    this.stopAutoSlide();
  }
  
  onCardMouseLeave(): void {
    this.isAutoSliding = true;
    this.startAutoSlide();
  }
  
  // Handle window resize
  @HostListener('window:resize')
  onResize(): void {
    // Recalculate position on resize
    this.currentPosition = this.currentDot * (this.cardWidth + this.gap);
    const maxScroll = this.getMaxScrollPosition();
    
    if (this.currentPosition > maxScroll) {
      this.currentPosition = maxScroll;
      this.currentDot = Math.floor(this.currentPosition / (this.cardWidth + this.gap));
    }
    
    this.sliderTrack.nativeElement.style.transform = `translateX(-${this.currentPosition}px)`;
  }
}
