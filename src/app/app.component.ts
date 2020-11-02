import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';
  winMessage = '';
  isCross = false; // to decide the turn of the player.
  items: string[] = new Array(9).fill('empty');
  
  constructor(private toastr: ToastrService) {
    this.toastr.toastrConfig.preventDuplicates = true;
  }

  handleClick = (itemNumber: number) => {
    if (this.winMessage)
    {
      this.toastr.success(this.winMessage);
    }
   if (this.items[itemNumber] === 'empty')
    {
      this.items[itemNumber] = this.isCross ? 'cross' : 'circle';
      this.isCross = !this.isCross;
    }
    else
    {
      this.toastr.warning("Already filled");
      return;
    }

    this.checkWinner();
  };

  checkWinner = () => {
    if (
      this.items[0] === this.items[1] &&
      this.items[0] === this.items[2] &&
      this.items[0] !== 'empty'
    ) {
      this.winMessage = `${this.items[0]} won`;
    } else if (
      this.items[3] !== 'empty' &&
      this.items[3] === this.items[4] &&
      this.items[4] === this.items[5]
    ) {
      this.winMessage = `${this.items[3]} won`;
    } else if (
      this.items[6] !== 'empty' &&
      this.items[6] === this.items[7] &&
      this.items[7] === this.items[8]
    ) {
      this.winMessage = `${this.items[6]} won`;
    } else if (
      this.items[0] !== 'empty' &&
      this.items[0] === this.items[3] &&
      this.items[3] === this.items[6]
    ) {
      this.winMessage = `${this.items[0]} won`;
    } else if (
      this.items[1] !== 'empty' &&
      this.items[1] === this.items[4] &&
      this.items[4] === this.items[7]
    ) {
      this.winMessage = `${this.items[1]} won`;
    } else if (
      this.items[2] !== 'empty' &&
      this.items[2] === this.items[5] &&
      this.items[5] === this.items[8]
    ) {
      this.winMessage = `${this.items[2]} won`;
    } else if (
      this.items[0] !== 'empty' &&
      this.items[0] === this.items[4] &&
      this.items[4] === this.items[8]
    ) {
      this.winMessage = `${this.items[0]} won`;
    } else if (
      this.items[2] !== 'empty' &&
      this.items[2] === this.items[4] &&
      this.items[4] === this.items[6]
    ) {
      this.winMessage = `${this.items[2]} won`;
    }
  };

  resetGame = () => {
    this.winMessage = '';
    this.isCross = false;
    this.items = new Array(9).fill('empty');
  }
}
