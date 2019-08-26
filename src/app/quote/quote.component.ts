import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote (1,'Education is the most powerful weapon which you can use to change the world.','Nelson Mandela','media',new Date(1879,3,14)),
    new Quote (2,'Happiness is when what you think, what you say, and what you do are in harmony.','Mahtma gandhi','john',new Date(1995,6,9)),
    new Quote (3 ,'Folks are usually about as happy as they make their minds up to be.' ,'Abraham lincoln','James',new Date(1784,5,18)),
    new Quote (4,'if you can not explain it simply, you do not understand it well enough', 'Albert Einstein','Andrew', new Date(1874,10,18)),
    new Quote (5 ,'A man who dares to waste one hour of time has not discovered the value of life.','Charles Darwin','Peter',new Date(1923,6,18))

  ];
  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}