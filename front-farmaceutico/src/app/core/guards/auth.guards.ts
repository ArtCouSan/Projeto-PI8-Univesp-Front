import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { TokenStorageService } from "../service/token-storage.service";

@Injectable()
export class AuthGaurd implements CanActivate {

    constructor(private readonly tokenService: TokenStorageService,
         private readonly router: Router) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        if(this.tokenService.isAuthenticated()) {
            return true;
        }

        this.router.navigate(["/"]);

        return false;
    }

}