import { Voiture } from "../models/voiturmodels";
import { VoitureApiService } from "../voiture-api.service";
import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  totalVoitures: number = 15;
  displayedVoitures: Voiture[] = [];
  numberOfVoituresToShow: number = 5;
  searchResults: any;

  constructor(private voitureApiService: VoitureApiService) {}

  currentPage: number = 1;

  ngOnInit(): void {
    this.searchResults = this.voitureApiService.getSearchResults2();
    this.searchResults.forEach((voiture: Voiture) => {
      voiture.image = 'data:image/jpeg;base64,' + voiture.image;
    });
    this.updateDisplayedVoitures();
  }

  onButtonClick(): void {
    if (this.displayedVoitures.length < this.totalVoitures) {
      const startIndex = this.displayedVoitures.length;
      const endIndex = Math.min(startIndex + this.numberOfVoituresToShow, this.totalVoitures);

      this.displayedVoitures = this.displayedVoitures.concat(this.searchResults.slice(startIndex, endIndex));
    }
  }

  updateDisplayedVoitures(): void {
    const itemsPerPage = 5;
    const startIndex = (this.currentPage - 1) * itemsPerPage;
    this.displayedVoitures = this.searchResults.slice(startIndex, startIndex + itemsPerPage);
  }
}
