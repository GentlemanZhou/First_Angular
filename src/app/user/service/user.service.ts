/**
 * Created by mrzho on 2017/5/31.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from '../model/user-model';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  public userURL = 'api/users';

  constructor(public http: Http) { }

  getUsers(): Promise<User[]> {
    return this.http.get(this.userURL, {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as User[])
      .catch(this.handleError);
  }
  public register(user: User): Promise<any> {
    return this.http
      .post(this.userURL, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as User)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `${this.userURL}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
