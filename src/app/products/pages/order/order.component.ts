import {Component} from '@angular/core';
import {Color, Hero} from "../../interfaces/hero.interface";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  isUpperCase: boolean = false;
  orderBy : keyof Hero = 'name';
  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase
  }

  heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color:Color.red
    },
    {
      name: 'OmniMan',
      canFly: true,
      color:Color.red
    }
  ]
changeOrder(value: keyof Hero){
    this.orderBy = value
}

}
