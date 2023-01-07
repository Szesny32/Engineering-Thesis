import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.scss']
})
export class PasswordChangeFormComponent implements OnInit {

  constructor() { }
  selectedLevel: number = 0;
  ngOnInit(): void {
  }
  setDialog(id: number): void {
    this.selectedLevel = id;

  }
}
