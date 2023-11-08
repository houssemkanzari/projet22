export class Commende {
    id_commende: number;
    datecommende: string; // Changez le type si nécessaire
    CIN: number;
    tel: number;
    nom: String;
    prenom: String ;
    email: String ;
  
    constructor(data: any = {}) {
      this.datecommende = data.datecommende || '';
      this.CIN = data.CIN || 0;
      this.tel = data.tel || 0;
      this.nom = data.nom || "";
      this.prenom = data.prenom || "";
      this.email = data.email || "";
    }
  }
  