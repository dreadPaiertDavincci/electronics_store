import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { HomeProduct, HomeProduct2, HomeProduct3 } from "./ProductData";
import "../Style/TABS.css";
import ProductCard from "./ProductCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  React.useEffect(() => {
    const animateCards = () => {
      gsap.fromTo(
        ".ProductCardAnim",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cardCon",
            start: "top 85%",
          },
        }
      );
    };

    animateCards();

    return () => {
      gsap.killTweensOf(".ProductCardAnim");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [value]);

  return (
    <Box sx={{ width: "100%", height: "900px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Game" {...a11yProps(0)} />
          <Tab label="Airpod" {...a11yProps(1)} />
          <Tab label="Keyboard" {...a11yProps(2)} />
        </Tabs>
      </Box>

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
                className="ProductCardAnim"
              />
            ))}
          </div>
        </div>
      </CustomTabPanel>

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
                className="ProductCardAnim"
              />
            ))}
          </div>
        </div>
      </CustomTabPanel>

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
                className="ProductCardAnim"
              />
            ))}
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
