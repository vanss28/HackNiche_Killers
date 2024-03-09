// import { Box } from "@mui/material";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// import { mockDataContacts } from "../../data/mockData";
// import Header from "../../components/Header";
// import { useTheme } from "@mui/material";

// const Contacts = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   const columns = [
//     { field: "id", headerName: "Index", flex: 0.5 },
   
//     {
//       field: "name",
//       headerName: "Ticker",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "age",
//       headerName: "1M Returns",
//       type: "number",
//       headerAlign: "left",
//       align: "left",
//     },
//     {
//       field: "phone",
//       headerName: "3M Returns",
//       flex: 1,
//     },
//     {
//       field: "email",
//       headerName: "1Y Return",
//       flex: 1,
//     },
//     {
//       field: "address",
//       headerName: "1M Volatility",
//       flex: 1,
//     },
//     {
//       field: "city",
//       headerName: "Liquidity",
//       flex: 1,
//     },
    
//   ];

//   return (
//     <Box m="20px">
//       <Header
//         title="Portfolio Details : Stocks"
//         subtitle="Filter your equity"
//       />
//       <Box
//         m="40px 0 0 0"
//         height="75vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//           "& .name-column--cell": {
//             color: colors.greenAccent[300],
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: colors.blueAccent[700],
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: colors.primary[400],
//           },
//           "& .MuiDataGrid-footerContainer": {
//             borderTop: "none",
//             backgroundColor: colors.blueAccent[700],
//           },
//           "& .MuiCheckbox-root": {
//             color: `${colors.greenAccent[200]} !important`,
//           },
//           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//             color: `${colors.grey[100]} !important`,
//           },
//         }}
//       >
//         <DataGrid
//           rows={mockDataContacts}
//           columns={columns}
//           components={{ Toolbar: GridToolbar }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Contacts;

import React, { useEffect, useState } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Contact = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Using a higher pageSize in the hope of fetching at least 15 articles with images.
      const pageSize = 50; // Attempt to fetch more articles to filter for images.
      const apiKey = '6875b6d9039a44c8af55c54dd57f9484'; // Replace with your actual API key.
      const country = 'in';
      const category = 'sports';
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        // Filter for articles with images and limit to the first 15.
        const articlesWithImages = data.articles.filter(article => article.urlToImage).slice(0, 15);
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
        <Header title="Sports Category" />
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
           Sports News
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

export default Contact;
