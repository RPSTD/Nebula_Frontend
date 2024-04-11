import {Component, OnInit} from '@angular/core';
import {resourcePath} from "./dto/resource-path";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'nebula';

  ngOnInit() {
    if(document.location.host ==='localhost:4200'){
      resourcePath.BACK_END ='http://localhost:8080';
    }
  }
}
