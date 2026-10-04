
 import {Book} from "./Book.js";
 export class EBook extends Book{

     constructor (title, author, year,fileFormat){
        super (title, author, year);
       
        this.fileFormat = fileFormat;
     }
      get fileFormat() {
    return this._fileFormat
 }

  set fileFormat (value) {
    const fileFor = ["pdf", "txt","epub"]
    if  (!fileFor.includes(value))
         {
          throw new Error ("формат файлу  має бути pdf, txt,epub"); 
    }
     
  this._fileFormat= value;

    
 }
      printInfo() { 
       super.printInfo ();
        console.log (`fileFormat ${this.fileFormat}`)
     }   
     static newBook (book, format) {
       return new EBook (book.title, book.author, book.year,format)
     }
      }

//    const book3 = new EBook ('Ліс', 'Іванов', 1978, 'pdf');
//      book3.printInfo();


