import { Component, Input } from '@angular/core';
import { Training } from '../../../data/CV';

@Component({
  selector: 'app-trainings',
  imports: [],
  templateUrl: './trainings.html',
  styleUrl: './trainings.scss',
})
export class Trainings {
  @Input() trainings: Training[] = [];
}
