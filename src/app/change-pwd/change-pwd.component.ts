import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InvisionService } from '../invision.service';

@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.css']
})
export class ChangePwdComponent implements OnInit {
  id: any;

  constructor(private fb:FormBuilder,private router:Router, private loginService:InvisionService,) { }
  updateForm!:FormGroup;
  getUser:any;
  password:any;
  resetPassword:any;
  ngOnInit(): void {

    this.getUser=localStorage.getItem("user");

    this.getUser=JSON.parse(this.getUser);
    this.updateForm=this.fb.group({
      
    pwd:this.fb.control(null,[Validators.required]),
    newpwd:this.fb.control(null,Validators.required)
    
    })

    this.loginService.loginCheck().subscribe(data=>{

      for(let i of data){

        if(i.name==this.getUser.name&&i.password==this.getUser.password){

          this.id=i.id;

          break;

        }

        

      }

    })
 }

 checkPwd(){
  this.password = this.updateForm.get('pwd')?.value;
  this.resetPassword = this.updateForm.get('newpwd')?.value;
  if(this.password !== this.resetPassword){
    alert("password doest match")
  }
  
  else{
    alert(
      "Update sucessfull"
    )

    this.loginService.updateUser(this.password,this.getUser.userName,this.id).subscribe();

    this.router.navigate(['/loginpage']);
    // console.log(this.updateForm);
  }
    
}
}
    
  


