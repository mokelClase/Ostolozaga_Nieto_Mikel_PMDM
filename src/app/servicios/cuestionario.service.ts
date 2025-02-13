import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { IPregunta } from './../interfaces/interfaces';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  // Array bat gordetzeko json-ean dauden galdera guztiak. Gogoratu array-a abiarazten arazoak ekiditzeko
  // Gehitu beharrezkoak diren konponenteak eta zerbitzuak
  private galderak: IPregunta[] | undefined;
  public getGalderak():IPregunta[]|undefined{return this.galderak};
  public setGalderak(galderak: IPregunta[]){this.galderak=galderak};

  constructor(private fitxategiaIrakurri:HttpClient) {
    this.getGalderakJson(fitxategiaIrakurri)
  }

  // IPregunta array-a bueltatuko duen metodoa, hau da, galdetegiko galdera guztiak array batean
  ngOnInit(){
    
  }

  
  // Fitxategia irakurtzeko metodoa
  // Gogoratu asinkronoa dela.
  getGalderakJson(bezero:HttpClient){
    let galderakFitx:Observable<IPregunta[]>
    galderakFitx =  bezero.get<IPregunta[]>("/assets/datos/datos.json");
    galderakFitx.subscribe(datuak=>{
      this.galderak!.push(...datuak);
    })
  }

  // Fitxategitik irakurtzen ditu datuak eta arrayan gordetzen ditu


  // Ireki alerta bat galderaren enuntziatuarekin eta konprobatu erantzuna
  // 1 - Erantzun zuzena ala okerra denaren arabera eguneratzen du egoera
  // 2 - Ez ba du asmatzen:
  // 2.1 Saiakera kopuruari kendu bat
  // 2.2 Gordeko du erantzuna erantzunen array-an



}
