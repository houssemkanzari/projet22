import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-ff',
  templateUrl: './ff.component.html',
  styleUrls: ['./ff.component.css']
})
export class FfComponent  implements OnInit{
  ngOnInit(): void {
    Aos.init();
  }
}
