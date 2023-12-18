import React from "react";

const NewsItem = (props) => {
  let { title, discription, imageUrl, newsUrl, author, source, publishedAt } =
    props;
  return (
    <>
      <div className="card mx-2" style={{ backgroundColor: "#f9ddb1" }}>
        <h5>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <span
            className="position-absolute top-0 s translate-middle badge rounded-pill bg-secondary"
            style={{ left: "50%", zIndex: "0" }}
          >
            {source}
          </span>
        </h5>

        <div className="card-body">
          <h5 className="card-title">{title}....</h5>
          <p className="card-text">{discription}....</p>
          <footer className="blockquote-footer my-2">
            <cite title="Source Title">{author}</cite>
          </footer>

          <div className="container my-2">
            <span className="badge rounded-pill text-bg-dark">
              {new Date(publishedAt).toGMTString()}
            </span>
          </div>

          <a
            href={newsUrl}
            target="blank"
            type="button"
            className="btn btn-outline-success"
          >
            Continue Reading....
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
