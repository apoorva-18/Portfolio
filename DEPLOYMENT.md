# Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## 🚀 Frontend Deployment

### Netlify

1. **Build the project**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `frontend/dist` folder
   - Or connect your GitHub repository

3. **Environment Variables** (if needed)
   - Go to Site settings > Environment variables
   - Add `VITE_API_URL` with your backend URL

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd frontend
   vercel
   ```

3. **Environment Variables**
   - Add `VITE_API_URL` in Vercel dashboard

## 🔧 Backend Deployment

### Railway

1. **Connect Repository**
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository
   - Select the backend folder

2. **Environment Variables**
   ```
   PORT=5000
   NODE_ENV=production
   ```

3. **Deploy**
   - Railway will automatically deploy on push

### Render

1. **Create New Web Service**
   - Go to [render.com](https://render.com)
   - Connect your GitHub repository
   - Select the backend folder

2. **Configuration**
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node

3. **Environment Variables**
   ```
   PORT=5000
   NODE_ENV=production
   ```

### Heroku

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Create Heroku App**
   ```bash
   cd backend
   heroku create your-app-name
   ```

3. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

## 🔄 Full-Stack Deployment

### Using Railway for Both

1. **Frontend Service**
   - Connect repository
   - Set root directory to `frontend`
   - Build command: `npm run build`
   - Output directory: `dist`

2. **Backend Service**
   - Connect same repository
   - Set root directory to `backend`
   - Build command: `npm install`
   - Start command: `npm start`

3. **Environment Variables**
   - Frontend: `VITE_API_URL=https://your-backend-url.railway.app`
   - Backend: `NODE_ENV=production`

## 🌐 Custom Domain

### Netlify
1. Go to Site settings > Domain management
2. Add custom domain
3. Update DNS records

### Vercel
1. Go to Project settings > Domains
2. Add custom domain
3. Update DNS records

## 📝 Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify contact form works
- [ ] Check API endpoints
- [ ] Test resume download
- [ ] Verify dark/light mode
- [ ] Test responsive design
- [ ] Update social media links
- [ ] Add Google Analytics (optional)

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` files
- Use platform-specific environment variable systems
- Rotate API keys regularly

### CORS Configuration
- Update CORS settings for production domains
- Remove development-only origins

### HTTPS
- Ensure all deployments use HTTPS
- Update API URLs to use HTTPS

## 📊 Monitoring

### Health Checks
- Set up health check endpoints
- Monitor uptime with services like UptimeRobot
- Set up error tracking (Sentry, LogRocket)

### Analytics
- Google Analytics
- Hotjar for user behavior
- Performance monitoring

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Update backend CORS configuration
   - Check frontend API URLs

2. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed

3. **Environment Variables**
   - Ensure all required variables are set
   - Check variable naming (VITE_ prefix for frontend)

4. **API Connection Issues**
   - Verify backend URL is correct
   - Check if backend is running
   - Test API endpoints directly

## 📞 Support

If you encounter issues:
1. Check the platform's documentation
2. Review error logs
3. Test locally first
4. Check environment variables

---

Happy deploying! 🎉 