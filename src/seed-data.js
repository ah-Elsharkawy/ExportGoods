// Run this script to populate Firebase with demo data
// Usage: node seed-data.js

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";

// TODO: Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC8Hg9ZtH9h0g8GHICJnM_XLYoG1G5DsII",
  authDomain: "exportgoods.firebaseapp.com",
  projectId: "exportgoods",
  storageBucket: "exportgoods.firebasestorage.app",
  messagingSenderId: "426997039702",
  appId: "1:426997039702:web:3f96277196885a1c80f1f7",
  measurementId: "G-T1K7GV9KPS",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const products = [
  {
    nameEn: "Apple",
    nameAr: "تفاح",
    descriptionEn: "Fresh red apples, sweet and crispy",
    descriptionAr: "تفاح أحمر طازج، حلو ومقرمش",
    category: "fruits",
    imageUrl:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    nameEn: "Orange",
    nameAr: "برتقال",
    descriptionEn: "Juicy oranges packed with vitamin C",
    descriptionAr: "برتقال عصيري غني بفيتامين سي",
    category: "fruits",
    imageUrl:
      "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=500",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    nameEn: "Banana",
    nameAr: "موز",
    descriptionEn: "Ripe bananas, perfect for snacking",
    descriptionAr: "موز ناضج، مثالي للوجبات الخفيفة",
    category: "fruits",
    imageUrl:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    nameEn: "Strawberry",
    nameAr: "فراولة",
    descriptionEn: "Sweet strawberries, freshly picked",
    descriptionAr: "فراولة حلوة، طازجة",
    category: "fruits",
    imageUrl:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    nameEn: "Mango",
    nameAr: "مانجو",
    descriptionEn: "Sweet tropical mangoes",
    descriptionAr: "مانجو استوائية حلوة",
    category: "fruits",
    imageUrl: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    nameEn: "Grapes",
    nameAr: "عنب",
    descriptionEn: "Fresh seedless grapes",
    descriptionAr: "عنب طازج بدون بذور",
    category: "fruits",
    imageUrl:
      "https://images.unsplash.com/photo-1599819177626-32f8e1c684ce?w=500",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    nameEn: "Tomato",
    nameAr: "طماطم",
    descriptionEn: "Fresh ripe tomatoes, perfect for salads",
    descriptionAr: "طماطم طازجة ناضجة، مثالية للسلطات",
    category: "vegetables",
    imageUrl:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    nameEn: "Cucumber",
    nameAr: "خيار",
    descriptionEn: "Crisp cucumbers, great for salads",
    descriptionAr: "خيار مقرمش، رائع للسلطات",
    category: "vegetables",
    imageUrl:
      "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=500",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    nameEn: "Carrot",
    nameAr: "جزر",
    descriptionEn: "Fresh carrots rich in vitamin A",
    descriptionAr: "جزر طازج غني بفيتامين أ",
    category: "vegetables",
    imageUrl:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    nameEn: "Lettuce",
    nameAr: "خس",
    descriptionEn: "Fresh green lettuce leaves",
    descriptionAr: "أوراق خس خضراء طازجة",
    category: "vegetables",
    imageUrl:
      "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=500",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    nameEn: "Potato",
    nameAr: "بطاطس",
    descriptionEn: "Fresh potatoes for cooking",
    descriptionAr: "بطاطس طازجة للطبخ",
    category: "vegetables",
    imageUrl:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    nameEn: "Onion",
    nameAr: "بصل",
    descriptionEn: "Fresh onions for cooking",
    descriptionAr: "بصل طازج للطبخ",
    category: "vegetables",
    imageUrl:
      "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=500",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
];

const pageContent = [
  {
    section: "home",
    order: 1,
    titleEn: "Welcome to Fresh Produce",
    titleAr: "مرحبا بكم في المنتجات الطازجة",
    contentEn:
      "Your trusted source for fresh fruits and vegetables delivered daily",
    contentAr: "مصدرك الموثوق للفواكه والخضروات الطازجة يوميا",
  },
  {
    section: "home",
    order: 2,
    titleEn: "About Our Company",
    titleAr: "عن شركتنا",
    contentEn:
      "We have been providing fresh produce to families and businesses for over 10 years. Quality and customer satisfaction are our top priorities.",
    contentAr:
      "نحن نقدم المنتجات الطازجة للعائلات والشركات منذ أكثر من 10 سنوات. الجودة ورضا العملاء هما أولوياتنا.",
  },
  {
    section: "company",
    order: 1,
    titleEn: "Our Story",
    titleAr: "قصتنا",
    contentEn:
      "Founded in 2014, we started as a small family business with a passion for bringing fresh produce to our community. Today, we serve hundreds of customers daily.",
    contentAr:
      "تأسست في عام 2014، بدأنا كمشروع عائلي صغير بشغف لتقديم المنتجات الطازجة لمجتمعنا. اليوم، نخدم المئات من العملاء يوميا.",
  },
  {
    section: "private-business",
    order: 1,
    titleEn: "Business Solutions",
    titleAr: "حلول الأعمال",
    contentEn:
      "We offer customized solutions for restaurants, hotels, and catering services. Bulk orders and special pricing available. Contact us for a personalized quote.",
    contentAr:
      "نقدم حلولاً مخصصة للمطاعم والفنادق وخدمات الطعام. طلبات بالجملة وأسعار خاصة متاحة. اتصل بنا للحصول على عرض أسعار مخصص.",
  },
];

const contactInfo = {
  phone: "+20 123 456 7890",
  email: "info@freshproduce.com",
  addressEn: "123 Main Street, Cairo, Egypt",
  addressAr: "123 شارع الرئيسي، القاهرة، مصر",
  whatsapp: "201234567890",
};

async function seedData() {
  try {
    console.log("🌱 Starting to seed data...");

    // Add products
    console.log("📦 Adding products...");
    for (const product of products) {
      await addDoc(collection(db, "products"), product);
      console.log(`✅ Added: ${product.nameEn}`);
    }

    // Add page content
    console.log("📄 Adding page content...");
    for (const content of pageContent) {
      await addDoc(collection(db, "pageContent"), content);
      console.log(`✅ Added content for: ${content.section}`);
    }

    // Add contact info
    console.log("📞 Adding contact info...");
    await addDoc(collection(db, "contactInfo"), contactInfo);
    console.log("✅ Added contact info");

    console.log("🎉 Data seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
}

seedData();
