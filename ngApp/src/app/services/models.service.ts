import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor(private _http: HttpClient) { }

  getAllModels(url){
    return this._http.get<any>(url);
  }
}
