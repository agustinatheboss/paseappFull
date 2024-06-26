import { AiFillStar } from "react-icons/ai";

const data = [
  { id: 1, title: "Product 1", category: "sneakers", petType: "dog", frequency: "monthly", date: "2023-01-01", rating: 4, zone: "CABA", price: 100 },
  { id: 2, title: "Product 2", category: "flats", petType: "cat", frequency: "weekly", date: "2023-02-01", rating: 5, zone: "La Plata", price: 50 },
  { id: 3, title: "Product 3", category: "sandals", petType: "dog", frequency: "monthly", date: "2023-03-01", rating: 3, zone: "Avellaneda", price: 70 },
  { id: 4, title: "Product 4", category: "heels", petType: "cat", frequency: "monthly", date: "2023-04-01", rating: 2, zone: "Quilmes", price: 120 },
  { id: 5, title: "Product 5", category: "flats", petType: "dog", frequency: "weekly", date: "2023-05-01", rating: 5, zone: "Lomas de Zamora", price: 80 },
  { id: 6, title: "Product 6", category: "sneakers", petType: "cat", frequency: "monthly", date: "2023-06-01", rating: 4, zone: "Almirante Brown", price: 90 },
  { id: 7, title: "Product 7", category: "sandals", petType: "dog", frequency: "weekly", date: "2023-07-01", rating: 3, zone: "Lanús", price: 60 },
  { id: 8, title: "Product 8", category: "heels", petType: "cat", frequency: "monthly", date: "2023-08-01", rating: 5, zone: "Morón", price: 110 },
  { id: 9, title: "Product 9", category: "flats", petType: "dog", frequency: "weekly", date: "2023-09-01", rating: 4, zone: "Tres de Febrero", price: 70 },
  { id: 10, title: "Product 10", category: "sneakers", petType: "cat", frequency: "monthly", date: "2023-10-01", rating: 2, zone: "San Martín", price: 130 },
  { id: 11, title: "Product 11", category: "sandals", petType: "dog", frequency: "weekly", date: "2023-11-01", rating: 4, zone: "Tigre", price: 85 },
  { id: 12, title: "Product 12", category: "heels", petType: "cat", frequency: "monthly", date: "2023-12-01", rating: 3, zone: "San Isidro", price: 95 },
  { id: 13, title: "Product 13", category: "flats", petType: "dog", frequency: "weekly", date: "2024-01-01", rating: 5, zone: "Vicente López", price: 75 },
  { id: 14, title: "Product 14", category: "sneakers", petType: "cat", frequency: "monthly", date: "2024-02-01", rating: 4, zone: "San Fernando", price: 105 },
  { id: 15, title: "Product 15", category: "sandals", petType: "dog", frequency: "weekly", date: "2024-03-01", rating: 3, zone: "San Miguel", price: 65 },
  { id: 16, title: "Product 16", category: "heels", petType: "cat", frequency: "monthly", date: "2024-04-01", rating: 5, zone: "José C. Paz", price: 115 },
  { id: 17, title: "Product 17", category: "flats", petType: "dog", frequency: "weekly", date: "2024-05-01", rating: 4, zone: "Malvinas Argentinas", price: 85 },
  { id: 18, title: "Product 18", category: "sneakers", petType: "cat", frequency: "monthly", date: "2024-06-01", rating: 2, zone: "Pilar", price: 140 },
  { id: 19, title: "Product 19", category: "sandals", petType: "dog", frequency: "weekly", date: "2024-07-01", rating: 4, zone: "Escobar", price: 95 },
  { id: 20, title: "Product 20", category: "heels", petType: "cat", frequency: "monthly", date: "2024-08-01", rating: 3, zone: "Berazategui", price: 100 },
];

// Generando el campo 'description' para cada objeto
const dataWithDescriptions = data.map(item => ({
  ...item,
  description: `${item.title} - ${item.category} for ${item.petType}, ${item.frequency}, rated ${item.rating}/5, ${item.zone}, $${item.price}`
}));

export default dataWithDescriptions;
