import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzRateModule} from 'ng-zorro-antd/rate';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzTagModule} from 'ng-zorro-antd/tag';
import {NzInputModule} from 'ng-zorro-antd/input';
import { SearchdocumnetsComponent } from './searchdocumnets/searchdocumnets.component';
import { ViewdocumentsComponent } from './viewdocuments/viewdocuments.component';
import { MydocumentsComponent } from './mydocuments/mydocuments.component';
import { AdvancesearchComponent } from './advancesearch/advancesearch.component';
import { UploaddocumentComponent } from './uploaddocument/uploaddocument.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {QuicklinkModule} from 'ngx-quicklink';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzCollapseModule} from 'ng-zorro-antd/collapse';
import {NzStepsModule} from 'ng-zorro-antd/steps';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzTimelineModule} from 'ng-zorro-antd/timeline';
import {NzProgressModule} from 'ng-zorro-antd/progress';
import {NzResultModule} from 'ng-zorro-antd/result';
import {DatePipe} from '@angular/common';
import { DocconversionComponent } from './docconversion/docconversion.component';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import {NgChartjsModule} from 'ng-chartjs';
import {NzCommentModule} from 'ng-zorro-antd/comment';
import { ConvertJsonCsvComponent } from './convert-json-csv/convert-json-csv.component';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';



const antdModule = [
    NzCardModule,
    NzSkeletonModule,
    NzAvatarModule,
    NzPaginationModule,
    NzDividerModule,
    NzButtonModule,
    NzListModule,
    NzTableModule,
    NzRadioModule,
    NzRateModule,
    NzTabsModule,
    NzTagModule,
    NzFormModule,
    NzDatePickerModule,
    NzSelectModule,
    NzSwitchModule,
    NzUploadModule,
    NzToolTipModule,
    NzModalModule,
    NzMessageModule,
    NzInputModule,
    NzBadgeModule,
    NzLayoutModule,
    NzIconModule,
   NzCollapseModule,
   NzStepsModule,
   NzDescriptionsModule,
   NzTimelineModule,
   NzProgressModule,
   NzResultModule,
   NgxExtendedPdfViewerModule,
    NgChartjsModule,
  NzCommentModule,
  NzPageHeaderModule

];

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    FormsModule,
    ...antdModule,
    QuicklinkModule
  ],
    declarations: [


    SearchdocumnetsComponent,
           ViewdocumentsComponent,
           MydocumentsComponent,
           AdvancesearchComponent,
           UploaddocumentComponent,
           SearchresultComponent,
           DocconversionComponent,
           ConvertJsonCsvComponent
  ],
    providers: [ DatePipe
    ]
})

export class PagesModule {}
