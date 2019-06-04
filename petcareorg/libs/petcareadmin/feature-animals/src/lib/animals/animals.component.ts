import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Animal } from '@petcareorg/petcareadmin/data';
@Component({
  selector: 'petcareorg-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  id: string;
  animals: Animal[];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    this.route.params
      .pipe(map(params => params['animalTypeId']), tap(id => (this.id = id.toString())))
      .subscribe(id => {
        const params = new HttpParams().set('animalTypeId', this.id);
        const header = new HttpHeaders();
        const requObj= {params, header}
        this.http.get<Animal[]>('/api/animal', requObj).subscribe(
          (result) => {
            this.animals = result
          }
        )
      });

  }

}
