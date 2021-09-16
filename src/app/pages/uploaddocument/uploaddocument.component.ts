import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NzUploadChangeParam} from 'ng-zorro-antd/upload';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzUploadFile} from 'ng-zorro-antd/upload/interface';
import {Router} from '@angular/router';
import {Lookupservice} from '../../shared/services/lookupservice';
import {FileDetails} from '../../models/file';
import {FileOtherDetails} from '../../models/fileOtherdetails';

@Component({
  selector: 'app-uploaddocument',
  templateUrl: './uploaddocument.component.html',
  styleUrls: ['./uploaddocument.component.css']
})
export class UploaddocumentComponent implements OnInit {
  percent = 10;
 currentStep = 0;
  file: NzUploadFile;
  tags = [];
  documentSatges = ['Run OCR to Fetch content' ,
    'Run AI for Document Summarization' , 'Mask PII Data' , 'Run AI to Tag the document' , 'Create FAQ for document' , 'Index the Result' ,
    'Find Similar documents', 'Upload result in Database' , 'Done'];
  doneStages = [];
  currentStage = '';
  inputVisible = false;
  inputValue = '';
  isPIData = false;
  isFileSubmitted = false;
  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;
  timer = ms => new Promise(res => setTimeout(res, ms));

  constructor(private msg: NzMessageService, private router: Router, private lkpservice : Lookupservice) { }

  ngOnInit(): void {
  }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;


    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);

      setTimeout(() => {
        this. currentStep ++;
        this.file = file;
        console.log(this.file);
        this.tags.push(file.name);
        this.tags.push(file.response.uid);
        this.tags.push(file.response.fileType);

      }, 2000);

    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }


  handleClose(removedTag: {}): void {
    this.tags = this.tags.filter(tag => tag !== removedTag);
  }

  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showInput(): void {
    this.inputVisible = true;
    setTimeout(() => {
      this.inputElement?.nativeElement.focus();
    }, 10);
  }

  handleInputConfirm(): void {
    if (this.inputValue && this.tags.indexOf(this.inputValue) === -1) {
      this.tags = [...this.tags, this.inputValue];
    }
    this.inputValue = '';
    this.inputVisible = false;
  }

  submitFile() {
    let filedetails = new FileOtherDetails();
    filedetails.customTags = this.tags;
    filedetails.isPiData = this.isPIData;
    filedetails.uploadedBy = 'Suvankar Bose';
    filedetails.uid =  this.file.response.uid;
    filedetails.uploadedById = '83WNH';

    this.lkpservice.postOtherDetails(this.file.response.uid , filedetails).subscribe( data => {
      console.log(data);
      this.isFileSubmitted = true;
      setTimeout(() => {
        this. currentStep ++;
        this.runAIonDocument();

      }, 2000);
    });
  }

  async runAIonDocument(){
    this.doneStages.push('Uploaded file ' + this.file.name);
    for (let entry of this.documentSatges) {
      this.currentStage = entry;
      await this.timer(3000);
      this.doneStages.push(entry);
      this.percent = this.percent + 10;
      if(this.percent === 100)
        this.gotoDone();
    }
  }

  gotoDone() {

    setTimeout(() => {
      this. currentStep ++;


    }, 2000);
  }

  routeToFileDetails() {
    localStorage.setItem('file', JSON.stringify(this.file));
    localStorage.setItem('tags', JSON.stringify(this.tags));
    localStorage.setItem('PII', JSON.stringify(this.isPIData));
    this.router.navigate(['/pages/viewdocument/' + this.file.response.uid]);
  }
}
