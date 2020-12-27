import React from "react";
import {useForm} from "../../hooks/useForm";
import "./SearcherComponent.scss";

export const SearcherComponent = () => {
  const initialForm = {
    idSearcher: "",
    nameSearcher: "",
  };
  const {formState, handleInputForm} = useForm(initialForm);
  return (
    <>
      <div className="searcher-content">
        <div className="searcher-content-component">
          <label
            htmlFor="idSearcher"
            className="searcher-content-component-label"
          >
            Number
          </label>
          <input
            className="searcher-content-component-input"
            name="idSearcher"
            value={formState.idSearcher}
            type="number"
            placeholder="Search by number..."
            onChange={handleInputForm}
          />
        </div>
        <div className="searcher-content-component">
          <label
            htmlFor="nameSearcher"
            className="searcher-content-component-label"
          >
            Name
          </label>
          <input
            className="searcher-content-component-input"
            name="nameSearcher"
            value={formState.nameSearcher}
            type="text"
            placeholder="Search by name..."
            onChange={handleInputForm}
          />
        </div>
        <div className="searcher-content-buttons">
          <div className="searcher-content-buttons-each">
            <button>Show All</button>
          </div>
          <div className="searcher-content-buttons-each">
            <button>Clear Filter</button>
          </div>
        </div>
      </div>
    </>
  );
};
