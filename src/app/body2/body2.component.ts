import { Component } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import * as AOS from 'aos';

@Component({
  selector: 'app-body2',
  templateUrl: './body2.component.html',
  styleUrls: ['./body2.component.css']
})
export class Body2Component {
 
  ngOnInit(): void {
    AOS.init();   
  }
  faCheckCircle = faCheckCircle;
}