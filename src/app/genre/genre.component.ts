import { Component, OnInit } from '@angular/core';
import { Genre } from 'app/Movie';
import { MovieService } from 'app/movie.service';
import { Message } from 'primeng/api';
import {MessageService} from 'primeng/api';

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
  
  public tableData2: TableData;
  display:boolean;
  selectedPersonGuid:string;
  guidArray?:string[];
  guidnumber?:string;
  genreGuids:string[];
  updatedName:string;
  updatedCode:string;

  msgs: Message[];

  Genres:Genre[];
  genreGuid:string;

  genreGuidIndex?:number;

  
  constructor(private movieService:MovieService, private  messageService:MessageService) { }

  updatepopup(isOpened:boolean, index:number): void{

    this.display = isOpened;
   // this.selectedPersonGuid = this.genreGuids[index];
    if(!isOpened){
      this.updatedName = "";
      this.updatedCode = "";
    }

    this.guidArray = [];
}

  ngOnInit() {
    
      this.tableData2 = {
          headerRow: [ 'ID', 'Name',  'Code' ],
          dataRows: [
           
          ]
      };


      this.msgs = [
   
      ];
      this.Genres = [];
      this.genreGuids  = [];
      this.guidArray = [];
            this.getAllGenres();
     

    }

    private getAllGenres(){
        this.movieService.getGenres().subscribe(genres => {
          this.Genres = genres;
          for(var i:number = 0 ; i < genres.length; i++){
              this.tableData2.dataRows.push([i.toString() , genres[i].name, genres[i].code]);
              
             // this.Genres.push(genres[i]);
             this.guidArray.push(genres[i].guid);
            // console.log("Guid =>>>  " + genres[i].guid + " guidArrayden )> " + this.guidArray[i] )
          }
        
        });
    }

  addNewGenre(genreName:HTMLInputElement, code:HTMLInputElement):void{

  
      this.movieService.addNewGenre(genreName.value, code.value).subscribe(
        bool => {
         
          if(bool){
            this.msgs = [
              {severity:'success', summary:'Success', detail:'Changes saved succesfully!'}
             ];
          }else{
            this.msgs =  [ {severity:'error', summary:'Error', detail:'There is a unexpected error occured!'}];
          }
          genreName.value = "";
          code.value = "";
        }
      );

  }
  
  specifyRouteInput(guid:number):void{
    console.log("guid ney => " + guid + " guidin kendisi >= " + this.guidArray[guid]);
    this.guidnumber = this.guidArray[guid];

  }

  showConfirm(index:number) {
    this.msgs = [];
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'You are about to delete a genre type!'});
    console.log("silinmek üzere olan genre name => "  + "indexi => " + index+ this.guidArray[index]);
    
    this.genreGuidIndex = index;
    this.genreGuid = this.Genres[index].guid;
  }
  onConfirm() {
    this.movieService.removeGenreByGuid(this.guidArray[this.genreGuidIndex]).subscribe(b => {
      if(b){
      console.log("işlem kabul edildi!");
      }else{
        console.log("işlem reddedildi!");
      }
    });
    this.messageService.clear('c');
  }

  onReject() {
      this.messageService.clear('c');
  }
}
