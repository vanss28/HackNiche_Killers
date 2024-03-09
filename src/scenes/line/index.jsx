
import { Box } from "@mui/material";
import Header from "../../components/Header";


const subtitleText = `Welcome to NEXUS News – in this we created a system to manage and analyze news data in real time. The system will extract events from news data and use NLP and machine learning to identify key entities and sentiments, constructing a dynamic network graph that illustrates the connections between different events. This interactive graph will allow users to explore relationships, with a focus on scalability and performance to handle large volumes of data.:<br><br>

<b>Aman Mehra:</b> Not just our team's aesthetic charm, Aman's presence brings an unparalleled level of charisma and energy to Nexus. His devastatingly handsome looks are matched only by his commitment to making financial management both engaging and enjoyable for everyone.<br><br>
<b>Vanshika Shah:</b> The backbone of our platform, Vanshika's proficiency in backend development with Node and frontend magic with React, creates a seamless, intuitive, and dynamic user experience. Her innovative approach to development ensures that FINITY is not just functional but also a joy to use.<br><br>
<b>Purvesh Maniar:</b> His wittiness and knowledge about stocks and finance is unparallel.<br><br>
<b>Unnati Hassanandani:</b> Not just our teams designer but also someone who is amazing with frontend.<br><br>
Together, we are Tech Nexus – a team united by a shared vision of demystifying finance and making it accessible to all. We're not just about numbers and algorithms; we're about empowering you to make informed financial decisions with confidence and clarity. Join us on this journey, and let's redefine the future of finance, together.<br><br>

Welcome to our community. `;

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
