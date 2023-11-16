interface IResponse {
  id: string;
  user: string;
  text: string;
}

export interface IComments {
  id: string;
  user: string;
  text: string;
  response?: IResponse[];
}

export interface IPosts {
  id: string;
  url_photo: string;
  text: string;
  date: string;
  likes: number;
  comments?: IComments[];
}
