import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Siderbar } from "../components/Siderbar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

//configuração do grafico
const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-01-05T00:00:00.000Z",
      "2022-01-06T00:00:00.000Z",
      "2022-01-07T00:00:00.000Z",
      "2022-01-08T00:00:00.000Z",
      "2022-01-09T00:00:00.000Z",
      "2022-01-10T00:00:00.000Z",
      "2022-01-11T00:00:00.000Z",
      "2022-01-12T00:00:00.000Z",
    ],
  },
};
const series = [{ name: "series 1", data: [31, 120, 18, 200, 18, 70, 6, 50] }];

export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Siderbar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box padding="8" background="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" marginBottom="4">
              Inscrito da semana
            </Text>
            <Chart type="area" height={160} series={series} options={options} />
          </Box>

          <Box padding="8" background="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" marginBottom="4">
              Taxa de abertura
            </Text>
            <Chart type="area" height={160} series={series} options={options} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
