import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gerenciamento-vendedor',
  templateUrl: './gerenciamento-vendedor.component.html',
  styleUrls: ['./gerenciamento-vendedor.component.scss']
})
export class GerenciamentoVendedorComponent implements OnInit {

  vendedorSel : any=null;
  modoEdicao=false;
  form : FormGroup = this.fb.group({});
  formEnviado=false;
  vendedoresId=4; // fake incrementados

  vendedores = [
    {nome:"João da Silva", telefoneContato: "55 33771798", email:"joao.silva@getnet.com.br", id:1, "endereco":"av. Um, 1"},
    {nome:"Pedro da Silva", telefoneContato: "55 33773454", email:"pedro.silva@getnet.com.br", id:2, "endereco":"av. Dez, 1"},
    {nome:"Paulo da Costa", telefoneContato: "55 33771778", email:"paulo.silva@getnet.com.br", id:3, "endereco":"av. Dois, 1"}
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome : ['', [Validators.required]],
      telefoneContato : ['', [Validators.required]],
      email : ['', [Validators.required]],
      endereco : ['', [Validators.required]]
    });
  }

  cadastrarVendedor() {
    this.limpaFormCad();    
    this.vendedorSel=null;
    this.modoEdicao=true;
    this.formEnviado = false;    
  }

  visualizarVendedor(vendedor: any) {
    this.vendedorSel = vendedor;
    this.form.patchValue({
      nome: vendedor.nome,
      telefoneContato: vendedor.telefoneContato,
      email: vendedor.email,
      endereco: vendedor.endereco
    });
    this.modoEdicao=false;
  }

  editarVendedor() {
    this.modoEdicao=true;
    this.formEnviado = false;
  }

  salvarVendedor() {
    this.formEnviado = true;
    if (!this.form.valid) {
      return;
    }
    let valores : any = this.form.value;
    if (this.vendedorSel == null) {
      this.vendedores.push({
        nome: valores.nome,
        telefoneContato: valores.telefoneContato,
        email: valores.email,
        endereco: valores.endereco,
        id: this.vendedoresId++
      });  
    } else {
      this.vendedorSel.nome = valores.nome;
      this.vendedorSel.telefoneContato = valores.telefoneContato;
      this.vendedorSel.email = valores.email;
      this.vendedorSel.endereco = valores.endereco;
    }
    this.modoEdicao=false;
  }

  removerVendedor() {
    let posicao = null;
    let id = this.vendedorSel.id;
    for(let i=0; i< this.vendedores.length; i++) {
      let vendedor = this.vendedores[i];
      if (vendedor.id == id) {
        posicao = i;
        break;
      }
    }
    if (posicao!=null) {
      this.vendedores.splice(posicao,1);
    }
    this.voltarParaBusca();
  }

  cancelarEdicao() {
    this.modoEdicao=false;
  }

  voltarParaBusca() {
    this.vendedorSel = null;
  }

  limpaFormCad() {
    this.form.patchValue({
      nome: "",
      telefoneContato: "",
      email: "",
      endereco: ""      
    });
  }
}
