import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, CardActions } from "@mui/material";

const ListProduct = () => {
  const { readProduct, products, deleteProduct } = useProduct();

  const [pages, setPages] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPages((pages) => {
        const res = pages + 1;
        return res <= 3 ? res : pages;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [pages]);

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <Box id="list_product">
      <Box sx={{ padding: "60px 0" }} className="container">
        <Box className="list_product">
          <Box
            sx={{
              display: "flex",
            }}
            className="list_pages"
          >
            {pages === 3 ? (
              <Box
                sx={{
                  display: "flex",
                  gap: "50px",
                  flexWrap: "wrap",
                }}
              >
                {products.map((item) => (
                  <Card sx={{ width: 345, m: "0 auto", p: " 0 10px" }}>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{
                          m: "0",
                          p: "0",
                        }}
                      >
                        {item.title ? <> {item.title}</> : <>Note Name</>}
                      </Typography>
                    </CardContent>
                    <CardActionArea>
                      {item.img ? (
                        <>
                          <img
                            style={{
                              width: "345px",
                              height: "300px",
                            }}
                            src={item.img}
                            alt=""
                          />
                        </>
                      ) : (
                        <>
                          <img
                            style={{
                              width: "345px",
                              height: "300px",
                            }}
                            src="https://i.ytimg.com/vi/0Bdy3nJRTyg/maxresdefault.jpg"
                            alt=""
                          />
                        </>
                      )}
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.price ? <> {item.price}</> : <>Note price</>}
                        </Typography>
                        <Typography
                          sx={{
                            width: "300px",
                            height: "90px",
                          }}
                          variant="body2"
                          color="text.secondary"
                        >
                          {item.descr ? (
                            <> {item.descr}</>
                          ) : (
                            <>Note description</>
                          )}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions
                      sx={{
                        display: "flex",
                        alignItems: "end",
                        gap: "20px",
                      }}
                    >
                      <Button
                        onClick={() => deleteProduct(item.id)}
                        size="small"
                        color="primary"
                      >
                        delete
                      </Button>
                      <Button size="small" color="primary">
                        edit
                      </Button>
                    </CardActions>
                  </Card>
                ))}
              </Box>
            ) : (
              <div className="loader">Loading..</div>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ListProduct;
