import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminsComponent } from '../admins/admins.component';
import { SuperAdminsComponent } from '../super-admins/super-admins.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user="Jane Done";
  cross='cross';
  hide:boolean=true;
 
  
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  transform(){
    if(this.cross==='cross'){
      this.cross='plus';
      this.hide=false;
     
    }
    else if(this.cross==='plus'){
      this.cross='cross';
      this.hide=true;
      
    }
  }

  superadmin(){
    this.dialog.open(SuperAdminsComponent,{height:'480px',width:'950px'});
  }

  admin(){
    this.dialog.open(AdminsComponent,{height:'480px',width:'950px'});
  }

}
