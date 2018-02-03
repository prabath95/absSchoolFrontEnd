import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../../services/subjects.service';
import swal from 'sweetalert2'
import { Router } from "@angular/router";

@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {
  sCode:any;
  sName:any;
  subject:any
  constructor(public subjectService:SubjectsService,public router:Router) { }

  ngOnInit() {

  }
  addSubject(){
    this.subject = {
      "subjectCode" : this.sCode,
      "subjectName" : this.sName
    }
    this.subjectService.post(this.subject)
    .subscribe((data)=>{
      if(data.success){
        swal("Sucess", data.msg, "success");
      }else{
        swal("Ops!", data.msg, "error");
      }
    },(err)=>{
      swal("Ops!", "Subject Creation Failed", "error");
    });
  }
}
