import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [UserComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLogged = false;

  logData(username:string,password:string|number){
    if (username == 'admin' && password == 'admin') {
      this.isLogged = true;
      
    } else{
        alert('Usuario incorrecto, intente nuevamente');
      }
  }

}
