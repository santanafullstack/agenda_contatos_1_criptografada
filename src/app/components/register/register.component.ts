import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordMatchValidator } from 'src/app/validators/password-match.validator';
import { CriarContaService } from 'src/app/services/criar-conta.service';
import { CriarContaRequest } from 'src/app/models/criar-conta.request.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  //atributos
  mensagem: string = '';

  //método construtor
  constructor(
    private criarContaService: CriarContaService,
    private spinner: NgxSpinnerService
  ) {
  }

  //estrutura do formulário
  formRegister = new FormGroup({
    //campo 'nome'
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(150)
    ]),
    //campo 'email'
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    //campo 'senha'
    senha: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{}|\\,./?]).{8,20}$/)
    ]),
    senhaConfirmacao: new FormControl('', [
      Validators.required
    ])
  }, {
    //incluindo as validações customizadas do formulário
    validators: [
      PasswordMatchValidator.MatchPassword
    ]
  });

  //função para verificar a validação dos campos
  get form(): any {
    //retornar todos os controles do formulário (FormControl)
    return this.formRegister.controls;
  }

  //função para capturar o SUBMIT do formulário
  onSubmit(): void {

    this.spinner.show();

    const criarContaRequest: CriarContaRequest = {
      nome: this.formRegister.value.nome as string,
      email: this.formRegister.value.email as string,
      senha: this.formRegister.value.senha as string
    };

    this.criarContaService.post(criarContaRequest)
      .subscribe({ //capturando o retorno (promisse) da API
        next: (data) => { //obtendo a resposta de sucesso da API          
          this.mensagem = `Parabéns ${data.nome}, sua conta foi criada com sucesso!`;
          this.formRegister.reset(); //limpar os campos do formulário
        },
        error: (e) => { //obtendo a resposta de erro da API
          this.mensagem = e.error.message;
        }
      })
      .add(() => {
        this.spinner.hide();
      })

  }

}
