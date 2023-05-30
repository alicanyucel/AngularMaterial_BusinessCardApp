import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {
  cardForm!: FormGroup
  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.cardForm = this.fb.group({
      name:['',[Validators.required,Validators.maxLength(50)]],
      title: ['',[Validators.required,Validators.maxLength(255)]],
      phone:  ['',[Validators.required,Validators.maxLength(20)]],
      email:['',[Validators.email,Validators.maxLength(50)]],
      address:['',[Validators.required,Validators.maxLength(255)]],
    });
  }
}
