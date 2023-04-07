import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  signMeUp(){
    this.router.navigate(['/signup']);
  }
  forgotPass(){
    this.router.navigate(['/forgot-password']);
  }

  async logMeIn(){

    //create custom alert
    const alert = await this.alertController.create({
      header: 'Login Error',
      message: 'You must use same password and username for login.',
      buttons: ['OK'],
    });
    //username and password must be same for login
    var txtuname = ( < HTMLTextAreaElement > (document.getElementById('txtuname'))).value;  
    var txtpwd = ( < HTMLTextAreaElement > (document.getElementById('pwd'))).value;  
    if (txtuname == txtpwd){
      this.router.navigate(['/home']);
    }
    else {
      //show custom alert
      await alert.present();
    }
  }
}
