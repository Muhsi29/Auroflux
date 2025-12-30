import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

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

  // Service section variables
  private serviceObserver!: IntersectionObserver;
  private serviceHasAnimated = false;
  private serviceAutoSlideInterval: any;
  private isServiceHovered = false;
  private isServiceAnimating = false;

  // Horizontal scroll properties - CHANGED: Make this public
  private isServiceScrolling = false;
  private serviceScrollVelocity = 0;
  private serviceScrollInertia = 0.95;
  private serviceScrollThreshold = 5;
  private serviceLastWheelTime = 0;
  private serviceWheelDeltaX = 0;
  private serviceWheelDeltaY = 0;
  private serviceScrollDirection: 'horizontal' | 'vertical' | null = null;
  private serviceTouchStartX = 0;
  private serviceTouchStartY = 0;
  private serviceIsTouchScrolling = false;
  
  // CHANGED: Make this public to use in HTML template
  serviceIsHorizontalScrollActive = false;

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

  serviceCurrentSlide = 0;
  serviceInfiniteServices: any[] = [];
  private serviceCardWidth = 420;
  private serviceCardGap = 40;

  constructor() { }

  ngOnInit() {
    this.startBannerAutoScroll();
    this.serviceCreateInfiniteLoop();
    this.serviceUpdateSliderPosition();
    this.homeProductCalculateCardsPerView();
    this.homeProductStartAutoScroll();
  }

  ngOnDestroy() {
    this.stopBannerAutoScroll();
    this.stopServiceAutoSlide();
    this.homeProductStopAutoScroll();
    
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

    // Clean up event listeners
    this.cleanupServiceEventListeners();
    
    // Restore body overflow
    document.body.style.overflow = '';
    document.body.classList.remove('no-vertical-scroll');
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
    
    
    
    // Initialize horizontal scroll
    setTimeout(() => {
      this.setupServiceHorizontalScroll();
    }, 500);
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
          this.serviceIsHorizontalScrollActive = false;
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
          this.serviceIsHorizontalScrollActive = false;
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
    if (this.isServiceHovered || this.serviceIsHorizontalScrollActive) return;
    
    this.stopServiceAutoSlide();
    this.serviceAutoSlideInterval = setInterval(() => {
      if (!this.isServiceHovered && !this.isServiceAnimating && !this.serviceIsHorizontalScrollActive) {
        this.serviceNextSlide();
      }
    }, 5000);
  }

  stopServiceAutoSlide() {
    if (this.serviceAutoSlideInterval) {
      clearInterval(this.serviceAutoSlideInterval);
    }
  }

  // ============= HORIZONTAL SCROLL METHODS =============
  private setupServiceHorizontalScroll() {
    if (!this.serviceSection?.nativeElement) return;

    const serviceEl = this.serviceSection.nativeElement;
    const sliderContainer = serviceEl.querySelector('.service-slider-container');
    
    if (!sliderContainer) return;
    
    // Wheel event for mouse wheel
    sliderContainer.addEventListener('wheel', this.handleServiceWheel.bind(this), { passive: false });
    
    // Touch events for trackpad
    sliderContainer.addEventListener('touchstart', this.handleServiceTouchStart.bind(this), { passive: true });
    sliderContainer.addEventListener('touchmove', this.handleServiceTouchMove.bind(this), { passive: false });
    sliderContainer.addEventListener('touchend', this.handleServiceTouchEnd.bind(this));
    
    // Mouse enter/leave events
    sliderContainer.addEventListener('mouseenter', this.handleServiceMouseEnter.bind(this));
    sliderContainer.addEventListener('mouseleave', this.handleServiceMouseLeave.bind(this));
    
    // Prevent default drag behavior
    sliderContainer.addEventListener('dragstart', (e: Event) => {
      e.preventDefault();
      return false;
    });
    
    // Animation frame for smooth scrolling
    this.animateServiceScroll();
  }

  private handleServiceWheel(event: WheelEvent) {
    if (!this.serviceSection?.nativeElement.contains(event.target as Node)) return;
    
    const currentTime = Date.now();
    const deltaTime = currentTime - this.serviceLastWheelTime;
    
    // Accumulate wheel deltas
    this.serviceWheelDeltaX += Math.abs(event.deltaX);
    this.serviceWheelDeltaY += Math.abs(event.deltaY);
    
    // Determine scroll direction based on first significant movement
    if (this.serviceScrollDirection === null) {
      if (this.serviceWheelDeltaX > 10 && this.serviceWheelDeltaX > this.serviceWheelDeltaY) {
        this.serviceScrollDirection = 'horizontal';
        this.serviceIsHorizontalScrollActive = true;
        event.preventDefault();
      } else if (this.serviceWheelDeltaY > 10 && this.serviceWheelDeltaY > this.serviceWheelDeltaX) {
        this.serviceScrollDirection = 'vertical';
        this.serviceIsHorizontalScrollActive = false;
      }
    }
    
    // If horizontal scrolling is active, handle it
    if (this.serviceScrollDirection === 'horizontal' && this.serviceIsHorizontalScrollActive) {
      event.preventDefault();
      event.stopPropagation();
      
      // Calculate scroll amount (prefer deltaY for vertical wheel, deltaX for horizontal wheel)
      const scrollAmount = event.deltaMode === 0 ? event.deltaY : event.deltaY * 10;
      
      // Apply scrolling with reduced sensitivity
      this.scrollServiceHorizontally(-scrollAmount * 0.3);
      
      // Lock vertical scroll
      document.body.classList.add('no-vertical-scroll');
    }
    
    // Reset direction after a pause in scrolling
    if (deltaTime > 150) {
      this.serviceScrollDirection = null;
      this.serviceWheelDeltaX = 0;
      this.serviceWheelDeltaY = 0;
      
      // Check if we've reached boundaries
      this.checkServiceBoundaries();
    }
    
    this.serviceLastWheelTime = currentTime;
  }

  private handleServiceTouchStart(event: TouchEvent) {
    if (event.touches.length === 1 && this.serviceSection?.nativeElement.contains(event.target as Node)) {
      this.serviceTouchStartX = event.touches[0].clientX;
      this.serviceTouchStartY = event.touches[0].clientY;
      this.serviceIsTouchScrolling = false;
      this.serviceIsHorizontalScrollActive = false;
    }
  }

  private handleServiceTouchMove(event: TouchEvent) {
    if (event.touches.length === 1 && this.serviceSection?.nativeElement.contains(event.target as Node)) {
      const touchX = event.touches[0].clientX;
      const touchY = event.touches[0].clientY;
      const deltaX = touchX - this.serviceTouchStartX;
      const deltaY = touchY - this.serviceTouchStartY;
      
      // Determine scroll direction
      if (!this.serviceIsTouchScrolling) {
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > this.serviceScrollThreshold) {
          this.serviceIsTouchScrolling = true;
          this.serviceIsHorizontalScrollActive = true;
          event.preventDefault();
        }
      }
      
      // Handle horizontal scrolling
      if (this.serviceIsTouchScrolling && this.serviceIsHorizontalScrollActive) {
        event.preventDefault();
        
        // Apply scroll with inertia
        this.scrollServiceHorizontally(-deltaX * 2);
        
        // Update touch start position for next move
        this.serviceTouchStartX = touchX;
        this.serviceTouchStartY = touchY;
        
        // Lock vertical scroll
        document.body.classList.add('no-vertical-scroll');
      }
    }
  }

  private handleServiceTouchEnd() {
    if (this.serviceIsTouchScrolling) {
      // Apply momentum
      this.serviceScrollVelocity *= 0.8;
      
      // Check boundaries
      setTimeout(() => {
        this.checkServiceBoundaries();
      }, 100);
    }
    
    this.serviceIsTouchScrolling = false;
    this.serviceTouchStartX = 0;
    this.serviceTouchStartY = 0;
  }

  private handleServiceMouseEnter() {
    this.isServiceHovered = true;
    this.stopServiceAutoSlide();
  }

  private handleServiceMouseLeave() {
    this.isServiceHovered = false;
    
    // Only resume auto slide if not manually scrolling
    if (!this.serviceIsHorizontalScrollActive) {
      this.startServiceAutoSlide();
    }
    
    // Reset scroll state
    this.serviceScrollDirection = null;
    this.serviceWheelDeltaX = 0;
    this.serviceWheelDeltaY = 0;
    
    // Restore vertical scroll
    document.body.classList.remove('no-vertical-scroll');
    this.serviceIsHorizontalScrollActive = false;
  }

  private scrollServiceHorizontally(delta: number) {
    this.serviceScrollVelocity = delta * 0.5;
    this.isServiceScrolling = true;
    
    // Calculate if we should change slides
    const slideThreshold = (this.serviceCardWidth + this.serviceCardGap) * 0.3;
    
    if (Math.abs(this.serviceScrollVelocity) > slideThreshold) {
      if (this.serviceScrollVelocity > 0) {
        this.servicePrevSlide();
      } else {
        this.serviceNextSlide();
      }
      this.serviceScrollVelocity = 0;
    } else {
      // Apply smooth scrolling
      if (this.serviceSliderTrack?.nativeElement) {
        const currentTranslate = this.getCurrentServiceTranslate();
        const newTranslate = currentTranslate + this.serviceScrollVelocity;
        this.serviceSliderTrack.nativeElement.style.transform = `translateX(${newTranslate}px)`;
      }
    }
  }

  private animateServiceScroll() {
    const animate = () => {
      if (Math.abs(this.serviceScrollVelocity) > 0.5) {
        this.serviceScrollVelocity *= this.serviceScrollInertia;
        
        // Apply remaining velocity
        if (this.serviceSliderTrack?.nativeElement) {
          const currentTranslate = this.getCurrentServiceTranslate();
          const newTranslate = currentTranslate + this.serviceScrollVelocity;
          this.serviceSliderTrack.nativeElement.style.transform = `translateX(${newTranslate}px)`;
        }
        
        requestAnimationFrame(animate);
      } else {
        this.serviceScrollVelocity = 0;
        this.isServiceScrolling = false;
        
        // Snap to nearest slide
        this.snapToNearestSlide();
      }
    };
    
    requestAnimationFrame(animate);
  }

  private snapToNearestSlide() {
    if (!this.serviceSliderTrack?.nativeElement || this.isServiceAnimating) return;
    
    const currentTranslate = this.getCurrentServiceTranslate();
    const slideWidth = this.serviceCardWidth + this.serviceCardGap;
    const nearestSlide = Math.round(-currentTranslate / slideWidth);
    
    // Clamp to valid range
    const clampedSlide = Math.max(0, Math.min(nearestSlide, this.services.length - 1));
    
    if (clampedSlide !== this.serviceCurrentSlide) {
      this.serviceCurrentSlide = clampedSlide;
      this.serviceUpdateSliderPosition();
    }
  }

  private checkServiceBoundaries() {
    const currentTranslate = this.getCurrentServiceTranslate();
    const maxTranslate = -(this.services.length - 1) * (this.serviceCardWidth + this.serviceCardGap);
    
    // If at boundaries, release vertical scroll lock
    if (currentTranslate >= 0 || currentTranslate <= maxTranslate) {
      this.serviceIsHorizontalScrollActive = false;
      document.body.classList.remove('no-vertical-scroll');
    }
  }

  private getCurrentServiceTranslate(): number {
    if (!this.serviceSliderTrack?.nativeElement) return 0;
    
    const transform = this.serviceSliderTrack.nativeElement.style.transform;
    if (!transform || transform === 'none') return 0;
    
    const match = transform.match(/translateX\(([-\d.]+)px\)/);
    return match ? parseFloat(match[1]) : 0;
  }

  private cleanupServiceEventListeners() {
    if (this.serviceSection?.nativeElement) {
      const sliderContainer = this.serviceSection.nativeElement.querySelector('.service-slider-container');
      if (sliderContainer) {
        sliderContainer.removeEventListener('wheel', this.handleServiceWheel.bind(this));
        sliderContainer.removeEventListener('touchstart', this.handleServiceTouchStart.bind(this));
        sliderContainer.removeEventListener('touchmove', this.handleServiceTouchMove.bind(this));
        sliderContainer.removeEventListener('touchend', this.handleServiceTouchEnd.bind(this));
        sliderContainer.removeEventListener('mouseenter', this.handleServiceMouseEnter.bind(this));
        sliderContainer.removeEventListener('mouseleave', this.handleServiceMouseLeave.bind(this));
      }
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.updateServiceCardWidth();
    
    // Reset scroll state on resize
    this.serviceScrollVelocity = 0;
    this.serviceScrollDirection = null;
    this.isServiceScrolling = false;
    this.serviceIsHorizontalScrollActive = false;
    document.body.classList.remove('no-vertical-scroll');
  }

  updateServiceCardWidth() {
    if (window.innerWidth <= 320) {
      this.serviceCardWidth = 280;
      this.serviceCardGap = 25;
    } else if (window.innerWidth <= 480) {
      this.serviceCardWidth = 400;
      this.serviceCardGap = 15;
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

  

}