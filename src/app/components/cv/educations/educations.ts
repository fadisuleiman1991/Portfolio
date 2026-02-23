import { Component, Input } from '@angular/core';
import { Education } from '../../../data/CV';

@Component({
  selector: 'app-educations',
  imports: [],
  templateUrl: './educations.html',
  styleUrl: './educations.scss',
})
export class Educations {
  @Input() educations: Education[] = [];
}
