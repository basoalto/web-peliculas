import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent {
  // @Input() item: any;
  item: any | any;

  constructor(private route: ActivatedRoute){}
  async ngOnInit() { 
    this.route.queryParams.subscribe( async params => {
      const itemString = params['item'];
      this.item = JSON.parse(itemString);
      console.log(this.item);
    })
  }

}
