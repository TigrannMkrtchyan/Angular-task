export interface userResponse {
  success: boolean;
  data: UserList[];
}

export interface DeleteResponse {
  success: boolean;
}

export interface UserList {
  _id?: string;
  name: string;
  surname: string;
}
