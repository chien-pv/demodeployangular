import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { waitForDebugger } from 'node:inspector';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  p: number = 1;

  collection: any[] = [
    'Nguyen Van A',
    'Nguyen Van b',
    'Nguyen Van B',
    'Nguyen Van C',
    'Nguyen Van D',
    'Nguyen Van E',
    'Nguyen Van E',
  ];
}
