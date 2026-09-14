import { Component, signal, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  menuOpen = signal(false);
  classesOpen = signal(false);

  private router = inject(Router);

  search(searchTerm: string) {
    const query = searchTerm.trim();

    if (!query) return;

    this.menuOpen.set(false);

    this.router.navigate(['/search'], {
      queryParams: { q: query },
    });
  }
}
