export interface Moment
 {
  id?:number;
  title: string;
  description: string;
  image: string; //esse é apenas o caminho da imagem; não o arquivo em si
  created_at?: string;
  updateda_at?: string;
  comments?: [{text: string; username:string}];
 }
