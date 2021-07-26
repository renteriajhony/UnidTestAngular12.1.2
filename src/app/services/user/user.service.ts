import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReqUser } from 'src/app/model/user/user/ReqResResponseUser';
import { User } from 'src/app/model/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users = [];
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  public getUsers() {

    return this.http.get<Array<ReqUser>>(this.url).pipe(
      //Map de rxjs/operator
      map (resp => {
        //map de arrays
        return resp.map( user => User.userJson(user))
      })
    )
  }

  public getUsersTest(): void {
    let dato = this.getUsersFromApi().subscribe(
      (users) => (this.users = users),
      (error) => (this.users = [])
    );

    this.getUsersFromApi().toPromise().then( response =>{
      console.log(response);
    });
  }

  private getUsersFromApi(): Observable<any> {
    return this.http.get(this.url);
  }

}
