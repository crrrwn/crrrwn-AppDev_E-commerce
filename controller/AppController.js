const main = {
    home: (req,res) => {
        res.render('home');
    },
    about: (req,res) => {
        res.render('about');
    },
    blog2: (req,res) => {
        res.render('blog2');
    },
    contact: (req,res) => {
        res.render('contact');
    },
    features: (req,res) => {
        res.render('features');
    },
    product: (req,res) => {
        res.render('product');
    },
    testimonial: (req,res) => {
        res.render('testimonial');
    },



}
module.exports = main;