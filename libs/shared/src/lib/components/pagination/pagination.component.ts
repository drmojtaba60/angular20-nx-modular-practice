import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pagination">
      <button (click)="prev()" [disabled]="page() === 1">«</button>
      <span>Page {{ page() }} of {{ totalPages() }}</span>
      <button (click)="next()" [disabled]="page() === totalPages()">»</button>
    </div>
  `,
  styles: [`.pagination { display: flex; gap: 10px; align-items: center; }`]
})
export class PaginationComponent {
  page = input(1);
  totalPages = input(1);
  pageChange =output<number>();// new EventEmitter<number>();

  next() {
    if (this.page() < this.totalPages()) this.pageChange.emit(this.page() + 1);
  }

  prev() {
    if (this.page() > 1) this.pageChange.emit(this.page() - 1);
  }
}
