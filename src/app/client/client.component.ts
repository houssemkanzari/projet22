import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // Importez ActivatedRoute
import { ClientAuthService } from '../client-auth-service.service';
import { VoitureApiService } from './../voiture-api.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  password: string;
  role: any;

  constructor(
    private voitureApiService: VoitureApiService,
    private router: Router,
    private clientAuthService: ClientAuthService,
    private route: ActivatedRoute // Injectez ActivatedRoute ici
  ) { }

  checkRole(): void {
    console.log("Password:", this.password); 
    this.voitureApiService.checkRoleByPassword(this.password)
      .subscribe(
        (response: any) => {
          if (response.hasOwnProperty('role')) {
            this.role = response.role;
            console.log("Role:", this.role);
            
            if (this.role === 'admin') {
              this.router.navigate(['/ad3']); // Redirection vers /footer si le rôle est admin
            } else if (this.role === 'user') {
              this.clientAuthService.setClientLoggedIn(true);
              
              // Obtenir l'ID de la voiture à partir de la route
              const carId = this.route.snapshot.paramMap.get('id');
              this.router.navigate(['/header']); // Redirection vers /header si le rôle est user
            }
          } else {
            console.error("Error occurred:", response.error);
            this.role = "An error occurred";
          }
        },
        (error) => {
          console.error("Error occurred:", error);
          this.role = "An error occurred";
        }
      );
  }
}  