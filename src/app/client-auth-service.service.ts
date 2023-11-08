import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientAuthService {

  private isClientLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isClientLoggedIn$: Observable<boolean> = this.isClientLoggedInSubject.asObservable();

  constructor() { }

  setClientLoggedIn(value: boolean) {
    this.isClientLoggedInSubject.next(value);
  }
}
