import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, ToastrModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(
    private authenService: AuthenticationService,
    private route: Router,
    private toastr: ToastrService
  ) {}
  err: any;
  handleSubmit(form: NgForm) {
    this.authenService
      .register(form.value.email, form.value.password)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.toastr.success('Register!', 'Register Succesfully!');
          localStorage.setItem('token', data.access_token);
          this.route.navigate(['/home']);
        },
        (error) => {
          this.err = error;
          console.log(this.err);
        }
      );
  }
}
