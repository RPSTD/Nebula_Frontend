import {Component, Input, OnInit} from '@angular/core';
import {Component_model} from "../../../dto/component_model";
import {ComponentsService} from "../../../service/components.service";
import {Router} from "@angular/router";
import {resourcePath} from "../../../dto/resource-path";

@Component({
  selector: 'app-common-component',
  templateUrl: './common-component.component.html',
  styleUrls: ['./common-component.component.css']
})
export class CommonComponentComponent implements OnInit{

  @Input() components_details: any;


  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  navigateToComponent(componentId:string){
    this.router.navigate([resourcePath.COMPONENT,componentId])
  }

}
