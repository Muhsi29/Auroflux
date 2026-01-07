import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  subtitle: string;
}
export interface HomeServiceService {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
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
  @ViewChild('bannerSection') bannerSection!: ElementRef;
  @ViewChild('whyChooseSection') whyChooseSection!: ElementRef;
  @ViewChild('blogSection') blogSection!: ElementRef;
  @ViewChild('productSlider') productSlider!: ElementRef;
  @ViewChild('productSection') productSection!: ElementRef;

  // Banner variables
  currentSlide = 0;
  private bannerAutoScrollInterval: any;
  private bannerAutoScrollDelay = 100;
  private isBannerHovered = false;

  // About section variables
  private aboutObserver!: IntersectionObserver;
  private aboutHasAnimated = false;

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
      image: '../../../assets/images/banner-1.webp'
    },  
    {
      subtitle: 'ENGINEERED FOR PERFORMANCE',
      title: 'Smarter Energy Solutions',
      description: 'With deep expertise in PPR piping systems, Auroflux delivers innovative engineering solutions backed by experienced professionals. Our focus on energy-saving technologies ensures long-term value and performance for every customer.',
      image:'./assets/images/banner-2.webp'
    },
    {
      subtitle: 'BUILDING TOMORROW, TODAY',
      title: 'Reliable PPR Systems',
      description: 'Auroflux Technology Private Limited provides advanced PPR pipes and fittings with end-to-end engineering support. Our solutions are designed to optimize energy usage and deliver indirect cost savings through smart, efficient engineering.',
      image: '../../../assets/images/service-1.webp'
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
      icon: 'fas fa-temperature-low',
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


  ngOnInit() {
    this.startBannerAutoScroll();

    this.homeProductCalculateCardsPerView();
    this.homeProductStartAutoScroll();
        this.homeServiceCalculateResponsiveValues();
    this.homeServiceInitializePagination();
    this.homeServiceUpdateSliderPosition();
  }

  ngOnDestroy() {
    this.stopBannerAutoScroll();

    this.homeProductStopAutoScroll();
    
    if (this.aboutObserver) {
      this.aboutObserver.disconnect();
    }
    
    if (this.whyChooseObserver) {
      this.whyChooseObserver.disconnect();
    }
     if (this.blogObserver) {
      this.blogObserver.disconnect();
    }
     this.homeServiceCalculateResponsiveValues();
    this.homeServiceInitializePagination();
    this.homeServiceUpdateSliderPosition();
    
  }

  ngAfterViewInit() {
    this.setupAboutIntersectionObserver();
    this.setupBannerHoverListeners();
    this.setupWhyChooseIntersectionObserver();
    this.setupBlogIntersectionObserver();
       // Small delay to ensure DOM is ready
    setTimeout(() => {
      this.homeServiceCalculateResponsiveValues();
      this.homeServiceUpdateSliderPosition();
    }, 100);
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
    homeProductCurrentIndex = 0;
  homeProductItems = [
    {
      name: 'HDPE & PPR Piping Systems',
      description: 'Durable HDPE and PPR piping solutions designed and installed for reliable industrial applications.',
      image: '../../../assets/images/Product-1.webp',

    },
    {
      name: 'Metallic Piping Solutions',
      description: 'Metallic piping systems supplied and installed for dependable industrial utilities and services.',
      image: '../../../assets/images/Product-2.webp',
  
    },
    {
      name: 'Pressure Vessels',
      description: 'Pressure vessels designed and fabricated to standards for safe and reliable industrial applications.',
      image: '../../../assets/images/Product-3.webp',
    
    },
    {
      name: 'Process Chillers',
      description: 'Process chillers selected and integrated based on detailed heat load studies for industrial cooling needs..',
      image: '../../../assets/images/Product-4.webp',
    
    },
    {
      name: 'Solar Thermal Systems',
      description: 'Solar thermal piping and erection solutions executed for large-scale industrial heat applications.',
      image: '../../../assets/images/Product-5.webp',

    },
    {
      name: 'VFD Control Panels',
      description: 'Energy-efficient VFD control panels designed and supplied for automated industrial pumping systems.',
      image: '../../../assets/images/Product-6.webp',
  
    }
  ];

  private homeProductAutoScrollInterval: any;
  private homeProductIsHovered = false;
  private homeProductScrollPosition = 0;
  private homeProductCardsPerView = 3;
  private homeProductCardWidth = 380;
  private homeProductCardGap = 30;

  @HostListener('window:resize')
  onHomeProductResize() {
    this.homeProductCalculateCardsPerView();
    this.homeProductUpdateScrollPosition();
  }

  private homeProductCalculateCardsPerView() {
    if (window.innerWidth < 640) {
      this.homeProductCardsPerView = 1;
      this.homeProductCardWidth = window.innerWidth - 40;
    } else if (window.innerWidth < 1024) {
      this.homeProductCardsPerView = 2;
      this.homeProductCardWidth = (window.innerWidth - 80) / 2;
    } else {
      this.homeProductCardsPerView = 3;
      this.homeProductCardWidth = 380;
    }
  }

  homeProductScrollGrid(direction: number) {
    this.homeProductStopAutoScroll();
    
    const maxScroll = (this.homeProductItems.length - this.homeProductCardsPerView) * 
                     (this.homeProductCardWidth + this.homeProductCardGap);
    
    this.homeProductScrollPosition += direction * (this.homeProductCardWidth + this.homeProductCardGap);
    
    if (this.homeProductScrollPosition < 0) {
      this.homeProductScrollPosition = maxScroll;
    } else if (this.homeProductScrollPosition > maxScroll) {
      this.homeProductScrollPosition = 0;
    }
    
    this.homeProductUpdateScrollPosition();
    this.homeProductUpdateCurrentIndex();
    
    setTimeout(() => {
      this.homeProductStartAutoScroll();
    }, 3000);
  }

  homeProductGoToCard(index: number) {
    this.homeProductStopAutoScroll();
    this.homeProductCurrentIndex = index;
    this.homeProductScrollPosition = index * (this.homeProductCardWidth + this.homeProductCardGap);
    this.homeProductUpdateScrollPosition();
    
    setTimeout(() => {
      this.homeProductStartAutoScroll();
    }, 3000);
  }

  private homeProductUpdateScrollPosition() {
    const grid = document.querySelector('.home-product-grid') as HTMLElement;
    if (grid) {
      grid.style.transform = `translateX(-${this.homeProductScrollPosition}px)`;
    }
  }

  private homeProductUpdateCurrentIndex() {
    this.homeProductCurrentIndex = Math.round(
      this.homeProductScrollPosition / (this.homeProductCardWidth + this.homeProductCardGap)
    );
  }

  private homeProductStartAutoScroll() {
    if (this.homeProductIsHovered) return;
    
    this.homeProductStopAutoScroll();
    this.homeProductAutoScrollInterval = setInterval(() => {
      this.homeProductScrollGrid(1);
    }, 5000);
  }

  private homeProductStopAutoScroll() {
    if (this.homeProductAutoScrollInterval) {
      clearInterval(this.homeProductAutoScrollInterval);
    }
  }

  onHomeProductMouseEnter() {
    this.homeProductIsHovered = true;
    this.homeProductStopAutoScroll();
  }

  onHomeProductMouseLeave() {
    this.homeProductIsHovered = false;
    this.homeProductStartAutoScroll();
  }
  // Blog section
   // Featured post (left side)
  featuredPost = {
    image: '../../../assets/images/blog-1.webp',
    day: '15',
    month: 'MAR',
    comments: '12',
    author: 'Admin',
    title: 'Steel Structure Fabrication: The Backbone of Modern Construction',
    excerpt: 'Steel structure fabrication offers superior strength, faster construction, and flexible design. Its durability and sustainability make it ideal for modern infrastructure projects.'
  };

  // Side posts (right side)
  sidePosts = [
    {
      image: '../../../assets/images/blog-2.webp',
      day: '22',
      month: 'MAR',
      comments: '8',
      author: 'Engineering Lead',
      title: 'Compressed Air Dryers: Ensuring Clean, Dry & Efficient Air Systems',
      excerpt: 'Compressed air dryers remove moisture and contaminants to ensure efficient, reliable, and long-lasting compressed air systems across industrial applications.'
    },
    {
      image: '../../../assets/images/blog-3.webp',
      day: '30',
      month: 'MAR',
      comments: '15',
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
          entry.target.classList.add('blog-in-view');
          this.blogHasAnimated = true;
          this.blogObserver?.unobserve(entry.target);
        }
      });
    }, options);

    if (this.blogSection?.nativeElement) {
      this.blogObserver.observe(this.blogSection.nativeElement);
    }
  }

 @ViewChild('sliderViewport', { static: false }) sliderViewport!: ElementRef;

  public homeServiceServices: HomeServiceService[] = [
    { 
      id: '01', 
      title: 'Building Construction', 
      description: 'Professional construction services with modern techniques and quality materials.',
      image: 'assets/service1.jpg',
      icon: 'fa-building'
    },
    { 
      id: '02', 
      title: 'Architecture Design', 
      description: 'Innovative architectural designs that blend functionality with aesthetic appeal.',
      image: 'assets/service2.jpg',
      icon: 'fa-drafting-compass'
    },
    { 
      id: '03', 
      title: 'Building Renovation', 
      description: 'Transform your existing spaces with our expert renovation services.',
      image: 'assets/service3.jpg',
      icon: 'fa-hammer'
    },
    { 
      id: '04', 
      title: 'Quality Materials', 
      description: 'Premium quality materials ensuring durability and sustainability.',
      image: 'assets/service4.jpg',
      icon: 'fa-award'
    },
    { 
      id: '05', 
      title: 'Project Management', 
      description: 'End-to-end project management for timely and efficient completion.',
      image: 'assets/service5.jpg',
      icon: 'fa-chart-line'
    },
    { 
      id: '06', 
      title: 'Interior Design', 
      description: 'Create beautiful and functional interiors that reflect your style.',
      image: 'assets/service6.jpg',
      icon: 'fa-palette'
    },
    { 
      id: '07', 
      title: 'Structural Engineering', 
      description: 'Expert structural analysis and engineering solutions.',
      image: 'assets/service7.jpg',
      icon: 'fa-cogs'
    },
    { 
      id: '08', 
      title: 'Green Building', 
      description: 'Sustainable and eco-friendly building solutions.',
      image: 'assets/service8.jpg',
      icon: 'fa-leaf'
    },
  ];

  public homeServiceCurrentSlide = 0;
  public homeServiceCurrentOffset = 0;
  public homeServiceShowDots = false;
  public homeServicePaginationDots: number[] = [];
  
  private homeServiceCardsPerSlide = 4;
  private homeServiceCardWidth = 310;
  private homeServiceCardGap = 20;
  private homeServiceTotalSlides = 0;
  private homeServiceResizeTimeout: any;
  private isMobile = false;

  @HostListener('window:resize')
  homeServiceOnResize(): void {
    if (this.homeServiceResizeTimeout) {
      clearTimeout(this.homeServiceResizeTimeout);
    }
    
    this.homeServiceResizeTimeout = setTimeout(() => {
      this.homeServiceCalculateResponsiveValues();
      this.homeServiceUpdateSliderPosition();
      this.homeServiceInitializePagination();
    }, 150);
  }

  private homeServiceCalculateResponsiveValues(): void {
    const windowWidth = window.innerWidth;
    
    if (windowWidth <= 480) {
      this.homeServiceCardsPerSlide = 1;
      this.homeServiceShowDots = true;
      this.isMobile = true;
    } else if (windowWidth <= 768) {
      this.homeServiceCardsPerSlide = 2;
      this.homeServiceShowDots = true;
      this.isMobile = true;
    } else if (windowWidth <= 1023) {
      this.homeServiceCardsPerSlide = 3;
      this.homeServiceShowDots = true;
      this.isMobile = true;
    } else {
      this.homeServiceCardsPerSlide = 4;
      this.homeServiceShowDots = false;
      this.isMobile = false;
    }
    
    this.homeServiceTotalSlides = Math.ceil(this.homeServiceServices.length / this.homeServiceCardsPerSlide);
    
    // Reset slide if out of bounds
    if (this.homeServiceCurrentSlide >= this.homeServiceTotalSlides) {
      this.homeServiceCurrentSlide = 0;
    }
  }

  private homeServiceInitializePagination(): void {
    this.homeServicePaginationDots = Array.from(
      { length: this.homeServiceTotalSlides }, 
      (_, i) => i
    );
  }

  private homeServiceUpdateSliderPosition(): void {
    if (this.isMobile) {
      // On mobile/tablet, don't use transform - let native scroll work
      this.homeServiceCurrentOffset = 0;
    } else {
      // On desktop, use transform for slider
      const slideWidth = (this.homeServiceCardWidth + this.homeServiceCardGap) * this.homeServiceCardsPerSlide;
      this.homeServiceCurrentOffset = -(this.homeServiceCurrentSlide * slideWidth);
    }
  }

  public homeServiceNextSlide(): void {
    if (this.homeServiceCurrentSlide < this.homeServiceTotalSlides - 1) {
      this.homeServiceCurrentSlide++;
    } else {
      this.homeServiceCurrentSlide = 0;
    }
    this.homeServiceUpdateSliderPosition();
  }

  public homeServicePrevSlide(): void {
    if (this.homeServiceCurrentSlide > 0) {
      this.homeServiceCurrentSlide--;
    } else {
      this.homeServiceCurrentSlide = this.homeServiceTotalSlides - 1;
    }
    this.homeServiceUpdateSliderPosition();
  }

  public homeServiceGoToSlide(slideIndex: number): void {
    if (slideIndex >= 0 && slideIndex < this.homeServiceTotalSlides) {
      this.homeServiceCurrentSlide = slideIndex;
      this.homeServiceUpdateSliderPosition();
      
      // On mobile, scroll to the appropriate position
      if (this.isMobile && this.sliderViewport) {
        const scrollAmount = slideIndex * (this.homeServiceCardWidth + this.homeServiceCardGap) * this.homeServiceCardsPerSlide;
        this.sliderViewport.nativeElement.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  }
}