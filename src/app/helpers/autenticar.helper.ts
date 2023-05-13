import { Injectable } from "@angular/core";
import { AutenticarResponse } from "../models/autenticar.response.model";

@Injectable({
    providedIn: 'root'
})
export class AutenticarHelper {

    auth_usuario: string = 'auth_usuario';

    /*
        método para receber os dados do usuário
        autenticado e grava-los em local storage
    */
    signIn(response: AutenticarResponse): void {
        const data = JSON.stringify(response);
        localStorage.setItem(this.auth_usuario, data);
    }

    /*
        método para verificar se o usuário
        está autenticado
    */
    isSignedIn(): boolean {
        return localStorage.getItem(this.auth_usuario) != null;
    }

    /*
        método para retornar os dados
        gravados na local storage
    */
    getData(): AutenticarResponse | null {
        let data = localStorage.getItem(this.auth_usuario);
        if (data != null)
            return JSON.parse(data) as AutenticarResponse;
        else
            return null;
    }

    /*
        método para apagar o conteúdo
        gravado na local storage
    */
    signOut(): void {
        localStorage.removeItem(this.auth_usuario);
    }

}