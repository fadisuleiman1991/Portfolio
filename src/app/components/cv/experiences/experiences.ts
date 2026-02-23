import { Component, Input } from '@angular/core';
import { Experience } from '../../../data/CV';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class Experiences {
  @Input() experiences: Experience[] = [];
}
