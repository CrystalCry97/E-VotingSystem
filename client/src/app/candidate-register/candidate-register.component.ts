import {Component, OnInit } from '@angular/core';
import {CandidateService} from '../candidate.service';
import {Candidate} from '../candidate';

@Component({
  selector: 'app-candidate-register',
  templateUrl: './candidate-register.component.html',
  styleUrls: ['./candidate-register.component.css'],
  providers: [CandidateService]
})
export class CandidateRegisterComponent implements OnInit {

  candidates: Candidate[];
  candidate: Candidate;
  cName: string;
  cEmail: string;
  cMatric: string;
  cClass: string;
  cOrganization: string;
  cPosition: string;
  cPassword: string;

  constructor(private candidateService: CandidateService) { }

  addCandidate(){
    const newCandidate= {
      cName: this.cName,
      cEmail: this.cEmail,
      cMatric: this.cMatric,
      cClass: this.cClass,
      cOrganization: this.cOrganization,
      cPosition: this.cPosition,
      cPassword: this.cPassword

    }
    this.candidateService.addCandidate(newCandidate).subscribe( candidate =>{
      this.candidates.push(candidate);
      this.candidateService.getCandidates().subscribe( candidates => this.candidates = candidates);
    });
  }

  deleteCandidate(id:any)
  {
    var candidates = this.candidates;
    this.candidateService.deleteCandidate(id).subscribe(data =>{
      if(data.n==1){
        for(var i=0; i<candidates.length;i++){
          if (candidates[i]._id == id){
            candidates.splice(i,1);
          }
        }
      }
    })
  }

  ngOnInit() {
    this.candidateService.getCandidates().subscribe( candidates => this.candidates = candidates);
  }

}