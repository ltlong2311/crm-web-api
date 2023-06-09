export interface IImgurResponse {
  data: IImgurData;
  success: boolean;
  status: number;
}

export interface IImgurData {
  id: string;
  title: any;
  description: any;
  datetime: number;
  type: string;
  animated: boolean;
  width: number;
  height: number;
  size: number;
  views: number;
  bandwidth: number;
  vote: any;
  favorite: boolean;
  nsfw: any;
  section: any;
  account_url: any;
  account_id: number;
  is_ad: boolean;
  in_most_viral: boolean;
  tags: any[];
  ad_type: number;
  ad_url: string;
  in_gallery: boolean;
  deletehash: string;
  name: string;
  link: string;
}
