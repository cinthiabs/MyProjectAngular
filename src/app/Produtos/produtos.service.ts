import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { produto } from "./Produto";
import { Observable } from "rxjs";

@Injectable()
export class ProdutoService{
constructor(private http:HttpClient){}
protected UrlServiceV1: string = "http://localhost:3000/produtos";
    obterProdutos():Observable<produto[]> {
        return this.http.get<produto[]>(this.UrlServiceV1)
    }
}