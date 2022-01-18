export interface INew {
  id: string;
  author: string;
  title: string;
  bannerImage: string;
}

export interface IPopular {
  id: string;
  author: string;
  title: string;
  bannerImage: string;
  description: string;
}

export default interface IHome {
  new: INew[];
  popular: IPopular[];
}
