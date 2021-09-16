import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvancesearchComponent} from './advancesearch/advancesearch.component';
import {MydocumentsComponent} from './mydocuments/mydocuments.component';
import {UploaddocumentComponent} from './uploaddocument/uploaddocument.component';
import {ViewdocumentsComponent} from './viewdocuments/viewdocuments.component';
import {SearchresultComponent} from './searchresult/searchresult.component';
import {ConvertJsonCsvComponent} from './convert-json-csv/convert-json-csv.component';



const routes: Routes = [
  {
    path: 'search',
    component: AdvancesearchComponent,
    data: {
      title: 'Advance Search',
      headerDisplay: 'none'
    }
  },
  {
    path: 'mydocs',
    component: MydocumentsComponent,
    data: {
      title: 'My Uploaded Documents',
      headerDisplay: 'none'
    }
  },
  {
    path: 'uploader',
    component: UploaddocumentComponent,
    data: {
      title: 'Upload Documents',
      headerDisplay: 'none'
    }
  },
  {
    path: 'viewdocument/:docid',
    component: ViewdocumentsComponent,
    data: {
      title: 'View Documents',
      headerDisplay: 'none'
    }
  },
  {
    path: 'search/result',
    component: SearchresultComponent,
    data: {
      title: 'Search Result',
      headerDisplay: 'none'
    }
  },
  {
    path: 'convert/json2csv',
    component: ConvertJsonCsvComponent,
    data: {
      title: 'JSON 2 CSV',
      headerDisplay: 'none'
    }
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule { }
