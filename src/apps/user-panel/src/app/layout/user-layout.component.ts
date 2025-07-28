import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [RouterModule, NzLayoutModule, NzMenuModule],
  template: `
    <nz-layout>
      <nz-sider nzCollapsible [nzCollapsed]="isCollapsed">
        <div class="logo">User Panel</div>
        <ul nz-menu nzTheme="dark" nzMode="inline">
          <li nz-menu-item routerLink="/">Dashboard</li>
          <li nz-menu-item routerLink="/users">Users</li>
        </ul>
      </nz-sider>

      <nz-layout class="flex flex-col">
        <nz-header class="text-white shadow">User Header</nz-header>
        <nz-content class="flex-1 p-4">
            <router-outlet></router-outlet>
        </nz-content>
      </nz-layout>
    </nz-layout>

  `,
  styles: [`.logo { height: 32px; margin: 16px; background: rgba(255,255,255,.2); }`]
})
export class UserLayoutComponent {
  isCollapsed = false;
}
