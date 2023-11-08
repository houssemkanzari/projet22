import { Component, OnInit } from '@angular/core';
import { VoitureApiService } from './../voiture-api.service';
@Component({
  selector: 'app-add4',
  templateUrl: './add4.component.html',
  styleUrls: ['./add4.component.css']
})
export class Add4Component implements OnInit {
  activeButtonIndex: number | undefined;
  voitures: any[] = []; // Remplacez "any" par le type correct de vos données de voiture
  displayedVoitures: any[] = [];
 

  constructor(private voitureApiService: VoitureApiService) { }

  ngOnInit(): void {
    this.getAllVoitures(); 
  }

  getAllVoitures(): void {
    this.voitureApiService.getAllVoitures().subscribe(
      (data: any[]) => {
        this.voitures = data;
        this.displayedVoitures = this.voitures.slice(0, 5); 
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
    this.activeButtonIndex = index;
    if (index === 1) {
 
    this.displayedVoitures = this.voitures.slice(0, 7);  
  }
  else if (index === 2) {
    this.displayedVoitures = this.voitures.slice(8, 15); 
    
  }else if (index === 3) {

    this.displayedVoitures = this.voitures.slice(15, 30); 
  }
  }
  onSelectOption(event: any): void {
    const selectedOption = event.target.value;
    
   
    if (selectedOption === 'option1') {
      this.displayedVoitures = this.voitures.slice(0, 5);//methode en cours de travaille 
    } else if (selectedOption === 'option2') {
      this.displayedVoitures = this.voitures.slice(4, 9);
    }}
   
  }