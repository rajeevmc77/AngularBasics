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
  usrs: AuthUser[];

  constructor(private service: AuthApiService) { }

  submitRequest() {
    let usr  = new AuthUser();
    usr.userName = this.userName;
    usr.password = this.password;

    this.service.getContacts().subscribe( resp => {
     this.usrs = resp.users.map(item => {
        usr =  new AuthUser();
        usr.userName = item.userName;
        usr.password = item.password;
        return usr;
      });
      // console.log(this.usrs);
    }
    );
  }

}
