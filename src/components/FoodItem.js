import React from 'react'
import { Grid,Card ,CardMedia, CardContent,Typography,CardActions,Button } from '@mui/material'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';

const FoodItem = () => {
  return (
    <div>
        <Grid container spacing={2}>
             <Grid item xs={8}>
    
    <br/>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Kuzhimanthi
                  </Typography>
        <Typography variant="body2" color="text.secondary">
        The name kuzhimanthi is a portmanteau of mandi and kuzhy, the Malayalam word for the deep pit in which this dish has to be cooked. Rice in a biryani is often dum, that is, tightly covered and cooked with steam, and cooked with oil.
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    
             </Grid>

             <Grid item xs={8}>
    
    <br/>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.onmanorama.com/content/dam/mm/en/travel/eatouts/images/2019/10/14/alfam.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Alfaam
                  </Typography>
        <Typography variant="body2" color="text.secondary">
        Alfahm is an Arabic grilled chicken. This chicken recipe is very popular in the middle east as it is marinated with Arabian spice and barbequed in a charcoal grill or in the oven.
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    
             </Grid>
        </Grid>
      
    </div>
  )
}

export default FoodItem
