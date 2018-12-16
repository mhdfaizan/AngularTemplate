import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(private _http: HttpClient) { }

  getAllProfiles(url){
    return this._http.get<any>(url);
  }
}
