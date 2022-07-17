import { Component, Input, OnInit } from '@angular/core';

import { ClubSearchService } from '../services/club-search.service';
import { IClub } from '../interfaces/club';

@Component({
  selector: 'app-club-card',
  templateUrl: './club-card.component.html',
  styleUrls: ['./club-card.component.scss']
})
export class ClubCardComponent implements OnInit {
  @Input() club: IClub | null = null;

  constructor(private readonly clubSearchService: ClubSearchService) { }

  ngOnInit(): void {
  }

  selectClub() {
    if(this.club != null) {
      this.clubSearchService.selectClub(this.club);
    }
  }

}
