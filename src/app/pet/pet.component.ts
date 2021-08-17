import { Component, OnInit } from '@angular/core';
import {Pet} from "../pet";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'buillDoc',
    image: 'data:image/jpeg;base64,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'
  }
  constructor() { }

  ngOnInit(): void {
  }
  // updateName(name){
  //   this.petName = name;
  // }
  // updateImage(image){
  //   this.petImage = image;
  // }

}