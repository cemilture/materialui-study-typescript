import { Box, Skeleton } from "@mui/material";
import { useState, useEffect } from "react";

export const SkeletonLesson = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Box>
      {loading ? (
        <Skeleton width={250} height={200} animation="pulse" />
      ) : (
        <img
          src="https://source.unsplash.com/random"
          alt="skeleton"
          width={250}
          height={200}
        />
      )}
    </Box>
  );
};
