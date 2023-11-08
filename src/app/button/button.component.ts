import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientAuthService } from '../client-auth-service.service';
import { VoitureApiService } from '../voiture-api.service';
import { Voiture } from '../models/voiturmodels';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  
  isClientLoggedIn: boolean;
  clientId: number | null;
  voiture: Voiture;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientAuthService: ClientAuthService,
    private voitureApiService: VoitureApiService
  ) {
    this.clientAuthService.isClientLoggedIn$.subscribe(
      isLoggedIn => this.isClientLoggedIn = isLoggedIn
    );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const carId = Number(params.get('id'));
      this.getVoitureDetails(carId);
    });
  }

  onCommandeClick() {
    if (this.isClientLoggedIn) {
      if (this.clientId !== null) {
        // Redirigez vers la page d'en-tête avec l'ID du client dans l'URL
        this.router.navigate(['/check-credentials', this.voiture.id_voiture]);
      }
    } else {
      // Redirigez vers la page de formulaire
      this.router.navigate(['/client']);
    }
  }

  getVoitureDetails(carId: number): void {
    this.voitureApiService.getVoitureDetails(carId).subscribe(
      (voiture: Voiture) => {
        this.voiture = voiture;
      },
      (error) => {
        console.error("Une erreur s'est produite lors de la récupération des détails de la voiture :", error);
      }
    );
  }
}
