import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
   createDb(){

    let  users =  [
      {  id:  101,  name:  'User1' },
      {  id:  102,  name:  'User2' },
      {  id:  103,  name:  'User3' },
      {  id:  104,  name:  'User4' }
    ];

   return {users};
  }
}