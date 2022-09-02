export interface GetCardResponse {
  success: boolean;
  data: CardList[];
}

export interface AddCardResponse {
  success: boolean;
  data: CardList;
}

export interface DeleteResponse {
  success: boolean;
}

export interface CardList {
  _id: string;
  number: number;
}
