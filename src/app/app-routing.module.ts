import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { HeaderComponent } from './header/header.component'; 
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenComponent } from './men/men.component';
import { FooterComponent } from './footer/footer.component';
import { CarmodelComponent } from './carmodel/carmodel.component';
import { BodyComponent } from './body/body.component';
import { Body2Component } from './body2/body2.component';
import { TouscardsComponent } from './touscards/touscards.component';
import { SlidComponent } from './slid/slid.component';
import { ExComponent } from './ex/ex.component';
import { CarCountComponentComponent } from './car-count-component/car-count-component.component';
import { DetailComponent } from './detail/detail.component';
import { ButtonComponent } from './button/button.component';
import { FormulComponent } from './formul/formul.component';
import { CheckCredentialsComponent } from './check-credentials/check-credentials.component';
import { ClientComponent } from './client/client.component';
import { SlComponent } from './sl/sl.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchResultsComponentComponent } from './search-results-component/search-results-component.component';
import { Sidbar2Component } from './sidbar2/sidbar2.component';
import { Serche2Component } from './serche2/serche2.component'; 
import { ImComponent } from './im/im.component';
import { DasComponent } from './das/das.component';
import { CcComponent } from './cc/cc.component';
import { TestemComponent } from './testem/testem.component';
import { ChargeurComponent } from './chargeur/chargeur.component';
import { FfComponent } from './ff/ff.component';
import { ImagComponent } from './imag/imag.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { Ad2Component } from './ad2/ad2.component';
import { CommandeChartComponent } from './commande-chart/commande-chart.component';
import { Add3Component } from './add3/add3.component';
import { Ad3Component } from './ad3/ad3.component';
import { Add4Component } from './add4/add4.component';
import { Ad5Component } from './ad5/ad5.component';
import { Ad6Component } from './ad6/ad6.component';
import { Ad7Component } from './ad7/ad7.component';
import { ClComponent } from './cl/cl.component';
import { Cl2Component } from './cl2/cl2.component';
import { Cl3Component } from './cl3/cl3.component';
import { Cl4Component } from './cl4/cl4.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'men', component: MenComponent },
  { path: 'footer',component:FooterComponent },
  { path: 'carmodel',component:CarmodelComponent},
  { path: 'body',component:BodyComponent},
  { path: 'body2',component:Body2Component},
  { path: 'touslescards',component:TouscardsComponent},
  { path: 'slid',component:SlidComponent},
  { path:  'ex',component:ExComponent},
  { path: 'car',component:CarCountComponentComponent},
  { path: 'voiture-details/:id', component: DetailComponent },
  { path:'ButtonComponent', component:ButtonComponent},
  { path:'formul',component:FormulComponent},
  { path: 'check-credentials/:id', component: CheckCredentialsComponent },
  { path: 'client',component:ClientComponent},
  { path: 'sl',component:SlComponent},
  { path: 'search-results', component: SearchResultsComponent },
  {path: 'ras',component: SearchResultsComponentComponent},
  {path: 'Sidbar2',component: Sidbar2Component},
  {path:'s2',component:Serche2Component},
  { path:'im',component:ImComponent},
  { path:'das',component:DasComponent},
  { path:'cc',component:CcComponent},
  { path:'test',component:TestemComponent},
  { path:'ch',component:ChargeurComponent},
  { path:'ff',component:FfComponent},
  { path:'im2',component:ImagComponent},
  { path:'ad',component:AddVoitureComponent},
  { path:'ad2',component:Ad2Component},
  { path:'can',component:CommandeChartComponent},
  { path:'add3',component:Add3Component},
  { path:'ad3',component:Ad3Component},
  { path:'ad4',component:Add4Component},
  { path:'ad5',component:Ad5Component},
  { path:'ad6',component:Ad6Component},
  { path:'ad7',component:Ad7Component},
  { path:'ad8',component:ClComponent},
  { path:'ad10',component:Cl2Component},
  { path:'ad11',component:Cl3Component},
  { path:'cl4',component:Cl4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }