import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cardItem = {
    title: 'Full Stack Developer -Msc Software Engineer',
    name: 'Ali Can Yücel',
    phone: '0541 692 36 75',
    email: 'yucelalican@hotmail.com',
    address: 'Pursaklar/Ankara'
  };

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
