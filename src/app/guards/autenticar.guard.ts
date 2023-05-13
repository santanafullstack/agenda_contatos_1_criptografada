import { Injectable } from "@angular/core";
import { AutenticarHelper } from "../helpers/autenticar.helper";
import { Router, CanActivate } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AutenticarGuard implements CanActivate {

    constructor(
        private autenticarHelper: AutenticarHelper,
        private router: Router
    ) {
    }

    canActivate() {

        if (this.autenticarHelper.isSignedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }

}
