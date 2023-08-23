import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-component',
  templateUrl: './directive-component.component.html',
  styleUrls: ['./directive-component.component.css']
})
export class DirectiveComponentComponent {

  isVisible = true;
  clickDates: Date[] = [];

  clickDisplayDetails() {
    this.isVisible = !this.isVisible;
    this.clickDates.push(new Date())
  }


}
