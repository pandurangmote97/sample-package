import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-sample-project',
  template: `
    <b>This is my first npm package!</b>
    <p> Hello from the Sample Project Component</p>
  `,
  styles: []
})
export class SampleProjectComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
