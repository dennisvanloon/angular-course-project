import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
  @Input() element: {name: string, type: string, content: string}
  @Input() name: string


  constructor() {
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called')
  }

}
