import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../../services/subjects.service';
import { LoginService } from '../../services/login.service';
import { error } from 'selenium-webdriver';
import swal from 'sweetalert2'
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-assign-subject',
  templateUrl: './assign-subject.component.html',
  styleUrls: ['./assign-subject.component.css']
})
export class AssignSubjectComponent implements OnInit {

  subject = [];
  subjectS:any;
  studentCode:any;
  students =  [];

  constructor(public subectService:SubjectsService, public loginService:LoginService) { 
    this.getallSubjects();
    this.getallStudents();
  }

  ngOnInit() {

  }
  getallSubjects(){
    this.subectService.getallSubjects().subscribe((data =>{
      for(var i = 0; i< data.length; i++){
        this.subject.push(data[i].subjectName);
      }
    }))
  }
  getallStudents(){
    this.loginService.getAllStudents().subscribe((data =>{
      for(var a = 0; a< data.length; a++){
        this.students.push(data[a].Email);
      }
    }))
  }

  assign(){
    var body={
      "studentEmail" : this.studentCode,
      "subjectName" : this.subjectS
    };
    console.log(body);
    this.subectService.assignSubject(body)
    .subscribe((data)=>{
      if(data.success){
        swal("success", data.msg, "success");
      }
      else{
        swal("Ops!", data.msg, "error");
      }
    })
  }
}
