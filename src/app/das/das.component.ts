import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VoitureApiService } from '../voiture-api.service';
import { Voiture } from '../models/voiturmodels';

@Component({
  selector: 'app-das',
  templateUrl: './das.component.html',
  styleUrls: ['./das.component.css']
})
export class DasComponent implements OnInit {
  @ViewChild('cardContainer') cardContainerRef!: ElementRef;

  voitures: any[] = [];
  displayedVoitures: any[] = [];
  currentIndex = 0;
  itemsPerSlide = 4;
  activeSlide: number = 0;
  prevActiveSlide: number | null = null;
  totalPagesToShow = 3;

  constructor(private voitureApiService: VoitureApiService) { }

  ngOnInit(): void {
    this.getVoituresPrixSuperieurA();
  }

  ngAfterViewInit(): void {
    this.updateCardContainerPosition();
  }

  getVoituresPrixSuperieurA(): void {
    this.voitureApiService.getVoituresPrixSuperieurA().subscribe(
      (data: Voiture[]) => {
        this.voitures = data;
        this.updateDisplayedVoitures();
        this.voitures.forEach(voiture => {
          voiture.image = 'data:image/jpeg;base64,' + voiture.image;
        });
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des voitures :', error);
      }
    );
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.itemsPerSlide;
      this.updateCardContainerPosition();
      this.updateDisplayedVoitures();
    }
  }

  nextSlide(): void {
    if (this.currentIndex + this.itemsPerSlide < this.voitures.length) {
      this.currentIndex += this.itemsPerSlide;
      this.updateCardContainerPosition();
      this.updateDisplayedVoitures();
    }
  }

  updateDisplayedVoitures(): void {
    this.displayedVoitures = this.voitures.slice(this.currentIndex, this.currentIndex + this.itemsPerSlide);
  }

  updateCardContainerPosition(): void {
    const cardContainer = this.cardContainerRef.nativeElement as HTMLElement;
    cardContainer.style.transform = `translateX(-${this.currentIndex * 9.333}%)`; // Adjust based on your layout
  }

  goToSlide(index: number) {
    if (index === this.activeSlide) {
      // Même puce de pagination cliquée, aucune action nécessaire
      return;
    } else if (index < this.activeSlide) {
      this.prevSlide();
    } else if (index > this.activeSlide) {
      this.nextSlide();
    }

    if (this.prevActiveSlide !== null) {
      this.prevActiveSlide = this.activeSlide;
    }
    this.activeSlide = index;
  }

  totalPages(): number[] {
    const total = Math.ceil(this.voitures.length / this.itemsPerSlide);
    const activePageIndex = this.activeSlide;
    const firstPageIndex = Math.max(0, activePageIndex - Math.floor(this.totalPagesToShow / 2));
    const lastPageIndex = Math.min(total - 1, firstPageIndex + this.totalPagesToShow - 1);

    return Array.from({ length: lastPageIndex - firstPageIndex + 1 }, (_, index) => firstPageIndex + index);
  }
}