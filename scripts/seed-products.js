const mongoose = require('mongoose');

// Your actual MongoDB URI
const MONGODB_URI = "mongodb+srv://best4zeesamcom_db_user:HpRWfs5nssklJKM5@cluster0.c7e9got.mongodb.net/nectar-grocery?retryWrites=true&w=majority&appName=Cluster0";

const products = [
  // Fruits
  {
    name: "Fresh Red Apples",
    price: 4.99,
    originalPrice: 7.99,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop",
    category: "Fruits",
    rating: 4.5,
    reviews: 128,
    isOrganic: true,
    inStock: true,
    description: "Crisp and juicy red apples, perfect for snacking"
  },
  {
    name: "Organic Bananas",
    price: 3.49,
    originalPrice: 5.99,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
    category: "Fruits",
    rating: 4.8,
    reviews: 256,
    isOrganic: true,
    inStock: true,
    description: "Sweet and ripe organic bananas"
  },
  {
    name: "Sweet Strawberries",
    price: 5.99,
    originalPrice: 8.99,
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop",
    category: "Fruits",
    rating: 4.9,
    reviews: 312,
    isOrganic: false,
    inStock: true,
    description: "Fresh and sweet strawberries, perfect for desserts"
  },
  {
    name: "Fresh Oranges",
    price: 4.49,
    originalPrice: 6.99,
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop",
    category: "Fruits",
    rating: 4.6,
    reviews: 189,
    isOrganic: true,
    inStock: true,
    description: "Juicy and seedless oranges"
  },
  {
    name: "Fresh Mangoes",
    price: 6.99,
    originalPrice: 10.99,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop",
    category: "Fruits",
    rating: 4.7,
    reviews: 145,
    isOrganic: false,
    inStock: true,
    description: "Sweet and ripe mangoes"
  },
  {
    name: "Green Grapes",
    price: 4.29,
    originalPrice: 6.49,
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=400&fit=crop",
    category: "Fruits",
    rating: 4.4,
    reviews: 98,
    isOrganic: true,
    inStock: true,
    description: "Fresh and sweet green grapes"
  },
  {
    name: "Fresh Tomatoes",
    price: 2.99,
    originalPrice: 4.99,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.3,
    reviews: 156,
    isOrganic: true,
    inStock: true,
    description: "Farm-fresh ripe tomatoes"
  },
  {
    name: "Green Broccoli",
    price: 1.99,
    originalPrice: 3.49,
    image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.7,
    reviews: 203,
    isOrganic: true,
    inStock: true,
    description: "Fresh and crisp broccoli florets"
  },
  {
    name: "Fresh Carrots",
    price: 2.49,
    originalPrice: 3.99,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.5,
    reviews: 167,
    isOrganic: true,
    inStock: true,
    description: "Sweet and crunchy carrots"
  },
  {
    name: "Bell Peppers",
    price: 3.99,
    originalPrice: 5.99,
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.4,
    reviews: 112,
    isOrganic: false,
    inStock: true,
    description: "Colorful and fresh bell peppers"
  },
  {
    name: "Fresh Lettuce",
    price: 1.49,
    originalPrice: 2.49,
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.2,
    reviews: 89,
    isOrganic: true,
    inStock: true,
    description: "Crisp and fresh lettuce"
  },
  {
    name: "Red Onions",
    price: 2.29,
    originalPrice: 3.49,
    image: "https://images.unsplash.com/photo-1618512496248-a07c83eebe29?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.3,
    reviews: 76,
    isOrganic: false,
    inStock: true,
    description: "Fresh red onions"
  },
  {
    name: "Fresh Potatoes",
    price: 3.99,
    originalPrice: 5.99,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop",
    category: "Vegetables",
    rating: 4.1,
    reviews: 234,
    isOrganic: false,
    inStock: true,
    description: "Farm fresh potatoes"
  },
  {
    name: "Fresh Milk 1L",
    price: 2.99,
    originalPrice: 4.49,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop",
    category: "Dairy",
    rating: 4.6,
    reviews: 234,
    isOrganic: true,
    inStock: true,
    description: "Fresh and pure cow milk"
  },
  {
    name: "Farm Eggs (12pcs)",
    price: 3.99,
    originalPrice: 5.99,
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop",
    category: "Dairy",
    rating: 4.7,
    reviews: 189,
    isOrganic: true,
    inStock: true,
    description: "Free-range farm fresh eggs"
  },
  {
    name: "Greek Yogurt",
    price: 4.49,
    originalPrice: 6.49,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop",
    category: "Dairy",
    rating: 4.5,
    reviews: 145,
    isOrganic: false,
    inStock: true,
    description: "Creamy Greek yogurt"
  },
  {
    name: "Chicken Breast",
    price: 8.99,
    originalPrice: 12.99,
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=400&fit=crop",
    category: "Meat",
    rating: 4.8,
    reviews: 267,
    isOrganic: true,
    inStock: true,
    description: "Boneless and skinless chicken breast"
  },
  {
    name: "Beef Mince",
    price: 9.99,
    originalPrice: 14.99,
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=400&fit=crop",
    category: "Meat",
    rating: 4.6,
    reviews: 198,
    isOrganic: false,
    inStock: true,
    description: "Fresh ground beef"
  },
  {
    name: "Fresh Bread",
    price: 2.49,
    originalPrice: 3.99,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
    category: "Bakery",
    rating: 4.5,
    reviews: 312,
    isOrganic: false,
    inStock: true,
    description: "Freshly baked artisan bread"
  },
  {
    name: "Croissants (4pcs)",
    price: 3.99,
    originalPrice: 5.99,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop",
    category: "Bakery",
    rating: 4.7,
    reviews: 156,
    isOrganic: false,
    inStock: true,
    description: "Buttery and flaky croissants"
  }
];

// Define schema for seeding
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  originalPrice: Number,
  image: String,
  category: String,
  rating: Number,
  reviews: Number,
  isOrganic: Boolean,
  inStock: Boolean,
  description: String,
  createdAt: { type: Date, default: Date.now }
});

async function seedDatabase() {
  try {
    console.log('🚀 Starting database seeding...');
    console.log('Connecting to MongoDB...');
    console.log('URI:', MONGODB_URI.replace(/:[^:]*@/, ':****@'));
    
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB successfully');

    // Create Product model
    const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

    // Clear existing products
    console.log('Clearing existing products...');
    await Product.deleteMany({});
    console.log('✅ Existing products cleared');

    // Insert new products
    console.log('Seeding products...');
    const result = await Product.insertMany(products);
    console.log(`✅ Successfully seeded ${result.length} products`);

    // Verify seeding
    const count = await Product.countDocuments();
    console.log(`📊 Total products in database: ${count}`);

    // Show sample products
    const sample = await Product.find().limit(5);
    console.log('\n📦 Sample products:');
    sample.forEach(p => {
      console.log(`   - ${p.name}: $${p.price} (${p.category})`);
    });

    await mongoose.disconnect();
    console.log('\n✅ Database seeding completed successfully!');
    console.log('🌐 Your nectar-grocery database has been created!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();