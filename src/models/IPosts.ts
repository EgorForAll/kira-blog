export interface IComments {
  id: string;
  user: string;
  text: string;
  response?: {
    id: string;
    user: string;
    text: string;
  };
}

export interface IPosts {
  id: string;
  url_photo: string;
  text: string;
  date: string;
  likes: number;
  comments?: IComments[];
}
