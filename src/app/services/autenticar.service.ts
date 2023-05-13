import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AutenticarRequest } from "../models/autenticar.request.model";
import { AutenticarResponse } from "../models/autenticar.response.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AutenticarService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    //POST /api/autenticar
    post(request: AutenticarRequest): Observable<AutenticarResponse> {
        return this.httpClient.post<AutenticarResponse>
            (environment.apiContatos + "/autenticar", request);
    }
}