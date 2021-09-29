import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ads-list',
  templateUrl: './my-ads-list.component.html',
  styleUrls: ['./my-ads-list.component.scss']
})
export class MyAdsListComponent implements OnInit {
  myAds = [
    {
      "id": 1,
      "title": 'Viver Ciências 6',
      "subtitle": 'Ciências / 6º Ano',
      "valor": 'R$50',
    },
    {
      "id": 2,
      "title": 'Viver Ciências 6',
      "subtitle": 'Ciências / 6º Ano',
      "valor": 'R$50',
    },
    {
      "id": 3,
      "title": 'Viver Ciências 6',
      "subtitle": 'Ciências / 6º Ano',
      "valor": 'R$50',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
