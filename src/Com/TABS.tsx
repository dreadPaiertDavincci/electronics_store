import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { HomeProduct, HomeProduct2, HomeProduct3 } from "./ProductData";
import "../Style/TABS.css";
import ProductCard from "./ProductCard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "900px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Game" {...a11yProps(0)} />
          <Tab label="Airpod" {...a11yProps(1)} />
          <Tab label="Keyboard" {...a11yProps(2)} />
        </Tabs>
      </Box>

      {/* Game Tab */}
      <CustomTabPanel value={value} index={0}>
        <div className="VAC">
          <div className="cardCon">
            {HomeProduct.map((element) => (
              <ProductCard
                key={element.id}
                id={element.id}
                image={element.cardImage}
                title={element.cardH3Title}
                price={element.Price}
              />
            ))}
          </div>
        </div>
      </CustomTabPanel>

      {/* Airpod Tab */}
      <CustomTabPanel value={value} index={1}>
        <div className="VAC">
          <div className="cardCon">
            {HomeProduct2.map((element) => (
              <ProductCard
                key={element.id}
                id={element.id}
                image={element.cardImage}
                title={element.cardH3Title}
                price={element.Price}
              />
            ))}
          </div>
        </div>
      </CustomTabPanel>

      {/* Keyboard Tab */}
      <CustomTabPanel value={value} index={2}>
        <div className="VAC">
          <div className="cardCon">
            {HomeProduct3.map((element) => (
              <ProductCard
                key={element.id}
                id={element.id}
                image={element.cardImage}
                title={element.cardH3Title}
                price={element.Price}
              />
            ))}
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
