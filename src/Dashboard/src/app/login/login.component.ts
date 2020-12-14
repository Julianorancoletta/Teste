import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';
import { Login } from '../models/usuario/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login = {} as Login;
  email = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  doLogin(form: NgForm) {
    this.loginService.login(this.login).subscribe(
      (res) => {
        this.loginService.setEmail(res['usuario']);
        this.loginService.setToken(res.token);
        // this.loginService.setToken(res.)
        this.email = res.email;
        this.router.navigate(['/home']);
        this.toastr.success('Login realizado com sucesso!');
      },
      (err) => {
        this.toastr.error('Ocorreu um erro com o Login, tente novamente!');
      }
    );
  }
}
