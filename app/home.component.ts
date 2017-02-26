import { Component } from '@angular/core';

@Component({
    template: `<h1>Hello {{name}}</h1>`,
})
export class HomeComponent  { name = 'Angular'; }
