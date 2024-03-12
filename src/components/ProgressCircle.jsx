// import { Box, useTheme } from "@mui/material";
// import { tokens } from "../theme";

// const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const angle = progress * 360;
//   return (
//     <Box
//       sx={{
//         background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
//             conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
//             ${colors.greenAccent[500]}`,
//         borderRadius: "50%",
//         width: `${size}px`,
//         height: `${size}px`,
//       }}
//     />
//   );
// };

// export default ProgressCircle;


import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  // Angles based on investment percentages
  const equityEnd = 180; // 50%
  const mutualFundsEnd = equityEnd + 36; // 10% after equity
  const goldEnd = mutualFundsEnd + 18; // 5% after mutual funds
  const bondsEnd = goldEnd + 126; // 35% after gold, completes the circle

  return (
    <Box
      sx={{
        background: `conic-gradient(
            ${colors.equity || theme.palette.primary.main} 0deg ${equityEnd}deg, 
            ${colors.mutualFunds || theme.palette.secondary.main} ${equityEnd}deg ${mutualFundsEnd}deg, 
            ${colors.gold || theme.palette.warning.main} ${mutualFundsEnd}deg ${goldEnd}deg, 
            ${colors.bonds || theme.palette.info.main} ${goldEnd}deg ${bondsEnd}deg
          )`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
