require('dotenv');
const stripe = require("stripe")("sk_test_51PHn2xSGI0Klzz1SuKgMzYIl0NhFXMSuBSrqtFNbU1H9cpQh6SB2vRqHHPzxr361ktkFaQT37H6HcNHZvearZMRC00Qhso0EBE");
console.log('process.env.STRIPE_SECRET', process.env.STRIPE_SECRET);
const Router = require('express').Router();
Router.post("/create-checkout-session", async (req, res) => {
    try {
        console.log('req.body', req.body);
        const {
            body
        } = req.body;
        // console.log('products', body.products);
        const { products } = JSON.parse(body);
        // Over here, fix the map function to return only the price id and quantity of the selected product
        // Then send the lineItems array to stripe
        const lineItems = products.map(product => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: product.name,
                    images: [product.image]
                },
                unit_amount: Math.round(product.price * 100)
            },
            quantity: product.quantity
        }));
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            customer: "cus_Q8TIZXafqZ7eOn",
            // replace this array with lineItems when it is fixed
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: 'price_1PHnpWSGI0Klzz1SiJjxjYFP',    
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: "https://www.google.com",
            cancel_url: "https://www.youtube.com"
        });
        console.log('session', session);
        res.json({
            url: session.url
        });
    }
    catch (err) {
        console.log(err);
        res.json({ err });
    }
});
module.exports = Router;
