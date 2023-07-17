import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent {
  ngOnInit() {
    this.func();
  }
  func() {
    const inputs = document.querySelectorAll('.input');

    function focusFunc(this: any) {
      let parent = this.parentNode;
      parent.classList.add('focus');
    }

    function blurFunc(this: any) {
      let parent = this.parentNode;
      if (this.value == '') {
        parent.classList.remove('focus');
      }
    }

    inputs.forEach((input) => {
      input.addEventListener('focus', focusFunc);
      input.addEventListener('blur', blurFunc);
    });
  }
}
