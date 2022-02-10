import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'orgChart';
  data!: TreeNode[];


  constructor(private http : HttpClient){

  }

  ngOnInit(): void {

    this._getJSON().subscribe(data=>{
      // Sort Data Array To Tree 
      var result = data.sort(function(a:any,b:any) {
        return a.code - b.code;
      }).reduce(function(hash) {
        return function(prev:any, curr:any) {
          var keys = curr.code.split('.');
          hash[curr.code] = hash[curr.code] || {};
          hash[curr.code] = {code: curr.code,name: curr.name,imagePath: curr.imagePath};
          if (keys && keys.length > 1) {
            keys.pop();
            var key = keys.join('.');
            hash[key].children = hash[key].children || [];
            hash[key].children.push(hash[curr.code]);
          } else {
            prev.push(hash[curr.code]);
          }
          return prev;
        };
      }(Object.create(null)), []);
          
      this.data =  result;
      })
        
  }

  // Get Data From JSON File 
  private _getJSON(): Observable<any> {
    return this.http.get("../assets/users.json");
  }
}
