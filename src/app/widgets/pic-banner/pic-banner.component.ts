import { Component } from '@angular/core';

@Component({
  selector: 'app-pic-banner',
  templateUrl: './pic-banner.component.html',
  styleUrls: ['./pic-banner.component.scss'],
})
export class PicBannerComponent {
  activeElement: HTMLElement | null = null;

  constructor() {}

  ngOnInit(): void {
    this.activeElement = document.querySelector('.active');
    setInterval(() => this.rotate(), 4000);
  }

  rotate(): void {
    let nextElement: HTMLElement | null;
    let parentElement: HTMLElement | null;

    if (this.activeElement?.nextElementSibling) {
      nextElement = this.activeElement.nextElementSibling as HTMLElement;
    } else {
      parentElement = this.activeElement?.parentElement as HTMLElement;
      nextElement = parentElement?.firstElementChild as HTMLElement;
    }

    if (nextElement) {
      nextElement.classList.add('active');
      nextElement.classList.add('anime');
      nextElement.classList.remove('next');

      if (this.activeElement) {
        this.activeElement.classList.remove('active');
        this.activeElement.classList.remove('anime');
      }

      this.activeElement = nextElement;

      if (this.activeElement?.nextElementSibling) {
        nextElement = this.activeElement.nextElementSibling as HTMLElement;
      } else {
        parentElement = this.activeElement?.parentElement as HTMLElement;
        nextElement = parentElement?.firstElementChild as HTMLElement;
      }

      if (nextElement) {
        nextElement.classList.add('next');
      }
    }
  }
}
