import { Component } from '@angular/core';
import { CuestionarioService } from './../servicios/cuestionario.service';
import { IPregunta } from './../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular/providers/alert-controller';
import { IonAlert, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  //Zerbitzua inportatu
  public getZerbitzu(): CuestionarioService {
    return this.zerbitzu;
  }
  public setZerbitzu(zerbitzu: CuestionarioService) {
    this.zerbitzu = zerbitzu;
  }

  constructor(
    private fitxategiaIrakurri: HttpClient,
    private zerbitzu: CuestionarioService,
    private alertController: AlertController
  ) {}

  onClickErantzun(iP: IPregunta, erantzun: string) {
    return iP.respuesta == erantzun;
  }

  

  public alertButtons = ["Enviar"];
  public alertInputs = [
    {
      placeholder: 'Atención a la ortografía',
    },
    
  ];

  //Metodo bat sortu "Erantzun" onclick egiteko
  //IGaldera bat jasoko du eta zerbitzua deituko du beharrezkoak diren eragiketak egiteko

  //Sortu metodo bat "Gorde"ren onclick-a kudeatzeko
  //Ez du parametrorik jasotzen eta zerbitzuari deituko dio dagokion eragiketak egiteko.
}
