import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  static dataUrl = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http : HttpClient) { }
  
  getData(){
    return this.http.get(DataServiceService.dataUrl)
  }
}
