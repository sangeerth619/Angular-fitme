import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class AuthService {
  constructor() { }

  register(username: string, email: string, password: string): boolean {
   
    return true; 
  }

  login(email: string, password: string): boolean {
    
    return true;
  }
}
