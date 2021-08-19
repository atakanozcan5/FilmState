import { Component, OnInit } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})

export class GenreComponent implements OnInit {
  public tableData1: TableData;
  public tableData2: TableData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'ID', 'Name', 'Code', ],
          dataRows: [
              ['1', 'Dakota Rice', 'Niger', ],
              ['2', 'Minerva Hooper', 'Curaçao', ],
              ['3', 'Sage Rodriguez', 'Netherlands', ],
              ['4', 'Philip Chaney', 'Korea, South', ],
              ['5', 'Doris Greene', 'Malawi', ],
              ['6', 'Mason Porter', 'Chile', ]
          ]
      };
      this.tableData2 = {
          headerRow: [ 'ID', 'Name',  'Code' ],
          dataRows: [
              ['1', 'Dakota Rice','$36,738',  ],
              ['2', 'Minerva Hooper', '$23,789', ],
              ['3', 'Sage Rodriguez', '$56,142',  ],
              ['4', 'Philip Chaney', '$38,735',  ],
              ['5', 'Doris Greene', '$63,542',  ],
              ['6', 'Mason Porter', '$78,615',  ]
          ]
      };
  }

}
