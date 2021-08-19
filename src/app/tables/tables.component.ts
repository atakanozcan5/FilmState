import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'Name', 'Release-Date', 'Rate'],
          dataRows: [
              [ 'Dakota Rice', 'Niger', 'Oud-Turnhout'],
              [ 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas'],
              [ 'Sage Rodriguez', 'Netherlands', 'Baileux'],
              [ 'Philip Chaney', 'Korea, South', 'Overland Park'],
              [ 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten'],
              [ 'Mason Porter', 'Chile', 'Gloucester']
          ]
      };
      this.tableData2 = {
          headerRow: [ 'Name',  'Release-Date', 'Rate'],
          dataRows: [
              [ 'Dakota Rice','$36,738', 'Niger' ],
              [ 'Minerva Hooper', '$23,789', 'Curaçao'],
              [ 'Sage Rodriguez', '$56,142', 'Netherlands' ],
              [ 'Philip Chaney', '$38,735', 'Korea, South' ],
              [ 'Doris Greene', '$63,542', 'Malawi' ],
              [ 'Mason Porter', '$78,615', 'Chile' ]
          ]
      };
  }

}
