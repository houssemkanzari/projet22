import { Component } from '@angular/core';

@Component({
  selector: 'app-sidbar2',
  templateUrl: './sidbar2.component.html',
  styleUrls: ['./sidbar2.component.css']
})
export class Sidbar2Component {

  isSidebarActive = false;

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }
  closeSidebar(): void {
    if (this.isSidebarActive) {
      this.isSidebarActive = false;
    }
  }
}
