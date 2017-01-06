import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <a uiSref="xyz" uiSrefActive="active">Hello</a>
  <a uiSref="about" uiSrefActive="active">About</a>
  <ui-view></ui-view>
  `,
})
export class AppComponent  { name = 'Angular'; }
