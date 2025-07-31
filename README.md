# Apoorva's Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Express.js. Features dark/light mode, smooth animations, and a full-stack architecture showcasing AI/ML projects and skills.

![Portfolio Preview](https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop)

## 🚀 Live Demo

[View Live Portfolio][(http://13.239.240.156/)]

## ✨ Features

### Frontend
- **React 18** with Vite for fast development
- **Tailwind CSS** for modern, responsive styling
- **Dark/Light Mode** toggle with system preference detection
- **Framer Motion** for smooth animations
- **React Router** for client-side routing
- **Responsive Design** that works on all devices
- **Modern UI/UX** with beautiful gradients and transitions

### Backend
- **Express.js** REST API
- **CORS** enabled for frontend communication
- **Contact Form** handling with validation
- **Projects API** for dynamic content
- **Health Check** endpoint
- **Error Handling** middleware

### Pages
- **Home**: Hero section with call-to-action buttons
- **About**: Personal information, experience, and education
- **Projects**: Dynamic project showcase with API integration
- **Skills**: Categorized skills with progress indicators
- **Contact**: Contact form with backend integration

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Axios
- Lucide React (Icons)

### Backend
- Node.js
- Express.js
- CORS
- dotenv

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-app
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

   Or install separately:
   ```bash
   # Frontend dependencies
   cd frontend
   npm install
   
   # Backend dependencies
   cd ../backend
   npm install
   ```

## 🚀 Running the Application

### Development Mode

1. **Start both servers simultaneously**
   ```bash
   npm run dev
   ```

   Or run separately:
   ```bash
   # Backend (port 5001)
   npm run dev:backend
   
   # Frontend (port 5173)
   npm run dev:frontend
   ```

2. **Access the application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5001`

### Production Mode

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Start the backend**
   ```bash
   cd backend
   npm start
   ```

## 📁 Project Structure

```
portfolio-app/
├── frontend/
│   ├── public/
│   │   └── Apoorva -Resume.pdf
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── context/
│   │   │   └── ThemeContext.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
├── README.md
├── DEPLOYMENT.md
└── package.json
```

## 🌐 API Endpoints

### Projects
- `GET /api/projects` - Get all projects

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all submissions (admin)

### Health
- `GET /api/health` - Server health check

### Resume
- `GET /resume` - Download resume PDF

## 🎨 Customization

### Colors
The color scheme can be customized in `frontend/tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... more shades
  },
}
```

### Content
- Update personal information in the respective page components
- Modify projects data in `backend/server.js`
- Replace resume PDF in `frontend/public/`
- Update contact information in the Contact page

### Styling
- Custom CSS classes are defined in `frontend/src/index.css`
- Component-specific styles use Tailwind CSS classes
- Animations are handled by Framer Motion

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform

### Backend (Railway/Render)
1. Set environment variables
2. Deploy the backend folder
3. Update frontend API URLs to production backend URL

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📝 Environment Variables

### Backend (.env)
```
PORT=5001
NODE_ENV=development

# Email Configuration for Contact Form
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Note**: For email functionality to work, you need to:
1. Use a Gmail account
2. Enable 2-factor authentication
3. Generate an "App Password" from Google Account settings
4. Use the app password (not your regular password) in EMAIL_PASS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Apoorva Somvanshi**
- Email: apoorvasinghsomvanshi@gmail.com
- Phone: +91 9098900855
- Location: Indore, Madhya Pradesh
- GitHub: [@apoorva-18](https://github.com/apoorva-18)

## 🔗 Links

- [AI Legal Document Agent](https://github.com/apoorva-18/AI_Legal_Bot)
- [SerenitySpace](https://github.com/apoorva-18/SerenitySpace)
- [Portfolio Website](https://github.com/apoorva-18/portfolio-app)

---

Made with ❤️ using React, Vite, and Tailwind CSS 
