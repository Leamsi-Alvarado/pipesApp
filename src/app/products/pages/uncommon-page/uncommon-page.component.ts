import { Component } from '@angular/core';
import {interval, tap} from "rxjs";

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  name: string = 'Leamsi';
  gender: 'male' | 'female' = 'male';
  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18nPlural
  clients: string[] = ['Maria', 'Pedro', 'Leamsi', 'Rosa']
  clientsMap: {} = {
    '=0' :'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }
  deleteClient(): void{
    this.clients.shift();
  }

  //KeyValuePipe
  person = {
    name: 'Fernando',
    age: 36,
    address: 'Chihuahua, MX'
  }

  //Async Pipe
  myObsevableTime = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  )

  promiseValue = new Promise( (resolve, reject) =>{
    setTimeout(() =>{
      resolve('Tenemos data en la promesa');
    }, 2000)
  })
}
