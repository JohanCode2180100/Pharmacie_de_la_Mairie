import { Component } from '@angular/core';
import { DataService} from "../../services/data-service/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pharmacie_de_la_Mairie';

  constructor() {
  }

}
