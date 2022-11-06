import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClubeFutebol } from 'src/app/model/clube-futebol';
import { ClubeFutebolCludService } from 'src/app/service/admin/clube-futebol-crud.service';

@Component({
  selector: 'app-clube-futebol',
  templateUrl: './clube-futebol.component.html',
  styleUrls: ['./clube-futebol.component.scss']
})
export class ClubeFutebolComponent implements OnInit {

  clubeSelecionado : any=null;
  modoEdicao=false;
  form : FormGroup = this.fb.group({});
  formEnviado=false;
  clubesId=4; // fake incrementados
  clubes : ClubeFutebol[] = [];

  constructor(private fb: FormBuilder,
    private clubeFutebolCrudService: ClubeFutebolCludService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome : ['', [Validators.required]],
      nomeOficial : ['', [Validators.required]],
      nomeTecnicoAtual : ['', [Validators.required]],
      urlLogo : ['', [Validators.required]],
      dataCriacaoClube : ['', []],
      estado : ['', [Validators.required]],
      pais : ['', [Validators.required]],
      ativo : [true, []],
    });
    this.carregarClubes();
  }

  carregarClubes() {
    var s = this.clubeFutebolCrudService.GetClubeFutebolsList();
    s.snapshotChanges().subscribe(data => {
      this.clubes = [];
      data.forEach(item => {
        let a : any = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.clubes.push(a as ClubeFutebol);
        console.log(a);
      });
      console.log("Teste");
    })    
  }

  cadastrar() {
    this.limpaFormCad();    
    this.clubeSelecionado=null;
    this.modoEdicao=true;
    this.formEnviado = false;    
  }

  visualizarDetalhes(clubeFutebol: any) {
    this.clubeSelecionado = clubeFutebol;
    this.form.patchValue({
      nome: clubeFutebol.nome,
      nomeTecnicoAtual: clubeFutebol.nomeTecnicoAtual,
      nomeOficial: clubeFutebol.nomeOficial,
      ativo: clubeFutebol.ativo,
      estado: clubeFutebol.estado,
      pais: clubeFutebol.pais,
      dataCriacao: clubeFutebol.dataCriacaoClube,
      urlLogo: clubeFutebol.urlLogo,
    });
    this.modoEdicao=false;
  }

  editar() {
    this.modoEdicao=true;
    this.formEnviado = false;
  }

  salvar() {
    this.formEnviado = true;
    if (!this.form.valid) {
      return;
    }
    let valores : any = this.form.value;
    if (this.clubeSelecionado == null) {
      let dataCriacaoClube = new Date();
      let clubeNovo = new ClubeFutebol(
        "",
        valores.nome,
        valores.nomeOficial,
        valores.dataCriacaoClube as any,
        valores.urlLogo,
        valores.nomeTecnicoAtual,
        valores.ativo,
        valores.estado,
        valores.pais,
        []
      );
      this.clubes.push( clubeNovo);  
      this.clubeFutebolCrudService.AddClubeFutebol(clubeNovo);   
    } else {
      this.clubeSelecionado.nome = valores.nome;
      this.clubeSelecionado.nomeOficial = valores.nomeOficial;
      this.clubeSelecionado.dataCriacaoClube = valores.dataCriacaoClube;
      this.clubeSelecionado.urlLogo = valores.urlLogo;
      this.clubeSelecionado.nomeTecnicoAtual = valores.nomeTecnicoAtual;
      this.clubeSelecionado.ativo = !!valores.ativo;
      this.clubeSelecionado.estado = valores.estado;
      this.clubeSelecionado.pais = valores.pais;
      this.clubeFutebolCrudService.UpdateClubeFutebol(this.clubeSelecionado, this.clubeSelecionado.id);         
    }
    this.modoEdicao=false;
  }

  remover() {
    this.clubeFutebolCrudService.DeleteClubeFutebol(this.clubeSelecionado.id);
    this.carregarClubes();
  }

  cancelarEdicao() {
    this.modoEdicao=false;
  }

  voltarParaBusca() {
    this.clubeSelecionado = null;
  }

  limpaFormCad() {
    this.form.patchValue({
      nome: "",
      nomeOficial: "",
      telefoneContato: "",
      dataCriacaoClube: "",
      email: "",
      endereco: "",
      ativo: "",
      estado: "",
      pais: "",
      nomeTecnicoAtual: "",
      urlLogo: ""
    });
  }
}
