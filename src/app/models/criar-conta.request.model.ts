/* 
    Classe de modelo para a requisição 
    do serviço /api/criar-conta
*/
export class CriarContaRequest {
    nome: string = '';
    email: string = '';
    senha: string = '';
}