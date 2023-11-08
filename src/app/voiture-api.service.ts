import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voiture } from '../app/models/voiturmodels'; 
import { Revieux } from './models/revieuxmodelsservice'; 
import { client } from './models/client' ;
import { Commende } from './models/commende';

@Injectable({
  providedIn: 'root'
})
export class VoitureApiService {
  searchResults: Voiture[];
  getSearchResults(): Voiture[] {
    throw new Error('Method not implemented.');
  }
  setSearchResults(searchResults: Voiture[]) {
    throw new Error('Method not implemented.');
  }
  setSearchCriteria(searchCriteria: any) {
    throw new Error('Method not implemented.');
  }
  addClient(newClient: client) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:8080';
  private apiUrl = this.baseUrl;

  
  constructor(private http: HttpClient) { }

  getAllVoitures(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(`${this.baseUrl}/getAllVoitures`);
  }
  getCommandes(): Observable<Commende[]> {
    return this.http.get<Commende[]>(`${this.baseUrl}/commende`);
  }
  getClients():Observable<client[]>{
    return this.http.get<client[]>(`${this.baseUrl}/getcl`)
  }
  getrevieux():Observable<Revieux[]>{
    return this.http.get<Revieux[]>(`${this.baseUrl}/getrevieux`)
  }
  getVoituresAfterYear2020(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(`${this.baseUrl}/voitures-after-year-2020`);
  }

  getFeaturedVoitures(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(`${this.baseUrl}/featured-voitures`);
  }

  getVoitureCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/voiture-count`);
  }

getrevieuxcoungt(): Observable<number>{
  return this.http.get<number>(`${this.baseUrl}/revieux-count`);
}
  getVoitureDetails(id: number): Observable<Voiture> {
    return this.http.get<Voiture>(`${this.baseUrl}/findByidVoiture/${id} `);
  }
  
  addRevieux(revieux: Revieux): Observable<Revieux> {
    return this.http.post<Revieux>(`${this.baseUrl}/addrevieux`, revieux);
  }
  registerClient(newClient: client): Observable<client> {
    return this.http.post<client>(`${this.baseUrl}/add`, newClient);
  }
  checkRoleByPassword(password: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/check-role/${password}`);
  }
  getVoituresPrixSuperieurA(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(`${this.apiUrl}/prix-superieur`);
  }
  addCommende(commende: Commende): Observable<Commende> {
    return this.http.post<Commende>(`${this.baseUrl}/addc`, commende);
  }
  

  setSearchResults2(results: Voiture[]) {
    this.searchResults = results;
  }
  getSearchResults2(): Voiture[] {
    return this.searchResults;
  }

  searchVoitures(criteria: any): Observable<Voiture[]> {
    let params = new HttpParams();

    if (criteria.nome) {
      params = params.set('nome', criteria.nome);
    }

    if (criteria.prix) {
      params = params.set('prix', criteria.prix);
    }

    if (criteria.carberant) {
      params = params.set('carberant', criteria.carberant);
    }

    return this.http.get<Voiture[]>(`${this.baseUrl}/search-voitures`, { params });
  }
  searchVoitures2(criteria: any): Observable<Voiture[]> {
    let params = new HttpParams();

    if (criteria.nome) {
      params = params.set('nome', criteria.nome);
    }

    if (criteria.prix) {
      params = params.set('prix', criteria.prix);
    }

    if (criteria.nbport) {
      params = params.set('nbport', criteria.nbport);
    }

    if (criteria.transmission) {
      params = params.set('transmission', criteria.transmission);
    }

    if (criteria.couleure) {
      params = params.set('couleure', criteria.couleure);
    }

    if (criteria.carberant) {
      params = params.set('carberant', criteria.carberant);
    }

    if (criteria.km) {
      params = params.set('km', criteria.km);
    }

    if (criteria.sylendre) {
      params = params.set('sylendre', criteria.sylendre);
    }

    if (criteria.vin) {
      params = params.set('vin', criteria.vin);
    }

    if (criteria.exterieur) {
      params = params.set('exterieur', criteria.exterieur);
    }

    if (criteria.option) {
      params = params.set('option', criteria.option);
    }

    return this.http.get<Voiture[]>('http://localhost:8080/search2', { params });
  }
  addVoiture(voitureData: FormData): Observable<any> {
    const url = `${this.baseUrl}/addf`;
    return this.http.post(url, voitureData);
  }
  getNombreTotalCommandes(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/nombre-total`);
  }

} 

