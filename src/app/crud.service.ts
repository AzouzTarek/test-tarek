import { Injectable } from '@angular/core';
import { Post } from './models/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  apiUrl="http://localhost:3000/post/"
  posts: Post[] = [
    new Post('1', 'Post 1', 'Contenu du post 1'),
    new Post('2', 'Post 2', 'Contenu du post 2'),
    new Post('3', 'Post 3', 'Contenu du post 3'),
    new Post('4', 'Post 4', 'Contenu du post 4'),
  ];

  constructor(private http: HttpClient) {}
  // getPosts() {
  //   return this.posts;
  // }
  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl+'post');
  }
  getPostsById(id: string){
    return this.http.get<Post>(this.apiUrl+'post/'+id);
  }
}
