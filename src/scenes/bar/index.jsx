import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Q1.How does breaking news affect stock prices?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Breaking news can significantly impact stock prices. Positive news, such as strong earnings reports, product launches, or beneficial regulatory changes, can lead to price increases. Conversely, negative news like financial losses, scandals, or adverse regulatory developments can cause prices to drop. The immediate reaction of the market to news reflects investors' collective assessment of its impact on a company's future cash flows and profitability.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
        Q2.What is a network graph, and how can it visualize the relationship between news and stock prices?

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A network graph is a visual representation of relationships between different entities, where entities are represented by nodes, and the relationships between them are depicted as edges. In the context of news and stock prices, a network graph can illustrate how various news events are connected to specific stocks or sectors. Nodes could represent companies or sectors, while edges might indicate the impact of news events, with attributes like color or thickness representing the nature (positive or negative) and magnitude of the impact, respectively.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Q3.What is the Promptness Score in Mutual Fund Management?

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Predictive analytics can help forecast stock market reactions to certain types of future news events to some extent, especially when based on historical data patterns. By analyzing past stock price reactions to similar news types, machine learning models can predict likely future outcomes. However, the accuracy of these predictions can be limited by the unpredictable nature of news events and external market factors, making it challenging to forecast reactions with high certainty.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Q4.How do news sentiment analysis tools aid investors?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          News sentiment analysis tools scan vast amounts of news data and social media content to gauge the public sentiment toward specific stocks or the market overall. By employing natural language processing (NLP), these tools can identify whether the sentiment is positive, negative, or neutral. Investors use this information to make informed decisions, as positive sentiment might indicate a good time to buy, while widespread negativity could suggest it's better to sell or hold off on purchasing.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
         Q5.What role do automated trading systems play in the relationship between news and stock markets?

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Automated trading systems, or algorithmic trading systems, play a significant role in how news affects stock markets. These systems can process news and execute trades at speeds far beyond human capabilities, often within milliseconds of a news release. As a result, the market's reaction to news can be swift and pronounced, with automated systems amplifying the impact of news by quickly adjusting their trading strategies based on the content and sentiment of the news, potentially leading to significant market movements.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;

