import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-exporter',
  template: `
    <button (click)="downloadJson()">Télécharger JSON</button>
    <ul>
      <li *ngFor="let user of users">{{ user.firstName }} {{ user.lastName }}</li>
    </ul>
  `
})
export class DataExporterComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<{ users: any[] }>('https://dummyjson.com/users').subscribe({
      next: (response) => {
        this.users = response.users.map(u => ({ firstName: u.firstName, lastName: u.lastName }));
      },
      error: (err) => console.error('Failed to fetch users', err)
    });
  }

  downloadJson() {
    const fileName = "users.json";
    const json = JSON.stringify(this.users);
    const blob = new Blob([json], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }
}
