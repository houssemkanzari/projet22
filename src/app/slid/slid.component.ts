import { Component, OnInit } from '@angular/core';
import { VoitureApiService } from './../voiture-api.service';
import { Voiture } from '../models/voiturmodels';

@Component({
  selector: 'app-slid',
  templateUrl: './slid.component.html',
  styleUrls: ['./slid.component.css']
})
export class SlidComponent implements OnInit {
  voitures: Voiture[] = [];
  displayedVoitures: Voiture[] = [];
  currentIndex = 0;
  itemsPerSlide = 1;
  totalPagesToShow = 5; // Modifiez cette valeur selon vos besoins
  activeSlide: number = 0;

  constructor(private voitureApiService: VoitureApiService) {}

  ngOnInit(): void {
    this.voitureApiService.getFeaturedVoitures().subscribe(
      (data: Voiture[]) => {
        this.voitures = data;
        this.voitures.forEach(voiture => {
          voiture.image = 'data:image/jpeg;base64,' + voiture.image;
        });
        this.updateDisplayedVoitures();
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des voitures :', error);
      }
    );
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.itemsPerSlide;
      this.updateDisplayedVoitures();
      this.updateActiveSlide();
    }
  }

  nextSlide(): void {
    if (this.currentIndex + this.itemsPerSlide < this.voitures.length) {
      this.currentIndex += this.itemsPerSlide;
      this.updateDisplayedVoitures();
      this.updateActiveSlide();
    }
  }

  updateDisplayedVoitures(): void {
    this.displayedVoitures = this.voitures.slice(
      this.currentIndex,
      this.currentIndex + this.itemsPerSlide
    );
  }

  goToSlide(index: number): void {
    this.currentIndex = index * this.itemsPerSlide;
    this.updateDisplayedVoitures();
    this.updateActiveSlide();
  }

  totalPages(): number[] {
    const total = Math.ceil(this.voitures.length / this.itemsPerSlide);
    return Array.from({ length: total }, (_, index) => index);
  }

  updateActiveSlide(): void {
    this.activeSlide = Math.floor(this.currentIndex / this.itemsPerSlide);
  }
}
