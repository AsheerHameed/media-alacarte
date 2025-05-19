import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import gsap from 'gsap';

interface ServiceCard {
  image: string;
  title: string;
  subtitle?: string;
  tag?: string;
  cta?: string;
}

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
 services: ServiceCard[] = [
    {
      image: 'assets/images/services/services-adv.jpg',
      title: 'Advertisers',
      subtitle: 'Run & optimize ads across multiple platforms effortlessly',
      cta: '#'
    },
    {
      image: 'assets/images/services/services-2.jpg',
      title: 'Agencies',
      subtitle: 'Run & optimize ads across multiple platforms effortlessly',
      tag: 'Agencies',
      cta: '#'
    },
    {
      image: 'assets/images/services/services-3.jpg',
      title: 'Media Owners',
      subtitle: 'Run & optimize ads across multiple platforms effortlessly',
      tag: 'Media Owners',
        cta: '#'
    }
  ];

}
