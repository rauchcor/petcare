import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AnimalType } from '@petcareorg/petcareadmin/data';
import { Router } from '@angular/router';

@Component({
  selector: 'petcareorg-animals-overview',
  templateUrl: './animals-overview.component.html',
  styleUrls: ['./animals-overview.component.scss']
})
export class AnimalsOverviewComponent implements OnInit {
  animalTypes: AnimalType[];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get<AnimalType[]>('/api/animal-type').subscribe(
      t => {
        this.animalTypes = t;
      },
      error => console.log(error)
    );
  }

  open(id: string) {
    this.router.navigate(["main/animals", id]);
  }

}
