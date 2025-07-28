import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserLayoutComponent } from './layout/user-layout.component';

@Component({
  imports: [RouterModule, UserLayoutComponent, UserLayoutComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.less',
  standalone: true,
})
export class App {
  protected title = 'user-panel';
}
