import { Component } from '@angular/core';
import { CRUDService } from '../../crud.service';
import { Post } from '../../models/post';  // N'oubliez pas d'importer le modèle Post

@Component({
  selector: 'app-post-item',
  standalone: false,
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {
  posts: any[] = [];  // Déclarez le type de `posts` comme étant un tableau de `Post`

  constructor(public CrudService: CRUDService) {}

  ngOnInit(): void {
    this.CrudService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;  
      console.log(this.posts);  
    });
  }
}
