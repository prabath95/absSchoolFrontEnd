import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from "@angular/router";
import swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:any;
  password:any;
  user:any;
  constructor(private loginService:LoginService,public router:Router) { }

  ngOnInit() {
  }
  login(){
    this.user = {
      "Email" : this.username,
      "password" : this.password
    }
    this.loginService.post("user/login",this.user)
    .subscribe((data)=>{
      if(data.success){
        if(data.role=="student"){
        this.router.navigateByUrl('/student');
        localStorage.setItem("user",data.user);
        window.location.reload();
        }else{
          this.router.navigateByUrl('/administrator');
        }
      }else{
        swal("Ops!", data.msg, "error");
      }
    },(err)=>{
      swal("Ops!", "Login Fail", "error");
    });
  }

}
