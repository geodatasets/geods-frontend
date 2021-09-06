import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {

  constructor() { }

  projects: any[] = [
    "proyecto 1","proyecto 2","proyecto 3","proyecto 4","proyecto 5","proyecto 6","proyecto 7"
  ]

  @Input('mode') mode: 'recent'|'last-user'|'all-user'= 'recent'

  ngOnInit(): void {
  }

}
