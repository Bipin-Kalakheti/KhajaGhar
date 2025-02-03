# KhajaGhar - Modern Food Ordering Platform

KhajaGhar is a comprehensive full-stack food ordering platform built with modern web technologies. The application provides a seamless experience for customers to order food online while giving restaurant owners powerful tools to manage their business.

## 🌟 Key Features

### For Customers
- Browse restaurant menus with dynamic filtering and search
- Real-time order tracking and status updates
- Secure user authentication and profile management
- Intuitive cart management system
- Multiple payment options with Stripe integration
- Order history and reordering capability

### For Restaurant Owners (Admin Panel)
- Comprehensive dashboard for business analytics
- Real-time order management system
- Menu and inventory management
- Customer feedback and ratings monitoring
- Sales reports and analytics
- Staff management tools

## 🛠 Tech Stack

### Frontend
- **React.js** - UI components and state management
- **React Router** - Client-side routing
- **CSS** - Custom styling and responsive design
- **Vite** - Build tooling and development server

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **dotenv** - Environment configuration

### Admin Panel
- **React.js** - Admin interface
- **React Router** - Navigation
- **Vite** - Build system
- **Custom CSS** - Styled components

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/Bipin-Kalakheti/KhajaGhar.git
cd KhajaGhar
```

2. Install dependencies for all services
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

# Admin Panel
cd ../admin
npm install
```

3. Configure environment variables
```bash
# Backend .env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret

# Frontend .env
VITE_API_URL=http://localhost:5000
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key

# Admin .env
VITE_API_URL=http://localhost:5000
```

4. Start the development servers
```bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev

# Admin
cd admin
npm run dev
```

## 🏗 Project Structure

```
khajaghar/
├── admin/                 # Admin panel
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Admin pages
│   │   └── App.jsx       # Root component
├── backend/
│   ├── controllers/      # Request handlers
│   ├── models/          # Database schemas
│   ├── routes/          # API routes
│   └── config/          # Configuration files
└── frontend/
    ├── src/
    │   ├── components/   # UI components
    │   ├── pages/       # Client pages
    │   └── App.jsx      # Root component
```

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- CORS protection
- Rate limiting
- XSS prevention
- Secure payment processing with Stripe

## 🚀 API Documentation

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Food Items
- `GET /api/food` - List all food items
- `POST /api/food` - Add new food item (Admin)
- `DELETE /api/food/:id` - Remove food item (Admin)

### Orders
- `POST /api/orders` - Place new order
- `GET /api/orders` - List user orders
- `PUT /api/orders/:id` - Update order status (Admin)

## 🧪 Testing

```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
cd frontend
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- Bipin Kalakheti - Full Stack Developer
  - [GitHub](https://github.com/Bipin-Kalakheti)
  - [LinkedIn](https://www.linkedin.com/in/bipin-kalakheti/)

## 🙏 Acknowledgments

- [React.js Documentation](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [Stripe](https://stripe.com/)

---

⭐ Star this repository if you find it helpful!
