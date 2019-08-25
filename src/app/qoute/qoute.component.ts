import { Component, OnInit } from '@angular/core';
import { QuoteClass  } from '../quote-class';
@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
  quote:QuoteClass[] = [
     new  QuoteClass('Nelson Mandela', 'Education is the most powerful weapon which you can use to change the world.'),
    new  QuoteClass('Mahtma gandhi', 'Happiness is when what you think, what you say, and what you do are in harmony.'),
    new  QuoteClass('Abraham lincoln','Folks are usually about as happy as they make their minds up to be.'),
    new  QuoteClass('Albert Einstein' ,'if you can not explain it simply, you do not understand it well enough'),
    new  QuoteClass('Charles Darwin', 'A man who dares to waste one hour of time has not discovered the value of life.'),

  ];
  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }


  constructor() { }

  ngOnInit() {
  }

}
