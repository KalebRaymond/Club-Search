import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-club-card',
  templateUrl: './club-card.component.html',
  styleUrls: ['./club-card.component.scss']
})
export class ClubCardComponent implements OnInit {
  @Input() name: string = "";
  @Input() description: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
