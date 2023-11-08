import { Component } from '@angular/core';
import { VoitureApiService } from '../voiture-api.service';
import { Voiture } from '../models/voiturmodels';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  activeButtonIndex: number | null = null; // Gardera la trace de l'index du bouton actif
  searchCriteria: any = {
    nome: '', // Changez ici en fonction de vos critères de recherche
    prix: '', // Changez ici en fonction de vos critères de recherche
    carberant: '' // Changez ici en fonction de vos critères de recherche
  };
  searchResults: Voiture[];

  constructor(
    private voitureApiService: VoitureApiService,
    private router: Router
  ) {}

  changeColor(buttonIndex: number) {
    if (this.activeButtonIndex === buttonIndex) {
      this.activeButtonIndex = null; // Réinitialise si le même bouton est cliqué à nouveau
    } else {
      this.activeButtonIndex = buttonIndex; // Active le bouton actuel
    }
  }
  searchVoitures() {
    this.voitureApiService.searchVoitures(this.searchCriteria)
      .subscribe((searchResults: Voiture[]) => {
        this.voitureApiService.setSearchResults2(searchResults);

        // Naviguez vers la page des résultats
        this.router.navigate(['/search-results']);
      });
  }
  
}
