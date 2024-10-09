import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabhighlightService } from 'src/app/tabhighlight.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(private router:Router,private tab:TabhighlightService){}
  ngOnInit(): void {
    
  }

  about(){
    this.tab.setSelectedTab('about');
    this.router.navigate(['/home/about']);
  }

  contact(){
    this.tab.setSelectedTab('contact');
    this.router.navigate(['/home/contact']);
  }

  services(){
    this.tab.setSelectedTab('services');
    this.router.navigate(['/home/services']);
  }
}
