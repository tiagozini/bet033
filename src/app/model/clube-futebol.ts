import { Jogador } from "./jogador";
export class ClubeFutebol {
    id: string;
    nome: string;
    nomeOficial: string;
    dataCriacaoClube: any;
    urlLogo: string;
    nomeTecnicoAtual:string;
    jogadoresAtuais: Jogador[];
    ativo: boolean;
    estado: string;
    pais: string;

    constructor( id: string, nome: string, nomeOficial: string, dataCriacaoClube: any, urlLogo: string, 
        nomeTecnicoAtual:string, ativo: boolean, estado: string, pais: string, jogadoresAtuais: Jogador[]) {
        this.nome = nome;
        this.nomeOficial = nomeOficial;
        this.id = id;
        this.dataCriacaoClube = dataCriacaoClube;
        this.urlLogo = urlLogo;
        this.nomeTecnicoAtual = nomeTecnicoAtual;
        this.ativo = ativo;
        this.jogadoresAtuais =  jogadoresAtuais;
        this.estado = estado;
        this.pais = pais;
    }
}

