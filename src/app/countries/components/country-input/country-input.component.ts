import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
})
export class CountryInputComponent implements OnInit {
  @Input() placeHolder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  value: string = '';
  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    //AQUI SE suscribe para escuchar cada letra que se vaya escribiendo
    //y luego de 300ms emitir el valor
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }
  search = () => {
    this.onEnter.emit(this.value);
  };

  keyPress = () => {
    //esta funcion detecta cada letra tecleada y pasa el valor
    this.debouncer.next(this.value);
  };
}
