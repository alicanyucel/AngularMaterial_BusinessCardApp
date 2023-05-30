import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { MatButtonModule } from '@angular/material/button';
import { CardItemComponent } from './card-item/card-item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from '@angular/cdk/dialog';
import { MatInputModule } from '@angular/material/input';
import { CardModalComponent } from './card-modal/card-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CardsComponent,
    CardItemComponent,
    CardModalComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    DialogModule,
    FormsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CardsModule { }
