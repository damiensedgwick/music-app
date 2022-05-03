import { Box } from "@chakra-ui/layout";
import { SideBar } from "components/sidebar";

export const Layout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box width="250px" position="absolute" top="0" left="0">
        <SideBar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box position="absolute" left="0" bottom="0">
        Player controls
      </Box>
    </Box>
  );
};
