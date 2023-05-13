import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutenticarService } from 'src/app/services/autenticar.service';
import { AutenticarRequest } from 'src/app/models/autenticar.request.model';
import { AutenticarHelper } from 'src/app/helpers/autenticar.helper';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //atributos
  mensagem: string = '';

  //método construtor
  constructor(
    private autenticarService: AutenticarService,
    private autenticarHelper: AutenticarHelper,
    private spinner: NgxSpinnerService
  ) {
  }

  //estrutura de formulário
  formLogin = new FormGroup({
    //campo 'email'
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    //campo 'senha'
    senha: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{}|\\,./?]).{8,20}$/)
    ])
  });

  //função para verificar a validação dos campos
  get form(): any {
    //retornar os controles do formulário (FormControl)
    return this.formLogin.controls;
  }

  //função para capturar o SUBMIT do formulário
  onSubmit(): void {

    this.spinner.show();

    const autenticarRequest: AutenticarRequest = {
      email: this.formLogin.value.email as string,
      senha: this.formLogin.value.senha as string
    };

    this.autenticarService.post(autenticarRequest)
      .subscribe({
        next: (data) => {
          this.autenticarHelper.signIn(data);
          window.location.href = '/dashboard';
        },
        error: (e) => {
          this.mensagem = e.error.message;
        }
      })
      .add(() => {
        this.spinner.hide();
      })
  }
}
