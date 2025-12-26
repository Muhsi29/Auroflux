import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef,ViewChild,HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser,} from '@angular/common';
interface Feature {
  icon: string;
  title: string;
  subtitle: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit, OnDestroy, AfterViewInit {
   @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('serviceSection') serviceSection!: ElementRef;
  @ViewChild('serviceSliderTrack') serviceSliderTrack!: ElementRef;
  @ViewChild('bannerSection') bannerSection!: ElementRef;
  @ViewChild('whyChooseSection') whyChooseSection!: ElementRef;
  @ViewChild('blogSection') blogSection!: ElementRef;
 
  
  // Banner variables
  currentSlide = 0;
  private bannerAutoScrollInterval: any;
  private bannerAutoScrollDelay = 100;
  private isBannerHovered = false;
  
  // About section variables
  private aboutObserver!: IntersectionObserver;
  private aboutHasAnimated = false;
  
  // Service section variables
  private serviceObserver!: IntersectionObserver;
  private serviceHasAnimated = false;
  private serviceAutoSlideInterval: any;
  private isServiceHovered = false;
  private isServiceAnimating = false;

  //Why Choose US 
   private whyChooseObserver!: IntersectionObserver;
  private whyChooseHasAnimated = false;

  // Blog Section
  private blogObserver!: IntersectionObserver;
  private blogHasAnimated = false;


  slides = [
    {
      subtitle: 'YOUR VISION, OUR ENGINEERING',
      title: 'Solutions for Modern Infrastructure',
      description: 'Auroflux is an end-to-end engineering solutions provider specializing in PPR pipes and fittings. We combine strong engineering fundamentals with advanced technology to deliver reliable, energy-efficient solutions for mechanical and automation needs.',
      image: '../../../src/assets/images/Photo246.jpg'
    },  
    {
      subtitle: 'ENGINEERED FOR PERFORMANCE',
      title: 'Smarter Energy Solutions',
      description: 'With deep expertise in PPR piping systems, Auroflux delivers innovative engineering solutions backed by experienced professionals. Our focus on energy-saving technologies ensures long-term value and performance for every customer.',
      image:'./assets/images/banner-2.jpeg'
    },
    {
      subtitle: 'BUILDING TOMORROW, TODAY',
      title: 'Reliable PPR Systems',
      description: 'Auroflux Technology Private Limited provides advanced PPR pipes and fittings with end-to-end engineering support. Our solutions are designed to optimize energy usage and deliver indirect cost savings through smart, efficient engineering.',
      image: '../../../assets/images/banner-3.webp'
    }
  ];

  services = [
    {
      id: '01',
      title: 'Engineering Consultancy Services',
      description: 'We provide end-to-end engineering consultancy for industrial utilities, covering cooling towers, compressed air systems, and chilled water solutions with a strong focus on performance, safety, and long-term efficiency',
      icon: 'fas fa-user-cog',
      image: '../../../assets/images/service-1.webp'
    },
    {
      id: '02',
      title: 'Project Execution & Erection',
      description: 'Our experienced team handles complete project execution including erection and commissioning, ensuring seamless implementation of engineered systems with minimal downtime and maximum reliability.',
      icon: 'fas fa-tools',
      image: '../../../assets/images/service-2.webp'
    },
    {
      id: '03',
      title: 'Cooling & Chilled Water Systems',
      description: ' We design and deliver optimized cooling tower and chilled water systems by accurately calculating heat loads, selecting suitable equipment, and ensuring energy-efficient operation for industrial applications.',
      icon: 'fas fa-snowflake',
      image: '../../../assets/images/service-3.webp'
    },
    {
      id: '04',
      title: 'Compressed Air System Design',
      description: 'We specialize in designing compressed air systems with accurate load assessment, optimized pipe sizing, and minimum pressure drop to ensure efficient air delivery and reduced energy consumption.',
      icon: 'fas fa-wind',
      image: '../../../assets/images/service-4.webp'
    },
    {
      id: '05',
      title: 'Piping Design & Engineering',
      description: 'Our piping engineering services include pressure drop calculations, pump head selection, pipe sizing optimization, and preparation of detailed P&ID drawings along with Bill of Materials (BoM).',
      icon: 'fas fa-project-diagram',
      image: '../../../assets/images/service-5.webp'
    },
    {
      id: '06',
      title: 'Repair & Maintenance Services',
      description: 'We undertake repair and maintenance services with spares for critical equipment such as cooling towers, chillers, and compressed air dryers, ensuring system longevity and uninterrupted operations.',
      icon: 'fas fa-wrench',
      image: '../../../assets/images/service-6.png'
    }
  ];

  serviceCurrentSlide = 0;
  serviceInfiniteServices: any[] = [];
  private serviceCardWidth = 420;
  private serviceCardGap = 40;

  constructor() { }

  ngOnInit() {
    this.startBannerAutoScroll();
    this.serviceCreateInfiniteLoop();
    this.serviceUpdateSliderPosition();
  }

  ngOnDestroy() {
    this.stopBannerAutoScroll();
    this.stopServiceAutoSlide();
    
    if (this.aboutObserver) {
      this.aboutObserver.disconnect();
    }
    
    if (this.serviceObserver) {
      this.serviceObserver.disconnect();
    }
    if (this.whyChooseObserver) {
      this.whyChooseObserver.disconnect();
    }
     if (this.blogObserver) {
      this.blogObserver.disconnect();
    }
  }

  ngAfterViewInit() {
    this.setupAboutIntersectionObserver();
    this.setupServiceIntersectionObserver();
    this.updateServiceCardAnimationDelay();
    this.startServiceAutoSlide();
    this.setupBannerHoverListeners();
    this.setupServiceHoverListeners();
    this.setupWhyChooseIntersectionObserver();
    this.setupBlogIntersectionObserver();
    this.updateCardAnimationDelay();
  }

  // ============= BANNER SECTION METHODS =============
  private setupBannerHoverListeners() {
    if (this.bannerSection?.nativeElement) {
      const bannerEl = this.bannerSection.nativeElement;
      
      bannerEl.addEventListener('mouseenter', () => {
        this.isBannerHovered = true;
        this.stopBannerAutoScroll();
      });
      
      bannerEl.addEventListener('mouseleave', () => {
        this.isBannerHovered = false;
        this.startBannerAutoScroll();
      });
      
      bannerEl.addEventListener('touchstart', () => {
        this.stopBannerAutoScroll();
      });
      
      bannerEl.addEventListener('touchend', () => {
        setTimeout(() => this.startBannerAutoScroll(), 1000);
      });
    }
  }

  startBannerAutoScroll() {
    this.stopBannerAutoScroll();
    this.bannerAutoScrollInterval = setInterval(() => {
      this.nextSlide();
    }, this.bannerAutoScrollDelay);
  }

  stopBannerAutoScroll() {
    if (this.bannerAutoScrollInterval) {
      clearInterval(this.bannerAutoScrollInterval);
    }
  }

  nextSlide() {
    if (!this.isBannerHovered) {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  // ============= ABOUT SECTION METHODS =============
  setupAboutIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    this.aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.aboutHasAnimated) {
          entry.target.classList.add('in-view');
          this.aboutHasAnimated = true;
          this.animateAboutNumbers();
          this.aboutObserver.unobserve(entry.target);
        }
      });
    }, options);

    if (this.aboutSection?.nativeElement) {
      this.aboutObserver.observe(this.aboutSection.nativeElement);
    }
  }

  animateAboutNumbers() {
    const statNumbers = document.querySelectorAll('.about-stat-number');
    
    statNumbers.forEach((element: any, index) => {
      const target = parseInt(element.getAttribute('data-count') || '0');
      const suffix = index === 3 ? 'k' : '+';
      const duration = 2000;
      const steps = 60;
      const stepValue = target / steps;
      let current = 0;
      let step = 0;
      
      const timer = setInterval(() => {
        current += stepValue;
        step++;
        
        if (step >= steps) {
          current = target;
          clearInterval(timer);
        }
        
        if (index === 3) {
          element.textContent = current.toFixed(0) + suffix;
        } else {
          element.textContent = Math.floor(current) + suffix;
        }
      }, duration / steps);
    });
  }

  // ============= SERVICE SECTION METHODS =============
  private setupServiceHoverListeners() {
    if (this.serviceSection?.nativeElement) {
      const serviceEl = this.serviceSection.nativeElement;
      
      serviceEl.addEventListener('mouseenter', () => {
        this.isServiceHovered = true;
        this.stopServiceAutoSlide();
      });
      
      serviceEl.addEventListener('mouseleave', () => {
        this.isServiceHovered = false;
        this.startServiceAutoSlide();
      });
    }
  }

  setupServiceIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    this.serviceObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.serviceHasAnimated) {
          entry.target.classList.add('in-view');
          this.serviceHasAnimated = true;
          this.updateServiceCardAnimationDelay();
        }
      });
    }, options);

    if (this.serviceSection?.nativeElement) {
      this.serviceObserver.observe(this.serviceSection.nativeElement);
    }
  }

  updateServiceCardAnimationDelay() {
    setTimeout(() => {
      const cards = document.querySelectorAll('.service-main-card');
      cards.forEach((card: any, index) => {
        card.style.setProperty('--card-index', index % this.services.length);
      });
    }, 100);
  }

  serviceCreateInfiniteLoop(): void {
    this.serviceInfiniteServices = [
      ...this.services,
      ...this.services,
      ...this.services
    ];
  }

  serviceNextSlide(): void {
    if (this.isServiceAnimating) return;
    
    this.isServiceAnimating = true;
    this.stopServiceAutoSlide();
    
    this.serviceCurrentSlide++;
    
    if (this.serviceCurrentSlide >= this.services.length) {
      setTimeout(() => {
        this.serviceSliderTrack.nativeElement.style.transition = 'none';
        this.serviceCurrentSlide = 0;
        this.serviceUpdateSliderPosition();
        
        setTimeout(() => {
          this.serviceSliderTrack.nativeElement.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
          this.serviceUpdateSliderPosition();
          this.isServiceAnimating = false;
          this.startServiceAutoSlide();
        }, 50);
      }, 600);
    } else {
      this.serviceUpdateSliderPosition();
      setTimeout(() => {
        this.isServiceAnimating = false;
        this.startServiceAutoSlide();
      }, 600);
    }
  }

  servicePrevSlide(): void {
    if (this.isServiceAnimating) return;
    
    this.isServiceAnimating = true;
    this.stopServiceAutoSlide();
    
    if (this.serviceCurrentSlide === 0) {
      this.serviceSliderTrack.nativeElement.style.transition = 'none';
      this.serviceCurrentSlide = this.services.length;
      this.serviceUpdateSliderPosition();
      
      setTimeout(() => {
        this.serviceSliderTrack.nativeElement.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        this.serviceCurrentSlide--;
        this.serviceUpdateSliderPosition();
        setTimeout(() => {
          this.isServiceAnimating = false;
          this.startServiceAutoSlide();
        }, 600);
      }, 50);
    } else {
      this.serviceCurrentSlide--;
      this.serviceUpdateSliderPosition();
      setTimeout(() => {
        this.isServiceAnimating = false;
        this.startServiceAutoSlide();
      }, 600);
    }
  }

  serviceUpdateSliderPosition(): void {
    if (this.serviceSliderTrack) {
      const translateValue = -(this.serviceCurrentSlide * (this.serviceCardWidth + this.serviceCardGap));
      this.serviceSliderTrack.nativeElement.style.transform = `translateX(${translateValue}px)`;
    }
  }

  startServiceAutoSlide() {
    if (this.isServiceHovered) return;
    
    this.stopServiceAutoSlide();
    this.serviceAutoSlideInterval = setInterval(() => {
      if (!this.isServiceHovered && !this.isServiceAnimating) {
        this.serviceNextSlide();
      }
    }, 5000);
  }

  stopServiceAutoSlide() {
    if (this.serviceAutoSlideInterval) {
      clearInterval(this.serviceAutoSlideInterval);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.updateServiceCardWidth();
  }

  updateServiceCardWidth() {
    if (window.innerWidth <= 320) {
      this.serviceCardWidth = 280;
      this.serviceCardGap = 25;
    } else if (window.innerWidth <= 480) {
      this.serviceCardWidth = 300;
      this.serviceCardGap = 25;
    } else if (window.innerWidth <= 768) {
      this.serviceCardWidth = 340;
      this.serviceCardGap = 30;
    } else if (window.innerWidth <= 1024) {
      this.serviceCardWidth = 380;
      this.serviceCardGap = 35;
    } else {
      this.serviceCardWidth = 420;
      this.serviceCardGap = 40;
    }
    
    this.serviceUpdateSliderPosition();
  }
  // Why Choose us

  features: any[] = [
    {
      icon: 'fas fa-cogs',
      title: 'Engineering Excellence',
      subtitle: 'Smart Engineering'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Energy Saving Solutions',
      subtitle: 'Energy Efficient'
    },
    {
      icon: 'fas fa-project-diagram',
      title: 'Complete Project Support',
      subtitle: 'End-to-End Support'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Long-Term Customer Value',
      subtitle: 'Customer First'
    }
  ];
  
  setupWhyChooseIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    this.whyChooseObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.whyChooseHasAnimated) {
          entry.target.classList.add('in-view');
          this.whyChooseHasAnimated = true;
          this.whyChooseObserver.unobserve(entry.target);
        }
      });
    }, options);

    if (this.whyChooseSection?.nativeElement) {
      this.whyChooseObserver.observe(this.whyChooseSection.nativeElement);
    }
  }
  // Blog section
   blogPosts = [
    {
      image: '../../../assets/images/blog-1.webp',
      day: '',
      month: '',
      comments: '',
      author: 'Admin',
      title: 'Steel Structure Fabrication: The Backbone of Modern Construction',
      excerpt: 'Steel structure fabrication offers superior strength, faster construction, and flexible design. Its durability and sustainability make it ideal for modern infrastructure projects.'
    },
    {
      image: '../../../assets/images/blog-3.webp',
      day: '',
      month: '',
      comments: '',
      author: 'Engineering Lead',
      title: 'Compressed Air Dryers: Ensuring Clean, Dry & Efficient Air Systems',
      excerpt: 'Compressed air dryers remove moisture and contaminants to ensure efficient, reliable, and long-lasting compressed air systems across industrial applications.'
    },
    {
      image: '../../../assets/images/blog-2.webp',
      day: '',
      month: '',
      comments: '',
      author: 'Project Manager',
      title: 'Plate Heat Exchangers: Compact Solutions for Efficient Heat Transfer',
      excerpt: 'Plate heat exchangers enable efficient heat transfer between fluids with a compact design, high thermal performance, and flexibility for diverse industrial applications.'
    }
  ];
   setupBlogIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    this.blogObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.blogHasAnimated) {
          entry.target.classList.add('in-view');
          this.blogHasAnimated = true;
          this.blogObserver.unobserve(entry.target);
        }
      });
    }, options);

    if (this.blogSection?.nativeElement) {
      this.blogObserver.observe(this.blogSection.nativeElement);
    }
  }

  updateCardAnimationDelay() {
    setTimeout(() => {
      const cards = document.querySelectorAll('.blog-card');
      cards.forEach((card: any, index) => {
        card.style.setProperty('--card-index', index);
      });
    }, 100);
  }


}