import {Component, Input, OnInit} from '@angular/core';
import {IRatingUnit} from "../irating-unit";

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  rating: IRatingUnit[] = [];

  @Input() max: number = 0;

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.max; i++) {
      this.rating.push({value: i + 1, active: false});
    }
  }

  countRatingActive() {
    let count: number = 0;
    for (let ratingUnit of this.rating) {
      if (ratingUnit.active) {
        count++;
      }
    }
    return count;
  }

  countRating(index: number) {
    for (let i = 0; i < this.max; i++) {
      this.rating[i].active = i <= index;
    }
  }

  deleteRating() {
    for (let i = 0; i < this.max; i++) {
      this.rating[i].active = false;
    }
  }
}
