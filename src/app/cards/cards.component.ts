import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from '../models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cardItem:Card = {
    title: 'Full Stack Developer - M.Sc. Software Engineer',
    name: 'Ali Can Yücel',
    phone: '0541 692 36 75',
    email: 'yucelalican@hotmail.com',
    address: 'Pursaklar/Ankara',
    LinkedIn:'https://www.linkedin.com/in/ali-can-y%C3%BCcel-062b6517a/',
    Github: 'https://github.com/alicanyucel?tab=repositories',
  };
constructor(
  public dialog:MatDialog
){

}
  ngOnInit(): void {
  
  }

}
