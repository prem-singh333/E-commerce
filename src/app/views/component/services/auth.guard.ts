import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)

  let token = localStorage.getItem("isLoggedIn")

  if(token === "true"){
    return true
  }
  else{
    router.navigate(["/login"])
    return false
  }
};
