import {test} from '@playwright/test';
import { ExcelUtils } from '../src/utils/ExcelUtils';

test('data driven excel utiles', ()=>{
   
    const filePath ="./src/data/testdata.xlsx";
    const sheetName ="Sheet1";

    const excelUtils = new ExcelUtils(filePath,sheetName);
    const cellvalue= excelUtils.readCell(0,0);
    console.log(cellvalue);

    const rowValue = excelUtils.readRow(1);
    console.log(`rowvalue is `,rowValue);

    const writecell= excelUtils.writeCell(2,2,'venkatesh');

    const cellvalue2= excelUtils.readCell(2,2);
    console.log(cellvalue2);

});