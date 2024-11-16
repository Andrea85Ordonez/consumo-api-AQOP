import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],  
  providers: [UserService],                   
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  currentPage = 1;
  itemsPerPage = 5; // Número de elementos por página
  totalPages = 0;

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });

    this.totalPages = Math.ceil(this.users.length / this.itemsPerPage);
  }
    get paginatedUsers() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.users.slice(start, start + this.itemsPerPage);
  }
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
