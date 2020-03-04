import React from "react";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
const AfSwitch = () => {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked(prev => !prev);
  };
  return (
    <div>
      <h1>AfSwitch</h1>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch size="small" checked={checked} onChange={toggleChecked} />
          }
          label="Small"
        />
        <FormControlLabel
          control={<Switch checked={checked} onChange={toggleChecked} />}
          label="Normal"
        />
      </FormGroup>
    </div>
  );
};

export default AfSwitch;
