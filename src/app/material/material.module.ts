import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
const materailComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule
]

@NgModule({
  imports: [
    materailComponents,
  ],
  exports:[
    materailComponents
  ]
})
export class MaterialModule { }
