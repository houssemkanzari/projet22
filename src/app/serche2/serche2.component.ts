import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importez Router depuis '@angular/router'
import { VoitureApiService } from '../voiture-api.service';
import { Voiture } from '../models/voiturmodels';

@Component({
  selector: 'app-serche2',
  templateUrl: './serche2.component.html',
  styleUrls: ['./serche2.component.css']
})
export class Serche2Component implements OnInit {
  
  searchCriteria: any = {  rangeValue: 50}; 
  showAdvancedInputs: boolean;

  constructor(
    private voitureApiService: VoitureApiService,
    private router: Router // Injectez Router
  ) {}

  ngOnInit(): void {}

  searchVoitures2() {
    this.voitureApiService.searchVoitures2(this.searchCriteria)
      .subscribe((searchResults: Voiture[]) => {
        this.voitureApiService.setSearchResults2(searchResults);

        // Naviguez vers la page des résultats
        this.router.navigate(['/search-results']);
      });
  }
  toggleAdvancedInputs() {
    this.showAdvancedInputs = !this.showAdvancedInputs;
  }
}
