import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as ProductActions from '../store/actions/product.actions'
import * as demo from '../data/demo'
import { IState } from '../models/istate.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _baseUrl: string = 'http://localhost:9090/api/products/'

  constructor(private http: HttpClient, private store: Store<IState>) { }

  getById(id) {
    this.http.get<any>(this._baseUrl + id).subscribe(
      res => this.store.dispatch(new ProductActions.Set(res)),
      err => this.getDemoDataById(id)
    )
  }

  clear() {
    this.store.dispatch(new ProductActions.Clear())
  }

  getDemoDataById(id) {
    this.store.dispatch(new ProductActions.Set(demo.productCatalog.find(item => item._id === id)))
  }
}