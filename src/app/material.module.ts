import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatSelectModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatListModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  exports: [    
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,    
    MatSelectModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatListModule,
    MatIconModule
  ]
})
export class PrjMaterialModule {}