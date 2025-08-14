import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type DataProbs = {
    FAQTitp: string, 
    FAQtextp: string,
    expanded: boolean,
    onChange: (isExpanded: boolean) => void
}

export default function FAQCARD({ FAQTitp, FAQtextp, expanded, onChange }: DataProbs) {
  return (
    <div>
      <Accordion sx={{ mb: 2 }} expanded={expanded} onChange={(e, isExp) => onChange(isExp)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
           {FAQTitp}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {FAQtextp}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
