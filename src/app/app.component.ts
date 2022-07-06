import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SvelteComponent } from 'svelte';
//@ts-ignore
import Counter from './Counter.svelte';
@Component({
  selector: 'app-root',
  template: `<app-counter
    [count]="99"
    (countChanged)="logEvent($event)"
  ></app-counter>`,
})
export class AppComponent {
  logEvent($event: any) {
    console.log($event);
  }
}
