import { Component } from '@angular/core';

@Component({
  selector: 'app-customization-tool',
  templateUrl: './customization-tool.component.html',
  styleUrls: ['./customization-tool.component.css']
})
export class CustomizationToolComponent {
  selectedColor: string = 'Gold';
  selectedMaterial: string = '18K';

  colors = ['Gold', 'Silver', 'Rose Gold'];
  materials = ['18K', '22K', 'Platinum'];

  onColorChange(color: string) {
    this.selectedColor = color;
  }

  onMaterialChange(material: string) {
    this.selectedMaterial = material;
  }
}
