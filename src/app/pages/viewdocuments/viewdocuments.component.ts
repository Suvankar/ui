import { Component, OnInit } from '@angular/core';
import {ThemeConstantService} from '../../shared/services/theme-constant.service';
import {NzUploadFile} from 'ng-zorro-antd/upload/interface';
import {DatePipe} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Lookupservice} from '../../shared/services/lookupservice';
import {FileInformation, FileOtherDetails} from '../../models/fileOtherdetails';

let blogData = require('../../../assets/data/pages/data.json');
declare var require: any;

@Component({
  selector: 'app-viewdocuments',
  templateUrl: './viewdocuments.component.html',
  styleUrls: ['./viewdocuments.component.css']
})
export class ViewdocumentsComponent implements OnInit {

  fileUId : string;
  fileOtherDetails : FileOtherDetails;
  fileInformation : FileInformation;

  themeColors = this.colorConfig.get().colors;
  colorRed = this.themeColors.red;
  colorBlue = this.themeColors.blue;
  colorCyan = this.themeColors.cyan;
  colorGold = this.themeColors.gold;
  colorVolcano = this.themeColors.volcano;
  colorPurple = this.themeColors.purple;
  type;
  blog ;
  loading = true;
  tags = [];
  isPIData = false;
  file: NzUploadFile;

  doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  doughnutChartData: number[] = [350, 450, 100];
  doughnutChartColors: Array<any> =  [{
    backgroundColor: [this.themeColors.blue, this.themeColors.gold, this.themeColors.cyan],
    pointBackgroundColor : [this.themeColors.blue, this.themeColors.gold, this.themeColors.cyan]
  }];
  doughnutChartType = 'doughnut';

  constructor(private colorConfig: ThemeConstantService, private date: DatePipe,
              private route: ActivatedRoute, private router: Router , private lkpService : Lookupservice) {
    this.blog = blogData;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  ngOnInit(): void {
    this.fileUId = this.route.snapshot.paramMap.get('docid');
    this.lkpService.getOtherDetails(this.fileUId).subscribe( (data : FileOtherDetails) => {
      this.fileOtherDetails = data;

    });
    this.lkpService.getFileDetails(this.fileUId).subscribe( (data : FileInformation) => {
      this.fileInformation = data;
      this.fileInformation.fileDownloadUrl = 'http://localhost:8888' + this.fileInformation.fileDownloadUrl;
    });

    console.log(this.fileUId);
    this.isPIData = JSON.parse(localStorage.getItem('PII')) as boolean;
    this.tags = JSON.parse(localStorage.getItem('tags')) ;
    this.file = JSON.parse(localStorage.getItem('file')) as NzUploadFile ;
    this.type = this.file.type.split('/')[1];
    console.log(this.isPIData);
    console.log(this.tags);
    console.log(this.file);
  }

  formatOne = (percent: number) => `${percent} Words`;

  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

}
