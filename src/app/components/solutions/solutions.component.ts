import { Component } from '@angular/core';
interface CardItem {
  icon: string;
  heading: string;
  description: string;
}

@Component({
  selector: 'app-solutions',
  standalone: false,
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss',
})
export class SolutionsComponent {
  mainCard = {
    heading:
      'We simplify media buying with data, automation, and collaboration to maximize ROI',
    buttonText: 'Get Started',
  };

  cardItems: CardItem[] = [
    {
      icon: 'assets/images/solutions/marketing.png',
      heading: 'Campaign Planning',
      description:
        'Plan and optimize your ad campaigns with data-driven insights and seamless collaboration for maximum impact.',
    },
    {
      icon: 'assets/images/solutions/play.png',
      heading: 'Media Buying',
      description:
        'Effortlessly book media slots with AI-powered automation, ensuring cost efficiency and better reach.',
    },
    {
      icon: 'assets/images/solutions/advertising.png',
      heading: 'Ad Distribution',
      description:
        'Distribute ads across multiple channels while ensuring precise targeting and real-time tracking.',
    },
    {
      icon: 'assets/images/solutions/analysis.png',
      heading: 'Performance Analytics',
      description:
        'Gain actionable insights with real-time performance tracking to maximize your ROI and refine future strategies.',
    },
  ];
}
