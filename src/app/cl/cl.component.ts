import { Component, OnInit } from '@angular/core';
import { VoitureApiService } from '../voiture-api.service';

@Component({
  selector: 'app-cl',
  templateUrl: './cl.component.html',
  styleUrls: ['./cl.component.css']
})
export class ClComponent implements OnInit {
  activeButtonIndex: number | undefined;
  displayedClient: any[] = [];
  clients: any[] = [];

  constructor(private voitureApiService: VoitureApiService) { }

  ngOnInit() {
    this.loadClients();
  }

  private loadClients() {
    this.voitureApiService.getClients().subscribe(
      (clients) => {
        this.clients = clients;
        this.displayedClient = this.clients.slice(0, 5);
      },
      (error) => {
        console.error('Erreur lors de la récupération des clients :', error);
      }
    );
  }

  onButtonClick(index: number): void {
    this.activeButtonIndex = index;

    if (index === 1) {
      this.displayedClient = this.clients.slice(0, 5);
    } else if (index === 2) {
      this.displayedClient = this.clients.slice(8, 15);
    } else if (index === 3) {
      this.displayedClient = this.clients.slice(15, 30);
    }
  }

  onSelectOption(event: any): void {
    const selectedOption = event.target.value;

    if (selectedOption === 'option1') {
      this.displayedClient = this.clients.slice(0, 5);
    } else if (selectedOption === 'option2') {
      this.displayedClient = this.clients.slice(0, 5);
    }
  }
}
