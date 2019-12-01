import React, { useState } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText, } from '@material-ui/core';


const styles = {
    paper: {

        padding : "15px",
        margin : "5px",
        marginBottom : "10px",
        height : "500px",
        overflow : "auto"

    }
}

export default ({ exercises, selectedCategory,selectedSubCategory , handleSelect}) => {
    console.log(exercises);
    
    return (
        <div>
        <Grid container>
            <Grid item xs>
                <Paper style = {{...styles.paper, textTransform : "capitalize"}}>
                    {exercises.map(([group, items]) => 
                    !selectedCategory || group === selectedCategory ?
                    <div>
                    <Typography variant="subtitle1">{group}</Typography>
                    <List component="nav" aria-label="secondary mailbox folders">
                        
                            {items.map(x => {
                                return (
                                    <ListItem onClick = {() => handleSelect(x)} button>
                                <ListItemText primary={x.title} />
                                </ListItem>
                                )
                            })}
                        
                        </List>
                    </div>

                    : null )
                   }
                </Paper>
            </Grid>
        <Grid item xs>
                <Paper style = {styles.paper}>
                    <Typography 
                    variant = "h4"  style = {{marginBottom : "10px"}} >{!selectedCategory && !selectedSubCategory ? "Welcome" : selectedSubCategory.muscles.toUpperCase()}
                   
                    </Typography>
                    <Typography 
                    variant = "h6"  style = {{marginBottom : "10px"}} >{!selectedCategory && !selectedSubCategory ? "Please select any exercises from the list" : selectedSubCategory.title}
                   
                    </Typography>
                    <Typography variant = "body1" >{!selectedCategory && !selectedSubCategory ? "Please select any exercises from the list" : selectedSubCategory.description}
                    </Typography>
                </Paper>
        </Grid>

        </Grid>
        </div>
    )
}