import React from 'react';
import { Paper, Tabs, Tab} from '@material-ui/core';

export default ({muscles, handleChange, category}) => {
    
    let ind = muscles.findIndex(x => x === category)
    return (
        <Paper>
      <Tabs
        category = {category} 
        value={ind === -1 ? 0 : ind + 1}
        onChange={(e, x) => {
          let y = x === 0 ? "" : muscles[x-1]
          return handleChange(y, x)
          
        }}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map((item => <Tab label={item} />))}
      </Tabs>
    </Paper>
    )
}