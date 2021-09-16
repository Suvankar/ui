import { Component, OnInit } from '@angular/core';
import {Lookupservice} from '../shared/services/lookupservice';
import {FileCount, FileInformation} from '../models/fileOtherdetails';
import {NzMessageService} from 'ng-zorro-antd/message';
import {Router} from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
   fileCount: FileCount;
   inputText: string;
   disableInput : boolean = false;

    constructor(private lookupService: Lookupservice, private msg: NzMessageService, private router: Router) { }

    ngOnInit(): void {
      this.lookupService.getFileCont('83WNH').subscribe( (data: FileCount) => {
        this.fileCount = data;
      });
    }

  searchText($event) {

      if ($event.key === 'Enter'){
      console.log(this.inputText);
        this.routeTotheFile(this.inputText);
      }


  }

   routeTotheFile(docId): void{
      this.disableInput = true;
      this.lookupService.getFileDetails(docId).subscribe( (data: FileInformation) => {
        this.router.navigate(['/pages/viewdocument/' + docId]);
      } , error => {
         this.msg.error('Unable to find any document with the id ' + docId);
         this.disableInput = false;
      });
  }
}
