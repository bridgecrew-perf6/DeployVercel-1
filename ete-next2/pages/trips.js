import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from '@material-ui/core'
import tripData from '../components/TripData';
import Link from "next/link";

export default function travels() {
  return(
   <div>
      <h1 className='mt-5 ml-5 text-5xl'>Trips</h1>
       <Grid container spacing={1}> 
        {tripData.productsT.map((product) => (
                <Grid item md={4} key={product.name}>
                    <Card className='m-5 w-3/4' >
                    <Link href={`/productT/${product.slug}`} passHref>
                        <CardActionArea>
                            <CardMedia className='h-96'
                             component="img"
                             image={product.image}
                             title={product.name}>
                            </CardMedia>
                            <CardContent>
                                <Typography> 
                                <h1 className='font-bold text-xl'>{product.name}</h1> 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
        ))}
       </Grid>
   </div>
  )
}