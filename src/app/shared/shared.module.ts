// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Clarity
import { ClarityModule } from 'clarity-angular';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forChild(),
  ],
  declarations: [
  TruncatePipe
  ],
  exports: [
    CommonModule,
    TruncatePipe
  ]
})
export class SharedModule { }
