import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  columns = [
    { columnDef: 'position', header: 'S.R. No.',    cell: (element: any) => `${element.position}` },
    { columnDef: 'writerName',     header: 'Writer Name',   cell: (element: any) => `${element.writerName}`     },
    { columnDef: 'categories',   header: 'Category', cell: (element: any) => `${element.categories}`   },
    { columnDef: 'posts',   header: 'Post', cell: (element: any) => `${element.posts}`   },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
}
