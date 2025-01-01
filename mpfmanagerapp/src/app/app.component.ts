import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Units } from './units';
import { UnitsService } from './units.service';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public units: Units[] | undefined;

  constructor(private unitsService: UnitsService) { }

  ngOnInit(): void {
    this.getUnits();
  }

  public getUnits(): void {
    this.unitsService.getAllUnits().subscribe(
      (response: Units[]) => {
        this.units = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
