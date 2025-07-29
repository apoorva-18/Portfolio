const express = require('express');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: false
}));

// Add CORS headers manually for preflight requests
app.options('*', cors());

app.use(express.json());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'AI Legal Document Agent',
    description: 'An AI-powered agent that classifies legal document clauses and answers questions about uploaded documents. Supports PDF, DOCX, TXT, JSON, and image files with OCR and NLP capabilities.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=300&fit=crop',
    technologies: ['Python', 'FastAPI', 'React', 'NLP', 'OCR', 'LLM'],
    githubUrl: 'https://github.com/apoorva-18/AI_Legal_Bot',
    liveUrl: 'https://github.com/apoorva-18/AI_Legal_Bot',
    featured: true,
  },
  {
    id: 2,
    title: 'SerenitySpace - Mental Health Platform',
    description: 'A comprehensive mental health platform featuring AI chatbot support, mood tracking, group sessions, challenges, and community forums. Built with Python Flask backend and modern web technologies.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
    technologies: ['Python', 'Flask', 'HTML/CSS', 'JavaScript', 'MongoDB', 'AI Chatbot'],
    githubUrl: 'https://github.com/apoorva-18/SerenitySpace',
    liveUrl: 'https://github.com/apoorva-18/SerenitySpace',
    featured: true,
  },
  {
    id: 3,
    title: 'Data Analysis Dashboard',
    description: 'A comprehensive data visualization dashboard that analyzes and presents insights from large datasets using interactive charts and graphs.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Plotly', 'Streamlit'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with modern web technologies and featuring smooth animations and dark mode.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'A comprehensive dashboard for managing multiple social media accounts with analytics and scheduling features.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=300&fit=crop',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Real-time Chat Application',
    description: 'A real-time chat application with features like private messaging, group chats, and file sharing.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop',
    technologies: ['React', 'Socket.io', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
  },
];

// Store contact submissions (in a real app, this would be a database)
let contactSubmissions = [];

// Routes
app.get('/api/projects', (req, res) => {
  // Set CORS headers explicitly
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  
  try {
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});
app.get('/', (req, res) => {
  res.send('Server is working');
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Create submission object
    const submission = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    };

    // Add to submissions array (in a real app, save to database)
    contactSubmissions.push(submission);

    // Log the submission
    console.log('New contact submission:', submission);

    // Send email notification to your email
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'apoorvasinghsomvanshi@gmail.com', // Your email address
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Sent from your portfolio website on ${new Date().toLocaleString()}</small></p>
      `
    };
    
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email notification sent successfully');
    } catch (emailError) {
      console.error('Error sending email notification:', emailError);
      // Don't fail the request if email fails, just log it
    }

    res.status(201).json({ 
      message: 'Message sent successfully!',
      submissionId: submission.id 
    });
  } catch (error) {
    console.error('Error processing contact submission:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Get all contact submissions (for admin purposes)
app.get('/api/contact', (req, res) => {
  try {
    res.json(contactSubmissions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Serve resume file
app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public/Apoorva -Resume.pdf'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
}); 