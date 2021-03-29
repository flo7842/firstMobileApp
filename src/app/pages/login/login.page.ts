import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string = '';
  pass:string = '';

  constructor(private router: Router, private auth: AuthService, private loadingC: LoadingController) { }

  ngOnInit() {}

  async loginForm(){
    const loading = await this.loadingC.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000,
    });
    //await loading.present();
    this.auth.getProfile().subscribe(async(user)=>{
      this.router.navigate(['/home'])
      await loading.present();
      const { role, data } = await loading.onDidDismiss();
      console.log('Loading dismissed!');
    })
  }

}
