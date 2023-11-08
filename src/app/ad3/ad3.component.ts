import { Component } from '@angular/core';

@Component({
  selector: 'app-ad3',
  templateUrl: './ad3.component.html',
  styleUrls: ['./ad3.component.css']
})
export class Ad3Component {
  scrollToTop(): void {
    // Vérifier si l'utilisateur est déjà en haut de la page
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  showScrollToTopButton(): boolean {
    return window.scrollY > 0;
  }
}
