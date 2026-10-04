export class  Book {
constructor (title, author, year){
 this.title = title;
 this.author = author;
 this.year = year;}

 get title () {
    return this._title;
 }
  set title (value) {
    if (typeof value !== "string" || value.trim() === "")
    
 {
     throw new Error ("назва має бути непорожнім рядком");
       
 }
     
  this._title = value;
}

  get author() {
    return this._author;
 }
  set author (value) {
   if (typeof value !== "string" || value.trim() === "")
    
         {
          throw new Error ("автор має бути не порожнім рядком"); 
    }
     
  this._author= value;
}

 get year() {
    return this._year;
 }
 set year (value) {
    if (typeof value !== "number"|| value<=0)
    
         {
          throw new Error ("рік має бути позитивним числом "); 
    }
     
  this._year= value;

    }

    printInfo () {
    
        console.log (`title ${this.title}, author ${this.author}, year ${this.year}`)}
          
    
        static oldbook (books){
    
    let oldBook  = books[0]
            for (let i = 0; i < books.length; i++)
                if (books[i].year < oldBook.year)
                oldBook = books[i];
              return oldBook;
        }
    }
    
        
    //  const book1 = new Book ('Сон', 'Шевченко',1844);
    //  book1.printInfo();

    //  const book2 = new Book ('Катерина', 'Шевченко', 1845);
    //  book2.printInfo();

  









