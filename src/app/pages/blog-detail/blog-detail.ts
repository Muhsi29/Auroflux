import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

interface Blog {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  date: string;
  category: string;
  tags: string[];
  author: string;
  readTime: string;
}

interface Category {
  slug: string;
  name: string;
  count: number;
}

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.html',
  styleUrls: ['./blog-detail.css']
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  blog: Blog | null = null;
  otherBlogs: Blog[] = [];
  relatedBlogs: Blog[] = [];
  categories: Category[] = [];
  
  // Slider variables
  currentSlide: number = 0;
  slideOffset: number = 0;
  slidesPerView: number = 3;
  sliderDots: number[] = [];
  
  private routeSub: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Get blog slug from URL
    this.routeSub = this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.loadBlog(slug);
        this.loadRelatedBlogs(slug);
      }
    });

    this.loadOtherBlogs();
    this.loadCategories();
    this.updateSlidesPerView();
    window.addEventListener('resize', this.updateSlidesPerView.bind(this));
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    window.removeEventListener('resize', this.updateSlidesPerView.bind(this));
  }

  // Mock data - Replace with actual API calls
  private blogsData: Blog[] = [
    {
      id: 1,
      slug: 'upvc-pipes-modern-plumbing-solution',
      title: 'UPVC Pipes: The Modern Plumbing Solution',
      content: `
        <h2>Introduction</h2>
        <p>In the world of plumbing, UPVC pipes have emerged as a game-changer, revolutionizing the way we handle water supply, drainage, and various plumbing applications. In this blog post, we will delve into the world of UPVC pipes, exploring their versatility, benefits, and why they have become the go-to choice for modern plumbing systems.</p>
        
        <h2>Understanding UPVC Pipes</h2>
        <p>Begin by explaining what UPVC stands for (Unplasticized Polyvinyl Chloride) and how it differs from other types of pipes.</p>
        <p>Highlight the key properties of UPVC pipes, such as durability, chemical resistance, and lightweight construction.</p>
        
        <h2>Advantages of UPVC Pipes</h2>
        <p>Discuss the numerous benefits of using UPVC pipes in plumbing systems, such as their longevity, low maintenance requirements, and resistance to corrosion and scaling.</p>
        <p>Emphasize their affordability, eco-friendliness, and suitability for both indoor and outdoor applications.</p>
        
        <h2>Versatility in Plumbing Applications</h2>
        <p>Explore the wide range of plumbing applications where UPVC pipes are used, including water supply lines, drainage systems, irrigation, and underground piping.</p>
        <p>Explain how UPVC pipes can be easily cut, joined, and connected using solvent cement, making installation a hassle-free process.</p>
        
        <h2>Strength and Durability</h2>
        <p>Highlight the strength and durability of UPVC pipes, making them capable of withstanding high water pressure, impact, and extreme weather conditions.</p>
        <p>Discuss their resistance to UV rays, chemicals, and abrasion, making them ideal for long-lasting plumbing solutions.</p>
        
        <h2>Chemical Resistance and Hygiene</h2>
        <p>Explain how UPVC pipes are highly resistant to chemical reactions, making them suitable for various environments and applications.</p>
        <p>Discuss their non-toxic nature and ability to maintain the purity and hygiene of water being transported, making them ideal for potable water systems.</p>
        
        <h2>Low Friction and Smooth Flow</h2>
        <p>Highlight the smooth interior surface of UPVC pipes, which reduces friction and ensures a smooth flow of water or fluids.</p>
        <p>Discuss how this characteristic prevents clogs, sediment buildup, and blockages, resulting in efficient plumbing systems.</p>
        
        <h2>Cost-effectiveness and Energy Efficiency</h2>
        <p>Discuss how UPVC pipes offer cost-effectiveness in terms of their initial installation, low maintenance, and longevity, resulting in long-term savings.</p>
        <p>Explain their energy efficiency, as UPVC pipes have excellent insulation properties that help maintain the temperature of water being transported.</p>
        
        <h2>Environmental Sustainability</h2>
        <p>Highlight the eco-friendly nature of UPVC pipes, as they are recyclable and contribute to reducing environmental waste.</p>
        <p>Discuss how their durability and longevity reduce the need for frequent replacements, further minimizing environmental impact.</p>
        
        <h2>Conclusion</h2>
        <p>As we conclude this blog post, it becomes evident that UPVC pipes have become the preferred choice for modern plumbing systems. Their versatility, durability, chemical resistance, and cost-effectiveness make them an ideal option for various applications. So, whether you're constructing a new home or upgrading your plumbing system, consider the advantages of UPVC pipes for a reliable and efficient plumbing solution.</p>
        <p><strong>Remember</strong>, consult with a professional plumber or expert to ensure that UPVC pipes are suitable for your specific needs and adhere to local plumbing codes and regulations. Invest in the future of plumbing with UPVC pipes and experience the benefits they offer in terms of longevity, performance, and peace of mind.</p>
      `,
      excerpt: 'Explore why UPVC pipes are revolutionizing modern plumbing systems with their durability and versatility.',
      featuredImage: '../../../assets/blog-images/upvc-pipes.jpg',
      date: 'Mar 15, 2024',
      category: 'Plumbing',
      tags: ['UPVC', 'Plumbing', 'Water Systems', 'Construction'],
      author: 'John Doe',
      readTime: '8 min read'
    },
    {
      id: 2,
      slug: 'compressed-air-dryers-how-they-work',
      title: 'Compressed Air Dryers: How They Work',
      content: `
        <h2>Introduction</h2>
        <p>Compressed air is a vital utility used in a wide range of industries and applications, from manufacturing and construction to automotive and healthcare. However, the presence of moisture and contaminants in compressed air can lead to equipment damage, reduced efficiency, and product quality issues. That's where compressed air dryers come into play. In this blog, we will delve into the fascinating world of compressed air dryers and unravel the secrets of how they work.</p>
        
        <h2>Understanding the Need for Compressed Air Dryers</h2>
        <p>Compressed air naturally contains moisture, which can condense and cause corrosion, blockages, and damage to pneumatic equipment and processes. Additionally, airborne contaminants such as oil, dirt, and solid particles can compromise the integrity of the compressed air system and impact downstream applications. Compressed air dryers serve as a crucial solution to address these challenges and ensure the delivery of clean, dry, and high-quality compressed air.</p>
        
        <h2>Types of Compressed Air Dryers</h2>
        
        <h3>Refrigerated Air Dryers</h3>
        <p>Refrigerated air dryers are the most common type of compressed air dryers used in various industries.</p>
        <p>These dryers work on the principle of cooling the compressed air to lower its dew point, causing the moisture to condense and be separated.</p>
        <p>A refrigeration system, consisting of a compressor, condenser, evaporator, and refrigerant, extracts heat from the compressed air, reducing its temperature and removing moisture.</p>
        <p>The dried air is then reheated before leaving the dryer, preventing potential issues caused by overly cold air.</p>
        
        <h3>Desiccant Air Dryers</h3>
        <p>Desiccant air dryers utilize a desiccant material, such as silica gel or activated alumina, to adsorb moisture from the compressed air.</p>
        <p>These dryers operate in a two-stage process: adsorption and regeneration.</p>
        <p>In the adsorption stage, the desiccant material attracts and retains moisture from the compressed air, leaving it dry and free from moisture.</p>
        <p>During the regeneration stage, a portion of the dried air is diverted to remove the moisture from the desiccant material, allowing it to be used again in subsequent cycles.</p>
        <p>Desiccant air dryers are often employed in applications requiring extremely low dew points or when operating in harsh conditions.</p>
        
        <h2>Working Principles and Components</h2>
        <p>Regardless of the type, compressed air dryers consist of several key components that work together to achieve effective moisture removal:</p>
        
        <h3>Air Inlet</h3>
        <p>Compressed air enters the dryer through the air inlet, typically connected to the compressed air system.</p>
        
        <h3>Pre-filters</h3>
        <p>Pre-filters, including particulate and coalescing filters, are used to remove contaminants such as dirt, oil, and solid particles from the incoming air.</p>
        
        <h3>Air Cooling or Desiccant Chamber</h3>
        <p>Depending on the type of dryer, the compressed air passes through either a cooling chamber or a desiccant bed.</p>
        <p>In refrigerated air dryers, the air is cooled to a specific temperature, causing the moisture to condense and separate.</p>
        <p>In desiccant air dryers, the air flows through the desiccant material, which adsorbs the moisture, leaving the air dry.</p>
        
        <h3>Moisture Separator</h3>
        <p>After the moisture is removed, it needs to be separated from the air.</p>
        <p>A moisture separator, often in the form of a water trap or separator tank, allows the condensed moisture to collect and be drained from the system.</p>
        
        <h3>Air Heating or Regeneration (in desiccant dryers)</h3>
        <p>In desiccant air dryers, the desiccant material needs periodic regeneration.</p>
        <p>This process involves diverting a portion of dried air to remove the moisture from the desiccant material, ensuring its effectiveness in subsequent cycles.</p>
        <p>The regenerated air is then exhausted out of the system.</p>
        
        <h2>Conclusion</h2>
        <p>Compressed air dryers play a crucial role in maintaining the integrity and reliability of compressed air systems. By effectively removing moisture and contaminants, these devices ensure the delivery of clean, dry air for a wide range of applications. Whether it's refrigerated air dryers or desiccant air dryers, each type employs unique principles and components to achieve optimal results. Understanding how compressed air dryers work can help industries make informed decisions when it comes to selecting and maintaining these vital components of their compressed air systems.</p>
      `,
      excerpt: 'Learn how compressed air dryers work to remove moisture and contaminants from your air systems.',
      featuredImage: '../../../assets/blog-images/air-dryer.jpg',
      date: 'Apr 2, 2024',
      category: 'Industrial',
      tags: ['Air Systems', 'Industrial', 'Maintenance', 'Equipment'],
      author: 'Jane Smith',
      readTime: '10 min read'
    },
    // Add your 4 other blogs here with similar structure
    {
      id: 3,
      slug: 'industrial-valves-selection-guide',
      title: 'Industrial Valves: A Complete Selection Guide',
      content: 'Your blog content here...',
      excerpt: 'A comprehensive guide to selecting the right industrial valves for your applications.',
      featuredImage: '../../../assets/blog-images/valves.jpg',
      date: 'Apr 10, 2024',
      category: 'Industrial',
      tags: ['Valves', 'Industrial', 'Engineering', 'Flow Control'],
      author: 'Robert Johnson',
      readTime: '12 min read'
    },
    {
      id: 4,
      slug: 'pump-maintenance-best-practices',
      title: 'Pump Maintenance: Best Practices for Longevity',
      content: 'Your blog content here...',
      excerpt: 'Essential maintenance tips to extend the life of your industrial pumps.',
      featuredImage: '../../../assets/blog-images/pumps.jpg',
      date: 'Apr 18, 2024',
      category: 'Maintenance',
      tags: ['Pumps', 'Maintenance', 'Industrial', 'Best Practices'],
      author: 'Sarah Williams',
      readTime: '7 min read'
    },
    {
      id: 5,
      slug: 'water-treatment-systems-overview',
      title: 'Modern Water Treatment Systems: An Overview',
      content: 'Your blog content here...',
      excerpt: 'Understanding the latest technologies in water treatment systems.',
      featuredImage: '../../../assets/blog-images/water-treatment.jpg',
      date: 'Apr 25, 2024',
      category: 'Water Systems',
      tags: ['Water Treatment', 'Filtration', 'Purification', 'Environmental'],
      author: 'Michael Brown',
      readTime: '9 min read'
    },
    {
      id: 6,
      slug: 'safety-equipment-industrial-settings',
      title: 'Essential Safety Equipment for Industrial Settings',
      content: 'Your blog content here...',
      excerpt: 'A guide to must-have safety equipment in industrial environments.',
      featuredImage: '../../../assets/blog-images/safety.jpg',
      date: 'May 2, 2024',
      category: 'Safety',
      tags: ['Safety', 'Industrial', 'Equipment', 'Protection'],
      author: 'Emily Davis',
      readTime: '6 min read'
    }
  ];

  loadBlog(slug: string) {
    const foundBlog = this.blogsData.find(blog => blog.slug === slug);
    if (foundBlog) {
      this.blog = foundBlog;
    } else {
      // Redirect to 404 or blog list
      this.router.navigate(['/blogs']);
    }
  }

  loadOtherBlogs() {
    // Load all blogs except the current one
    this.otherBlogs = this.blogsData
      .filter(blog => blog.id !== this.blog?.id)
      .slice(0, 5); // Show 5 other blogs
  }

  loadRelatedBlogs(currentSlug: string) {
    const currentBlog = this.blogsData.find(blog => blog.slug === currentSlug);
    if (currentBlog) {
      // Find related blogs by category or tags
      this.relatedBlogs = this.blogsData
        .filter(blog => 
          blog.slug !== currentSlug && 
          (blog.category === currentBlog.category || 
           blog.tags.some(tag => currentBlog.tags.includes(tag)))
        )
        .slice(0, 6); // Show up to 6 related blogs
      
      // If not enough related by category/tags, add random ones
      if (this.relatedBlogs.length < 3) {
        const additionalBlogs = this.blogsData
          .filter(blog => 
            blog.slug !== currentSlug && 
            !this.relatedBlogs.some(rb => rb.slug === blog.slug)
          )
          .slice(0, 6 - this.relatedBlogs.length);
        
        this.relatedBlogs = [...this.relatedBlogs, ...additionalBlogs];
      }
      
      // Initialize slider dots
      this.sliderDots = Array.from(
        { length: Math.ceil(this.relatedBlogs.length / this.slidesPerView) }, 
        (_, i) => i
      );
    }
  }

  loadCategories() {
    // Mock categories - calculate from blogs
    const categoryCounts = this.blogsData.reduce((acc, blog) => {
      acc[blog.category] = (acc[blog.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    this.categories = Object.entries(categoryCounts).map(([name, count]) => ({
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      count
    }));
  }

  // Slider Methods
  updateSlidesPerView() {
    const width = window.innerWidth;
    if (width <= 480) {
      this.slidesPerView = 1;
    } else if (width <= 768) {
      this.slidesPerView = 2;
    } else {
      this.slidesPerView = 3;
    }
    
    this.sliderDots = Array.from(
      { length: Math.ceil(this.relatedBlogs.length / this.slidesPerView) }, 
      (_, i) => i
    );
    this.goToSlide(0); // Reset to first slide
  }

  nextSlide() {
    const maxSlide = Math.ceil(this.relatedBlogs.length / this.slidesPerView) - 1;
    if (this.currentSlide < maxSlide) {
      this.currentSlide++;
      this.slideOffset = -this.currentSlide * 100;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.slideOffset = -this.currentSlide * 100;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.slideOffset = -index * 100;
  }
}