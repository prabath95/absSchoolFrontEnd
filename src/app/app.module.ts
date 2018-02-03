import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from '../app/router'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from "@clr/angular";
import { HttpModule } from '@angular/http';

import { LoginService } from '../app/services/login.service';
import { SubjectsService } from '../app/services/subjects.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationBuilder } from '@angular/platform-browser/animations/src/animation_builder';
import { SignupComponent } from './signup/signup.component';
import { StudentComponent } from './student/student.component';
import { VieSubjectsComponent } from './student/vie-subjects/vie-subjects.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { AddsubjectComponent } from './administrator/addsubject/addsubject.component';
import { AssignSubjectComponent } from './administrator/assign-subject/assign-subject.component';
import { HeaderComponent } from './shared/header/header.component';
import { AdminNavComponent } from './shared/admin-nav/admin-nav.component';
import { StudentNavComponent } from './shared/student-nav/student-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    VieSubjectsComponent,
    AdministratorComponent,
    AddsubjectComponent,
    AssignSubjectComponent,
    HeaderComponent,
    AdminNavComponent,
    StudentNavComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ClarityModule,
    HttpModule
  ],
  providers: [LoginService,SubjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
