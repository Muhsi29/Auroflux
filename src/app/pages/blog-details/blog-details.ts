import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css',
})
export class BlogDetailsComponent implements OnInit {

  blogPosts = [

    /* ======================================================
       BLOG 1 – UPVC PIPES
    ====================================================== */
    {
      id: 1,
      title: 'UPVC Pipes: Advantages, Applications, Uses, and Benefits',
      image: '../../../assets/images/blog-1.webp',
      date: 'June 29, 2023',
      category: 'Piping Solutions',
      author: 'Piping Specialists',
      readTime: '8 min read',
      tags: ['UPVC', 'Plumbing', 'Industrial'],

      sections: [
        {
          heading: 'Introduction',
          content: ` In the world of plumbing, UPVC pipes have emerged as a game-changer, revolutionizing the way we handle water supply, drainage, and various plumbing applications. In this blog post, we will delve into the world of UPVC pipes, exploring their versatility, benefits, and why they have become the go-to choice for modern plumbing systems.`
        },
        {
          heading: 'Understanding UPVC Pipes',
          content: `UPVC stands for Unplasticized Polyvinyl Chloride. Unlike PVC, UPVC does not contain plasticizers, which makes it rigid, strong, and chemically stable. This composition allows UPVC pipes to withstand harsh environmental and chemical conditions while maintaining structural integrity over long periods.`
        },
        {
          heading: 'Advantages of UPVC Pipes',
          list: [
            'Exceptional durability with long service life',
            'Low maintenance requirements with high resistance to corrosion and scaling',
            'High resistance to corrosion, scaling, and chemical reactions',
            'Cost-effective compared to traditional metal piping systems',
            'Environmentally friendly, recyclable, and suitable for indoor and outdoor applications'
          ]
        },
        {
          heading: 'Versatility in Plumbing Applications',
          content: `UPVC pipes are widely used in water supply systems, drainage networks, irrigation systems, underground piping, and industrial fluid transportation. Their lightweight construction and ease of installation using solvent cement make them ideal for fast and efficient plumbing installations.`
        },
        {
          heading: 'Strength and Durability',
          content: `UPVC pipes are capable of withstanding high water pressure, mechanical impact, and extreme weather conditions. They also exhibit excellent resistance to UV radiation, abrasion, and aggressive chemicals, ensuring long-term performance even in demanding environments.`
        },
        {
          heading: 'Chemical Resistance and Hygiene',
          content: `UPVC pipes are highly resistant to chemical reactions and do not react with transported fluids. Their non-toxic nature ensures water purity, making them suitable for potable water systems and hygienic industrial applications.`
        },
        {
          heading: 'Low Friction and Smooth Flow',
          content: `The smooth internal surface of UPVC pipes minimizes friction losses, prevents sediment buildup, and ensures efficient fluid flow. This reduces blockages and enhances the overall efficiency of plumbing systems.`
        },
        {
          heading: 'Cost-effectiveness and Energy Efficiency',
          content: `UPVC pipes offer significant cost savings through low installation costs, minimal maintenance, and long lifespan. Their insulating properties help maintain water temperature, contributing to energy efficiency.`
        },
        {
          heading: 'Environmental Sustainability',
          content: `UPVC pipes are recyclable and help reduce environmental waste. Their durability minimizes the need for frequent replacements, lowering long-term environmental impact.`
        },
        {
          heading: 'Conclusion',
          content: `UPVC pipes have emerged as a reliable and preferred choice for modern plumbing systems due to their durability, versatility, chemical resistance, and cost-effectiveness. Whether for new construction or plumbing upgrades, they offer long-lasting performance and efficient water management. To ensure the best results, always consult a professional plumber to confirm suitability and compliance with local regulations. Choosing UPVC pipes is a smart investment in dependable, future-ready plumbing solutions.`
        }
      ]
    },

    /* ======================================================
       BLOG 2 – COMPRESSED AIR DRYERS (WORKING PRINCIPLE)
    ====================================================== */
    {
      id: 2,
      title: 'Exploring the Inner Workings of Compressed Air Dryers',
      image: '../../../assets/images/blog-3.webp',
      date: 'June 27, 2023',
      category: 'Technical Insights',
      author: 'Technical Experts',
      readTime: '6 min read',
      tags: ['Compressed Air', 'Dryers', 'Engineering'],

      sections: [
        {
          heading: 'Introduction',
          content: `Compressed air is a vital utility used across industries such as manufacturing, automotive, healthcare, and construction. However, moisture and contaminants in compressed air can lead to corrosion, reduced efficiency, and equipment failure. Compressed air dryers eliminate these issues by delivering clean, dry air.`
        },
        {
          heading: 'Understanding the Need for Compressed Air Dryers',
          content: `Compressed air naturally contains moisture, which can condense and cause corrosion, blockages, and damage to pneumatic equipment and processes. Additionally, airborne contaminants such as oil, dirt, and solid particles can compromise the integrity of the compressed air system and impact downstream applications. Compressed air dryers serve as a crucial solution to address these challenges and ensure the delivery of clean, dry, and high-quality compressed air.`
        },
        {
          heading: 'Types of Compressed Air Dryers:',
          list: [
            {
              heading: 'Refrigerated Air Dryers',
              list: [
                'Refrigerated air dryers are the most common type of compressed air dryers used in various industries.',
                'These dryers work on the principle of cooling the compressed air to lower its dew point, causing the moisture to condense and be separated.',
                'A refrigeration system, consisting of a compressor, condenser, evaporator, and refrigerant, extracts heat from the compressed air, reducing its temperature and removing moisture.',
                'The dried air is then reheated before leaving the dryer, preventing potential issues caused by overly cold air.'
              ]
            }, {
              heading: 'Desiccant Air Dryers',
              list: [
                'Desiccant air dryers utilize a desiccant material, such as silica gel or activated alumina, to adsorb moisture from the compressed air.',
                'These dryers operate in a two-stage process: adsorption and regeneration.',
                'In the adsorption stage, the desiccant material attracts and retains moisture from the compressed air, leaving it dry and free from moisture.',
                'During the regeneration stage, a portion of the dried air is diverted to remove the moisture from the desiccant material, allowing it to be used again in subsequent cycles.',
                'Desiccant air dryers are often employed in applications requiring extremely low dew points or when operating in harsh conditions.'
              ]
            }
          ],
        },
        {
          heading: 'Desiccant Air Dryers',
          content: `Desiccant dryers use materials such as silica gel or activated alumina to adsorb moisture. These systems operate in adsorption and regeneration cycles and are suitable for applications requiring extremely low dew points.`
        },
        {
          heading: 'Key Components',
          list: [
            'Air inlet connection',
            'Pre-filters for oil and particulate removal',
            'Cooling chamber or desiccant bed',
            'Moisture separator and drain',
            'Regeneration system (desiccant dryers)'
          ]
        },
        {
          heading: 'Conclusion',
          content: `Compressed air dryers are essential for maintaining the reliability of compressed air systems by removing moisture and contaminants. They ensure the supply of clean, dry air across various applications. Whether using refrigerated or desiccant air dryers, each type operates on distinct principles to deliver optimal performance. Understanding how these dryers work helps industries make informed choices when selecting and maintaining critical components of their compressed air systems.`
        }
      ]
    },

    /* ======================================================
       BLOG 3 – IMPORTANCE OF COMPRESSED AIR DRYERS
    ====================================================== */
    {
      id: 3,
      title: 'The Importance of Compressed Air Dryers in Industrial Systems',
      image: '../../../assets/images/blog-4.webp',
      date: 'February 28, 2024',
      category: 'Maintenance',
      author: 'Maintenance Team',
      readTime: '7 min read',
      tags: ['Maintenance', 'Efficiency', 'Reliability'],

      sections: [
        {
          heading: 'Introduction',
          content: `Plate heat exchangers are highly efficient devices used in a wide range of industries to transfer heat between two fluids. With their compact design, high heat transfer rates, and versatility, plate heat exchangers have become indispensable in various applications. In this blog, we will explore the working principle, advantages, and common uses of plate heat exchangers, shedding light on their role in enhancing efficiency and heat transfer.`
        },
        {
          heading: 'Operating Principles',
          content: `Explaining plate heat exchanger flow configurations (counterflow vs. parallel flow) and sealing methods (gasketed or brazed), highlighting how these design choices affect heat transfer efficiency, fluid separation, and leakage prevention.`
        },
        {
          heading: 'Advantages of Plate Heat Exchangers',
          content: `Emphasizing the compact design of plate heat exchangers, their high heat transfer efficiency enabled by large plate surface areas, and the flexibility to adjust or expand plate arrangements to meet varying thermal performance requirements.`
        },
        {
          heading: "Common Applications",
          content: `Highlighting the wide range of industries that use plate heat exchangers—including HVAC, refrigeration, chemical processing, food and beverage, and power generation—along with their key applications such as heat recovery, heating and cooling processes, oil cooling, condensation, and evaporation.`
        },
        {
          heading: 'Factors to Consider',
          content: `Outlining key selection criteria for plate heat exchangers—such as flow rate, operating temperature, allowable pressure drop, material compatibility, and maintenance needs—while emphasizing the importance of choosing suitable plate materials (e.g., stainless steel or titanium) based on fluid characteristics and operating conditions.`
        },
        {
          heading: 'Maintenance and Troubleshooting',
          content: `Providing maintenance guidelines for plate heat exchangers, including regular cleaning and inspection to sustain optimal heat transfer performance, along with troubleshooting tips for common issues such as fouling, scaling, and clogging, emphasizing the importance of timely corrective action.`
        },
        {
          heading: 'Energy Efficiency and Environmental Benefits',
          content: `Exploring how plate heat exchangers support energy conservation through effective heat recovery, reduced energy consumption, and lower greenhouse gas emissions, while highlighting their environmental benefits such as reduced water usage and the promotion of more sustainable industrial processes.`
        },
        {
          heading: 'Conclusion',
          content: ` Plate heat exchangers play a vital role in enhancing heat transfer efficiency across various industries. With their compact design, high thermal efficiency, and flexibility, they provide a cost-effective solution for heat exchange applications. Understanding the working principles, advantages, and proper maintenance of plate heat exchangers is key to maximizing their performance and reaping the benefits of improved energy efficiency and environmental sustainability.`
        }
      ]
    },

    /* ======================================================
       BLOG 4 – PLATE HEAT EXCHANGERS
    ====================================================== */
    {
      id: 4,
      title: 'Plate Heat Exchangers: Working Principles and Applications',
      image: '../../../assets/images/blog-5.webp',
      date: 'February 22, 2024',
      category: 'Thermal Engineering',
      author: 'Engineering Team',
      readTime: '6 min read',
      tags: ['Heat Exchanger', 'Energy Efficiency'],

      sections: [
        {
          heading: 'Understanding Compressed Air Moisture',
          content: `Compressed air naturally contains moisture originating from ambient air humidity, compressor operation, and the cooling process after compression. As air is compressed and cooled, water vapor condenses into liquid form. If not properly treated, this moisture can lead to corrosion, increased wear and tear, compromised product quality, and reduced efficiency and lifespan of equipment.`
        },
        {
          heading: 'The Role of Compressed Air Dryers',
          content: `Compressed air dryers are essential components in compressed air systems, designed to remove moisture and contaminants from the air. By lowering the dew point of compressed air, dryers prevent condensation within pipelines and equipment, ensuring reliable operation and minimizing moisture-related damage.`
        },
        {
          heading: 'Types of Compressed Air Dryers',
          list: [
            {
              heading: 'Refrigerated Air Dryers',
              list: [
                'Refrigerated air dryers operate by cooling compressed air to a low temperature, causing moisture to condense and separate from the air stream.',
                'A refrigeration circuit extracts heat from the compressed air, reducing its dew point and removing water vapor.',
                'These dryers are cost-effective, easy to maintain, and suitable for general industrial applications.',
                'However, they are limited in achieving very low dew points and may not be ideal for extremely dry air requirements.'
              ]
            },
            {
              heading: 'Desiccant Air Dryers',
              list: [
                'Desiccant air dryers use adsorbent materials such as silica gel or activated alumina to attract and trap moisture from compressed air.',
                'They operate through adsorption and regeneration cycles to maintain continuous drying performance.',
                'Desiccant dryers are available in heatless and heated configurations, depending on energy efficiency and application needs.',
                'These dryers are ideal for applications requiring very low dew points and stable performance under harsh operating conditions.'
              ]
            },
            {
              heading: 'Membrane Air Dryers',
              list: [
                'Membrane air dryers utilize selectively permeable membranes to remove moisture from compressed air.',
                'Water vapor passes through the membrane while dry air continues downstream.',
                'These dryers are compact, require minimal maintenance, and are well-suited for point-of-use and low-flow applications.',
                'However, they are generally limited to smaller capacities and moderate dew point requirements.'
              ]
            }
          ]
        },
        {
          heading: 'Benefits of Compressed Air Dryers',
          content: `The use of compressed air dryers improves equipment performance, enhances product quality, extends equipment lifespan, and reduces maintenance and downtime. Dry and clean compressed air is especially critical in industries such as food processing, pharmaceuticals, electronics, and automotive manufacturing, where moisture can compromise safety, quality, and precision.`
        },
        {
          heading: 'Factors to Consider When Selecting a Compressed Air Dryer',
          content: `Key factors to consider when selecting a compressed air dryer include the required dew point, compressed air flow rate, operating pressure and temperature, environmental conditions, and energy efficiency. Proper sizing and regular maintenance of the dryer are essential to ensure optimal performance, reliability, and long-term cost savings.`
        },
        {
          heading: 'Maintenance and Troubleshooting Tips',
          content: `Routine maintenance of compressed air dryers includes regular filter replacement, inspection of drains, monitoring pressure differentials, and checking overall system performance. Common issues such as excessive moisture, pressure drops, or abnormal dryer operation should be addressed promptly to prevent system inefficiencies and equipment damage.`
        }
        ,
        {
          heading: 'Conclusion',
          content: `Compressed air dryers play a crucial role in maintaining the efficiency, reliability, and quality of compressed air systems. By effectively removing moisture and contaminants, these devices help prevent corrosion, equipment damage, and performance issues. Understanding the different types of compressed air dryers and their suitability for specific applications allows you to make informed decisions when selecting and maintaining a dryer for your compressed air system. Investing in a high-quality compressed air dryer is an investment in the longevity and optimal performance of your equipment, ensuring smooth operations and minimizing costly downtime.`
        }
      ]
    },

    /* ======================================================
       BLOG 5 – STEEL STRUCTURE FABRICATION
    ====================================================== */
    {
      id: 5,
      title: 'Steel Structure Fabrications: Strength, Efficiency, and Sustainability',
      image: '../../../assets/images/blog-6.webp',
      date: 'February 20, 2024',
      category: 'Construction',
      author: 'Construction Team',
      readTime: '6 min read',
      tags: ['Steel', 'Construction', 'Sustainability'],

      sections: [
        {
          heading: 'Introduction',
          content: `Steel structure fabrications have revolutionized the construction industry by offering a versatile and reliable solution for a wide range of projects. From high-rise buildings to complex bridges, steel structures are known for their strength, efficiency, and sustainability. This section explores the key benefits and applications of steel structure fabrications and explains why they continue to dominate modern construction practices.`
        },
        {
          heading: 'Strength and Durability',
          content: `Steel is renowned for its exceptional strength and durability, making it an ideal material for structural applications. Steel structures can withstand heavy loads, resist seismic forces, and endure extreme weather conditions. This inherent strength allows engineers to design large spans with minimal support columns while ensuring long-term structural integrity for buildings, bridges, and other infrastructure projects.`
        },
        {
          heading: 'Efficiency in Construction',
          content: `Steel structure fabrication significantly enhances construction efficiency through off-site prefabrication and precise manufacturing processes. Components are produced using advanced CAD and CAM technologies, ensuring accuracy and optimized material usage. These prefabricated elements can be rapidly assembled on-site, reducing construction timelines, labor requirements, and overall project costs compared to traditional construction methods.`
        },
        {
          heading: 'Versatility in Design',
          content: `Steel offers unmatched flexibility in architectural and structural design. Its malleability allows it to be formed into a wide range of shapes and sizes, supporting complex geometries, curved elements, and innovative structural concepts. This design versatility enables architects and engineers to create visually striking and iconic structures that push the boundaries of modern architecture.`
        },
        {
          heading: 'Sustainability and Environmental Benefits',
          content: `Steel structure fabrications provide significant environmental advantages. Steel is highly recyclable, with much of its production sourced from recycled materials. Steel structures also support energy-efficient building designs through effective insulation systems, reducing heat transfer and energy consumption. Their long lifespan minimizes the need for frequent repairs or replacements, contributing to sustainable construction practices.`
        },
        {
          heading: 'Diverse Applications',
          content: `Steel structure fabrications are widely used across multiple sectors, including commercial, residential, industrial, and infrastructure projects. Applications range from warehouses, shopping malls, sports arenas, and airports to bridges, power plants, and offshore platforms. Steel’s high load-bearing capacity, adaptability, and resistance to environmental stresses make it an optimal choice for diverse construction requirements.`
        },
        {
          heading: 'Conclusion',
          content: `Steel structure fabrications form the backbone of modern construction by combining strength, efficiency, and sustainability. Their ability to withstand extreme conditions, enable rapid construction, and support innovative designs continues to shape skylines worldwide. As the construction industry moves toward greater sustainability and technological advancement, steel structures will remain a central element in shaping the built environment of the future.`
        }
      ]

    }

  ];


  currentBlog: any;
  relatedBlogs: any[] = [];
  currentIndex = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }
  isSimpleList(list: any[]): boolean {
    return (
      Array.isArray(list) &&
      list.length > 0 &&
      typeof list[0] === 'string'
    );
  }

  isNestedList(list: any[]): boolean {
    return (
      Array.isArray(list) &&
      list.length > 0 &&
      typeof list[0] === 'object' &&
      list[0]?.heading &&
      Array.isArray(list[0]?.list)
    );
  }



  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'] || 1;
      this.loadBlog(id);
    });
  }

  loadBlog(id: number) {
    this.currentBlog = this.blogPosts.find(b => b.id === id);
    this.currentIndex = this.blogPosts.findIndex(b => b.id === id);
    this.relatedBlogs = this.blogPosts.filter(b => b.id !== id);
  }

  loadPreviousBlog() {
    if (this.currentIndex > 0) {
      this.router.navigate(['/blog', this.blogPosts[this.currentIndex - 1].id]);
    }
  }

  loadNextBlog() {
    if (this.currentIndex < this.blogPosts.length - 1) {
      this.router.navigate(['/blog', this.blogPosts[this.currentIndex + 1].id]);
    }
  }
}
