import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DefaultTitleStrategy, Router } from '@angular/router';
import { InvisionService } from '../invision.service';



@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  login: any = false
  loginForm!: FormGroup

  constructor(private fb: FormBuilder,
    private loginService: InvisionService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({

      userName: this.fb.control(null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),

      password: this.fb.control(null, [Validators.required]),

    });
  }
  onSubmit() {

    localStorage.setItem("user", (JSON.stringify(this.loginForm.value)))

    this.loginService.getdetails().subscribe((data) => {
      // console.log(data);
      for (let details of data) {
        if ((this.loginForm.get('userName')?.value == details.userName) &&
          this.loginForm.get('password')?.value == details.password) {
          this.login = true;
          //   console.log("success");
          break;
        }
      }
      if (this.login === true) {
        this.router.navigate(['/home']);

      }
      
      else {
        alert("No matches found");
      }
    })

    
  }

}
