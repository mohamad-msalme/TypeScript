import {readFileSync} from 'fs'

export interface DataReader {
  data: string[][];
  read(): void;
}

export class CsvFileReader implements DataReader{
  data: string[][] = [];
  
  constructor(public fileName: string){
    this.read();
  }

  read(): void {
     this.data = 
      readFileSync(this.fileName, { encoding: 'utf-8'})
      .split('\n')
      .map((row: string) : string[] => row.split(','))
  }
}