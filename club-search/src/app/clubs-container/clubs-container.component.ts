import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-clubs-container',
  templateUrl: './clubs-container.component.html',
  styleUrls: ['./clubs-container.component.scss']
})
export class ClubsContainerComponent implements OnInit {
  infoPanelVisible: boolean = true;


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8080/clubs', {responseType: 'text'})
    .subscribe(data => {
      console.log(data);
    });
  }
}
