import { Component, OnInit } from '@angular/core';
import { VoitureApiService } from '../voiture-api.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-cc',
  templateUrl: './cc.component.html',
  styleUrls: ['./cc.component.css']
})
export class CcComponent implements OnInit {
  carCount1: number = 1;
  currentNumber1: number = 1;
  carCount2: number = 1;
  currentNumber2: number = 1;
  visitorCount: number = 0;
  currentVisitorNumber: number = 0;

  constructor(private voitureApiService: VoitureApiService) {}

  ngOnInit(): void {
    this.initializeAnimations();
    this.fetchCarCounts();
    this.incrementVisitorCount();
  }

  private initializeAnimations(): void {
    AOS.init();
  }

  private fetchCarCounts(): void {
    this.fetchCarCount1();
    this.fetchCarCount2();
    this.fetchVisitorCount();
  }

  private fetchCarCount1(): void {
    this.voitureApiService.getVoitureCount().subscribe(
      (count: number) => {
        this.carCount1 = count;
        this.animateNumbers1();
      },
      (error) => {
        console.error('Error fetching car count:', error);
      }
    );
  }

  private fetchCarCount2(): void {
    this.voitureApiService.getrevieuxcoungt().subscribe(
      (count: number) => {
        this.carCount2 = count;
        this.animateNumbers2();
      },
      (error) => {
        console.error('Error fetching car count:', error);
      }
    );
  }

  private animateNumbers1(): void {
    const interval1 = setInterval(() => {
      if (this.currentNumber1 < this.carCount1) {
        this.currentNumber1 += 1;
      } else {
        clearInterval(interval1);
      }
    }, 20);
  }

  private animateNumbers2(): void {
    const interval2 = setInterval(() => {
      if (this.currentNumber2 < this.carCount2) {
        this.currentNumber2 += 1;
      } else {
        clearInterval(interval2);
      }
    }, 20);
  }
  private fetchVisitorCount(): void {
    const storedCount = localStorage.getItem('visitorCount');
    if (storedCount) {
      this.visitorCount = parseInt(storedCount);
      this.animateVisitorCount();
    }
  }
  private animateVisitorCount(): void {
    const intervalVisitor = setInterval(() => {
      if (this.currentVisitorNumber < this.visitorCount) {
        this.currentVisitorNumber += 1;
      } else {
        clearInterval(intervalVisitor);
      }
    }, 20);
  }

  private incrementVisitorCount(): void {
    const storedCount = localStorage.getItem('visitorCount');
    if (storedCount) {
      this.visitorCount = parseInt(storedCount);
    }
    this.visitorCount++;
    localStorage.setItem('visitorCount', this.visitorCount.toString());
  }
}
