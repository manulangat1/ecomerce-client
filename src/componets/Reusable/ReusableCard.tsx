import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ReusableCard({ name, photo, description, slug, id, onClick }) {
  console.log(photo);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={photo}
      />
      <CardContent>
        <Link to={`/products/${id}`}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Link>
      </CardContent>
      <CardActions>
        <button className="primary-btn">See More</button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ReusableCard;
