import { Component, OnInit } from '@angular/core';
import {Lookupservice} from '../../shared/services/lookupservice';
import {FileDetails} from '../../models/file';

@Component({
  selector: 'app-mydocuments',
  templateUrl: './mydocuments.component.html',
  styleUrls: ['./mydocuments.component.css']
})
export class MydocumentsComponent implements OnInit {

  fileList : FileDetails[];

  constructor(private lkp : Lookupservice) { }

  ngOnInit(): void {
    this.lkp.getAllFiles().subscribe( (data: FileDetails[]) => {
      this.fileList = data;
    });
  }

}
