import { Component, Input, OnInit } from '@angular/core';

import { ClubSearchService } from '../services/club-search.service';
import { IClub } from '../interfaces/club';

@Component({
  selector: 'app-club-info-panel',
  templateUrl: './club-info-panel.component.html',
  styleUrls: ['./club-info-panel.component.scss']
})
export class ClubInfoPanelComponent implements OnInit {
  @Input() selectedClub: IClub | null = null;

  constructor(private readonly clubSearchService: ClubSearchService) {}

  ngOnInit(): void {
  }

  closePanel(): void {
    this.clubSearchService.deselectClub();
  }
}
