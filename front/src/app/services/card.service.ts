import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  GetCardResponse,
  DeleteResponse,
  AddCardResponse,
} from '../interface/card-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  public url = `${environment.endpointUrl}cards`;

  constructor(private http: HttpClient) {}

  async getCards() {
    return this.http.get<GetCardResponse>(this.url);
  }

  async addCard(arg: number) {
    return this.http.post<AddCardResponse>(this.url, { number: arg });
  }

  async deleteCard(arg: string) {
    return this.http.delete<DeleteResponse>(`${this.url}/${arg}`);
  }
}
