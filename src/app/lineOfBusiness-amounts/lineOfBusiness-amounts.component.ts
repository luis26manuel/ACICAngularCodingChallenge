import { Component, OnInit } from "@angular/core";
import { LineOfBusiness } from "../LineOfBusiness";
import { LineOfBusinessService } from "../lineOfBusiness.service";

@Component({
    selector: 'app-lineOfBusiness-amounts',
    templateUrl: './lineOfBusiness-amounts.component.html',
    styleUrls: [ './lineOfBusiness-amounts.component.css' ]
  })

  export class LineOfBusinessAmountsComponent implements OnInit {
    
    linesOfBusiness: LineOfBusiness[] = [];
    mostQuoted: LineOfBusiness[] = [];

    constructor(private lineOfBusinessService: LineOfBusinessService) { }

    ngOnInit(): void {
        this.getSortedLinesOfBusiness();
    }

    getSortedLinesOfBusiness(): void {
        this.lineOfBusinessService.getLinesOfBusiness()
        .subscribe(linesOfBusiness => this.linesOfBusiness = linesOfBusiness.sort((b, a) => (a.amount - b.amount)));
    }

}
