import { Component, ViewChild, ElementRef } from '@angular/core';
import { VoitureApiService } from './../voiture-api.service';
import { Voiture } from '../models/voiturmodels';
import { km } from 'date-fns/locale';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-ad2',
  templateUrl: './ad2.component.html',
  styleUrls: ['./ad2.component.css']
})
export class Ad2Component {
 
  voiture: Voiture = {
    id_voiture: 0,
    nome: '',
    couleure: '',
    carberant: '',
    prix: 0,
    km: 0,
    puissance_fiscale: 0,
    datemiseenventDate:"",
    qentiterenstock: 0,
    transmission: '',
    sylendre: '',
    vieux: '',
    vieuxx: '',
    tag: '',
    datesercul: "",
    drivetype: '',
    nbport: 0,
    vin: '',
    description: '',
    option: '',
    optionnational: '',
    exterieur: '',
    security: '',
    image: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    image6: null,
    image7: null
  };
  voitureImageSrc: any;

  constructor(private voitureApiService: VoitureApiService ) { }

  onFileChange(event: any, field: keyof Voiture) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      (this.voiture[field] as any) = file;
    }
  }

  onSubmit() {
    const formData = new FormData();
    
    // Ajoutez les champs individuels
    formData.append('id_voiture', this.voiture.id_voiture.toString());
    formData.append('nome', this.voiture.nome);
    formData.append('option', this.selectedOptions.join(', '));
    formData.append('optionnational', this.selectedOptionnational.join(', '));
    formData.append('security', this.selectedSecurity.join(', '));
    formData.append('exterieur', this.selectedExterieur.join(', '));
    formData.append('tag', this.selectedTag);
    formData.append('couleure', this.selectedCouleur);
    formData.append('carberant', this.selectedCarberant);
    formData.append('km', this.selectedkm.toString());
    formData.append(' puissance_fiscale', this.selectedPuissanceFiscale.toString());
    formData.append('transmission', this.selectedTransmission);
    formData.append('sylendre', this.selectedSylendre);
    formData.append('drivetype', this.selectedDrivetype);
    formData.append('nbport', this.selectedNbporte.toString());
    formData.append('datesercul', this.selectedDatesercule);
    formData.append('datemiseenventDate', this.selectedDatemiseenventDate);
    formData.append('vin', this.voiture.vin);
    formData.append('prix', this.selectedPrix.toString());
    formData.append('description', this.voiture.description);
    formData.append('vieux', this.voiture.vieux);
    formData.append('vieuxx', this.voiture.vieuxx);
    

    // Ajoutez les fichiers d'image
    formData.append('imageFile1', this.voiture.image);
    formData.append('imageFile2', this.voiture.image2);
    formData.append('imageFile3', this.voiture.image3);
    formData.append('imageFile4', this.voiture.image4);
    formData.append('imageFile5', this.voiture.image5);
    formData.append('imageFile6', this.voiture.image6);
    formData.append('imageFile7', this.voiture.image7);
    // Ajoutez les autres fichiers d'image ici...

    this.voitureApiService.addVoiture(formData).subscribe(
      (response) => {
        console.log('Voiture ajoutée avec succès', response);
        this.resetForm();
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la voiture', error);
      }
    );
  }

  
  onOptionCheckboxChange(option: string, event: any) {
    if (event.target.checked) {
        if (this.selectedOptions.length < 4) {
            this.selectedOptions.push(option);
        } else {
            // Si l'utilisateur a déjà sélectionné 4 options, décochez la case
            event.target.checked = false;
        }
    } else {
        const index = this.selectedOptions.indexOf(option);
        if (index >= 0) {
            this.selectedOptions.splice(index, 1);
        }
    }
}
resetSelectedOptions() {
  this.selectedOptions = [];
}
resetSelectedOptions2() {
  this.selectedOptionnational = [];
}
resetselectedSecurity(){
  this.selectedSecurity = [];
}
resetselectedExterieur(){
  this.selectedExterieur = [];
}
onOptionCheckboxChange2(optionnational: string, event: any) {
  if (event.target.checked) {
    if (this.selectedOptionnational.length < 4) {
      this.selectedOptionnational.push(optionnational);
    } else {
      event.target.checked = false;
    }
  } else {
    const index = this.selectedOptionnational.indexOf(optionnational);
    if (index >= 0) {
      this.selectedOptionnational.splice(index, 1);
    }
  }
}
onSecurityCheckboxChange(security: string, event: any) {
  if (event.target.checked) {
    if (this.selectedSecurity.length < 5) {
      this.selectedSecurity.push(security);
    } else {
      // If the user has already selected 5 security options, uncheck the checkbox
      event.target.checked = false;
    }
  } else {
    const index = this.selectedSecurity.indexOf(security);
    if (index >= 0) {
      this.selectedSecurity.splice(index, 1);
    }
  }
}
onSecurityCheckboxChange2(exterieur: string, event: any) {
  if (event.target.checked) {
    if (this.selectedExterieur.length < 5) {
      this.selectedExterieur.push(exterieur);
    } else {
      // If the user has already selected 5 security options, uncheck the checkbox
      event.target.checked = false;
    }
  } else {
    const index = this.selectedExterieur.indexOf(exterieur);
    if (index >= 0) {
      this.selectedExterieur.splice(index, 1);
    }
  }
}

  selectedTag: string = ''; 
  Tags: string[] = ['FEATURED','SPECIAL']; 
  selectedCouleur: string = ''; //
  couleurs: string[] = ['red', 'black','green','white'];
  selectedCarberant: string = '';
  Carberants: String[] =['diasel','essance','electrique'];
  selectedkm: number = 0;
  selectedPuissanceFiscale: number = 0; 
  selectedTransmission: string = '';
  transmitions: string[] =['auto','manuell','semi-auto'];
  selectedSylendre: string='';
  sylenders: string[] =['2 celynder', '3 celynder', '4 celynder', '5 celynder'];
  selectedDrivetype: string = '';
  drivestype: string[] =['2*2','4*4'];
  selectedNbporte: number =0;
  selectedDatesercule: string='';
  datesercules: string[] = ['2015','2016','2017','2018','2020','2021','2022','2023','2024'];
  selectedDatemiseenventDate: string = '';
  datedemisenvent: string[] = ['2015','2016','2017','2018','2020','2021','2022','2023','2024'];
  selectedPrix: number = 0;
  selectedOptions: string[] = [];
  options: string[] = ['Air conditioning', 'Navigation system', 'Leather seats', 'Sunroof','Toit ouvrant panoramique',' Caméra de recul'];
  selectedOptionnational: string[] = [];
  optionnational: string[] = ['Cruise Control', 'Automatic Emergency Braking','Lane Departure Warning','Adaptive Headlights','Blind Spot Monitoring' ];
  selectedSecurity: string[] = [];
  securityOptions: string[] = ['Anti-lock Braking System', 'Airbags', 'Alarm System', 'Keyless Entry'];
  selectedExterieur: string[] = [];
  exterieurs: string[]=['Panoramic sunroof','LED headlights','Alloy wheels','Power-adjustable mirrors','Front and rear parking sensors'];

  resetForm() {

    this.voiture = {
      id_voiture: 0,
      nome: '',
      couleure: '',
      carberant: '',
      prix: 0,
      km: 0,
      puissance_fiscale: 0,
      datemiseenventDate: "",
      qentiterenstock: 0,
      transmission: '',
      sylendre: '',
      vieux: '',
      vieuxx: '',
      tag: '',
      datesercul: "",
      drivetype: '',
      nbport: 0,
      vin: '',
      description: '',
      option: '',
      optionnational: '',
      exterieur: '',
      security: '',
      image: null,
      image2: null,
      image3: null,
      image4: null,
      image5: null,
      image6: null,
      image7: null
    };
  }

}
