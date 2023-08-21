import { Component, OnInit, OnChanges, SimpleChanges, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
 
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit{

  constructor(){

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges is called");
  }

  ngOnInit(): void {
    console.log("ngOnInit is called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit is called");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit is called");
  }

}
