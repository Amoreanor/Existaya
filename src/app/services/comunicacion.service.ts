import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ComunicacionService {
  mesaje: string;
  private enviarMensajeS = new Subject<string>();
  enviarMesajeObservable = this.enviarMensajeS.asObservable();

  enviarMensaje(mensaje: string){
    this.mesaje = mensaje;
    this.enviarMensajeS.next(mensaje);
  }

}
