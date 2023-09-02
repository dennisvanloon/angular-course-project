import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {ServersService} from "../servers.service";
import {inject} from "@angular/core";

interface Server {
  id: number;
  name: string;
  status: string;
}

export const serverResolver: ResolveFn<Server> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(ServersService).getServer(+route.params['id']);
  };


