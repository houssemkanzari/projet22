import { Component, OnInit } from '@angular/core';
import { VoitureApiService } from '../voiture-api.service';

@Component({
  selector: 'app-ad6',
  templateUrl: './ad6.component.html',
  styleUrls: ['./ad6.component.css']
})
export class Ad6Component implements OnInit {
  activeButtonIndex: number | undefined;
  displayedCommandes: any[] = []; 
  commandes: any[] = [];
  

  constructor(private voitureApiService: VoitureApiService) { }

  ngOnInit(): void {
    this.loadCommandes();
  }

  onButtonClick(index: number): void {
    this.activeButtonIndex = index;

    if (index === 1) {
      this.displayedCommandes = this.commandes.slice(0, 15);
      this.loadAllCommandes();
    } else if (index === 2) {
      this.displayedCommandes = this.commandes.slice(8, 15);
    } else if (index === 3) {
      this.displayedCommandes = this.commandes.slice(15, 30);
    }
  }
  
  onSelectOption(event: any): void {
    const selectedOption = event.target.value;
    
    if (selectedOption === 'option1') {
      this.displayedCommandes = this.commandes.slice(0, 5);
    } else if (selectedOption === 'option2') {
      this.displayedCommandes = this.commandes.slice(0, 5);
    }
  }

  private loadCommandes() {
    this.voitureApiService.getCommandes().subscribe(
      (commandes) => {
        this.commandes = commandes;
        this.displayedCommandes   = this.commandes.slice(0, 5); 
      },
      (error) => {
        console.error('Erreur lors de la récupération des commandes :', error);
      }
    );
  }

  private loadAllCommandes() {

}
}
