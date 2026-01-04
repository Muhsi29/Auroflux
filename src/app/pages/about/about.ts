import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  phone: string;
}

interface Client {
  name: string;
  logo: string;
}
interface Service {
  title: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit, OnDestroy {
  @ViewChild('whoWeAreSection') whoWeAreSection!: ElementRef;
  @ViewChild('teamSection') teamSection!: ElementRef;
  @ViewChild('ourClientsSection') ourClientsSection!: ElementRef;
  @ViewChild('sliderTrack') sliderTrack!: ElementRef;
  @ViewChild('aboutServiceSection') aboutServiceSection!: ElementRef;
  
  private servicesHasAnimated = false;
  private servicesObserver: IntersectionObserver | null = null;
  
  private hasAnimatedWhoWeAre = false;
  private hasAnimatedTeam = false;
  private hasAnimatedClients = false;
  private observerWhoWeAre: IntersectionObserver | null = null;
  private observerTeam: IntersectionObserver | null = null;
  private observerClients: IntersectionObserver | null = null;
  
  private currentTranslateX = 0;
  private isSliderHovered = false;
  private animationPaused = false;
  
  activeSocialIndex: number | null = null;

  teamMembers: TeamMember[] = [
    { 
      name: 'Kathryn Murphy', 
      role: 'Systems Analyst', 
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', 
      phone: '(704) 555-0127' 
    },
    { 
      name: 'Darlene Robertson', 
      role: 'Team Leader', 
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', 
      phone: '(704) 555-0127' 
    },
    { 
      name: 'Leslie Alexander', 
      role: 'General Manager', 
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', 
      phone: '(704) 555-0127' 
    },
    { 
      name: 'Francene Vandyne', 
      role: 'Project Manager', 
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', 
      phone: '(704) 555-0127' 
    },
    { 
      name: 'Michael Johnson', 
      role: 'Senior Developer', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', 
      phone: '(704) 555-0127' 
    }
  ];

  clients: Client[] = [
    { 
      name: 'International Education', 
      logo: '../../../assets/images/samsung-logo-1.png' 
    },
    { 
      name: 'IMAX', 
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=80&q=80&bg=FFFFFF' 
    },
    { 
      name: 'Special Olympics', 
      logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=80&q=80&bg=FFFFFF' 
    },
    { 
      name: 'LogIQids', 
      logo: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=80&q=80&bg=FFFFFF' 
    },
    { 
      name: 'Caprics', 
      logo: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=80&q=80&bg=FFFFFF' 
    },
    { 
      name: 'American', 
      logo: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=80&q=60&bg=FFFFFF' 
    },
    { 
      name: 'Burlington', 
      logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=80&q=60&bg=FFFFFF' 
    },
    { 
      name: 'TechCorp', 
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=80&q=60&bg=FFFFFF' 
    },
    { 
      name: 'Global Solutions', 
      logo: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=80&q=60&bg=FFFFFF' 
    },
    { 
      name: 'Innovate Inc', 
      logo: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=80&q=60&bg=FFFFFF' 
    },
    { 
      name: 'Future Labs', 
      logo: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=80&q=50&bg=FFFFFF' 
    },
    { 
      name: 'Alpha Systems', 
      logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=80&q=50&bg=FFFFFF' 
    },
    { 
      name: 'Omega Tech', 
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=80&q=50&bg=FFFFFF' 
    },
    { 
      name: 'Digital Edge', 
      logo: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=80&q=50&bg=FFFFFF' 
    }
  ];

  constructor() { }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
    this.servicesSetupIntersectionObserver();
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    this.observerWhoWeAre = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimatedWhoWeAre) {
          this.hasAnimatedWhoWeAre = true;
          
          if (entry.target instanceof HTMLElement) {
            entry.target.classList.add('in-view');
          }
          
          setTimeout(() => this.animateWhoWeAreElements(), 300);
          
          if (this.observerWhoWeAre) {
            this.observerWhoWeAre.unobserve(entry.target);
          }
        }
      });
    }, options);

    this.observerTeam = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimatedTeam) {
          this.hasAnimatedTeam = true;
          
          if (entry.target instanceof HTMLElement) {
            entry.target.classList.add('in-view');
          }
          
          if (this.observerTeam) {
            this.observerTeam.unobserve(entry.target);
          }
        }
      });
    }, options);

    this.observerClients = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimatedClients) {
          this.hasAnimatedClients = true;
          
          if (entry.target instanceof HTMLElement) {
            entry.target.classList.add('in-view');
          }
          
          if (this.observerClients) {
            this.observerClients.unobserve(entry.target);
          }
        }
      });
    }, options);

    if (this.whoWeAreSection?.nativeElement) {
      this.observerWhoWeAre.observe(this.whoWeAreSection.nativeElement);
    }

    if (this.teamSection?.nativeElement) {
      this.observerTeam.observe(this.teamSection.nativeElement);
    }

    if (this.ourClientsSection?.nativeElement) {
      this.observerClients.observe(this.ourClientsSection.nativeElement);
    }
  }

  onSliderHover(): void {
    this.isSliderHovered = true;
    if (this.sliderTrack?.nativeElement) {
      this.sliderTrack.nativeElement.style.animationPlayState = 'paused';
    }
  }

  onSliderLeave(): void {
    this.isSliderHovered = false;
    if (!this.animationPaused && this.sliderTrack?.nativeElement) {
      this.sliderTrack.nativeElement.style.animationPlayState = 'running';
    }
  }

  scrollLeft(): void {
    this.manualScroll(-1);
  }

  scrollRight(): void {
    this.manualScroll(1);
  }

  private manualScroll(direction: number): void {
    if (!this.sliderTrack?.nativeElement) return;
    
    const sliderElement = this.sliderTrack.nativeElement;
    const slideWidth = this.getSlideWidth();
    const scrollAmount = 1 * slideWidth; // Scroll 3 slides at a time
    
    // Remove CSS animation and use manual control
    sliderElement.style.animation = 'none';
    this.animationPaused = true;
    
    // Get current position
    const computedStyle = window.getComputedStyle(sliderElement);
    const matrix = new DOMMatrix(computedStyle.transform);
    this.currentTranslateX = matrix.m41;
    
    // Calculate new position
    this.currentTranslateX += (scrollAmount * direction);
    
    // Handle infinite loop
    const totalWidth = slideWidth * this.clients.length;
    
    if (this.currentTranslateX > 0) {
      this.currentTranslateX = -totalWidth + this.currentTranslateX;
    } else if (this.currentTranslateX <= -totalWidth) {
      this.currentTranslateX = this.currentTranslateX + totalWidth;
    }
    
    // Apply smooth transition
    sliderElement.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    sliderElement.style.transform = `translateX(${this.currentTranslateX}px)`;
    
    // Resume auto-scroll after delay
    setTimeout(() => {
      if (!this.isSliderHovered) {
        sliderElement.style.transition = 'none';
        sliderElement.style.animation = '';
        this.animationPaused = false;
      }
    }, 2000);
  }

  private getSlideWidth(): number {
    if (window.innerWidth >= 1024) return 200;
    if (window.innerWidth >= 768) return 180;
    if (window.innerWidth >= 480) return 160;
    return 140;
  }

  private animateWhoWeAreElements(): void {
    const featureItems = this.whoWeAreSection.nativeElement.querySelectorAll('.who-we-about-feature-item');
    featureItems.forEach((item: HTMLElement, index: number) => {
      setTimeout(() => {
        item.classList.add('animate-in');
      }, index * 300 + 300);
    });

    const listItems = this.whoWeAreSection.nativeElement.querySelectorAll('.who-we-about-list-item');
    listItems.forEach((item: HTMLElement, index: number) => {
      setTimeout(() => {
        item.classList.add('animate-in');
      }, index * 200);
    });

    const button = this.whoWeAreSection.nativeElement.querySelector('.who-we-about-btn-quote');
    if (button) {
      setTimeout(() => {
        (button as HTMLElement).classList.add('animate-in');
      }, 900);
    }
  }

  learnMore(): void {
    console.log('Learn More button clicked');
  }

  toggleSocial(index: number): void {
    const cards = document.querySelectorAll('.team-team-card');
    cards.forEach(card => card.classList.remove('social-active'));
    
    if (this.activeSocialIndex === index) {
      this.activeSocialIndex = null;
    } else {
      this.activeSocialIndex = index;
      if (cards[index]) {
        cards[index].classList.add('social-active');
      }
    }
  }

  closeSocial(): void {
    const cards = document.querySelectorAll('.team-team-card');
    cards.forEach(card => card.classList.remove('social-active'));
    this.activeSocialIndex = null;
  }

  ngOnDestroy(): void {
    if (this.observerWhoWeAre) {
      this.observerWhoWeAre.disconnect();
    }
    if (this.observerTeam) {
      this.observerTeam.disconnect();
    }
    if (this.observerClients) {
      this.observerClients.disconnect();
    }
    if (this.servicesObserver) {
      this.servicesObserver.disconnect();
    }
  }

  // About - Service
  services: Service[] = [
    { 
      title: 'Engineering Excellence', 
      icon: 'fa-solid fa-gears', 
      description: 'We deliver precisely engineered piping solutions that ensure durability, performance, and long-term reliability.' 
    },
    { 
      title: 'Client Partnership', 
      icon: 'fa-solid fa-handshake', 
      description: 'We work closely with customers through transparent communication and committed project execution.' 
    },
    { 
      title: 'Innovation', 
      icon: 'fa-solid fa-lightbulb', 
      description: 'We apply advanced PPR technologies and modern engineering practices to deliver efficient solutions.' 
    },
    { 
      title: 'Energy Efficiency', 
      icon: 'fa-solid fa-bolt', 
      description: 'We design systems focused on reducing energy consumption and maximizing return on investment.' 
    },
    { 
      title: 'Sustainability', 
      icon: 'fa-solid fa-leaf', 
      description: 'We promote eco-friendly piping solutions that support energy saving and environmental responsibility.' 
    },
    { 
      title: 'Proven Expertise', 
      icon: 'fa-solid fa-user-gear', 
      description: 'With 20+ years of industry experience, we deliver dependable engineering solutions across applications.' 
    }
  ];

  private servicesSetupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    this.servicesObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.servicesHasAnimated) {
          this.servicesHasAnimated = true;
          
          if (entry.target instanceof HTMLElement) {
            entry.target.classList.add('in-view');
          }
          
          if (this.servicesObserver) {
            this.servicesObserver.unobserve(entry.target);
          }
        }
      });
    }, options);

    if (this.aboutServiceSection?.nativeElement) {
      this.servicesObserver.observe(this.aboutServiceSection.nativeElement);
    }
  }

  servicesLearnMore(): void {
    console.log('Services Learn More button clicked');
  }


}