const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => res.render('home'));
app.get('/about', (req, res) => res.render('about'));
app.get('/portfolio', (req, res) => res.render('portfolio'));
app.get('/services', (req, res) => res.render('services'));
app.get('/blog', (req, res) => res.render('blog'));
app.get('/testimonials', (req, res) => res.render('testimonials'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/pricing', (req, res) => res.render('pricing'));
app.get('/faq', (req, res) => res.render('faq'));
app.get('/privacy', (req, res) => res.render('privacy'));

// Start server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
