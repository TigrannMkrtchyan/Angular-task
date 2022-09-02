import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  userResponse,
  DeleteResponse,
  UserList,
} from '../interface/user-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public url = `${environment.endpointUrl}users`;

  constructor(private http: HttpClient) {}

  async getUsers() {
    return this.http.get<userResponse>(this.url);
  }

  async addUser(arg: UserList) {
    return this.http.post<userResponse>(this.url, arg);
  }

  async editUser(arg: UserList, id: string) {
    return this.http.put<userResponse>(`${this.url}/${id}`, arg);
  }

  async deleteUser(id: string) {
    return this.http.delete<DeleteResponse>(`${this.url}/${id}`);
  }
}
