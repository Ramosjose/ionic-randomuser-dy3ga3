import { Component,  OnInit  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserApiService } from '../../app/user-api.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
users: any[] = [];

  constructor(public userService: UserApiService, public navCtrl: NavController) { }
   ngOnInit() {
  }
ionViewDidLoad(){
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }
}
