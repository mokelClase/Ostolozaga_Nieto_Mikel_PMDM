import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { AlertController } from '@ionic/angular/providers/alert-controller';


import { HomePageRoutingModule } from './home-routing.module';
import { GoiburukoaComponent } from "../Konponenteak/goiburukoa/goiburukoa.component";
import { CuestionarioService } from '../servicios/cuestionario.service';
import { IonAlert } from '@ionic/angular/standalone';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    GoiburukoaComponent,
    IonAlert,
],
  declarations: [HomePage]
})
export class HomePageModule {
  
}
