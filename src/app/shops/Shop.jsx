"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'

export default function Bags() {
  const [sort, setSort] = useState

  function searchShop(e){
    setSort(e.target.value)
  }

    const shops = [
        {
          id: 1,
          title: "Colorful Kids' Schoolbag",
          category: "kids",
          price: 1000,
          description: "Our Colorful Kids' Schoolbag is designed with the playful spirit of children in mind. Featuring vibrant colors and fun patterns, this schoolbag is both stylish and practical. The durable materials ensure longevity, while the spacious compartments provide ample storage for textbooks, notebooks, and even a lunchbox. The adjustable straps make it comfortable for young shoulders, and the high-quality zippers ensure easy access to belongings. Give your child a cheerful and functional companion for their school days.",
          tags: ["kids", "schoolbag", "colorful", "children", "back-to-school"]
        },
        {
          id: 2,
          title: "Classic Male School Backpack",
          category: "male",
          price: 500,
          description: "The Classic Male School Backpack is a timeless choice for boys and young men. With a sleek and straightforward design, this backpack offers both style and functionality. The spacious main compartment accommodates textbooks and a laptop, while the multiple pockets provide organized storage for pens, gadgets, and other essentials. The sturdy construction and padded shoulder straps ensure comfort and durability, making it a reliable companion for the academic journey. Elevate your school style with this classic and practical male school backpack.",
          tags: ["male", "school backpack", "classic", "back-to-school", "stylish"]
        },
        {
          id: 3,
          title: "Chic Female School Satchel",
          category: "female",
          price: 800,
          description: "The Chic Female School Satchel combines fashion and function for the modern schoolgirl. This stylish satchel is designed with attention to detail, featuring trendy patterns and quality craftsmanship. The satchel offers a balance between sophistication and practicality, with a spacious interior for books and a dedicated compartment for a tablet or laptop. The adjustable crossbody strap provides comfort, and the magnetic closures add a touch of convenience. Empower your school days with this chic and functional female school satchel.",
          tags: ["female", "school satchel", "chic", "fashionable", "back-to-school"]
        },
        {
          id: 4,
          title: "Versatile Unisex School Backpack",
          category: "unisex",
          price: 1500,
          description: "The Versatile Unisex School Backpack is designed to meet the needs of students of all genders. With a neutral and modern aesthetic, this backpack is suitable for everyone. The backpack features a large main compartment for textbooks, notebooks, and a laptop, along with multiple pockets for organization. The padded shoulder straps and back panel provide comfort during long days at school. Whether you're a student looking for simplicity or a parent seeking a unisex option for multiple kids, this backpack is the perfect choice.",
          tags: ["unisex", "school backpack", "versatile", "neutral design", "back-to-school"]
        },
        {
          id: 5,
          title: "Adventurous Kids' Backpack",
          category: "kids",
          price: 500,
          description: "Encourage your child's adventurous spirit with our Adventurous Kids' Backpack. This backpack is not only durable but also designed to withstand the active lifestyle of young explorers. The vibrant colors and playful patterns add a sense of fun, while the multiple compartments provide organized storage for snacks, toys, and school essentials. The adjustable shoulder straps ensure a comfortable fit, making it an ideal companion for outdoor activities and school adventures.",
          tags: ["kids", "adventurous", "backpack", "active lifestyle", "exploration"]
        },
        {
          id: 6,
          title: "Tech-Savvy Male School Bag",
          category: "male",
          price: 700,
          description: "Introducing the Tech-Savvy Male School Bag for students who value both style and technology. This modern school bag is equipped with a dedicated compartment for laptops or tablets, ensuring that tech gadgets are securely stored. The sleek design and tech-friendly features make it perfect for the modern male student. Padded shoulder straps provide comfort during commutes, and the high-quality materials ensure durability. Stay organized and connected with this tech-savvy school bag.",
          tags: ["male", "school bag", "tech-savvy", "laptop compartment", "modern design"]
        },
        {
          id: 7,
          title: "Elegant Female School Tote",
          category: "female",
          price: 600,
          description: "Make a statement with our Elegant Female School Tote, combining practicality with sophistication. This tote bag is perfect for female students who appreciate a touch of elegance in their daily lives. The spacious interior accommodates notebooks and essentials, while the stylish design complements various outfits. The durable handles ensure comfortable carrying, and the reinforced bottom adds stability. Elevate your school fashion with this elegant and functional school tote.",
          tags: ["female", "school tote", "elegant", "fashion-forward", "back-to-school"]
        },
        {
          id: 8,
          title: "Sporty Unisex Backpack",
          category: "unisex",
          price: 1200,
          description: "For those with an active lifestyle, our Sporty Unisex Backpack is the perfect choice. Whether you're heading to school or the gym, this backpack combines style and functionality. The sporty design is complemented by durable materials, multiple pockets, and adjustable straps. The spacious main compartment can accommodate gym gear or textbooks, making it a versatile option for students and fitness enthusiasts alike. Embrace an active lifestyle with the Sporty Unisex Backpack.",
          tags: ["unisex", "backpack", "sporty", "active lifestyle", "versatile"]
        },
        {
          id: 9,
          title: "Cartoon-themed Kids' Schoolbag",
          category: "kids",
          price: 650,
          description: "Make going to school a joyous experience with our Cartoon-themed Kids' Schoolbag. Featuring beloved characters and vibrant colors, this schoolbag sparks creativity and imagination. The sturdy construction ensures durability, and the ergonomic design is tailored for the comfort of young students. Multiple compartments offer organized storage for books and stationery. Give your child a delightful and personalized school companion with this cartoon-themed schoolbag.",
          tags: ["kids", "schoolbag", "cartoon-themed", "children", "back-to-school"]
        },
        {
          id: 10,
          title: "Urban Male School Messenger Bag",
          category: "male",
          price: 950,
          description: "Navigate the urban jungle with our Urban Male School Messenger Bag. This stylish messenger bag is designed for the modern male student who values convenience and fashion. The adjustable shoulder strap allows for easy carrying, and the multiple compartments provide organized storage for books, gadgets, and everyday essentials. The sleek design and urban-inspired aesthetic make it a standout choice for students on the go. Elevate your urban school style with this versatile messenger bag.",
          tags: ["male", "school messenger bag", "urban", "modern design", "convenient"]
        },
        {
          id: 11,
          title: "Fashion-forward Female Backpack",
          category: "female",
          price: 900,
          description: "Stay on trend with our Fashion-forward Female Backpack, combining style and functionality. This backpack is designed for the fashion-conscious female student who wants to make a statement. The chic design is complemented by high-quality materials, and the spacious interior accommodates textbooks, notebooks, and personal items. The adjustable straps provide comfort, making it an ideal choice for daily commutes to school or social events. Showcase your style with this fashion-forward female backpack.",
          tags: ["female", "fashion-forward", "backpack", "stylish", "trendy"]
        },
        {
          id: 12,
          title: "Durable Unisex School Rucksack",
          category: "unisex",
          price: 1150,
          description: "Embrace durability with our Durable Unisex School Rucksack, designed to withstand the rigors of daily school life. This rucksack features reinforced seams and sturdy zippers for long-lasting use. The spacious main compartment and multiple pockets provide ample storage for books, stationery, and personal items. The padded shoulder straps ensure comfort during extended wear. Choose reliability and durability with this rugged yet stylish unisex school rucksack.",
          tags: ["unisex", "school rucksack", "durable", "reliable", "back-to-school"]
        },
        {
          id: 13,
          title: "Animal-themed Kids' Backpack",
          category: "kids",
          price: 550,
          description: "Ignite your child's imagination with our Animal-themed Kids' Backpack. Featuring adorable animal designs and bright colors, this backpack adds a playful touch to school days. The lightweight and ergonomic design make it suitable for young children, and the adjustable straps ensure a comfortable fit. The backpack includes multiple compartments for organizing school supplies and treasures. Foster creativity and fun with this delightful animal-themed kids' backpack.",
          tags: ["kids", "backpack", "animal-themed", "children", "back-to-school"]
        },
        {
          id: 14,
          title: "Tech-Ready Male School Briefcase",
          category: "male",
          price: 900,
          description: "For the tech-savvy student, our Tech-Ready Male School Briefcase is the perfect choice. This briefcase combines a classic design with modern functionality. The dedicated laptop compartment ensures the safety of your electronic devices, while the organized interior provides storage for textbooks and essentials. The comfortable handles and detachable shoulder strap offer versatile carrying options. Elevate your school style with this tech-ready male school briefcase.",
          tags: ["male", "school briefcase", "tech-ready", "modern design", "back-to-school"]
        },
        {
          id: 15,
          title: "Stylish Female School Crossbody",
          category: "female",
          price: 800,
          description: "Introducing the Stylish Female School Crossbody, a versatile and fashionable choice for the modern female student. This crossbody bag combines style and convenience, allowing for hands-free carrying during school commutes or outings. The compact design doesn't compromise on storage, with dedicated compartments for books, gadgets, and personal items. The adjustable strap ensures a comfortable fit, making it an ideal accessory for students on the move.",
          tags: ["female", "school crossbody", "stylish", "fashionable", "back-to-school"]
        },
        {
            id: 16,
            title: "Interactive Kids' Backpack",
            category: "kids",
            price: 600,
            description: "Make learning fun with our Interactive Kids' Backpack. This backpack is equipped with interactive elements, such as educational games and puzzles integrated into the design. The durable construction ensures the backpack can handle the playful activities of young learners. The adjustable straps and ergonomic design make it comfortable for kids to carry. Spark curiosity and excitement in education with this interactive and engaging kids' backpack.",
            tags: ["kids", "interactive", "educational", "backpack", "learning"]
          },
          {
            id: 17,
            title: "Executive Male Laptop Bag",
            category: "male",
            price: 750,
            description: "For the aspiring young professional, our Executive Male Laptop Bag offers a sophisticated and professional look. This laptop bag features a dedicated padded compartment for laptops, ensuring the safety of your valuable technology. The stylish design, multiple pockets, and high-quality materials make it suitable for both school and business settings. Elevate your image with this executive and functional male laptop bag.",
            tags: ["male", "laptop bag", "executive", "professional", "business"]
          },
          {
            id: 18,
            title: "Convertible Female School Tote",
            category: "female",
            price: 950,
            description: "Adapt to your daily needs with our Convertible Female School Tote. This versatile tote bag can transform into a backpack, providing flexibility for different occasions. The spacious interior accommodates textbooks, a laptop, and personal items, while the convertible design adds convenience. The stylish and durable construction makes it a perfect accessory for the fashion-forward female student. Embrace versatility and style with this convertible female school tote.",
            tags: ["female", "school tote", "convertible", "versatile", "fashion-forward"]
          },
          {
            id: 19,
            title: "Outdoor Adventure Unisex Backpack",
            category: "unisex",
            price: 850,
            description: "Gear up for outdoor adventures with our Outdoor Adventure Unisex Backpack. This backpack is designed for students who love exploring nature or participating in outdoor activities. The rugged design, water-resistant materials, and multiple compartments make it suitable for hiking, camping, or everyday school use. The adjustable straps and padded back panel provide comfort during extended wear. Embrace the spirit of adventure with this outdoor-ready unisex backpack.",
            tags: ["unisex", "backpack", "outdoor adventure", "rugged", "exploration"]
          },
          {
            id: 20,
            title: "Casual Urban Female Backpack",
            category: "female",
            price: 1500,
            description: "Achieve a laid-back and stylish look with our Casual Urban Female Backpack. This backpack is perfect for the modern female student who appreciates a casual and effortless style. The spacious interior accommodates school essentials, and the minimalist design complements various outfits. The adjustable straps ensure a comfortable fit, making it suitable for everyday use. Elevate your casual chic style with this urban-inspired female backpack.",
            tags: ["female", "casual", "urban", "backpack", "effortless style"]
          },
        ];

        
        const filteredList = shops.filter(shops.title.toLowerCase().includes(sort.toLowerCase()))

        const shopCart = shops.map( cart => (
          <section key={cart.id}>
            <Link href={`/category/${cart.title.split(' ').join('-')}`}>
              <h2>{cart.title}</h2>
              <Image src={`https://robohash.org/${cart.title}`} alt={cart.title} width='400' height='400'/>
              <p>&#8358; <span>{cart.price}</span></p>
            </Link>
          </section>
        )
          )
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {shopCart}
    </div>
  )
}
