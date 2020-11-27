import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {

  state:number = 0;

  constructor() { }

  inc() {
    this.state++;
  }
}
