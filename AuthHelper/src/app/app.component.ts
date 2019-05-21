import { Component } from '@angular/core';
import { AuthApiService } from './auth-api.service';
import { AuthUser } from './auth-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AuthHelper';
  userName = '';
  password = '';

  constructor(private service: AuthApiService) { }

  submitRequest() {
    let usr  = new AuthUser();
    usr.userName = this.userName;
    usr.password = this.password;

    this.service.getContacts().subscribe( resp => {
      console.log(resp);
    }
    );
  }

}
