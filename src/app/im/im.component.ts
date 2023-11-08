import { Component } from '@angular/core';

@Component({
  selector: 'app-im',
  templateUrl: './im.component.html',
  styleUrls: ['./im.component.css']
})
export class ImComponent {
 
    videoVisible = false;
  
    toggleVideo() {
      this.videoVisible = !this.videoVisible;
    }
  }

