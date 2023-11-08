import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  constructor(){}

  public counter: number = 10;

  public plusCounter(): void {
    this.counter += 1;
  }

  public minusCounter(): void {
    this.counter -= 1;
  }

  public resetCounter(): void {
    this.counter = 10;
  }

}
