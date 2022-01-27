import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { IClub } from '../interfaces/club';

@Component({
  selector: 'app-clubs-container',
  templateUrl: './clubs-container.component.html',
  styleUrls: ['./clubs-container.component.scss']
})
export class ClubsContainerComponent implements OnInit {
  infoPanelVisible: boolean = true;
  clubs: IClub[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    //Get list of clubs from backend
    this.httpClient.get<IClub[]>(`${environment.apiUrl}/clubs`)
    .subscribe(data => {
      this.clubs = data;
      console.log(this.clubs);
    });
  }
}
