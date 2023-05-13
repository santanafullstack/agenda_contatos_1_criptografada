import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { CriarContaRequest } from "../models/criar-conta.request.model";
import { CriarContaResponse } from "../models/criar-conta.response.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CriarContaService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    //POST /api/criar-conta
    post(request: CriarContaRequest): Observable<CriarContaResponse> {
        return this.httpClient.post<CriarContaResponse>
            (environment.apiContatos + '/criar-conta', request);
    }
}