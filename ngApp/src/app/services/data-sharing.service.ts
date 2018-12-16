import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private messageSource : BehaviorSubject<string[]>;
  currentMessage;

  constructor() { 
    this.messageSource = <BehaviorSubject<string[]>> new BehaviorSubject([]);
    this.currentMessage = this.messageSource.asObservable();
  }

  changeMessage(message) {
    this.messageSource.next(message);
  }
}
