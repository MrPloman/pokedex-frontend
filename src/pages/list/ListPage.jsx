import React from "react";
import {CardComponent} from "../../components/CardComponent/CardComponent";
import "./ListPage.scss";

export const ListPage = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <div className="content">
      <div className="content-main">
        <div className="content-main-searcher">
          <input
            className="content-main-searcher-input"
            type="text"
            placeholder="Search a Pokemon..."
          />
          <button className="content-main-searcher-button">x</button>
        </div>
        <div className="content-main-results">
          {list.map((e) => {
            return <CardComponent key={e}></CardComponent>;
          })}
        </div>
        <div className="content-main-pagination"></div>
      </div>
    </div>
  );
};
