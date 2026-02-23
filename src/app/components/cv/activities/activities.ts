import { Component, Input } from '@angular/core';
import { Activity } from '../../../data/CV';

@Component({
  selector: 'app-activities',
  imports: [],
  templateUrl: './activities.html',
  styleUrl: './activities.scss',
})
export class Activities {
  @Input() activities: Activity[] = [];
}
