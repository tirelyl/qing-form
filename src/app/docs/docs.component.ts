import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  host: {
    class: 'markdown'
  }
})
export class DocsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
