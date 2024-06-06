import { Component, Input} from '@angular/core';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent{
  @Input() text:string = '';
  @Input() color:string = '';

  
}
