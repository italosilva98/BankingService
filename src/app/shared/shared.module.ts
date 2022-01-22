import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

const uiComponents = [
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatButtonModule,
  ModalModule.forRoot(),
];

const common = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  imports: [common, uiComponents],
  declarations: [],
  exports: [common, uiComponents],
})
export class SharedModule {}
