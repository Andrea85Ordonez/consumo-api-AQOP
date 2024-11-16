import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],  // No BrowserModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = 'consumo-api-INICIALES';
}
