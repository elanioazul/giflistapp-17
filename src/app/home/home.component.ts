import { Component, inject } from '@angular/core';
import { GifListComponent } from './ui/gif-list.component';
import { RedditService } from '../shared/data-access/reddit.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SearchBarComponent } from './ui/search-bar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    GifListComponent,
    InfiniteScrollModule,
    SearchBarComponent,
    MatProgressSpinnerModule,
  ],
  template: `
    <app-search-bar
      [subredditFormControl]="redditService.subredditFormControl"
    ></app-search-bar>
    @if (redditService.loading()) {
    <mat-progress-spinner
      mode="indeterminate"
      diameter="50"
    ></mat-progress-spinner>
    } @else {
    <app-gif-list
      class="grid-container"
      infiniteScroll
      (scrolled)="redditService.pagination$.next(redditService.lastKnownGif())"
      [gifs]="redditService.gifs()"
    />
    }
  `,
  styles: ``,
})
export default class HomeComponent {
  redditService = inject(RedditService);
}
