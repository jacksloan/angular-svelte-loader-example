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
  selector: 'app-counter',
  template: '<div id="svelteRoot"></div>',
})
export class CounterComponent implements AfterViewInit, OnDestroy, OnChanges {
  constructor(@Inject(DOCUMENT) private doc: Document) {}

  @Input() count: number = 50;
  @Output() countChanged = new EventEmitter<number>();

  component?: SvelteComponent;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['count']) {
      this.component?.$set(changes['count'].currentValue);
    }
  }

  ngOnDestroy(): void {
    this.component?.$destroy();
  }

  ngAfterViewInit(): void {
    const target: any = this.doc.getElementById('svelteRoot');
    this.component = new Counter({
      target,
      props: { count: this.count },
    });
    this.component?.$on('change', (e) => this.countChanged.emit(e.detail));
  }
}
