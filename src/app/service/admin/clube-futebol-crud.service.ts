import { Injectable } from '@angular/core';
import { ClubeFutebol } from 'src/app/model/clube-futebol';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ClubeFutebolCludService {
  constructor(private db: AngularFireDatabase) {}

  AddClubeFutebol(student: ClubeFutebol) {
    let studentsRef = this.GetClubeFutebolsList();
    return studentsRef.push({
      nome: student.nome,
      nomeOficial: student.nomeOficial,
      nomeTecnicoAtual: student.nomeTecnicoAtual,
      estado: student.estado,
      pais: student.pais,
    });
  }

  GetClubeFutebol(id: string) {
    //this.studentRef = 
    return this.db.object('clube-futebol-list/' + id);
    //return this.studentRef;
  }

  GetClubeFutebolsList() {
    return this.db.list('clube-futebol-list');    
  }

  UpdateClubeFutebol(clube: ClubeFutebol, id: string) {
    this.GetClubeFutebol(id).update({
      nome: clube.nome,
      nomeOficial: clube.nomeOficial,
      nomeTecnicoAtual: clube.nomeTecnicoAtual,
      dataCriacaoClube: clube.dataCriacaoClube,
      urlLogo: clube.urlLogo,
      estado: clube.estado,
      pais: clube.pais,
      ativo: clube.ativo,
    });        
  }

  DeleteClubeFutebol(id: string) {
    this.GetClubeFutebol(id).remove();
  }  
}
