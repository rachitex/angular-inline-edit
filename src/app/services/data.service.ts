import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
   createDb(){

    let  writers =  [
      {  writerId:  101,  writerName:  'Writer1' },
      {  writerId:  102,  writerName:  'Writer2' },
      {  writerId:  103,  writerName:  'Writer3' },
      {  writerId:  104,  writerName:  'Writer4' },
      {  writerId:  105,  writerName:  'Writer5' }
    ];

    let categories = [
      { categoryId: 101, categoryName: 'Category1' },
      { categoryId: 102, categoryName: 'Category2' }
    ];

     let posts = [
      { postId: 101, categoryId: 101, postTitle: 'Post1', postDescription: 'This is Post1' },
      { postId: 102, categoryId: 101, postTitle: 'Post2', postDescription: 'This is Post2' },
      { postId: 103, categoryId: 102, postTitle: 'Post3', postDescription: 'This is Post3' }
    ];

    let skillMatrices = [
      { 
        skillMatrix: 101, 
        writerId: 101, 
        postId: 101, 
        writers: [{
          writerId: 101,
          writerName: 'Writer1'
        }],
        posts: [{
          postId: 101,
          categoryId: 101,
          postTitle: 'Post1',
          postDescription: 'This is Post1',
          categories: [{
            categoryId: 101,
            categoryName: 'Category1'
          }]
        }]  
      },
      { 
        skillMatrix: 102, 
        writerId: 101, 
        postId: 102, 
        writers: [{
          writerId: 101,
          writerName: 'Writer1'
        }],
        posts: [{
          postId: 102,
          categoryId: 101,
          postTitle: 'Post2',
          postDescription: 'This is Post2',
          categories: [{
            categoryId: 101,
            categoryName: 'Category1'
          }]
        }]  
      },
      { 
        skillMatrix: 103, 
        writerId: 101, 
        postId: 103, 
        writers: [{
          writerId: 101,
          writerName: 'Writer1'
        }],
        posts: [{
          postId: 103,
          categoryId: 102,
          postTitle: 'Post3',
          postDescription: 'This is Post3',
          categories: [{
            categoryId: 102,
            categoryName: 'Category2'
          }]
        }]  
      },
      { 
        skillMatrix: 104, 
        writerId: 102, 
        postId: 101, 
        writers: [{
          writerId: 102,
          writerName: 'Writer2'
        }],
        posts: [{
          postId: 101,
          categoryId: 101,
          postTitle: 'Post1',
          postDescription: 'This is Post1',
          categories: [{
            categoryId: 101,
            categoryName: 'Category1'
          }]
        }]  
      },
      { 
        skillMatrix: 105, 
        writerId: 102, 
        postId: 102, 
        writers: [{
          writerId: 102,
          writerName: 'Writer2'
        }],
        posts: [{
          postId: 102,
          categoryId: 101,
          postTitle: 'Post2',
          postDescription: 'This is Post2',
          categories: [{
            categoryId: 101,
            categoryName: 'Category1'
          }]
        }]  
      },
      { 
        skillMatrix: 106, 
        writerId: 102, 
        postId: 103, 
        writers: [{
          writerId: 102,
          writerName: 'Writer2'
        }],
        posts: [{
          postId: 103,
          categoryId: 102,
          postTitle: 'Post3',
          postDescription: 'This is Post3',
          categories: [{
            categoryId: 102,
            categoryName: 'Category2'
          }]
        }]  
      },
      { 
        skillMatrix: 107, 
        writerId: 103, 
        postId: 101, 
        writers: [{
          writerId: 103,
          writerName: 'Writer3'
        }],
        posts: [{
          postId: 101,
          categoryId: 101,
          postTitle: 'Post1',
          postDescription: 'This is Post1',
          categories: [{
            categoryId: 101,
            categoryName: 'Category1'
          }]
        }]  
      },
      { 
        skillMatrix: 108, 
        writerId: 103, 
        postId: 102, 
        writers: [{
          writerId: 103,
          writerName: 'Writer3'
        }],
        posts: [{
          postId: 102,
          categoryId: 101,
          postTitle: 'Post2',
          postDescription: 'This is Post2',
          categories: [{
            categoryId: 101,
            categoryName: 'Category1'
          }]
        }]  
      },
      { 
        skillMatrix: 109, 
        writerId: 103, 
        postId: 103, 
        writers: [{
          writerId: 103,
          writerName: 'Writer3'
        }],
        posts: [{
          postId: 103,
          categoryId: 102,
          postTitle: 'Post3',
          postDescription: 'This is Post3',
          categories: [{
            categoryId: 102,
            categoryName: 'Category2'
          }]
        }]  
      },
      { 
        skillMatrix: 110, 
        writerId: 104, 
        postId: 101, 
        writers: [{
          writerId: 104,
          writerName: 'Writer4'
        }],
        posts: [{
          postId: 101,
          categoryId: 102,
          postTitle: 'Post1',
          postDescription: 'This is Post1',
          categories: [{
            categoryId: 101,
            categoryName: 'Category1'
          }]
        }]  
      },
      { 
        skillMatrix: 111, 
        writerId: 104, 
        postId: 102, 
        writers: [{
          writerId: 104,
          writerName: 'Writer4'
        }],
        posts: [{
          postId: 102,
          categoryId: 101,
          postTitle: 'Post2',
          postDescription: 'This is Post2',
          categories: [{
            categoryId: 101,
            categoryName: 'Category1'
          }]
        }]  
      },
      { 
        skillMatrix: 112, 
        writerId: 104, 
        postId: 103, 
        writers: [{
          writerId: 104,
          writerName: 'Writer4'
        }],
        posts: [{
          postId: 103,
          categoryId: 102,
          postTitle: 'Post3',
          postDescription: 'This is Post3',
          categories: [{
            categoryId: 102,
            categoryName: 'Category2'
          }]
        }]  
      },
      { 
        skillMatrix: 113, 
        writerId: 105, 
        postId: 101, 
        writers: [{
          writerId: 105,
          writerName: 'Writer5'
        }],
        posts: [{
          postId: 101,
          categoryId: 101,
          postTitle: 'Post1',
          postDescription: 'This is Post1',
          categories: [{
            categoryId: 101,
            categoryName: 'Category1'
          }]
        }]  
      },
      { 
        skillMatrix: 113, 
        writerId: 105, 
        postId: 102, 
        writers: [{
          writerId: 105,
          writerName: 'Writer5'
        }],
        posts: [{
          postId: 102,
          categoryId: 101,
          postTitle: 'Post2',
          postDescription: 'This is Post2',
          categories: [{
            categoryId: 101,
            categoryName: 'Category1'
          }]
        }]  
      },
      { 
        skillMatrix: 114, 
        writerId: 105, 
        postId: 101, 
        writers: [{
          writerId: 105,
          writerName: 'Writer5'
        }],
        posts: [{
          postId: 101,
          categoryId: 101,
          postTitle: 'Post1',
          postDescription: 'This is Post1',
          categories: [{
            categoryId: 101,
            categoryName: 'Category1'
          }]
        }]  
      },
      { 
        skillMatrix: 115, 
        writerId: 105, 
        postId: 103, 
        writers: [{
          writerId: 105,
          writerName: 'Writer5'
        }],
        posts: [{
          postId: 103,
          categoryId: 102,
          postTitle: 'Post3',
          postDescription: 'This is Post3',
          categories: [{
            categoryId: 102,
            categoryName: 'Category2'
          }]
        }]  
      },
    ];

   return {writers, categories, posts, skillMatrices };
  }
}