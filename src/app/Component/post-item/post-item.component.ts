import { Component } from '@angular/core';
import { CRUDService } from '../../crud.service';

@Component({
  selector: 'app-post-item',
  standalone: false,
  
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css'
})

export class PostItemComponent {
  posts: any[] = [];
  constructor(public CrudService: CRUDService) {}

   ngOnInit(): void {
     this.posts = this.CrudService.getPosts();
     console.log(this.posts); 
   }
  }