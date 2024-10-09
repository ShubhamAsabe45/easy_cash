import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabhighlightService {

  private selectedTabSource = new BehaviorSubject<string>('home');
  selectedTab$ = this.selectedTabSource.asObservable();

  setSelectedTab(tab: string) {
    this.selectedTabSource.next(tab);
  }
}
