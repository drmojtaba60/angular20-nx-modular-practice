import { Component } from '@angular/core';
import { PaginationComponent,NG_ZORRO_MODULES  } from '@my-ecommerce/shared';

@Component({
  selector: 'lib-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  imports: [PaginationComponent,
    ...NG_ZORRO_MODULES ],
})
export class UserListComponent {
  pageChangedEvent(pageNum: number) {
    console.log('pageChanged event', pageNum);
  }
}
