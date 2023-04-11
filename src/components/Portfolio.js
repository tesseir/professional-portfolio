import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (
                    <div key={item.url} className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href={`${item.githuburl}`} target='_blank'>
                          <img src={`${item.imgurl}`} className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  )
                })
              }

{/* hard code test section */}

              {/* <div key="test" className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://github.com/tesseir/e-commerce" target='_blank'>
                    <img src="images/portfolio/e-commerce.png" className="item-img" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Click Here to View Repo</h5>
                        <p>E-commerce API</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </section>
    );
  }
}