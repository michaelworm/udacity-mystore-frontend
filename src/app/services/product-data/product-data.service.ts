import {Injectable} from "@angular/core"
import {Observable} from "rxjs"
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: "root"
})
export class ProductDataService {
  private _jsonFile = "assets/data.json"

  constructor (private http: HttpClient) {
  }
  getData (): Observable<[]> {
    return this.http.get<[]>(this._jsonFile)
  }
}
