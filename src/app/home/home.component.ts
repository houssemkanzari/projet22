import { Component, OnInit } from '@angular/core';
import { VoitureApiService } from './../voiture-api.service';
import { Revieux } from '../models/revieuxmodelsservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  errorMessage: string | null = null;
  errorMessage2: string | null = null;
  errorMessage3: string | null = null;
  nameInput: string = '';
  emailInput: string = '';
  descriptionInput: string = '';

  constructor(private voitureApiService: VoitureApiService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // Réinitialiser le message d'erreur
    this.errorMessage = null;
    this.errorMessage2 = null;
    this.errorMessage3 = null;

    if (!this.nameInput) {
      this.errorMessage = 'ce champ  ne peut pas être vide.';
      return;
    }

    if (!this.emailInput) {
      this.errorMessage2 = 'Le champ "Email" ne peut pas être vide.';
      return;
    }

  else  if (!this.isValidEmail(this.emailInput)) {
      this.errorMessage2 = 'L\'adresse e-mail doit contenir "@".';
      return;
    }
    if (!this.descriptionInput) {
      this.errorMessage3= 'Le champ "description" ne peut pas être vide.';
      return;
    }

    const revieuxData: Revieux = {
      id: 0, // Assurez-vous de gérer correctement l'ID dans votre backend
      name: this.nameInput,
      email: this.emailInput,
      description: this.descriptionInput
    };

    this.voitureApiService.addRevieux(revieuxData).subscribe(
      (response: Revieux) => {
        console.log('Revieux ajouté avec succès:', response);
        // Réinitialiser le formulaire après l'ajout
        this.resetForm();
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout du revieux:', error);
      }
    );
  }

  resetForm(): void {
    // Réinitialisez les valeurs des champs du formulaire ici
    this.nameInput = '';
    this.emailInput = '';
    this.descriptionInput = '';
  }

  isValidEmail(email: string): boolean {
    // Vérifiez si l'adresse e-mail contient le caractère "@"
    return email.includes('@');
  }
}
