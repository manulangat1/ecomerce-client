import { Grid, Skeleton } from "@mui/material";
import React from "react";
const items = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
];
function SkeletonHolder() {
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid key={item.id} xs={12} sm={6} md={4} lg={3} xl={3}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={210}
            height={118}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default SkeletonHolder;
