import { Component, OnInit } from '@angular/core';
import { DialpadService } from '../../services/dialpad.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-dialpad',
  templateUrl: './dialpad.component.html',
  styleUrls: ['./dialpad.component.css']
})
export class DialpadComponent implements OnInit {

  public superhero;

  constructor(
    private superheroService: DialpadService
  ) { }

  ngOnInit() {
  }

  callhero(event) {

    if (event.number.length < 2 || event.number.charAt(0) != 0 || event.number.charAt(1) != " ") {

      this.superhero = 'Number should be in 0 <space> <code>';
    } else {
      let num = event.number.slice(2, event.number.length);
      let values = event.values.slice(1, event.number.length);
      this.superheroService.callHero(num, values).subscribe(response => {
        if (response.length > 0) {
          this.superhero = 'Calling ' + response[0] + '......';
        } else {
          this.superhero = 'You Dialed a Wrong Number ';
        }
      });
    }
  }

}
