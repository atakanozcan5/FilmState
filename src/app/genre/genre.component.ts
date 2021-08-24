import { Component, OnInit } from '@angular/core';
import { MovieService } from 'app/movie.service';

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
  display:boolean;
  selectedPersonGuid:string;
  genreGuids:string[];
  updatedName:string;
  updatedCode:string;
  constructor(private movieService:MovieService) { }

  updatepopup(isOpened:boolean, index:number): void{

    this.display = isOpened;
    this.selectedPersonGuid = this.genreGuids[index];
    if(!isOpened){
      this.updatedName = "";
      this.updatedCode = "";
    }
}

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

  addNewGenre(genreName:HTMLInputElement, code:HTMLInputElement):void{
      this.movieService.addNewGenre(genreName.value, code.value).subscribe(
        bool => {
          if(bool){
            console.log("değişim onaylandı");
          }else{
            console.log("bir sorun var!");
          }
        }
      )

  }

}
