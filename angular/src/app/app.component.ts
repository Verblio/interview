import { Component, OnInit } from '@angular/core';
import { ApiService } from './core/services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';
  apiTestMessage: string

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.test().subscribe(msg => this.apiTestMessage = msg)
  }
}
