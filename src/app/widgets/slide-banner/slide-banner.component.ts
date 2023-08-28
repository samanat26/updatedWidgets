import { Component } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-slide-banner',
  templateUrl: './slide-banner.component.html',
  styleUrls: ['./slide-banner.component.scss'],
})
export class SlideBannerComponent {
  // sliderImages : any[]=[]
  sliderImages: any;
  arrowLeft: any;
  arrowRight: any;
  current: number = 0;

  ngOnInit(): void {
    this.sliderImages = data;
    this.sliderImages.images = document.querySelectorAll('.slide');
    this.arrowLeft = document.querySelector('#arrow_left');
    this.arrowRight = document.querySelector('#arrow_right');
    this.startSlide();
  }

  reset(): void {
    this.sliderImages.images.forEach((image: any) => {
      image.style.display = 'none';
    });
  }

  startSlide(): void {
    this.reset();
    this.sliderImages.images[0].style.display = 'block';
  }

  slideLeft(): void {
    this.reset();
    (this.sliderImages[this.current - 1] as HTMLElement).style.display =
      'block';
    this.current--;
  }

  slideRight(): void {
    this.reset();
    (this.sliderImages[this.current + 1] as HTMLElement).style.display =
      'block';
    this.current++;
  }

  constructor() {
    this.arrowLeft.addEventListener('click', () => {
      if (this.current === 0) {
        this.current = this.sliderImages.length;
      }
      this.slideLeft();
    });

    this.arrowRight.addEventListener('click', () => {
      if (this.current === this.sliderImages.length - 1) {
        this.current = -1;
      }
      this.slideRight();
    });
  }
}
