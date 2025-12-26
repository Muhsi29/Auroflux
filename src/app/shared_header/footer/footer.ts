import { Component , OnInit, ElementRef, ViewChild, AfterViewInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Optional: Show/hide back-to-top button
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const backToTopBtn = document.querySelector('.back-to-top') as HTMLElement;
    
    if (backToTopBtn) {
      if (scrollPosition > 500) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
      }
    }
  }
}
