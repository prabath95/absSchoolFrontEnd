import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../../services/subjects.service';

@Component({
  selector: 'app-vie-subjects',
  templateUrl: './vie-subjects.component.html',
  styleUrls: ['./vie-subjects.component.css']
})
export class VieSubjectsComponent implements OnInit {
  subject = [];
  constructor(public subectService:SubjectsService,) { }

  ngOnInit() {
  }
  viewAll(){
    this.subject = [];
    this.subectService.getallSubjects().subscribe((data =>{
      console.log(data);
      for(var i = 0; i< data.length; i++){
        this.subject.push(data[i].subjectName);
      }
    }))
  }
  viewAssigned(){
    this.subject = [];
    var body ={
      "email" : localStorage.getItem("user")
    }
    console.log(body);
    this.subectService.getAssignedSubjects(body).subscribe((data =>{
      console.log(data);
      for(var i = 0; i< data.length; i++){
        this.subject.push(data[i].subjectName);
      }
    }))
  }
}
