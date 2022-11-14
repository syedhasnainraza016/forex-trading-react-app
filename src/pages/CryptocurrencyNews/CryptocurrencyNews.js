import React, { useState, useEffect } from "react";
import "./CryptocurrencyNews.css";
import Article from "../../components/Article/Article";
import ArticleFull from "../../components/ArticleFull/ArticleFull";
import { NewsAPI } from "../../api";
import { Box, Typography, Grid, Card, Button } from "@mui/material";

export default function CryptocurrencyNews() {
  const sampleData = [
    {
      title: "Dogecoin: pure genius marketing?",
      author: "Dave Smith",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    },
    {
      title: "Is Bitcoin going to hit $100k in 2021?",
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Dogecoin: pure genius marketing?",
      author: "Dave Smith",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Is Bitcoin going to hit $100k in 2021?",
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Dogecoin: pure genius marketing?",
      author: "Dave Smith",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    },
    {
      title: "Is Bitcoin going to hit $100k in 2021?",
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Dogecoin: pure genius marketing?",
      author: "Dave Smith",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Is Bitcoin going to hit $100k in 2021?",
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  const [newsData, setNewsData] = useState(sampleData);
  const [data, setData] = useState([]);
  useEffect(() => {
    NewsAPI.allNews().then((res) => setData(res.data.data));
  }, []);
  fetch(
    "https://newsapi.org/v2/everything?q=cryptocurrency&sortBy=popularity&apiKey=eac972808180447da763b302e9a2a9a8"
  )
    .then((res) => res.json())
    .then((data) => {
      setNewsData(data.articles);
      console.log(data);
    });

  /* Pagination */
  const [visible, setVisible] = useState(4);
  const loadMoreArticles = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  /* State for article */
  const [selectedArticle, setSelectedArticle] = useState(null);
  return (
    <div className="CryptocurrencyNews">
      <Box>
        <Grid container px={4} pt={5} sx={{ backgroundColor: "#12225C" }}>
          <Grid item ml={18} mt={4}>
            <Typography variant="h3" color="white" py={5}>
              Latest News From Admin
            </Typography>
          </Grid>
          {data.length > 0 &&
            data?.map((item, index) => {
              return index + (1 % 2) == 0 ? (
                <Grid item xs={12} md={4} mt={5}>
                  <Card
                    sx={{
                      borderRadius: "20px",
                      backgroundColor: "#fafafa",
                      width: "400px",
                      height: "600px",
                    }}
                    position="relative"
                  >
                    <Box
                      component="img"
                      src={`http://localhost:4000/uploads/images/${item?.image}`}
                      sx={{
                        height: "300px",
                        width: "400px",
                        // mx: 1,
                        cursor: "pointer",
                        position: "absolute",
                        top: 0,
                      }}
                    ></Box>
                    <Grid item mt={4} mr={3}>
                      <Typography
                        variant="h4"
                        color="black"
                        sx={{
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        {item?.title}
                      </Typography>
                    </Grid>
                    <Grid item mt={4} px={3}>
                      <Typography
                        variant="h7"
                        color="black"
                        textAlign="center"
                        sx={{ mt: 5 }}
                      >
                        {item?.description}
                      </Typography>
                    </Grid>
                    <Grid item mr={3}>
                      <Button
                        sx={{ color: "#12225C", ml: 30, fontWeight: "bold" }}
                      >
                        Learn more
                      </Button>
                    </Grid>
                  </Card>
                </Grid>
              ) : (
                <Grid item xs={12} md={4} mt={5}>
                  <Card
                    sx={{
                      borderRadius: "20px",
                      backgroundColor: "#fafafa",
                      width: "400px",
                      height: "600px",
                    }}
                    position="relative"
                  >
                    <Grid item mt={4} mr={3}>
                      <Typography
                        variant="h4"
                        color="black"
                        sx={{
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Grid>
                    <Grid item mt={4} px={3}>
                      <Typography
                        variant="h7"
                        color="black"
                        textAlign="center"
                        sx={{ mt: 5 }}
                      >
                        {item.description}
                      </Typography>
                    </Grid>
                    <Grid item mr={3} mb={1}>
                      <Button
                        sx={{ color: "#12225C", ml: 30, fontWeight: "bold" }}
                      >
                        Learn more
                      </Button>
                    </Grid>

                    <Box
                      component="img"
                      src={`http://localhost:4000/uploads/images/${item?.image}`}
                      sx={{
                        height: "300px",
                        width: "400px",
                        // mx: 1,
                        cursor: "pointer",
                        position: "absolute",
                        bottom: 0,
                      }}
                    ></Box>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>

      {!selectedArticle ? (
        <>
          <p className="CryptocurrencyNews__title">
            Latest opinions of experts and journalists on cryptocurrency.
          </p>
          <div className="CryptocurrencyNews__articles">
            {newsData &&
              newsData
                .slice(0, visible)
                .map((news, i) => (
                  <Article
                    key={i}
                    news={news}
                    setSelectedArticle={setSelectedArticle}
                  />
                ))}
          </div>
          <button
            className="CryptocurrencyNews__paginationButton"
            onClick={() => loadMoreArticles()}
          >
            Load more
          </button>
        </>
      ) : (
        <ArticleFull
          selectedArticle={selectedArticle}
          setSelectedArticle={setSelectedArticle}
        />
      )}
    </div>
  );
}
