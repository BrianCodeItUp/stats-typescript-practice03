import fs from 'fs'

export class CsvFileReader {
  data: string[][] = [];
  constructor(public filename: string) { }
  read(): void {
    fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
