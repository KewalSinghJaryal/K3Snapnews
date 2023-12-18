import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const capitalizeFirstletter = (string) => {
    return string.charAt(0).toUpperCase + string.slice(1);
  };

  // document.title = ` K3 Snapnews - ${props.name}`;

  const updateNews = async () => {
    props.setProgress(5);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=01df70685ca94a589368db73ef367468&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(25);

    let data = await fetch(url);
    props.setProgress(45);
    let parsedData = await data.json();
    props.setProgress(70);
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstletter(props.category)} - K3 News`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    setpage(page + 1);

    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setpage(page + 1);
    let data = await fetch(url);

    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  };

  return (
    <>
      <div
        className="  my-1 text-center"
        style={{ backgroundColor: "#e5e5e5" }}
      >
        <div className="my-4  ">/ to keep it out of navbar</div>
        <div className="card mx-2">
          <div className="card-body">
            <strong>K3 SNAPNEWS - {props.name}</strong>
          </div>
        </div>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="container col-md-4 my-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    discription={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://img.freepik.com/free-photo/hourglass-with-sand-middle-word-sand-it_123827-23414.jpg?w=740&t=st=1702617074~exp=1702617674~hmac=35402b0f72020b64eaf92e5f9a9949982af4867fc5afabf72e1766860fe1d202"
                    }
                    newsUrl={element.url}
                    author={element.author ? element.author : "unknown"}
                    source={
                      element.source.id ? element.source.id.toUpperCase() : ""
                    }
                    publishedAt={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default News;
News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
  name: "General",
};
News.propTypes = {
  country: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
