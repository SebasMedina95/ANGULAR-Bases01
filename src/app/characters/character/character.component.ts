import { Component } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import { INode, ExampleFlatNode } from '../interfaces/tree.interface';


const TREE_DATA: INode[] = [
  {
    name: 'Spider Man',
    children: [
      {name: "Ipsum est do eu officia Lorem enim eiusmod do minim id aliquip."},
      {name: "Aute veniam laboris nulla dolore."},
      {name: "Magna excepteur aliqua nisi deserunt incididunt ullamco est sint excepteur amet enim."},
      {name: "Aute do officia tempor dolor mollit consequat dolor non."},
      {name: "Aliqua veniam ea exercitation reprehenderit proident qui consequat ad reprehenderit id occaecat in mollit enim."}
    ],
  },
  {
    name: 'Wonder Woman',
    children: [
      {name: "Ipsum nulla culpa incididunt elit Lorem dolore excepteur velit nulla."},
      {name: "Elit fugiat aliquip velit ex qui ut aute."},
      {name: "Eu ut labore ipsum consectetur et."},
      {name: "Anim enim cillum reprehenderit aliquip ea officia incididunt officia Lorem."},
      {name: "Culpa tempor occaecat excepteur aute occaecat."},
    ],
  },
  {
    name: 'Sasuke Uchiha',
    children: [
      {name: "Laboris ipsum dolore veniam excepteur ex duis labore excepteur consequat enim labore."},
      {name: "Enim veniam culpa velit magna aute aliquip sint incididunt minim esse sint enim quis minim."},
      {name: "Enim deserunt eiusmod enim cupidatat nulla cupidatat."},
      {name: "Eiusmod ullamco fugiat excepteur ullamco."},
      {name: "Officia ut Lorem veniam irure ea nulla tempor est officia fugiat."},
    ],
  },

];

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  private _transformer = (node: INode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  //? ********************************************************** ?//
  //? ********************************************************** ?//
  //? ********************************************************** ?//

  public title:         string = "Ejercicio de Héroes - V1";
  public character:     string = "Iron Man";
  public characterName: string = "Tony Stark";
  public dumisText1:    string = "mi sUper héROe fictÍcio FAvoritO";
  public dumisText2:    string = "Universo Marvel";
  public bandChange:    boolean = false;

  get getCapitalizedDumisText(): string {
    return this.dumisText1.toUpperCase();
  }

  get getContactDumisText(): string {
    return `${this.dumisText1} - ${this.dumisText2}`
  }

  public getChangeCharacter(): void {
    this.character = "Spider Man";
    this.characterName = "Peter Parker";
    this.bandChange = true;
  }

  public getInitialCharacter(): void {
    this.character = "Iron Man";
    this.characterName = "Tony Stark";
    this.bandChange = false;
  }

}
