import { AbstractControl } from "@angular/forms";

/*
    Classe de validação customizada para comparar
    os campos 'senha' e 'senhaConfirmacao'
*/
export class PasswordMatchValidator {

    static MatchPassword(abstractControl: AbstractControl) {

        //capturar o campo 'senha' do formulário
        let senha = abstractControl.get('senha')?.value;
        //capturar o campo 'senhaConfirmacao' do formulário
        let senhaConfirmacao = abstractControl.get('senhaConfirmacao')?.value;

        //verificar se os campos estão com valores diferentes
        if (senha != senhaConfirmacao) {
            //gerar um erro de validação no campo 'senhaConfirmacao'
            abstractControl.get('senhaConfirmacao')?.setErrors({
                //nome do erro atribuido ao campo
                matchPassword: true
            });
        }

        return null; //vazio (não há erros de validação)
    }
}