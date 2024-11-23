import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlgorithmService } from './services/algorithm.service';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hi';
  algorithmForm = new FormGroup({
    str: new FormControl('', Validators.required), 
  });
  algorithmService = inject(AlgorithmService);
  result = '';
  error = '';

  handleStrSubmit() {
    if (this.algorithmForm.value.str != undefined) {
      this.algorithmService.useAlgorithm(this.algorithmForm.value.str).subscribe(
        (response) => {
          this.result = response;
        },
        (error) => {  
          this.error = 'Error: ' + error.error;
          console.error(error);
        }
      );
    }
  }

}
