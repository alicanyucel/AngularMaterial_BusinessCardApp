import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from '../models/card';
import { CardModalComponent } from './card-modal/card-modal.component';
import { config } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardService } from '../services/card.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
cards:Card[];
constructor(
  public dialog:MatDialog,
  private _cardService:CardService
){}
  ngOnInit(): void {
  this.getCards();
  }
  openAddCardModal():void{
    this.dialog.open(CardModalComponent)
    }
    getCards():void{
  this._cardService.getCards().subscribe((res:Card[])=>{
    this.cards=res
  });
}
}
