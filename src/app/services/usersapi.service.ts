import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams ,HttpHeaders,HttpResponse} from '@angular/common/http'
import { Users } from '../clases/users';

@Injectable()

export class usersapiService {
    private readonly apiRoot = 'https://reqres.in/api';

    constructor(private httpclient: HttpClient) {

    }


    // getUsers(page: number): Observable<Users> {
    //     const params = new HttpParams().set('page', String(page));
    //     return this.httpclient.get<Users>(`${this.apiRoot}/users`, { params: params });
    // }
    getUsers(page): Observable<any> {
        return this.httpclient.get<Users>("https://reqres.in/api/users?page=" + page);
    }
    
    obtenerUsuario(id): Observable<any> {
        return this.httpclient.get<Users>("https://reqres.in/api/users/" + id);
    }


      crearUsuario(usuario: Object): Observable<Object> {
        return this.httpclient.post(`${this.apiRoot}/users`, usuario);
      }

      updateUsuario(id,usuario: Object): Observable<Object> {
        return this.httpclient.put(`${this.apiRoot}/users/`+id, usuario);
      }

}