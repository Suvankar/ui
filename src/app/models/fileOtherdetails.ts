export class FileOtherDetails {
 uid :string;
 fileName : string;
 uploadedBy:string;
 uploadedById:string;
 isPiData : boolean;
 uploadedByImageUrl: string;
 customTags: string[];


}

export class FileInformation {

  uid : string;
  fileName : string;
  fileType : string;
  fileDownloadUrl : string;
  createdOn : Date;
}


export class FileCount {
   totalCount : number;
   myCount : number;
}
