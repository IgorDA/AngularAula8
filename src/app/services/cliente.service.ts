import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../domain/cliente';

@Injectable()
export class ClienteService {

  constructor(public http:HttpClient) { }

  insert(obj : Cliente){
    return this.http.post(
      `https://1cfb8af3-d86e-4caa-b917-1dc0858b19fc.mock.pstmn.io/clientes/error`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }
}