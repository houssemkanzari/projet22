import { Component, OnInit } from '@angular/core';
import { VoitureApiService } from './../voiture-api.service';

@Component({
  selector: 'app-car-count-component',
  templateUrl: './car-count-component.component.html',
  styleUrls: ['./car-count-component.component.css']
})
export class CarCountComponentComponent implements OnInit {

  carCount: number = 0;

  constructor(private VoitureApiService: VoitureApiService) {}

  ngOnInit(): void {
    this.fetchCarCount();
  }

  fetchCarCount(): void {
    this.VoitureApiService.getVoitureCount().subscribe(
      (count: number) => {
        this.carCount = count;
      },
      (error) => {
        console.error('Error fetching car count:', error);
      }
    );
  }
}
