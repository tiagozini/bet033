import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
  }

  isMenuCollapsed = false;

  title = 'hackathon';

  constructor(public route: ActivatedRoute) {

  }
}
