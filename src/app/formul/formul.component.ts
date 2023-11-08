import { Component } from '@angular/core';
import { VoitureApiService } from './../voiture-api.service';
import { client } from '../models/client';
import { ClientAuthService } from '../client-auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-formul',
  templateUrl: './formul.component.html',
  styleUrls: ['./formul.component.css']
})
export class FormulComponent {
  errorMessage: string | null = null;
  errorMessage55: string | null = null;
  errorMessage3: string | null = null;
  errorMessage6: string | null = null;
  errorMessage7: string | null = null;
  nom: string = '';
  prenom: string = '';
  email: string = '';
  paswword: string = '';
  confermpassword: string = '';
  active: boolean = false;
  role: string = 'user';

   namePattern = /^[A-Za-z]+$/; // Déplacez la déclaration ici
 

  constructor(
    private voitureApiService: VoitureApiService,
    private router: Router,
    private route: ActivatedRoute, // Injectez ActivatedRoute
    private clientAuthService: ClientAuthService,
  ) {}

  onSubmit(): void {
    this.errorMessage = null;
    this.errorMessage55 = null;
    this.errorMessage3= null;
    this.errorMessage6= null;
    this.errorMessage7= null;
    if (!this.nom) {
      this.errorMessage = 'Ce champ ne peut pas être vide.';
      return;
    }
    if (!this.namePattern.test(this.nom)) {
      this.errorMessage = 'Le nom ne doit contenir que des lettres.';
      return;
    }
    if(!this.prenom){
      this.errorMessage55='Ce champ ne peut pas être vide.';
    }
   else if (!this.namePattern.test(this.prenom)) {
      this.errorMessage55 = 'Le prenom ne doit contenir que des lettres.';
      return;
    }
    if(!this.email){
      this.errorMessage3="Ce champ ne peut pas être vide.";
    }
    else  if (!this.isValidEmail(this.email)) {
      this.errorMessage3 = 'L\'adresse e-mail doit contenir "@".';
      return;
    }
    if (this.paswword){
      this.errorMessage6="Ce champ ne peut pas être vide.";
    }
    if(this.confermpassword){
      this.errorMessage7="Ce champ ne peut pas être vide.";
    }
    const newClient: client = {
      id_client: 0,
      nom: this.nom,
      prenom: this.prenom,
  
      email: this.email,
      paswword: this.paswword,
      confermpassword: this.confermpassword,
      active: this.active,
      role: this.role
    };

    this.voitureApiService.registerClient(newClient).subscribe(
      (addedClient: client) => {
        console.log('Client ajouté avec succès:', addedClient);
        this.clientAuthService.setClientLoggedIn(true);
        // Réinitialisez les champs après l'ajout
        this.resetFields();
        const carId = this.route.snapshot.paramMap.get('id'); // Utilisez ActivatedRoute pour obtenir l'ID de la voiture
        this.router.navigate(['/header']);
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout du client:', error);
      }
    );
  }

  resetFields(): void {
    this.nom = '';
    this.prenom = '';
    this.email = '';
    this.paswword = '';
    this.confermpassword = '';
    this.active = false;
    this.role = 'user';
  }
  isValidEmail(email: string): boolean {
    // Vérifiez si l'adresse e-mail contient le caractère "@"
    return email.includes('@');
  }

}
