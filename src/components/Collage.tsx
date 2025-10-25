import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import cama_doble_2 from "../img/cama-doble-2.jpg";
import cama_sencilla2 from "../img/cama-sencilla-2.jpg";
import cama_separada from "../img/cama-separa.jpg";
import cama_separada_doble from "../img/cama-separada-doble.jpg";
import cama_suit from "../img/cama-suit.jpg";
import cama_sencilla from "../img/cama-sencilla.jpg";
import { Box, Typography } from '@mui/material';


export default function Collage() {

const itemData = [
      {
    img: cama_suit,
    title: 'Suit',
  },
  
  {
    img: cama_doble_2,
    title: 'Habitacion Estandar',
  },
  {
    img: cama_separada_doble,
    title: 'Habitacion Estandar',
  },
  {
    img: cama_separada,
    title: 'Habitacion Estandar',
  },
  {
    img: cama_sencilla,
    title: 'Habitacion Individual',
  },
  {
    img: cama_sencilla2,
    title: 'Habitacion Individual 2',
  },

];







  return (
    <Box sx={{bottom:"125px",position:"relative"}}>

    <Typography variant='h3' sx={{color:"white",marginBottom:"75px",textAlign:"center"}}>Habitaciones Populares</Typography>
    <ImageList sx={{ width: 800, height: 800, margin:"0px auto",overflow:"hidden"}} variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} >
          <Box 
            component="img"
            sx={{borderRadius:"25px", 
                width: "100%",
              height: "100%",
              objectFit: "cover"}}
            srcSet={`${item.img}`}
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
          <Typography sx={{position:"relative",bottom:"45px",color:"black",backgroundColor:"rgba(255,255,255,.8)",
            width:"fit-content", px: 2, borderRadius:"25px",marginLeft:"15px"
          }}>{item.title}</Typography>
        </ImageListItem>
      ))}
    </ImageList>
    
    </Box>
 
  );
}

