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
          What is Portfolio Optimization?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Portfolio optimization is a financial management method aiming to select the best asset distribution within a portfolio to maximize returns for a given risk level or minimize risk for a certain return level. This approach uses Modern Portfolio Theory to balance risk and return according to an investor's risk tolerance and investment objectives.


          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          ⁠⁠What is the Concentration Score in Mutual Funds?

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The Concentration Score measures the overlap among investments within a mutual fund portfolio or between multiple portfolios. A high score indicates significant overlap of assets across funds, potentially increasing risk by reducing diversification benefits.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What is the Promptness Score in Mutual Fund Management?

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The Promptness Score evaluates the frequency of portfolio allocation changes by a mutual fund manager. A higher score signifies active management with frequent adjustments, while a lower score indicates a more passive approach.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How is Portfolio Rebalancing Conducted?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Portfolio rebalancing involves realigning the asset weights in a portfolio to maintain the desired level of asset allocation and risk. This process considers factors like age, risk tolerance, percentage asset allocation, market cap distribution, and sector distribution. Strategies include adjusting allocations based on age-related guidelines, maintaining target asset class percentages, and ensuring proper diversification across market caps and sectors.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          ⁠What Technical Recommendations Do We Provide?

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          For Bond Data: We offer buy or sell recommendations at various time frames, based on analysis of market trends and macroeconomic indicators.
For Stocks: We provide a hedging strategy to mitigate downside risk and send stop loss alerts via email to enable timely selling decisions and minimize potential losses.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;

