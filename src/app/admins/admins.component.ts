import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvisionService } from '../invision.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

addForm!:FormGroup
details !:any;
admin:any;
  formValue: any;
  constructor(private fb:FormBuilder,private addService:InvisionService) { }


  ngOnInit(): void {
    this.addForm=this.fb.group({
      name:this.fb.control(null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      empId:this.fb.control(null,Validators.required),
      mailId:this.fb.control(null,Validators.required)
    })
    this.getDetails();
    
  }

  addAdmin(){
    const admin={
      name:this.addForm.get('name')?.value,
      empId:this.addForm.get('empId')?.value,
      mailId:this.addForm.get('mailId')?.value
    }
    this.addService.postAdmin(admin).subscribe(data=>{
      this.getDetails();
  })
  }

  deleteAdmin(details:any){
    this.addService.deleteAdmin(details.id).subscribe((data)=>{
      this.getDetails();
    })

  }

  getDetails(){
    this.addService.getAdmin().subscribe(data=>{
      this.details=data;
      console.log(this.details)
    })
  }

  
}
