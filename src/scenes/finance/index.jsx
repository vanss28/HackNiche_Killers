// import React from 'react'

// function index() {
//   return (
//     <iframe></iframe>
//   )
// }

// export default index
import React, { useEffect, useState } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Fin = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [news, setNews] = useState([]);

 
    useEffect(() => {
      const fetchData = async () => {
        const apiKey = '6875b6d9039a44c8af55c54dd57f9484'; 
        const country = 'in'; 
        const category = 'business'; 
        const pageSize = 15; 
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          const articlesWithImages = data.articles.filter(article => article.urlToImage);
          setNews(articlesWithImages); 
        } catch (error) {
          console.error('Error fetching news:', error);
        }
      };
    
      fetchData();
    }, []); 

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Financial Category" />
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        style={{ border: '10px', borderRadius: '20px' }}
      >
        <Box
          gridColumn="span 12"
          gridRow="span 8"
          backgroundColor={colors.primary[400]}
          p="30px"
          style={{ border: '10px', borderRadius: '20px' }}
        >
          <Typography variant="h6" mb={2} fontWeight="bold">
            Financial News
          </Typography>
          <ul style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            listStyleType: 'none'
          }}>
            {news.map((article, index) => (
              <li key={index} style={{ marginBottom: '20px' }}>
                <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'white', gap: '10px' }}>
                  {article.urlToImage && (
                    <img className="h-[20vh] w-[60vh]" src={article.urlToImage} alt={article.title} style={{ maxWidth: '100%', border: '10px', borderRadius: '20px' }} />
                  )}
                  <span>{article.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Fin;