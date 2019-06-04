import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AnimalType } from '@petcareorg/petcareadmin/data';

@Component({
  selector: 'petcareorg-animals-overview',
  templateUrl: './animals-overview.component.html',
  styleUrls: ['./animals-overview.component.scss']
})
export class AnimalsOverviewComponent implements OnInit {
  animalTypes: AnimalType[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<AnimalType[]>('/api/animal-type').subscribe(
      t => {
        this.animalTypes = t;
      },
      error => console.log(error)
    );
  }

}
