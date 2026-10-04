import {Book} from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book( 'Сон', 'Шевченко',1844 );
const book2 = new Book ('Катерина', 'Шевченко', 1845);
const book3 = new EBook ('Ліс', 'Іванов', 1978, 'pdf');

 book1.printInfo (); 
 book2.printInfo (); 
 book3.printInfo ();
  const books = [book1, book2, book3];
  const oldest = Book. oldbook (books);

oldest.printInfo ();

const newValue = EBook.newBook (book2,"pdf")
newValue.printInfo()
