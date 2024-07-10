import { Component, OnInit } from '@angular/core';

import { LineOfBusiness } from '../LineOfBusiness';
import { LineOfBusinessService } from '../lineOfBusiness.service';

@Component({
  selector: 'app-lineOfBusiness-quotes',
  templateUrl: './lineOfBusiness-quotes.component.html',
  styleUrls: ['./lineOfBusiness-quotes.component.css']
})
export class LineOfBusinessQuotesComponent implements OnInit {
  linesOfBusiness: LineOfBusiness[] = [];
  constructor(private lineOfBusinessService: LineOfBusinessService) { } 

  ngOnInit(): void {
    this.getLinesOfBusinessByQuotes();
  }

  //sort by quote number
  getLinesOfBusinessByQuotes(): void {
    this.lineOfBusinessService.getLinesOfBusiness()
    .subscribe(linesOfBusiness => this.linesOfBusiness = linesOfBusiness.sort((b, a) => (a.quotes - b.quotes)));
  }

}
