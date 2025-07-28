// libs/shared/src/lib/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SpinnerComponent,
    EmptyStateComponent,
    AutofocusDirective,
    TruncatePipe
  ],
  exports: [
    SpinnerComponent,
    EmptyStateComponent,
    AutofocusDirective,
    TruncatePipe
  ]
})
export class SharedModule {}
