import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ReusableCard({
  name,
  photo,
  description,
  slug,
  id,
  onClick,
  addToCart,
}) {
  console.log(photo);
  const [numberOfItems, setNumberOfItems] = useState(1);
  const onChange = (e) => {
    setNumberOfItems(e.target.value);
  };
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
        <input type="number" defaultValue={1} onChange={onChange} />
        <button
          onClick={() => addToCart(id, numberOfItems)}
          className="primary-btn"
        >
          Add to cart
        </button>
      </CardActions>
    </Card>
  );
}

export default ReusableCard;
