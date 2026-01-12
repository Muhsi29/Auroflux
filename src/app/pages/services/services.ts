import { Component } from '@angular/core';

interface Client {
  name: string;
  img: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

  // clients: Client[] = [
  //   { name: 'United Industrial Plastics', img: 'assets/client-logo/logo-1.png' },
  //   { name: 'Mainetti India Pvt Ltd', img: 'assets/client-logo/logo-2.png' },
  //   { name: 'Ashok Leyland', img: 'assets/client-logo/logo-3.png' },
  //   { name: 'MRF Vapocure Paints', img: 'assets/client-logo/logo-4.png' },
  //   { name: 'TVS Motors', img: 'assets/client-logo/logo-5.png' },
  //   { name: 'Bosch Limited', img: 'assets/client-logo/logo-6.png' },
  //   { name: 'Ford India', img: 'assets/logos/client-7.png' },
  //   { name: 'Hyundai Motors', img: 'assets/logos/client-8.png' },
  // ];

}
