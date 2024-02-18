import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { mockPieData as data } from "../data/mockData";

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className=" h-[100vh]">
    <iframe  src="http://localhost:8501"></iframe>
    </div>
  )
}
export default PieChart;
