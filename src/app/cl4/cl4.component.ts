import { Component } from '@angular/core';

@Component({
  selector: 'app-cl4',
  templateUrl: './cl4.component.html',
  styleUrls: ['./cl4.component.css']
})
export class Cl4Component {
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
