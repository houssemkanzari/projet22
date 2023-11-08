import { Component } from '@angular/core';
import * as AOS from 'aos';
import { VoitureApiService } from './../voiture-api.service';
import { Voiture } from '../models/voiturmodels';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  activeButtonIndex: number | undefined;
  ngOnInit(): void {
    AOS.init(); 
    this.getAllVoitures();  
  }
  voitures: Voiture[] = [];

  constructor(private voitureApiService: VoitureApiService) { }

  getAllVoitures(): void {
    this.voitureApiService.getAllVoitures().subscribe(
      (data: Voiture[]) => {
        this.voitures = data;
        this.voitures.forEach(voiture => {
          voiture.image = 'data:image/jpeg;base64,' + voiture.image;
        });
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des voitures :', error);
      }
    );
      
    
  }

  onButtonClick(index: number): void {
    this.activeButtonIndex = index; // Mettre à jour l'index du bouton actif
  
    if (index === 0) {
      // Réinitialiser la liste des voitures (afficher toutes les voitures)
      this.getAllVoitures();
    } else if (index === 1) {
      // Code pour le bouton "New cars"
      this.voitureApiService.getVoituresAfterYear2020().subscribe(
        (data: Voiture[]) => {
          this.voitures = data; // Mettre à jour la liste avec les nouvelles voitures
          this.voitures.forEach(voiture => {
            voiture.image = 'data:image/jpeg;base64,' + voiture.image;
          });
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la récupération des nouvelles voitures :', error);
        }
      );
    } else if (index === 2) {
      // Code pour le bouton "Best cars"
      this.voitureApiService.getAllVoitures().subscribe(
        (data: Voiture[]) => {
          this.voitures = data; // Mettre à jour la liste avec les meilleures voitures
          this.voitures.forEach(voiture => {
            voiture.image = 'data:image/jpeg;base64,' + voiture.image;
          });
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la récupération des meilleures voitures :', error);
        }
      );
    }
  }
  getImageUrl(imageUrl: string): string {
    return `assets/images/${imageUrl}`;
  }
  

}