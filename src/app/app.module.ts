import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar'  
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list';
import { MenComponent } from './men/men.component';
import { FooterComponent } from './footer/footer.component';
import { CarmodelComponent } from './carmodel/carmodel.component';
import { BodyComponent } from './body/body.component';
import { Body2Component } from './body2/body2.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { TouscardsComponent } from './touscards/touscards.component';
import { SlidComponent } from './slid/slid.component';
import { FormsModule } from '@angular/forms'; 
import {register} from 'swiper/element/bundle';
import { ExComponent } from './ex/ex.component';
import { CarCountComponentComponent } from './car-count-component/car-count-component.component';
import { DetailComponent } from './detail/detail.component'
import { VoitureApiService } from './voiture-api.service';
import { ButtonComponent } from './button/button.component';
import { FormulComponent } from './formul/formul.component';
import { CheckCredentialsComponent } from './check-credentials/check-credentials.component';
import { ClientComponent } from './client/client.component';
import { SlComponent } from './sl/sl.component';
import { SearchResultsComponentComponent } from './search-results-component/search-results-component.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { Sidbar2Component } from './sidbar2/sidbar2.component';
import { Serche2Component } from './serche2/serche2.component';
import { ImComponent } from './im/im.component';
import { DasComponent } from './das/das.component';
import { CcComponent } from './cc/cc.component';
import { TestemComponent } from './testem/testem.component';
import { ChargeurComponent } from './chargeur/chargeur.component';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { FfComponent } from './ff/ff.component';
import { ImagComponent } from './imag/imag.component';
import { DciComponent } from './dci/dci.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { Ad2Component } from './ad2/ad2.component';
import { CommandeChartComponent } from './commande-chart/commande-chart.component';
import { ChartModule } from 'angular-highcharts';
import * as Highcharts from 'highcharts/highstock';
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







     

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    MenComponent,
    FooterComponent,
    CarmodelComponent,
    BodyComponent,
    Body2Component,

    TouscardsComponent,
    SlidComponent,
    ExComponent,
    CarCountComponentComponent,
    DetailComponent,
    ButtonComponent,
    FormulComponent,

    CheckCredentialsComponent,
     ClientComponent,
     SlComponent,
     SearchResultsComponentComponent,
     SearchResultsComponent,
     Sidbar2Component,
     Serche2Component,
     ImComponent,
     DasComponent,
    
     CcComponent,
          TestemComponent,
          ChargeurComponent,
          FfComponent,
          ImagComponent,
          DciComponent,
          AddVoitureComponent,
          Ad2Component,
          CommandeChartComponent,
          Add3Component,
          Ad3Component,
          Add4Component,
          Ad5Component,
          Ad6Component,
          Ad7Component,
          ClComponent,
          Cl2Component,
          Cl3Component,
          Cl4Component,
    
   
   
    
    
    
   
  ],
  imports: [
 

  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ChartModule
   
  ],
  providers: [
    VoitureApiService,

  ],
    
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
