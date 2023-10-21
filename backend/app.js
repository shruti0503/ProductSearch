import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors()); // Enable CORS to allow cross-origin requests

const API_KEY = process.env.API_KEY;

app.get('/search', async (req, res) => {
  try {
    const { product } = req.query;

    const apiUrl = `https://api.serpdog.io/shopping?api_key=${API_KEY}&q=${product}&gl=in`;

    const response = await axios.get(apiUrl);

    const price = response.data.shopping_results[1].price;
    const title = response.data.shopping_results[1].title;
    console.log(title);

    const formattedPrice = `The price is ${price.replace(/[^0-9.]/g, '')} rupees`;
    const newText = `The product is ${title} ${formattedPrice}`;
   

    res.json({
        text: newText,
        title: title,  // Include title in the response
        Price: formattedPrice,  // Include Price in the response
      });
    //console.log(res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred, please try again after some time.' });
  }
});

app.listen( process.env.PORT || 9000, () => {
  console.log('Server is running at port 9000');
});
