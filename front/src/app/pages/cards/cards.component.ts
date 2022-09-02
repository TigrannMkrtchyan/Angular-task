import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import {
  CardList,
  GetCardResponse,
  AddCardResponse,
  DeleteResponse,
} from 'src/app/interface/card-interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  public cards!: CardList[];
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.getCards();
  }

  getRandomInt(): number {
    return Math.floor(Math.random() * 5000);
  }

  sortCards(): void {
    this.cards.sort((a, b) => a.number - b.number);
  }

  async addCard(): Promise<void> {
    (await this.cardService.addCard(this.getRandomInt())).subscribe(
      (res: AddCardResponse): void => {
        if (res.success) {
          this.cards.push(res.data);
        }
      }
    );
  }

  async deleteCard(id: string): Promise<void> {
    (await this.cardService.deleteCard(id)).subscribe(
      (res: DeleteResponse): void => {
        if (res.success) {
          this.getCards();
        }
      }
    );
  }

  async getCards(): Promise<void> {
    (await this.cardService.getCards()).subscribe(
      (res: GetCardResponse): void => {
        if (res.success) {
          this.cards = res.data;
        }
      }
    );
  }
}
