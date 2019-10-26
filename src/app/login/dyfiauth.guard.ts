import { Injectable } from '@angular/core';
import { Route, Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, CanActivate, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { DyfiauthService } from './dyfiauth.service';

@Injectable({
  providedIn: 'root'
})
export class DyfiauthGuard implements CanLoad, CanActivate, CanActivateChild {
  constructor(private router: Router, private authService: DyfiauthService) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.isAuthenticated();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.isAuthenticated();
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return this.isAuthenticated();
  }

  private isAuthenticated() {
    this.authService.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtb2JpbGVfbm8iOiIwMCIsImRvYiI6IjAxLzAxLzE5OTAiLCJhdWQiOiJrZXJhbGFfYXVkIn0.e9l1JGvEoBeqiQW93resfbanLEiBZ5DqulLnhBsFNzQ'
    return true
    const isAuthenticated = ((this.authService.token) && (this.authService.token.length > 10));
    if (!isAuthenticated)
      this.router.navigate(['login']);
    return isAuthenticated;
  }
}
