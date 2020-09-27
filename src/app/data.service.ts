import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private helper: HttpClient) 
  {
   
  }

  Select()
  {
    return  this.helper.get("http://localhost:7070/movies");
  }
  
  post(filename: any, mname: string, no: number) {

 const formData = new FormData();
 console.log(filename+" "+mname+""+no);
 formData.append('filename', filename);
 formData.append('mname', mname);
 formData.append('no', '' + no);
 return this.helper.post("http://localhost:7070/movies", formData);
  }

}