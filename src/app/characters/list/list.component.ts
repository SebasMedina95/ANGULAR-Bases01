import { Component, OnInit } from '@angular/core';
import { ICharactersBasic } from '../interfaces/cards.interfaces';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-list-character',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public title: string = "Listado Dumis Personajes";
  public characterDelete: string = "...";
  public bandDelete: boolean = false;
  public mybreakpoint: number = 0;

  constructor(){}

  ngOnInit() {
    this.mybreakpoint = (window.innerWidth <= 600) ? 1 : (window.innerWidth <= 1000) ? 2 : 3;
  }

  public handleSize(event: any) {
    this.mybreakpoint = (event.target.innerWidth <= 600) ? 1 : (event.target.innerWidth <= 1000) ? 2 : 3;
  }

  public characters: ICharactersBasic[] = [
    {
      id: "1",
      character: "Iron Man",
      name: "Tony Stark",
      description: "Dolor minim nulla dolore elit aliquip in nulla sit eiusmod ex. Enim aliqua labore ullamco aliquip nulla consectetur culpa veniam ullamco veniam irure est ipsum minim. Ex magna consectetur qui elit. Non Lorem consequat Lorem qui veniam Lorem veniam minim elit pariatur mollit et excepteur. Do quis proident occaecat occaecat aute Lorem laborum velit proident. Mollit ex eiusmod sunt do proident labore officia elit excepteur minim nisi duis.",

    },
    {
      id: "2",
      character: "Spider Man",
      name: "Peter Parker",
      description: "Voluptate nisi Lorem eu fugiat enim officia elit eu voluptate duis ipsum magna aute aliquip. Anim eiusmod aliquip Lorem voluptate ipsum consectetur do aliqua exercitation aliquip. Veniam in in non proident excepteur occaecat adipisicing. Mollit sunt adipisicing quis duis laborum ex non et. Sit pariatur fugiat in Lorem do do quis proident dolor eu elit. Proident consequat quis cillum proident est eu deserunt anim laborum Lorem occaecat ad.",

    },
    {
      id: "3",
      character: "Batman",
      name: "Bruce Wayne",
      description: "Laborum ea ullamco minim laborum irure officia deserunt ea sunt laborum nulla. Ipsum enim nisi sit pariatur aliquip aliquip excepteur veniam nisi. Commodo nisi id nisi ex nostrud minim excepteur nostrud commodo sit tempor ipsum. Dolore velit eiusmod est laborum et fugiat. Voluptate do id ipsum labore exercitation minim aliqua reprehenderit sint fugiat eu dolor cillum. Nostrud Lorem velit voluptate fugiat in nisi do cupidatat magna culpa laborum laboris sit eu.",

    },
    {
      id: "4",
      character: "La Bruja Escarlata",
      name: "Wanda",
      description: "Veniam ipsum enim amet sit occaecat cillum eiusmod ex non nostrud quis. Qui sint qui nostrud aute nulla esse aliqua duis reprehenderit dolore aute non minim. Amet laborum pariatur do enim culpa est sunt deserunt anim ut. Sint incididunt aliquip elit enim est esse. Velit aute reprehenderit nisi est excepteur laboris elit ullamco esse. Ea dolore amet cupidatat sunt adipisicing non.",

    },
    {
      id: "5",
      character: "Dr Strange",
      name: "Dr Steven Strange",
      description: "Ad anim incididunt ut fugiat sunt elit ex magna laborum laborum do commodo ullamco deserunt. Aliquip anim culpa consectetur officia consectetur. Ut tempor ad et velit ea mollit sint excepteur adipisicing Lorem excepteur amet, ipsum irure cupidatat occaecat incididunt deserunt labore quis sit ad ullamco ullamco. Irure ullamco officia duis commodo ea sunt ipsum qui ipsum sunt et consectetur nisi et.",

    },
    {
      id: "6",
      character: "Hulk",
      name: "Bruce Banner",
      description: "Aliqua nostrud nulla elit exercitation ex, mollit incididunt fugiat non ut non ipsum anim tempor nostrud magna nostrud deserunt ipsum commodo. Incididunt consequat aliqua ad anim esse nulla pariatur qui cillum consequat cupidatat.",

    },
    {
      id: "7",
      character: "Thor",
      name: "Thor",
      description: "Ut qui nostrud ex excepteur proident, laboris duis voluptate deserunt mollit esse. Commodo velit nisi ipsum eiusmod nisi sunt Lorem, deserunt magna enim incididunt ullamco adipisicing dolor sunt laboris commodo nulla velit voluptate cupidatat dolor, irure ullamco aliquip consectetur pariatur duis irure. Anim eiusmod sit incididunt excepteur esse tempor ad non occaecat aliqua incididunt. Consequat esse esse culpa ullamco pariatur id aliqua labore ullamco.",

    },
    {
      id: "8",
      character: "Aquaman",
      name: "Arthur Curry",
      description: "Deserunt et aute consequat qui incididunt anim, velit incididunt tempor excepteur ipsum sit, id pariatur culpa in laboris excepteur minim cupidatat elit dolore exercitation nisi adipisicing duis ex exercitation eu ea pariatur sunt nostrud. Aliquip ut sunt ea nulla incididunt reprehenderit irure amet dolor do aliqua. Nulla laboris cupidatat pariatur velit ad ex, commodo ex elit deserunt sunt aute ea dolore pariatur ullamco commodo.",

    }
  ];

  public removeLastCharacter(): void {

    if(this.characters.length <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No hay más elementos para eliminar!'
      });
      this.bandDelete = true;
      return;
    }
    this.characterDelete = this.characters[this.characters.length - 1].character;
    this.characters.pop();
  }

  public removeFirstCharacter(): void {
    if(this.characters.length <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No hay más elementos para eliminar!'
      });
      this.bandDelete = true;
      return;
    }
    this.characterDelete = this.characters[0].character;
    this.characters.shift();
  }

}
