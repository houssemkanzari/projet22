import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-carmodel',
  templateUrl: './carmodel.component.html',
  styleUrls: ['./carmodel.component.css']
})
export class CarmodelComponent implements OnInit {
  imagePath: string = '../assets/image/cfc.PNG'; // Utilisation de 'string' au lieu de 'String'
  
  ngOnInit(): void {
    AOS.init();
  }
}
