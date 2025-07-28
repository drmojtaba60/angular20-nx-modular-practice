import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterModule, NzLayoutModule, NzMenuModule],
  template: `
    <nz-layout>
      <nz-sider nzCollapsible [nzCollapsed]="isCollapsed">
        <div class="logo">Admin Panel</div>
        <ul nz-menu nzTheme="dark" nzMode="inline">
          <li nz-menu-item routerLink="/">Dashboard</li>
          <li nz-menu-item routerLink="/users">Users</li>
        </ul>
      </nz-sider>
      <nz-layout>
        <nz-header>Admin Header</nz-header>
        <nz-content class="p-4">
          <router-outlet></router-outlet>
        </nz-content>
      </nz-layout>
    </nz-layout>
  `,
  styles: [`.logo { height: 32px; margin: 16px; background: rgba(255,255,255,.2); }`]
})
export class AdminLayoutComponent {
  isCollapsed = false;
}
