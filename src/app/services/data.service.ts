import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private URL = "http://localhost:3000/cards/"

  constructor(
    private http: Http,
  ) { }

  getCards(){
    return this.http.get(this.URL).map((response: Response)=> response.json());
  }

  getCard(id: number){
    return this.http.get(`${this.URL}/${id}`).map((response: Response)=> response.json());
  }

}
