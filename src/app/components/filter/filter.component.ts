import { Component, input, signal, WritableSignal, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() filtersChanged = new EventEmitter<{ category?: string; platform?: string; sort?: string }>();

  categories = input<string[]>([]);
  platforms = input<string[]>([]);

  selectedCategory: WritableSignal<string | undefined> = signal(undefined);
  selectedPlatform: WritableSignal<string | undefined> = signal(undefined);
  selectedSort: WritableSignal<string | undefined> = signal('relevance');

  onFiltersChanged() {
    this.filtersChanged.emit({
      category: this.selectedCategory(),
      platform: this.selectedPlatform(),
      sort: this.selectedSort(),
    });
  }
}
