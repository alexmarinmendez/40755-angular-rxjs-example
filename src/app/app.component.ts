import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval, of, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // public suscription: Subscription[] = [];
  // public suscription2!: Subscription;
  public suscription: Subscription = new Subscription();

  ngOnInit(): void {
    // const observer = {
    //   next: (item: unknown) => console.log(`Llegó la lata ${item}`),
    //   error: (err: unknown) =>
    //     console.log(`Ocurrió un error: ${err}. Llamar al supervisor!`),
    //   complete: () =>
    //     console.log('Terminó la producción! La máquina se apagó.'),
    // };
    // const stream = new Observable((myObserver) => {
    //   myObserver.next('Lata 1'),
    //     // myObserver.error(new Error());
    //     myObserver.next('Lata 2'),
    //     // myObserver.complete();
    //     myObserver.next('Lata 3'),
    //     // for (let index = 0; index < 100; index++) {
    //     //   myObserver.next(`Lata ${index}`);
    //     // }
    //     myObserver.complete();
    // });
    // const suscription = stream.subscribe(observer);
    // suscription.unsubscribe();
  }

  public start(): void {
    // this.suscription.add(
    //   interval(1000).subscribe(
    //     (value) => console.log('El valor es: ', value),
    //     (err) => console.log(err),
    //     () => console.log('Finalizado!')
    //   )
    // );
    // this.suscription.add(
    //   interval(1000).subscribe(
    //     (value) => console.warn('[OBS2] El valor es: ', value),
    //     (err) => console.warn('[OBS2] ', err),
    //     () => console.warn('[OBS2] Finalizado!')
    //   )
    // );
    const latas = ['Lata 1', 'Lata 2', 'Lata 3'];
    this.suscription.add(from(latas).subscribe(console.log));
    this.suscription.add(of(...latas).subscribe(console.log));
  }

  public stop(): void {
    // this.suscription.unsubscribe();
    // this.suscription2.unsubscribe();
    // this.suscription.forEach((item) => item.unsubscribe());
    this.suscription.unsubscribe();
  }
}
