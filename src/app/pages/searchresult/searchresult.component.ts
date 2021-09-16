import { Component, OnInit } from '@angular/core';
import {ThemeConstantService} from '../../shared/services/theme-constant.service';

let blogData = require('../../../assets/data/pages/blog-data.json');
declare var require: any;

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {
  themeColors = this.colorConfig.get().colors;
  colorRed = this.themeColors.red;
  colorBlue = this.themeColors.blue;
  colorCyan = this.themeColors.cyan;
  colorGold = this.themeColors.gold;
  colorVolcano = this.themeColors.volcano;
  colorPurple = this.themeColors.purple;

  blogs = [];
  loading = true;

  constructor(private colorConfig : ThemeConstantService,) {
    this.blogs = blogData;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  ngOnInit(): void {
  }
}
