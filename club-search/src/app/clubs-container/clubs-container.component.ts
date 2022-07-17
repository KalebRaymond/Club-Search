import { Component, OnInit } from '@angular/core';

import { IClub } from '../interfaces/club';
import { ClubSearchService } from '../services/club-search.service';

@Component({
  selector: 'app-clubs-container',
  templateUrl: './clubs-container.component.html',
  styleUrls: ['./clubs-container.component.scss']
})
export class ClubsContainerComponent implements OnInit {
  infoPanelVisible: boolean = true;
  clubs: IClub[] = [];
  selectedClub: IClub | null = null;

  constructor(private readonly clubSearchService: ClubSearchService) {}

  ngOnInit(): void {
    //Tell NgRx store to fetch clubs from the backend
    this.clubSearchService.getClubs();

    //Asynchronously update the list of clubs whenever it changes
    this.clubSearchService.clubs$.pipe().subscribe(clubs => {
		  this.clubs = clubs;
		});
    
    //Asynchronously update the selected club whenever it changes
    this.clubSearchService.selectedClub$.pipe().subscribe(club => {
		  this.selectedClub = club;
		});
  }
}
