import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private service:ServiceService) { }

  posts;
  ngOnInit() {
    this.service.getData('https://jsonplaceholder.typicode.com/posts').subscribe(res=>{
      this.posts = res;
      console.log(this.posts)
    })
  }

}
