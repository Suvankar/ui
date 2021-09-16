import { Component, OnInit } from '@angular/core';
import {Lookupservice} from '../../shared/services/lookupservice';

@Component({
  selector: 'app-convert-json-csv',
  templateUrl: './convert-json-csv.component.html',
  styleUrls: ['./convert-json-csv.component.css']
})
export class ConvertJsonCsvComponent implements OnInit {
  inputValue?: string;

  constructor(private lookUpService: Lookupservice) { }

  ngOnInit(): void {
  }

  submitForConversion(){
    window.open('http://localhost:8888/conversion/json2csv', '_blank');
  }
}
