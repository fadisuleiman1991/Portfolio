import { Component, Input } from '@angular/core';
import { OnlineProfile } from '../../../data/CV';

@Component({
  selector: 'app-online-profiles',
  imports: [],
  templateUrl: './online-profiles.html',
  styleUrl: './online-profiles.scss',
})
export class OnlineProfiles {
  @Input() onlineProfiles: OnlineProfile[] = [];
}
