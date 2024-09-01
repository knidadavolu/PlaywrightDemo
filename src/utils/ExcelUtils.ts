import * as XLSX from "xlsx";

export class ExcelUtils {
  workbook: XLSX.WorkBook;
  sheetName: string;

  constructor(filePath: string, sheetName: string) {
    this.workbook = XLSX.readFile(filePath);
    this.sheetName = sheetName;
  }

  readCell(row: number, col: number) {
    const worksheet = this.workbook.Sheets[this.sheetName];
    const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });
    const cell = worksheet[cellAddress];
    return cell ? cell.v : undefined;
  }

  writeCell(row: number, col: number, value: string) {
    const worksheet = this.workbook.Sheets[this.sheetName];
    const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });
    worksheet[cellAddress] = { v: value };
    XLSX.writeFile(this.workbook, "file is updated");
  }

  readRow(row: number) {
    const worksheet = this.workbook.Sheets[this.sheetName];
    const range = XLSX.utils.decode_range(worksheet["!ref"] || "");
    const rowData: Array<string | number> = [];
    for (let col = range.s.c; col <= range.e.c; col++) {
      rowData.push(this.readCell(row, col));
    }
    return rowData;
  }

  readColumn(col: number) {
    const worksheet = this.workbook.Sheets[this.sheetName];
    const range = XLSX.utils.decode_range(worksheet["!ref"] || "");
    const colData: Array<string | number> = [];
    for (let row = range.s.r; row <= range.e.r; row++) {
      colData.push(this.readCell(row, col));
    }
    return colData;
  }
}
