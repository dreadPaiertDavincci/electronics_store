import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "../Style/ComStyle/TABFAQ.css";
import { FAQData1, FAQData2, FAQData3 } from "../Com/FAQdata1";
import FAQCARD from "./FAQCARD";

export default function FAQTAB() {
  const [value, setValue] = React.useState("1");
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setExpanded(false); 
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderColor: "divider", display: "flex", justifyContent: "center" }}>
          <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
            <Tab label="Order and Shipping" value="1" />
            <Tab label="Returns and Exchanges" value="2" />
            <Tab label="General Inquiries:" value="3" />
          </TabList>
        </Box>

        <TabPanel value="1">
          <div className="TACOCO">
            <div className="TACO">
              {FAQData1.map((element, index) => (
                <FAQCARD
                  key={index}
                  FAQTitp={element.FAQTit}
                  FAQtextp={element.FAQtext}
                  expanded={expanded === `panel1-${index}`}
                  onChange={(isExp) =>
                    setExpanded(isExp ? `panel1-${index}` : false)
                  }
                />
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className="TACOCO">
            <div className="TACO">
              {FAQData2.map((element, index) => (
                <FAQCARD
                  key={index}
                  FAQTitp={element.FAQTit}
                  FAQtextp={element.FAQtext}
                  expanded={expanded === `panel2-${index}`}
                  onChange={(isExp) =>
                    setExpanded(isExp ? `panel2-${index}` : false)
                  }
                />
              ))}
            </div>
          </div>
        </TabPanel>

        <TabPanel value="3">
          <div className="TACOCO">
            <div className="TACO">
              {FAQData3.map((element, index) => (
                <FAQCARD
                  key={index}
                  FAQTitp={element.FAQTit}
                  FAQtextp={element.FAQtext}
                  expanded={expanded === `panel3-${index}`}
                  onChange={(isExp) =>
                    setExpanded(isExp ? `panel3-${index}` : false)
                  }
                />
              ))}
            </div>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
