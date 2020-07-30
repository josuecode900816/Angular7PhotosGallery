import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  Key = "EvvsTyT9tOocZGPs9GhrNM3UgB4XFQvMwE9u7-cxXL8";
  page = 1;
  per_page = 21;

  getImage() {
    return this.httpClient.get(
      `https://api.unsplash.com/photos/?page=${this.page}&per_page=${this.per_page}&client_id=${this.Key}`
    );
  }
  
}