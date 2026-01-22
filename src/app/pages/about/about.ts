import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface TeamMember {
  name: string;
  role: string;
  image: string;
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
  constructor(private router: Router) {}
  goCta() {
  this.router.navigate(['/contact']);
}
  
  activeSocialIndex: number | null = null;

  teamMembers: TeamMember[] = [
     { 
      name: 'Raja Srinivasan', 
      role: 'Founder', 
      image: '../../../assets/teams/mama.webp'
    },
    { 
      name: 'Bhoovarahan Thirumalai', 
      role: 'Mentor', 
      image: '../../../assets/teams/Bhoo-asp.jpg'
    },
    // { 
    //   name: 'Manoharan', 
    //   role: 'Chief Technical Officer', 
    //   image: '../../../assets/teams/manoharan-1.jpg'
    // },
    { 
      name: 'Muniyandi', 
      role: 'Chief Consultant', 
      image: '../../../assets/teams/muniyandi.jpg' 
    },
    { 
      name: 'A. Rajathi', 
      role: 'CEO Finance', 
      image: '../../../assets/teams/Rajathi.jpeg' 
    },
    // { 
    //   name: 'Vasanth', 
    //   role: 'Head - Electrical & Automation', 
    //   image: '../../../assets/teams/vasanth1.jpg'
    // }
  ];

  clients: Client[] = [
    { 
      name: 'Tractors and Farm Equipment Limited', 
      logo: '../../../assets/client-logo/logo-1.png' 
    },
    { 
      name: 'Valeo', 
      logo: '../../../assets/client-logo/logo-2.png' 
    },
    { 
      name: 'wheels India Limited', 
      logo: '../../../assets/client-logo/logo-3.png' 
    },
    { 
      name: 'Samsung', 
      logo: '../../../assets/client-logo/logo-4.png' 
    },
    { 
      name: 'Toshiba Machine', 
      logo: '../../../assets/client-logo/logo-5.png' 
    },
    { 
      name: 'Flexol', 
      logo: '../../../assets/client-logo/logo-6.png' 
    },
    { 
      name: 'Delphi-Tvs', 
      logo: '../../../assets/client-logo/logo-7.png' 
    },
    { 
      name: 'Reynolds', 
      logo: '../../../assets/client-logo/logo-8.png' 
    },
    { 
      name: 'Power Ventures Pic', 
      logo: '../../../assets/client-logo/logo-9.png' 
    },
    { 
      name: 'MRF', 
      logo: '../../../assets/client-logo/logo-10.png' 
    },
    { 
      name: 'Saint Gobain', 
      logo: '../../../assets/client-logo/logo-11.webp' 
    },
    { 
      name: 'Sundaram-Clayton Limited', 
      logo: '../../../assets/client-logo/logo-12.jpg' 
    },
    { 
      name: 'Aspiration Energy', 
      logo: '../../../assets/client-logo/logo-13.png' 
    },
    { 
      name: 'Gem Trust Technology', 
      logo: '../../../assets/client-logo/logo-14.png' 
    }
  ];


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