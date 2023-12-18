import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div>
        kewal
        <div className=" container card my-5">
          <div className="card-header ">
            <h1>
              <strong>About K3 SnapNews</strong>
            </h1>
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>
                "K3 Snapnews is a news bulletin app which is used to read news
                latest News to stay updated and gives you a quick bite on the
                things happening around the world , on related topic wheather it
                is Science , Sorts, Technology, Bussiness and Other"{" "}
              </p>
              <footer className="blockquote-footer">
                Created by :-
                <cite title="Source Title">Kewal Singh Jaryal</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
