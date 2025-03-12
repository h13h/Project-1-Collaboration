module.exports = {
  content: [
    './views/**/*.ejs',  // This will include all EJS files in the views folder
    './public/**/*.{html,js}',  // Ensure that public HTML/JS files are also covered
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
