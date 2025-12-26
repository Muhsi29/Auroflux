import { Component,OnInit, HostListener, ElementRef, ViewChild} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent implements OnInit {
  @ViewChild('header') header!: ElementRef;
  
  isSticky = false;
  isMenuOpen = false;
  private stickyThreshold = 100;

  ngOnInit() {
    this.checkStickyHeader();
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

  // Optional: Close menu when clicking on a link
  onNavLinkClick() {
    if (window.innerWidth <= 768) {
      this.closeMenu();
    }
  }
}
