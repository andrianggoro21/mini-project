import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import NavDashboard from "../../components/navDashboard";

const Dashboard = () => {
  return (
    <Stack
      position="relative"
      w="full"
      h="auto"
      p="2em"
      background="#121212"
      color="white"
      gap="1em"
    >
      <Heading as="h4" size="md">
        Manage Events
      </Heading>
      <NavDashboard/>     
    </Stack>
  );
};

export default Dashboard;
