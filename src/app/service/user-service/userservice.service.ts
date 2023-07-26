import { Injectable } from '@angular/core';
import { ApiService } from '../service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService extends ApiService {

  GetUsers(data:any){
    return this.http.get<any>(`https://reqres.in/api/users`);
    }

}
