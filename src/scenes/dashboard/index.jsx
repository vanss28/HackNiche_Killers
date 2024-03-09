import React, { useEffect, useState } from 'react';

// MUI imports
import { Box, Typography, useTheme } from "@mui/material";

// Theme imports
import { tokens } from "../../theme"; // Assuming this is the correct path to your tokens

// Component imports
import Header from "../../components/Header"; // Uncomment if Header is used
// Other commented imports can go here if they are needed later


const Dashboard = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [newsBoxOne, setNewsBoxOne] = useState([]);
  const [newsBoxTwo, setNewsBoxTwo] = useState([]);
  const [newsBoxThree, setNewsBoxThree] = useState([]);

  
    // Fetch data for the first box
    useEffect(() => {
      const fetchData = async (setState) => {
        const apiKey = 'c10ab2406e674cac8e34a056ce6ccf8a'
        const url = `https://newsapi.org/v2/everything?q=stocks&apiKey=${apiKey}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          setState(data.articles.slice(0, 3)); // Get the top 3 articles
        } catch (error) {
          console.error('Error fetching news for box one:', error);
        }
      };
      fetchData(setNewsBoxOne);
    }, []);
  
    // Fetch data for the second box
    useEffect(() => {
      const fetchData = async (apiKey, setState) => {
        const url = `https://newsapi.org/v2/everything?q=entertainment&apiKey=${apiKey}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          setState(data.articles.slice(0, 3)); // Get the top 3 articles
        } catch (error) {
          console.error('Error fetching news for box two:', error);
        }
      };
      fetchData('c10ab2406e674cac8e34a056ce6ccf8a', setNewsBoxTwo);
    }, []);
  
    // Fetch data for the third box
    useEffect(() => {
      const fetchData = async (apiKey, setState) => {
        const url = `https://newsapi.org/v2/everything?q=business&apiKey=${apiKey}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          setState(data.articles.slice(0, 3)); // Get the top 3 articles
        } catch (error) {
          console.error('Error fetching news for box three:', error);
        }
      };
      fetchData('c10ab2406e674cac8e34a056ce6ccf8a', setNewsBoxThree);
    }, []);

  return (
    <>
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="HOME" />

       </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        style={{ border:'10px', borderRadius:'20px'}}
      >
       
        
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          style={{ border:'10px', borderRadius:'20px'}}
        >   

        
          
          <div>
                <div>
            <h2 className=" my-2 text-xl font-bold">Stock Market News</h2>
            <ul style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', 
  gap: '20px', 
  listStyleType: 'none'
}}>
  {newsBoxOne.map((article, index) => (
    <li key={index} style={{ marginBottom: '20px' }}>
      <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'white', gap: '10px' }}>
        {article.urlToImage && (
          <img className=" h-[20vh] w-[60vh]" src={article.urlToImage} alt={article.title} style={{ maxWidth: '100%', border:'10px', borderRadius:'20px'}} />
        )}
        <span>{article.title}</span>
      </a>
    </li>
  ))}
</ul>


          </div>
          </div>
          
         
         
        </Box>
         
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          style={{ border:'10px', borderRadius:'20px'}}
        >   

        
          
          <div>
                <div>
            <h2 className=" my-2 text-xl font-bold">Entertainment News</h2>
            <ul style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', 
  gap: '20px', 
  listStyleType: 'none'
}}>
  {newsBoxTwo.map((article, index) => (
    <li key={index} style={{ marginBottom: '20px' }}>
      <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'white', gap: '10px' }}>
        {article.urlToImage && (
          <img className=" h-[20vh] w-[60vh]" src={article.urlToImage} alt={article.title} style={{ maxWidth: '100%', border:'10px', borderRadius:'20px'}} />
        )}
        <span>{article.title}</span>
      </a>
    </li>
  ))}
</ul>


          </div>
          </div>
          
         
         
        </Box>

        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          style={{ border:'10px', borderRadius:'20px'}}
        >   

        
          
          <div>
                <div>
            <h2 className=" my-2 text-xl font-bold">Business News</h2>
            <ul style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', 
  gap: '20px', 
  listStyleType: 'none'
}}>
  {newsBoxThree.map((article, index) => (
    <li key={index} style={{ marginBottom: '20px' }}>
      <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'white', gap: '10px' }}>
        {article.urlToImage && (
          <img className=" h-[20vh] w-[60vh]" src={article.urlToImage} alt={article.title} style={{ maxWidth: '100%', border:'10px', borderRadius:'20px'}} />
        )}
        <span>{article.title}</span>
      </a>
    </li>
  ))}
</ul>


          </div>
          </div>
          
         
         
        </Box>
        
      </Box>
      
      
    </Box>


    
        

    </>
  );
};

export default Dashboard;
