import { Component } from '@angular/core';
import { VoitureApiService } from './../voiture-api.service';
import { Voiture } from '../models/voiturmodels';
import { Commende } from '../models/commende';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-check-credentials',
  templateUrl: './check-credentials.component.html',
  styleUrls: ['./check-credentials.component.css']
})
export class CheckCredentialsComponent {
  voiture: Voiture | undefined;
  fullSizeImageIndex: number | null = null;
  fullSizeImage: any;

  constructor(
    private route: ActivatedRoute,
    private voitureApiService: VoitureApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const carId = Number(params.get('id'));
      this.getVoitureDetails(carId);
    });
  }

  getVoitureDetails(carId: number): void {
    this.voitureApiService.getVoitureDetails(carId).subscribe(
      (voiture: Voiture) => { this.voiture = voiture;
        this.voiture.image = 'data:image/jpeg;base64,' + this.voiture.image;
        this.voiture.image2 = 'data:image/jpeg;base64,' + this.voiture.image2; 
        this.voiture.image3 = 'data:image/jpeg;base64,' + this.voiture.image3;
        this.voiture.image4 = 'data:image/jpeg;base64,' + this.voiture.image4;
        this.voiture.image5 = 'data:image/jpeg;base64,' + this.voiture.image5;
        this.voiture.image6 = 'data:image/jpeg;base64,' + this.voiture.image6;
        this.voiture.image7 = 'data:image/jpeg;base64,' + this.voiture.image7;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des détails de la voiture :', error);
      }
    );
}
showFullSizeImage(index: number): void {
  this.fullSizeImageIndex = index;
}
getFullSizeImage(): string | null {
  return this.fullSizeImage ||  (this.voiture ? this.voiture.image : '');
}
setFullSizeImage(image: string): void {
  this.fullSizeImage = image;
}
  newCommende: Commende = new Commende();
  submitCommende() {
    this.voitureApiService.addCommende(this.newCommende)
      .subscribe(
        response => {
          console.log('Commende ajoutée avec succès !', response);
          // Réinitialisez les valeurs après avoir réussi à ajouter la commande
          this.newCommende = new Commende();
        },
        error => {
          console.error('Échec de l\'ajout de la commende', error);
        }
      );
  }
  getEmailLink(): void {
    const subject = 'Détails de la voiture';
    const body = `Je voulais partager les détails de cette voiture avec toi: ${window.location.href}`;
    const emailLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailLink;
  }
  
  printPage(): void {
    window.print();
  }
  
  shareOnFacebook(): void {
    const currentURL = window.location.href;
    const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}`;
    window.open(facebookShareURL, '_blank');
  }
  scrollToTop(): void {
    // Vérifier si l'utilisateur est déjà en haut de la page
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  showScrollToTopButton(): boolean {
    return window.scrollY > 0;
  }
  
}
