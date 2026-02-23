import { Component, Input } from '@angular/core';
import { Language } from '../../../data/CV';

@Component({
  selector: 'app-languages',
  imports: [],
  templateUrl: './languages.html',
  styleUrl: './languages.scss',
})
export class Languages {
  @Input() languages: Language[] = [];
}
