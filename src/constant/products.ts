interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  color: string;
  size: string;
}
export const productsData: Product[] = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: { rate: 3.9, count: 120 },
    color: "Blue",
    size: "One Size"
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, lightweight & soft fabric.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    rating: { rate: 4.1, count: 259 },
    color: "Black",
    size: "L"
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jacket for Spring/Autumn/Winter, suitable for many occasions.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    rating: { rate: 4.7, count: 500 },
    color: "Olive",
    size: "XL"
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description: "The color could be slightly different between on the screen and in practice.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    rating: { rate: 2.1, count: 430 },
    color: "Gray",
    size: "M"
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Bracelet",
    price: 695,
    description: "Inspired by the mythical water dragon that protects the ocean's pearl.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 4.6, count: 400 },
    color: "Gold",
    size: "6.5 inches"
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave",
    price: 168,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 3.9, count: 70 },
    color: "Rose Gold",
    size: "6"
  },
  {
    id: 7,
    title: "White Gold Plated Princess Ring",
    price: 9.99,
    description: "Classic wedding engagement diamond promise ring.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 3, count: 400 },
    color: "White Gold",
    size: "7"
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Steel Earrings",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 1.9, count: 100 },
    color: "Rose Gold",
    size: "8mm"
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable Hard Drive",
    price: 64,
    description: "USB 3.0 and USB 2.0 Compatibility. Fast data transfers.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    rating: { rate: 3.3, count: 203 },
    color: "Black",
    size: "2TB"
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD",
    price: 109,
    description: "Easy upgrade for faster boot up and response.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    rating: { rate: 2.9, count: 470 },
    color: "Black",
    size: "1TB"
  },
  {
    id: 11,
    title: "Silicon Power 256GB SSD 3D NAND",
    price: 109,
    description: "Remarkable transfer speeds with advanced SLC Cache Technology.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    rating: { rate: 4.8, count: 319 },
    color: "Silver",
    size: "256GB"
  },
  {
    id: 12,
    title: "WD 4TB Gaming Drive for PS4",
    price: 114,
    description: "Expand your PS4 gaming experience. Fast and easy setup.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
    rating: { rate: 4.8, count: 400 },
    color: "Black",
    size: "4TB"
  },
  {
    id: 13,
    title: "Acer SB220Q 21.5-inch Full HD Monitor",
    price: 599,
    description: "Zero-frame design, ultra-thin with 4ms response time.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    rating: { rate: 2.9, count: 250 },
    color: "Black",
    size: "21.5 inches"
  },
  {
    id: 14,
    title: "Samsung 49-Inch CHG90 Gaming Monitor",
    price: 999.99,
    description: "Super ultrawide screen QLED monitor with 144Hz refresh rate.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    rating: { rate: 2.2, count: 140 },
    color: "Black",
    size: "49 inches"
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's Snowboard Jacket",
    price: 56.99,
    description: "3-in-1 detachable design with warm fleece liner.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    rating: { rate: 2.6, count: 235 },
    color: "Red",
    size: "M"
  },
  {
    id: 16,
    title: "Lock and Love Women's Faux Leather Jacket",
    price: 29.95,
    description: "Faux leather with button detail on waist.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    rating: { rate: 2.9, count: 340 },
    color: "Black",
    size: "S"
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker",
    price: 39.99,
    description: "Lightweight with adjustable waist design and hood.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    rating: { rate: 3.8, count: 679 },
    color: "Yellow",
    size: "L"
  },
  {
    id: 18,
    title: "MBJ Women's Short Sleeve Boat Neck",
    price: 9.85,
    description: "Lightweight fabric with double stitching on bottom hem.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    rating: { rate: 4.7, count: 130 },
    color: "Pink",
    size: "M"
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture T-Shirt",
    price: 7.95,
    description: "Lightweight, breathable, moisture-wicking fabric.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    rating: { rate: 4.5, count: 146 },
    color: "Navy",
    size: "S"
  },
  {
    id: 20,
    title: "DANVOUY Women's Casual Cotton T-Shirt",
    price: 12.99,
    description: "Soft cotton fabric with V-neck and printed letters.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    rating: { rate: 3.6, count: 145 },
    color: "White",
    size: "L"
  }
];

export const colorOptions = [
  { name: 'Black', value: 'Black', hex: '#000000' },
  { name: 'White', value: 'White', hex: '#FFFFFF' },
  { name: 'Green', value: 'Green', hex: '#22c55e' },
  { name: 'Blue', value: 'Blue', hex: '#3b82f6' },
  { name: 'Light Blue', value: 'Light Blue', hex: '#93c5fd' },
  { name: 'Gray', value: 'Gray', hex: '#6b7280' },
  { name: 'Red', value: 'Red', hex: '#ef4444' },
  { name: 'Pink', value: 'Pink', hex: '#ffc0cb' },
  { name: 'Gold', value: 'Gold', hex: '#ffd700' },
  { name: 'Rose Gold', value: 'Rose Gold', hex: '#e8b4b8' },
  { name: 'White Gold', value: 'White Gold', hex: '#f5f5dc' },
  { name: 'Silver', value: 'Silver', hex: '#c0c0c0' },
  { name: 'Yellow', value: 'Yellow', hex: '#ffff00' },
  { name: 'Navy', value: 'Navy', hex: '#000080' },
  { name: 'Olive', value: 'Olive', hex: '#808000' }
];

export const sizeOptions = ['XL', 'XXL', 'SM', 'XM', 'L', 'M', 'S', 'One Size', '6', '6.5 inches', '7', '8mm', '2TB', '1TB', '256GB', '4TB', '21.5 inches', '49 inches'];
