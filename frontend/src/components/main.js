import React, { useState } from 'react';
import axios from 'axios';
import TextToSpeech from './TextToSpeech';
import { Box, Typography, TextField, Button, Card, CardContent, CardMedia, styled } from '@mui/material';

const Cont = styled(Box)`
  width: 400px;
  margin: auto;
  background-image: url('https://images.rawpixel.com/image_600/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtMjY3LW51bm55LTA0Yi5qcGc.jpg');
  box-shadow: 1px -2px 20px 19px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  & > div {
    margin-top: 10px;
    padding-top: 10%;
  }
`;
const backendURL = 'http://localhost:9000'; // Replace with your backend URL

function Main() {
  const [product, setProduct] = useState('');
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState('');
  const [title, setTitle]= useState('');
  const [price, setPrice]=useState('');

  const handleProductSearch = async () => {
    setIsLoading(true);
    try {
        const response = await axios.get(`${backendURL}/search?product=${product}`);
      setText(response.data.text);
      setTitle(response.data.title);
      setPrice(response.data.Price);
      console.log(title)
      console.log(response);
      setError('');
    } catch (err) {
      console.error(err);
      setError('An error occurred, please try again after some time.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Cont>
      <div>
        <Typography variant="h3">Product Search</Typography>
        <Typography variant="subtitle1"><b>Write the product name</b></Typography>
      </div>

      <div>
        <TextField
          type="text"
          placeholder="enter..."
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <div style={{ paddingTop: '10px' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleProductSearch}
          >
            Search
          </Button>
        </div>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Box style={{ color: 'red' }}>{isError}</Box>
          <Box style={{ paddingTop: '10px' }}>
            <CardContent>
              <Typography variant="h5" style={{ paddingTop: '0px' }}>
                 {title}
              </Typography>
              <Typography variant='body1'>{price}</Typography>
            </CardContent>
            <div>
              <TextToSpeech Text={text} />
            </div>
          </Box>
        </>
      )}
    </Cont>
  );
}

export default Main;
