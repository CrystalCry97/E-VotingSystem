import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import {Candidate} from './candidate';
import 'rxjs/add/operator/map';

@Injectable()
export class CandidateService {

  constructor(private http: Http) { }

  //retrieve ContactService

  getCandidates(){
    return this.http.get('http://localhost:8080/api/candidates').map(res=> res.json());
  }

  //add contact method
  addCandidate(newCandidate){
    var headers= new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/api/candidate',newCandidate,{headers:headers}).map(res=> res.json());
  }

  //delete method
  deleteCandidate(id){
    return this.http.delete('http://localhost:8080/api/candidate/'+id).map(res => res.json());
  }

}
