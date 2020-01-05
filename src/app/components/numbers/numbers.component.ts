import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DialpadService } from '../../services/dialpad.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  public dialpadNumbers;
  public dialednumber = '';
  public dialedValues = [];

  @Output() callinghero = new EventEmitter();

  constructor(
    private dialpad: DialpadService
  ) { }

  ngOnInit() {
    this.getDialpad();
  }

  private getDialpad() {
    this.dialpad.getDialpad().subscribe(res => {
      this.dialpadNumbers = res;
    });
  }

  /**
   * dialNumber
   * saving the dialed number
   */
  public dialNumber(number) {
    if (number.values == 'space') {
      this.dialednumber += ' ';
    } else {
      this.dialednumber += number.number;
      this.dialedValues.push(number.values);
    }
  }

  /**
   * backspace()
   */
  public backspace() {
    this.dialednumber = this.dialednumber.slice(0, this.dialednumber.length - 1);
    this.dialedValues.pop();
  }

  /**
   * callhero()
   */
  public callhero() {
    let params = {
      number: this.dialednumber,
      values: this.dialedValues
    };
    this.callinghero.emit(params);
  }
}
