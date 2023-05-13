/*
    Classe de modelo para a resposta 
    do serviço /api/autenticar
*/
export class AutenticarResponse {
    idUsuario: string = '';
    nome: string = '';
    email: string = '';
    accessToken: string = '';
    createdAt: Date | null = null;
    expiration: Date | null = null;
}