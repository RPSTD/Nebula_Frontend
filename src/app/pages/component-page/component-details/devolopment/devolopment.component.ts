import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-devolopment',
  templateUrl: './devolopment.component.html',
  styleUrls: ['./devolopment.component.css']
})
export class DevolopmentComponent {

  @Input() developmentDetails: any;

}
