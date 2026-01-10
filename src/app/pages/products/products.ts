import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {
  
constructor(private router: Router) {}

goCta() {
  this.router.navigate(['/contact']);
}
 kptProducts = [
  {
    title: 'Thermoplast',
    image: '../../../assets/products/kpt-1.jpeg',
    description: 'Thermoplast PPR pipes and fittings are designed for hot and cold water as well as chilled water applications. These pipes provide excellent thermal stability, long service life, and reliable performance for industrial and commercial projects.',
    features: [
      'Suitable for hot, cold, and chilled water systems',
      'High thermal resistance and dimensional stability',
      'Corrosion and scale resistant',
      'Service life exceeding 50 years'
    ]
  },
  {
    title: 'Pneumato',
    image: '../../../assets/products/kpt-2.jpg',
    description: 'Pneumato PPR piping systems are specially engineered for compressed air and industrial automation applications, ensuring leak-proof operation, consistent pressure, and improved energy efficiency.',
    features: [
      'Ideal for compressed air applications',
      'High pressure tolerance',
      'Leak-proof joints reducing air loss',
      'Smooth inner surface for stable airflow'
    ]
  },
  {
    title: 'Greentherm',
    image: '../../../assets/products/kpt-3.jpeg',
    description: 'Greentherm PPR pipes and fittings are developed for sustainable building solutions. They are suitable for water, chilled water, and fire-fighting systems, offering superior insulation and environmentally responsible performance.',
    features: [
      'Eco-friendly and recyclable materials',
      'Excellent thermal insulation properties',
      'Suitable for fire-fighting and water systems',
      'Low carbon footprint with high durability'
    ]
  }
];

  industrialProducts: any[] = [];

  ngOnInit() {
  this.industrialProducts = [
  {
    id: 1,
    title: 'VFD Based Control Panels',
    description: 'Advanced VFD driven control panels engineered for cooling tower pumps and process equipment. Designed for fully automated operation, energy efficiency and reliable performance in demanding industrial environments.',
    features: [
      'Fully automated VFD driven pump control',
      'Significant energy saving and load optimization',
      'PLC and SCADA ready architecture',
      'Environment friendly and low operating cost'
    ]
  },
  {
    id: 2,
    title: 'Dry Cooling Systems',
    description: 'High performance dry cooling systems designed to eliminate water consumption for industrial heat rejection. Ideal for high temperature applications and water-scarce locations.',
    features: [
      'Zero water consumption cooling technology',
      'High temperature heat rejection efficiency',
      'Low maintenance and corrosion resistant design',
      'Ideal for HPU oil and process cooling'
    ]
  },
  {
    id: 3,
    title: 'Structural Fabrication & Ducting',
    description: 'Complete structural fabrication solutions including floors, platforms and industrial ducting systems engineered to meet heavy-duty process and exhaust requirements.',
    features: [
      'Precision engineered steel structures',
      'Heavy duty industrial ducting fabrication',
      'On-site erection and commissioning',
      'Designed for long-term operational reliability'
    ]
  },
  {
    id: 4,
    title: 'Plate Heat Exchangers',
    description: 'High efficiency plate heat exchangers designed for closed loop cooling and process temperature control, offering superior heat transfer and protection for sensitive equipment.',
    features: [
      'Advanced heat transfer technology',
      'Closed loop cooling for equipment safety',
      'Compact design with high thermal efficiency',
      'Compatible with multiple industrial fluids'
    ]
  },
  {
    id: 5,
    title: 'Process Chilling Systems',
    description: 'Custom engineered process chilling systems designed after detailed heat load analysis to ensure precise temperature control across injection molding, extrusion and heat treatment applications.',
    features: [
      'Accurate heat load based system design',
      'Compatible with leading chiller brands',
      'Stable and consistent process temperature',
      'Integrated chilled water piping solutions'
    ]
  },
  {
    id: 6,
    title: 'FRP Cooling Towers',
    description: 'High performance FRP cooling towers supplied, installed and commissioned for industrial plants with capacities ranging from small process units to large scale cooling loads.',
    features: [
      'Wide capacity range from 10 TR to 5000 TR',
      'Energy efficient and durable FRP construction',
      'Complete turnkey supply and installation',
      'Optimized for long-term water and energy savings'
    ]
  },
  {
    id: 7,
    title: 'Compressed Air Dryers',
    description: 'Industrial compressed air drying systems engineered to remove moisture and improve air quality, enhancing equipment life and reducing operational losses.',
    features: [
      'High efficiency moisture removal',
      'Energy saving air treatment systems',
      'Suitable for 10 CFM to 10,000 CFM plants',
      'Integrated filtration and air quality control'
    ]
  },
  {
    id: 8,
    title: 'Compressed Air Receivers & Pressure Vessels',
    description: 'Custom designed and fabricated pressure vessels and air receivers manufactured as per Indian standards to ensure safe, stable and efficient compressed air storage.',
    features: [
      'Manufactured as per IS 2062 and IS 2002',
      'Designed for high pressure industrial use',
      'Improves air system stability and efficiency',
      'Robust welding and fabrication standards'
    ]
  }
];

  }

  getProductImageUrl(productId: number): string {
    const imageMap: { [key: number]: string } = {
      1: '../../../assets/products/p-1.jpeg',
      2: '../../../assets/products/p-2.jpg',
      3: '../../../assets/products/p-3.jpg',
      4: '../../../assets/products/p-4.jpg',
      5: '../../../assets/products/p-5.jpg',
      6: '../../../assets/products/p-6.jpg',
      7: '../../../assets/products/p-7.jpg',
      8: '../../../assets/products/p-8.jpg'
    };
    
    return imageMap[productId];
  }

  getSectionClass(index: number): string {
    // For products starting from index 1 (product 2):
    // index 1 = product 2 = odd position = white background
    // index 2 = product 3 = even position = gradient background
    // index 3 = product 4 = odd position = white background
    return index % 2 !== 0 ? 'even-section' : 'odd-section';
  }

  shouldReverse(index: number): boolean {
    // Reverse layout for even positions (product 3, 5, 7, etc.)
    return index % 2 === 0;
  }



 solutions = [
    {
      title: 'Solar Thermal Systems',
      description: 'Efficient solar water heating systems for residential, commercial, and industrial applications. Convert sunlight directly into thermal energy for water heating, space heating, and process heat requirements.'
    },
    {
      title: 'Solar PV Systems',
      description: 'Complete photovoltaic solutions for electricity generation from rooftop installations to large-scale solar power plants. Generate clean, renewable electricity and reduce your carbon footprint significantly.'
    }
  ];

  // Unsplash image URLs for solar solutions
  solutionImages = [
    '../../../assets/products/solar-1.jpg', // Solar thermal
    '../../../assets/products/solar-2.jpeg'  // Solar PV
  ];

  getSolutionImage(index: number): string {
    return this.solutionImages[index] || this.solutionImages[0];
  }
}