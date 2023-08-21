import { Injectable } from '@angular/core';
import { ApiService } from '../service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService extends ApiService {
  id: any;

  GetUsers(data:any){
    return this.http.get<any>(`http://localhost:3000/api/employee/getall`);
    }
  register(user:any){
    return this.http.post<any>(`http://localhost:3000/api/register`,user);
    }
  AddEmployee(user:any){
    return this.http.post<any>(`http://localhost:3000/api/employee/add`,user);
    }
    login(user:any){
      return this.http.post<any>(`http://localhost:3000/api/login`,user);
      }
  getall(user:any){
    return this.http.get<any>(`http://localhost:3000/api/users`);
    }
  Delete(id:any){
    return this.http.delete<any>(`http://localhost:3000/api/employee/delete/`+id);
    }
  Get(data:any){
    this.id =data.item

    return this.http.get<any>(`http://localhost:3000/api/employee/get/?id=`+data.item);
    }

    UpdateEmployee(user:any){
      return this.http.put<any>(`http://localhost:3000/api/employee/update/?id=`+this.id,user);
      }

}
