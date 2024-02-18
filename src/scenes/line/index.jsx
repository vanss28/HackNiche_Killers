
import { Box } from "@mui/material";
import Header from "../../components/Header";
// import LineChart from "../../components/LineChart";

const subtitleText = `Welcome to FINITY – where we believe in "Finances Unified". Our mission is simple yet profound: to provide you with a seamless, all-in-one platform that not only manages but also elevates your investment journey. At FINITY, we understand that managing finances can be complex and overwhelming. That's why we've designed a platform that simplifies this process, giving you a comprehensive view of your investments, and offering in-depth insights across a diverse range of asset classes including Stocks, Mutual Funds, Bonds, and precious metals like Gold.

Our suite of services is tailored to meet the needs of every investor, from novices to seasoned professionals. We pride ourselves on our cutting-edge portfolio rebalancing services, our sentiment-based stock simulator that helps you gauge the market mood, and our personalized chatbot designed to quench your financial curiosities. Our platform is not just a tool but a companion on your financial journey.

Behind FINITY's innovative platform is a team of passionate, dedicated, and incredibly talented individuals:<br><br>

<b>Aryan Nayak:</b> A wizard in Python Development and Deep Learning, Aryan brings over a year of capital market experience to the table. His expertise and innovative approach to financial technologies drive the core development of our platform, ensuring that FINITY remains at the forefront of financial management solutions.<br><br>

<b>Ami Desai:</b> With a keen analytical mind and a background in Data Analytics and Machine Learning, Ami has honed her skills in the retail industry for 8 months. Her insights into data patterns and trends play a pivotal role in creating personalized investment strategies for our users, making finance more accessible and understandable.<br><br>

<b>Aman Mehra:</b> Not just our team's aesthetic charm, Aman's presence brings an unparalleled level of charisma and energy to FINITY. His devastatingly handsome looks are matched only by his commitment to making financial management both engaging and enjoyable for everyone.<br><br>

<b>Vanshika Shah:</b> The backbone of our platform, Vanshika's proficiency in backend development with Node and frontend magic with React, creates a seamless, intuitive, and dynamic user experience. Her innovative approach to development ensures that FINITY is not just functional but also a joy to use.<br><br>

Together, we are FINITY – a team united by a shared vision of demystifying finance and making it accessible to all. We're not just about numbers and algorithms; we're about empowering you to make informed financial decisions with confidence and clarity. Join us on this journey, and let's redefine the future of finance, together.<br><br>

Welcome to our community. Welcome to FINITY.`;

const Line = () => {
  return (
    <Box m="20px">
      <Header title="About Us" subtitle={<div style={{fontSize: '1.1em', color: 'white', lineHeight: '1.6'}} dangerouslySetInnerHTML={{ __html: subtitleText }} />} />
      <Box height="75vh" style={{color: 'white'}}>
        
      </Box>
    </Box>
  );
};

export default Line;
