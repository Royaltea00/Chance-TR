const express = require('express');
const app = express();
const axios = require("axios");
const stocksData = require('./model/stocksModel'); 

app.use(express.json());

const PORT = 5000;

const options = {
    method: 'GET',
    url: 'https://latest-stock-price.p.rapidapi.com/price',
    params: {
      Indices: "NIFTY 50"
    },
    headers: {
      'X-RapidAPI-Key': 'd65d826806msh3161cefd33755f2p175ef4jsn24fd93a521b2',
      'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
    }
  };
  
  // Wrap the asynchronous code in an async function
  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      const fetchedData = response.data;
  
      // Save each data item in the database
      for (const dataItem of fetchedData) {
        const stockDataEntry = await stocksData.create(dataItem);   
        // successfull saving     
      }
    } catch (error) {
      console.error('Error fetching or saving data:', error);
    }
    console.log(`Data saved successfully for symbols`);
  };
  
  // Call the async function to start fetching data
  fetchData();

  // Fetch stored data
  app.get('/stocks', async (req, res) => {
    try {
      // Retrieve all data from the database
      res.json(allStocksData);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Failed to fetch data.' });
    }
  });

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
})