import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'; //import for routing

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CandidateRegisterComponent } from './candidate-register/candidate-register.component';
import { VoterRegisterComponent } from './voter-register/voter-register.component';
import { CandidateLoginComponent } from './candidate-login/candidate-login.component';
import { VoterLoginComponent } from './voter-login/voter-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    CandidateRegisterComponent,
    VoterRegisterComponent,
    CandidateLoginComponent,
    VoterLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      
      {
        path:'about',
        component: AboutComponent
      },
      {
        path:'candidateRegister',
        component: CandidateRegisterComponent
      },
      {
        path:'candidateLogin',
        component:CandidateLoginComponent
      },
      {
        path:'**',
        component: HomeComponent
      }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
