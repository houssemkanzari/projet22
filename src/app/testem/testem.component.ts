import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-testem',
  templateUrl: './testem.component.html',
  styleUrls: ['./testem.component.css']
})
export class TestemComponent {
  items = [
    {
      title: 'Kanzari houssem',
      description: `As a car enthusiast, I'm always looking for unique vehicles.
      sikipon auto was able to meet my expectations with their exceptional selection of classic cars.
      Their knowledgeable team guided me through the process. I am delighted with my new acquisition!`,
    },
    {
      title: 'Ben ali emna ',
      description: `I bought my first car from Sikipon Auto and I am extremely satisfied with their service.
      The team was very professional and took the time to answer all my questions.
      The car I chose was in excellent condition and suited my needs perfectly.`
   
    },
    {
      title: 'Ferchichi feres',
      description: `I was impressed with the variety of quality cars offered by Sikipon Auto.
      Their team helped me find the perfect car for me based on my preferences and budget.
      I highly recommend their services to all car enthusiasts.`,
      imageSrc: 'path-to-image-3.jpg'
    },
    {
      title: 'Ibtihel ghanmi',
      description: `I am extremely satisfied with the services of Sikipon Auto. The process of buying my new car
      was smooth and hassle-free thanks to their knowledgeable and professional team. I recommend Sikipon Auto to anyone
      seeks an exceptional car buying experience.`,
      imageSrc: 'path-to-image-4.jpg'
    },

  ];
  currentIndex = 0;
  itemsPerSlide = 2;
  totalPagesToShow = 2;
  activeSlide = 0;
  prevActiveSlide: number | null = null;

  @ViewChild('cardContainer') cardContainerRef!: ElementRef;

  ngAfterViewInit(): void {
    this.updateCardContainerPosition();
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCardContainerPosition();
    }
  }

  nextSlide(): void {
    if (this.currentIndex + this.itemsPerSlide < this.items.length) {
      this.currentIndex++;
      this.updateCardContainerPosition();
    }
  }

  updateCardContainerPosition(): void {
    const cardContainer = this.cardContainerRef.nativeElement as HTMLElement;
    cardContainer.style.transform = `translateX(-${this.currentIndex * (100 / this.itemsPerSlide)}%)`;
  }

  goToSlide(index: number): void {
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
    const total = Math.ceil(this.items.length / this.itemsPerSlide);
    const activePageIndex = this.activeSlide;
    const firstPageIndex = Math.max(0, activePageIndex - Math.floor(this.totalPagesToShow / 2));
    const lastPageIndex = Math.min(total - 1, firstPageIndex + this.totalPagesToShow - 1);

    return Array.from({ length: lastPageIndex - firstPageIndex + 1 }, (_, index) => firstPageIndex + index);
  }
}
