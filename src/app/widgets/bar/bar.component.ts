import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent {
  ngOnInit() {
    this.func();
  }

  func() {
    document.querySelectorAll('.button').forEach((button) =>
      button.addEventListener('click', (e) => {
        if (!button.classList.contains('delete')) {
          button.classList.add('delete');
          setTimeout(() => button.classList.remove('delete'), 3200);
        }
        e.preventDefault();
      })
    );
  }
}
