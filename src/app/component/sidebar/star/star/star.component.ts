import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() rating!: any;

  s = ('' + this.rating).split('.');
  intpart = +this.s[0];
  fractional = +this.s[1];
  fractwidth = {
    width: this.fractional * 10 + '%',
  };
  fullstars = new Array(Math.floor(this.intpart));
}
