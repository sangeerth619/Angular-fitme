import { Component } from '@angular/core';

@Component({
  selector: 'app-virtual-try-on',
  templateUrl: './virtual-try-on.component.html',
  styleUrls: ['./virtual-try-on.component.css']
})
export class VirtualTryOnComponent {
  imageUrl: string | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imageUrl = e.target.result;
      reader.readAsDataURL(file);
    }
  }
}
