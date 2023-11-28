import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifListComponent } from './ui/gif-list.component';
import { RedditService } from '../shared/data-access/reddit.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GifListComponent, InfiniteScrollModule],
  template: `<app-gif-list
    class="grid-container"
    infiniteScroll
    (scrolled)="redditService.pagination$.next(redditService.lastKnownGif())"
    [gifs]="redditService.gifs()"
  /> `,
  styles: ``,
})
export default class HomeComponent {
  redditService = inject(RedditService);
}
