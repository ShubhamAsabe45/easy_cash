import { Component,OnInit } from '@angular/core';
import { TabhighlightService } from 'src/app/tabhighlight.service';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit{
  selectedTab: string | undefined;
  constructor(private tab:TabhighlightService){}
  ngOnInit(): void {
    this.tab.selectedTab$.subscribe(tab => {
      this.selectedTab = tab;
    });
  }

}
