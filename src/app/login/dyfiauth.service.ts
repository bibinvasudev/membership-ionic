import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DyfiauthService {
  token: string;
  constructor() { }

  logout() {
    this.token = undefined
  }
}
