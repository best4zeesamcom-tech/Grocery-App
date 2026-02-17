const mongoose = require('mongoose');

// Your actual MongoDB URI
const MONGODB_URI = "mongodb+srv://best4zeesamcom_db_user:HpRWfs5nssklJKM5@cluster0.c7e9got.mongodb.net/nectar-grocery?retryWrites=true&w=majority&appName=Cluster0";

async function testConnection() {
  try {
    console.log('Testing MongoDB connection...');
    console.log('Connecting to:', MONGODB_URI.replace(/:[^:]*@/, ':****@'));
    
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB successfully!');
    
    // List all databases
    const admin = mongoose.connection.db.admin();
    const dbs = await admin.listDatabases();
    console.log('\n📊 Available databases:');
    dbs.databases.forEach(db => {
      console.log(`   - ${db.name}`);
    });
    
    await mongoose.disconnect();
    console.log('\n👋 Disconnected from MongoDB');
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
  }
}

testConnection();