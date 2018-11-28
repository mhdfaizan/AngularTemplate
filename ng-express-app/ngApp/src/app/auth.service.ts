import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) { }

  registerUser(user){
    //return this.http.post<any>(this._registerUrl, user);
    let result = new Observable(
      (done) => {
        done.next({answer : "TING!!! REGISTERED SUCCESSFULLY"});
        done.complete();
      });  
    return result;
  }

  loginUser(user){
    //return this.http.post<any>(this._loginUrl, user);
    let result = new Observable(
      (done) => {
        if(user.email == 'mohammad.faizan@inseyab.com')
          done.next({answer : "TING!!! LOGGED IN SUCCESSFULLY"});
        else if(user.email == 'agile.faizan@gmail.com')
          done.next({answer : "EHHHH!!! INVALID CREDS!"});
        
        done.complete();
      });  
    return result;
  }
}
