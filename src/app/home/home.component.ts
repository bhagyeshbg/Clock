import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: any;
  constructor(private service: DataService, private router:Router) 
  {
    console.log("Home Component Created");
  }

  ngOnInit() {
    let observableResult=  this.service.Select();
    observableResult.subscribe((result)=>{
    console.log(result);
    this.movies = result;
  });
  }

  GoToClock()
  {
    this.router.navigate(['/WorldClock']);
  }

}
