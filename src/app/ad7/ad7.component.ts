import { Component } from '@angular/core';

@Component({
  selector: 'app-ad7',
  templateUrl: './ad7.component.html',
  styleUrls: ['./ad7.component.css']
})
export class Ad7Component {
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
