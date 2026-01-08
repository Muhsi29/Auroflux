import { Component, OnInit, OnDestroy, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('header') header!: ElementRef;
  
  isSticky = false;
  isMenuOpen = false;

  private stickyThreshold = 100;
  private routerSubscription?: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkStickyHeader();
    
    // Subscribe to router events to close menu on navigation
    this.routerSubscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        // Close menu whenever navigation completes
        this.closeMenu();
      });
  }

  ngOnDestroy() {
    // Clean up subscription
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    // Ensure body scroll is restored
    document.body.style.overflow = '';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkStickyHeader();
  }

  @HostListener('window:resize', [])
  onResize() {
    // Close menu on resize if it's open
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  private checkStickyHeader() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    this.isSticky = scrollPosition > this.stickyThreshold;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    
    // Toggle body scroll when menu is open
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  // Close menu when clicking on a navigation link
  onNavLinkClick() {
    if (window.innerWidth <= 768) {
      this.closeMenu();
    }
  }
}