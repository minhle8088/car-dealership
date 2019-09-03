import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  exports: [    
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,    
    MatSelectModule,
    MatTabsModule,
    MatSlideToggleModule
  ]
})
export class CarMaterialModule {}