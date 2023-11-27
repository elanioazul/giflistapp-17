import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifListComponent } from './ui/gif-list.component';
import { RedditService } from '../shared/data-access/reddit.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GifListComponent],
  template: `<app-gif-list
    class="grid-container"
    [gifs]="redditService.gifs()"
  /> `,
  styles: ``,
})
export default class HomeComponent {
  redditService = inject(RedditService);
}
