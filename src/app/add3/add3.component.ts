import { Component, OnInit } from '@angular/core';
import { VoitureApiService } from '../voiture-api.service';
import { Commende } from '../models/commende';
@Component({
  selector: 'app-add3',
  templateUrl: './add3.component.html',
  styleUrls: ['./add3.component.css']
})
export class Add3Component implements OnInit {
  voitureCount: number;
  nombreTotalCommandes: number;
  revieuxCount: number;
  dernieresCommandes: Commende[]; // Assurez-vous d'importer la classe Commande si ce n'est pas déjà fait

  constructor(private voitureApiService: VoitureApiService) { }

  ngOnInit() {
    this.loadVoitureCount();
    this.loadNombreTotalCommandes();
    this.loadRevieuxCount();
    this.loadDernieresCommandes();
  }

  private loadVoitureCount() {
    this.voitureApiService.getVoitureCount().subscribe(
      (count) => {
        this.voitureCount = count;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre de voitures :', error);
      }
    );
  }

  private loadNombreTotalCommandes() {
    this.voitureApiService.getNombreTotalCommandes().subscribe(
      (total) => {
        this.nombreTotalCommandes = total;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre total de commandes :', error);
      }
    );
  }

  private loadRevieuxCount() {
    this.voitureApiService.getrevieuxcoungt().subscribe(
      (count) => {
        this.revieuxCount = count;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre de revieux :', error);
      }
    );
  }

  private loadDernieresCommandes() {
    this.voitureApiService.getCommandes().subscribe(
      (data) => {
        // Limitez les résultats aux 5 premières commandes
        this.dernieresCommandes = data.slice(0, 9);
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des commandes :', error);
      }
    );
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
