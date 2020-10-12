import { Component, OnInit } from '@angular/core';

import { team } from '../team';

import { team_list } from '../teams';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  constructor() {}

  teams: team[];

  ngOnInit(): void {
    this.teams = team_list;
  }
}
