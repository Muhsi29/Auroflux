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

  industrialProducts: any[] = [];

  ngOnInit() {
    this.industrialProducts = [
      {
        id: 1,
        title: 'PPR Pipes and Fittings',
        features: [
          'Design and Detailed Engineering of Process Piping System.Cooling Tower, Chiller, Compressed Air Line. RO, DM, Chilled Water, Hot Water Lines',
          'Turnkey Solutions including Valves, Strainers, Pumps, Cooling Towers and Chillers',
          'Supply, Erection Testing and Commissioning.',
          'After Sales Service Support. '
        ]
      },
      {
        id: 2,
        title: 'HDPE Green Pipes and EF Fittings',
        features: [
          'Design and Detailed Engineering of Process Piping System.Cooling Tower, Chiller, Compressed Air Line.',
          'Advanced Electro Fusion Socket Technology for Fittings.',
          'Turnkey Solutions including Valves, Strainers, Pumps, Cooling Towers and Chillers',
          'Supply, Erection Testing and Commissioning.',
          'After Sales Service Support.',
          'HDPE  Pipes and Fittings'
        ]
      },
      {
        id: 3,
        title: 'GI, MS, SS Pipes and Fittings',
        features: [
          'Design and Detailed engineering for the Process, Gas, Oil. Food Processing and Fire Fighting System',
          'Turnkey Project Execution.',
          'Testing and Commissioning.'
        ]
      },
      {
        id: 4,
        title: 'PVC, CPVC, UPVC Pipes and Fittings',
        features: [
          'Design and Detailed Engineering of complete plumbing application.',
          'Turnkey Solutions including Pumps, bath room fittings and other automations.',
          'Supply, Erection Testing and Commissioning.',
          'After Sales Service Support. '
        ]
      },
      {
        id: 5,
        title: 'Structural Fabrication of MS & SS',
        features: [
          'We can do all types of SS and MS fabrication work according to the customer requirement.',
          'SS Tanks',
          'MS Structures',
          'SS customized fabricated items.'
        ]
      },
      {
        id: 6,
        title: 'FRP Cooling Towers',
        description: 'Range: 10 TR to 1000 TR \nModel: Round / Square / Cross Flow \nMake: GEM',
        features: [
          'Designed as per the CTI Code',
          '40+ years of experience. ',
          'Energy efficient design',
          'Pan India Sales and After sales service Set-up'
        ]
      },
      {
        id: 7,
        title: 'Industrial Process Chillers',
        features: [
          'Gem Orion is a Indo-Japanese Joint Venture Company',
          '1 TR to 30 TR Industrial High Precision Process Chiller',
          'Inverter Technology. Energy Saving is around 25% compare to on/off Chiller',
          'All India after sales service network',
          'R 410 A Gas suitable for any ambient condition.'
        ]
      },
      {
        id: 8,
        title: 'Dry Cooling Tower (Air Cooled Heat Exchanger)',
        description: 'Model: Horizontal/Vertical \nRange: 50 KW to 5 MW \nMake: GEM',
        features: [
          'Designed as per the international standards',
          'Can design according to the variousapplications.',
          'Adiabatic pads can be fixed for lower temperature',
          'Pan India Sales and after sales service set up',
          '40+ years of experience.'
        ]
      },
        {
        id: 9,
        title: 'Heat Pump Hot Water Generator',
        description: 'Range: 5 KW to 100 KW \nHot Water Temperature: 60 Deg.C to 90 Deg.C \nMake: Aspiration',
      },
        {
        id: 10,
        title: 'Compressed AIR Dryers',
        description: 'Range: 10 cfm to 5000 cfm \nTypes : Heatless Air Dryer, Refrigerated Air Dryer, Blower Reactivated Dryer, Heat of Compression Dryer \nMake: GEM',
        features: [
          'India’s largest Dryer Manufacturer',
          'VFD Model is available in Refrigerated Dryer',
          'Coming along with fine filters and Auto drain Valves. ',
          'Pan India Sales and after sales service set up'
        ]
      },
        {
        id: 11,
        title: 'VFD control panels',
        description: 'Auroflux is design various types of VFD Control Panels for Pumps and Cooling Towers and other applications.',
        features: [
          'VFD + Manual Control Option',
          'Data Logging',
          'Customized programming.'
        ]
      },
        {
        id: 12,
        title: 'Hvls fans',
        description: 'Auroflux representing Marley Make  HVLS Fans. Marley is a leading HVLS fan manufacturer in India, known for high-quality and innovative HVLS fan designs. We are also a trusted fan manufacturing company in India, Presenting reliable solutions for all your industrial operations. Our manufacturing range widely comprises of ',
        features: [
          'Helical Geared Motor HVLS Fans',
          ' PMSM Motor HVLS Fans',
          ' Exhaust Fans and Mobile Fans',
          ' Highly energy efficient',
          'Suitable of Industries, Temples, Churches, Hotels and other public places'
        ]
      },
        {
        id: 13,
        title: 'FRP tanks',
        description: 'Auroflux is fabricating various types of FRP Tanks as per the customer requirement .\nRange: 1 KL to 20 KL',
      },
        {
        id: 14,
        title: 'Compressed air filters',
        description: 'Range: 10 cfm to 1000 cfm Filtration \nRange: 5 micron, 0.1 Micron, 0.01 Micron \nMake: GEM',
        features: [
          ' High Quality Filter',
          ' Affordable Cost',
          'Easy availability of catridges.'
        ]
      },
        {
        id: 15,
        title: 'Electronic auto drain valves',
        features: [
          'High Discharge and Low Discharge Model',
          'Easy to fit',
          'Highly Reliable',
          'Moderate Price'
        ]
      },
        {
        id: 16,
        title: 'Agro Air Dryer',
        description: 'Agro Air Dryer is developed to utilize the refrigeration heat energy (heat pump technology)  to dry the agricultural products. \nRange: 9 Kw to 45 Kw',
        features: [
          ' Drying of herbs and spices',
          ' Drying of agricultural products',
          ' Drying of Fruits',
          'Easy To Install',
           'Reliable Operation',
           ' Automation and Intelligence Controls.'
        ]
      }
    ];
  }

  getProductImageUrl(productId: number): string {
    const imageMap: { [key: number]: string } = {
      1: '../../../assets/products/Product-1.jpg',
      2: '../../../assets/products/Product-2.jpg',
      3: '../../../assets/products/Product-3.jpg',
      4: '../../../assets/products/Product-4.jpg',
      5: '../../../assets/products/Product-5.jpg',
      6: '../../../assets/products/Product-6.jpg',
      7: '../../../assets/products/Product-7.jpg',
      8: '../../../assets/products/Product-8.jpg',
      9: '../../../assets/products/Product-9.jpg',
      10: '../../../assets/products/Product-10.jpg',
      11: '../../../assets/products/Product-11.jpg',
      12: '../../../assets/products/Product-12.jpg',
      13: '../../../assets/products/Product-13.jpg',
      14: '../../../assets/products/Product-14.jpg',
      15: '../../../assets/products/Product-15.jpg',
      16: '../../../assets/products/Product-16.jpg'
    };
    
    return imageMap[productId];
  }

  getSectionClass(index: number): string {
    return index % 2 !== 0 ? 'even-section' : 'odd-section';
  }

  shouldReverse(index: number): boolean {
    return index % 2 === 0;
  }

}