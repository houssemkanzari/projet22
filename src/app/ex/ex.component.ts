import { Component, OnInit } from '@angular/core';
import { Voiture } from '../models/voiturmodels';
import { VoitureApiService } from './../voiture-api.service';

@Component({
  selector: 'app-ex',
  templateUrl: './ex.component.html',
  styleUrls: ['./ex.component.css']
})
export class ExComponent implements OnInit {
  ngOnInit(): void {
     
    this.getAllVoitures();  
  }
  voitures: Voiture[] = [];

  constructor(private VoitureApiService: VoitureApiService) { }

  getAllVoitures(): void {
    this.VoitureApiService.getAllVoitures().subscribe(
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
  getImageUrl(imageUrl: string): string {
    return `assets/images/${imageUrl}`;
  }

}
