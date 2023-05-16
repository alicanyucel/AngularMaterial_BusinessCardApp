import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import {MatButtonModule} from '@angular/material/button';
import { CardItemComponent } from './card-item/card-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogModule } from '@angular/cdk/dialog';
@NgModule({
  declarations: [
    CardsComponent,
    CardItemComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatCardModule,
    MatButtonModule,
    DialogModule,
    MatDialogModule,
  ]
})
export class CardsModule { }
