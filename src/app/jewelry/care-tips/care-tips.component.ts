import { Component } from '@angular/core';

@Component({
  selector: 'app-care-tips',
  templateUrl: './care-tips.component.html',
  styleUrls: ['./care-tips.component.css']
})
export class CareTipsComponent {
  tips: string[] = [
    'Store your jewelry in a dry place.',
    'Avoid exposure to chemicals.',
    'Clean your jewelry with a soft cloth.'
  ];
}
