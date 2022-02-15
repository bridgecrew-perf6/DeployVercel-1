import React from 'react';
import { useRouter } from 'next/router';
import travelData from '../../components/TravelData';
import Image from 'next/image';
import useStyles from '../../utils/styles';
import Link from "next/link";
import { Grid, Typography, 
    List,
    ListItem,
    Card,
    Button, } from '@material-ui/core';

export default function TravelScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = travelData.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <div>
      <div className={classes.section}>
        <Link href="/travels" passHref>
          <Link>
            <Typography className='ml-3'>Back</Typography>
          </Link>
        </Link>
      </div>

      <h1 className='text-center text-4xl mb-3'>{product.name}</h1>
    
      <Grid container spacing={1}>
        <Grid item md={4} xs={12}>
          <Image className='m-5 '
            src={product.image}
            alt={product.name}
            width={740}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>

        <Grid item md={3}>
           <Card className='m-5 w-48  h-12'>
          <Grid container >
           <ListItem>
              <Typography className='ml-4 mb-4 '><h1 className='text-lg text-blue-700 font-bold'>Price:     $ {product.price}</h1></Typography>
            </ListItem>
          </Grid>
          </Card>

            <ListItem>
              <Typography className='ml-4 mb-4 '><h1 className='text-lg font-bold'>What we offer:</h1> {product.offer}</Typography>
            </ListItem>
            <ListItem>
              <Typography className='ml-4 w-80'><h1 className='text-lg font-bold'>Including:</h1> {product.including}</Typography>
            </ListItem>
      
        </Grid>
        <Grid item md={3} xs={12}>
            <ListItem>
              <Typography className='ml-4 mt-5 w-96'> <h1 className='text-lg font-bold'>About:</h1>{product.description}</Typography>
            </ListItem>
      </Grid>
        </Grid>


       
    </div>
  );
}