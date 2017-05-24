import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-password-strength',
  templateUrl: './ngx-password-strength.component.html',
  styleUrls: ['./ngx-password-strength.component.css']
})
export class NgxPasswordStrengthComponent implements OnInit {
  points: Array<Object>;
  pointNum: number = 5;
  private defaultColor: string = "#DDD";

  @Input() colors: Array<String> = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];
  @Input()
  set checkPassword(value: string) {
    if (value) {
      let c = this.getColor(this.measureStrength(value));
      this.pointHandle(c.idx, c.color);
    }
  }

  ngOnInit() {
    this.pointHandle(0, null);
  }

  pointHandle(idx?: number, color?: string) {
    this.points = [];
    for (let i = 0; i < this.pointNum; i++) {
      this.points.push({ "backgroundColor": (idx > i ? color : this.defaultColor) });
    }
  }

  measureStrength(p: string): number {
    let lowerCase = new RegExp('[a-z]');
    let upperCase = new RegExp('[A-Z]');
    let numbers = new RegExp('[0-9]');
    let specificSymbol = new RegExp('[$-/:-?{-~!"^_`\\[\\]%&@#]');
    let matches = [lowerCase.test(p), upperCase.test(p), numbers.test(p), specificSymbol.test(p)];
    let matcheNum = matches.filter((isMatchedFlag: boolean) => {
      return isMatchedFlag === true;
    }).length;

    // 密码分数
    let score = 2 * p.length + matcheNum * 10;

    if (p.length <= 6) {  // 密码太短
      return Math.min(score, 10);
    } else if (matcheNum === 1) {  // 匹配1种
      return Math.min(score, 10);
    } else if ((matcheNum === 2) && (p.length < 10)) {  // 匹配2种，长度少于10
      return Math.min(score, 20);
    } else if (matcheNum === 2) {  // 匹配2种
      return Math.min(score, 30);
    } else if (matcheNum === 3) {  // 匹配3种
      return Math.min(score, 40);
    }
    return score;
  };

  getColor(score: number): any {
    let idx = Math.floor(score / 10);
    idx = idx > 5 ? 5 : idx;
    return { idx: idx, color: this.colors[idx - 1] };
  };


}
