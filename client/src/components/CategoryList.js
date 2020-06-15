import React, { Component } from "react";
import "./CategoryList.css";
import ScrollMenu from 'react-horizontal-scrolling-menu';

export default class CategoryList extends Component {
  categories = [
    { url: "/images/categories/applique.png", id: 1 },
    { url: "/images/categories/calligraphy.png", id: 2 },
    { url: "/images/categories/ceramic.png", id: 3 },
    { url: "/images/categories/crocheting.png", id: 4 },
    { url: "/images/categories/drawing.png", id: 5 },
    { url: "/images/categories/embroidery.png", id: 6 },
    { url: "/images/categories/felt-making.png", id: 7 },
    { url: "/images/categories/flower-crafts.png", id: 8 },
    { url: "/images/categories/garments.png", id: 9 },
    { url: "/images/categories/glass-art.png", id: 10 },
    { url: "/images/categories/grafitti.png", id: 11 },
    { url: "/images/categories/knitting.png", id: 12 },
    { url: "/images/categories/lace-making.png", id: 13 },
    { url: "/images/categories/leatherwork.png", id: 14 },
    { url: "/images/categories/macrame.png", id: 15 },
    { url: "/images/categories/metal-craft.png", id: 16 },
    { url: "/images/categories/mixed-media.png", id: 17 },
    { url: "/images/categories/needlework.png", id: 18 },
    { url: "/images/categories/painting.png", id: 30 },
    { url: "/images/categories/paper-craft.png", id: 19 },
    { url: "/images/categories/photography.png", id: 20 },
    { url: "/images/categories/poster.png", id: 21 },
    { url: "/images/categories/pottery.png", id: 22 },
    { url: "/images/categories/quilting.png", id: 23 },
    { url: "/images/categories/sculpture.png", id: 24 },
    { url: "/images/categories/stone-crafting.png", id: 25 },
    { url: "/images/categories/tapestry.png", id: 26 },
    { url: "/images/categories/textiles.png", id: 27 },
    { url: "/images/categories/weaving.png", id: 28 },
    { url: "/images/categories/wood-craft.png", id: 29 },
  ];

  render() {
    return (
      <div>
        <div className="categorylist-title">
          <h2>Categories</h2>
        </div>
        <ScrollMenu 
          data={this.categories.map((category) => (
            <div
              className="categorylist-horizontal-scroll"
              key={category.id}
              style={{
                backgroundImage: `url(${category.url})`,
              }}
              onClick={() => {
                this.props.handleGetProductsByCategory(category.id)
              }}
            ></div>
          ))}
          arrowLeft={(
            <img src="/images/goback.png"></img>
          )}
          arrowRight={(
            <img src="/images/goback.png"></img>
          )}
        />
      </div>
    );
  }
}
