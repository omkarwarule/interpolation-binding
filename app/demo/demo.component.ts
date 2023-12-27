import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
      public change:string=" ";
      public upper()
      {
        this.change="MARVELLOUS INFOSYSTEM";
      }
      public lower()
      {
        this.change="marvellous infosystem";
      }
}
