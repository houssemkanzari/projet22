import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  menuItems = [
    'Loan Calculator',
    'Compare',
    'Contact',
    'Faq',
    'Log In',
    'Sign up',
    'Service',
    'Terms & Condition'
  ];
  isSidebarOpen = false;
  clientId: number | null;
  items: any;
  showSpinner: boolean;
  showloaders: boolean;
  serviceChargement: any;
  dataService: any;

 
  
  ngOnInit(): void {
 
    }
  


  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  scrollToTop(): void {
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  showScrollToTopButton(): boolean {
    return window.scrollY > 0;
  }
}
