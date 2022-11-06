import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import{MatDialogModule} from '@angular/material/dialog'

const materialComponent:any=[
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatDialogModule
]



@NgModule({

  imports: [
    materialComponent,
  ],
  exports:[
    materialComponent
  ]
})
export class MaterialmoduleModule { }
