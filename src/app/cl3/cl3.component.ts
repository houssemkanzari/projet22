import { Component, OnInit } from '@angular/core';
import { VoitureApiService } from '../voiture-api.service';

@Component({
  selector: 'app-cl3',
  templateUrl: './cl3.component.html',
  styleUrls: ['./cl3.component.css']
})
export class Cl3Component implements OnInit {
  revieux: any[] = [];
  displayedrevieux: any[] = [];
  activeButtonIndex: number | undefined;
  constructor(private voitureApiService: VoitureApiService) { }

  ngOnInit(): void {
    this.loadRevieux();
  }

  loadRevieux(): void {
    this.voitureApiService.getrevieux().subscribe(
      (data) => {
        this.revieux = data;
        this.displayedrevieux = this.revieux.slice(0, 5);
      },
      (error) => {
        console.error('Erreur lors de la récupération des avis (revieux) :', error);
      }
    );
  }
  
  onButtonClick(index: number): void {
    this.activeButtonIndex = index;

    if (index === 1) {
      this.displayedrevieux = this.revieux.slice(0, 5);
    } else if (index === 2) {
      this.displayedrevieux = this.revieux.slice(8, 15);
    } else if (index === 3) {
      this.displayedrevieux = this.revieux.slice(15, 30);
    }
  }
  onSelectOption(event: any): void {
    const selectedOption = event.target.value;

    if (selectedOption === 'option1') {
      this.displayedrevieux = this.revieux.slice(0, 5);
    } else if (selectedOption === 'option2') {
      this.displayedrevieux = this.revieux.slice(0, 5);
    }
  }
}
