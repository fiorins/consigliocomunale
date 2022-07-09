// data object created thanks to http://json2ts.com

export interface ConsiglioComunale {
  id: string;
  Anno: string[];
  Presenti: number;
  Assenti: number;
  Consiglio_Num: number;
  Data: string;
  Delibera_Num: number;
  Ardita?: boolean;
  Ascani?: boolean;
  Fiorenza?: boolean;
  Pizzuti_Piccoli?: boolean;
  Risso?: boolean;
}
