import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from '@material-ui/core'
import travelData from '../components/TravelData';
import Link from "next/link";

export default function travels() {
  return(
   <div>
       <h1 className='mt-5 ml-5 text-5xl'>Travels</h1>
       <Grid container spacing={1}> 
        {travelData.products.map((product) => (
                <Grid item md={4} key={product.name}>
                    <Card className='m-5 w-3/4 ' >
                    <Link href={`/product/${product.slug}`} passHref>
                        <CardActionArea >
                            <CardMedia className='h-96'
                             component="img"
                             image={product.image}
                             title={product.name}>
                            </CardMedia>
                            <CardContent>
                                <Typography > 
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