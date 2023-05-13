import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContatosService } from 'src/app/services/contatos.service';
import { EditarContatosRequest } from 'src/app/models/editar-contatos.request.model';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-editar-contatos',
  templateUrl: './editar-contatos.component.html',
  styleUrls: ['./editar-contatos.component.css']
})
export class EditarContatosComponent implements OnInit {


  mensagem: string = '';


  constructor(
    private activatedRoute: ActivatedRoute,
    private contatosService: ContatosService,
    private spinner: NgxSpinnerService
  ) {
  }


  formEdicao = new FormGroup({
    idContato: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(150)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl('', [Validators.required])
  });


  get form(): any {
    return this.formEdicao.controls;
  }


  ngOnInit(): void {


    //capturando o parâmetro :id enviado pela url
    const idContato = this.activatedRoute.snapshot.paramMap.get('id') as string;


    //buscando o registro do contato através do id
    this.spinner.show();
    this.contatosService.getById(idContato)
      .subscribe({
        next: (data) => {
          //preencher o formulário com os dados do contato
          this.formEdicao.patchValue(data);
        },
        error: (e) => {
          console.log(e.error);
        }
      })
      .add(() => {
        this.spinner.hide();
      })
  }


  onSubmit(): void {


    this.spinner.show();


    const request: EditarContatosRequest = {
      idContato: this.formEdicao.value.idContato as string,
      nome: this.formEdicao.value.nome as string,
      email: this.formEdicao.value.email as string,
      telefone: this.formEdicao.value.telefone as string
    };


    this.contatosService.put(request)
      .subscribe({
        next: (data) => {
          this.mensagem = `Contato ${data.nome}, atualizado com sucesso.`;
        },
        error: (e) => {
          this.mensagem = "Falha ao editar o contato.";
          console.log(e.error);
        }
      })
      .add(() => {
        this.spinner.hide();
      })
  }


}






