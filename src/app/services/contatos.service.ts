import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CadastrarContatosRequest } from "../models/cadastrar-contatos.request.model";
import { EditarContatosRequest } from "../models/editar-contatos.request.model";
import { ConsultarContatos } from "../models/consultar-contatos.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ContatosService {


    uri: string = environment.apiContatos + "/contatos";


    constructor(
        private httpClient: HttpClient
    ) {
    }


    post(request: CadastrarContatosRequest): Observable<ConsultarContatos> {
        return this.httpClient.post<ConsultarContatos>(this.uri, request);
    }


    put(request: EditarContatosRequest): Observable<ConsultarContatos> {
        return this.httpClient.put<ConsultarContatos>(this.uri, request);
    }


    delete(idContato: string): Observable<ConsultarContatos> {
        return this.httpClient.delete<ConsultarContatos>(this.uri + "/" + idContato);
    }


    getAll(): Observable<ConsultarContatos[]> {
        return this.httpClient.get<ConsultarContatos[]>(this.uri);
    }


    getById(idContato: string): Observable<ConsultarContatos> {
        return this.httpClient.get<ConsultarContatos>(this.uri + "/" + idContato);
    }


}


