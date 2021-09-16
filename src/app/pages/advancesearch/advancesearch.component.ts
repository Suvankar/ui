import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-advancesearch',
  templateUrl: './advancesearch.component.html',
  styleUrls: ['./advancesearch.component.css']
})
export class AdvancesearchComponent implements OnInit {
  value: any;

  listOfOption: Array<{ label: string; value: string }> = [];
  listOfTagOptions = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToSearchResultPage() {
    this.router.navigateByUrl('/pages/search/result');
  }
}
