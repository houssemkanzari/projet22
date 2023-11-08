import { Component } from '@angular/core';

@Component({
  selector: 'app-ad5',
  templateUrl: './ad5.component.html',
  styleUrls: ['./ad5.component.css']
})
export class Ad5Component {
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
