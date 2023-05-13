import { Component, OnInit } from '@angular/core';
import { AutenticarHelper } from 'src/app/helpers/autenticar.helper';
import { AutenticarResponse } from 'src/app/models/autenticar.response.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //atributos
  autenticarResponse: AutenticarResponse | null = null;

  constructor(
    private autenticarHelper: AutenticarHelper,
    private spinner: NgxSpinnerService
  ) {
  }

  /*
    Método executado sempre que o 
    componente for carregado (load)
  */
  ngOnInit(): void {
    this.autenticarResponse = this.autenticarHelper.getData();
  }

  /*
    Método para realizar o logout do usuário
  */
  logout(): void {
    if (window.confirm('Deseja realmente sair do sistema?')) {
      this.spinner.show();
      this.autenticarHelper.signOut();
      window.location.href = '/';
    }
  }

}
