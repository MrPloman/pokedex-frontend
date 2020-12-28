import React from "react";
import {useForm} from "../../hooks/useForm";
import "./SearcherComponent.scss";

export const SearcherComponent = (props) => {
  const {searchByNumber, searchByName, clearList} = props;
  const initialForm = {
    idSearcher: "",
    nameSearcher: "",
  };
  const {formState, handleInputForm} = useForm(initialForm);
  console.log(formState);
  const search = () => {
    if (formState.idSearcher !== "") {
      searchByNumber(formState.idSearcher);
    }
    if (formState.nameSearcher !== "") {
      searchByName(formState.nameSearcher);
    }
  };
  const clearFilters = () => {
    formState.nameSearcher = "";
    formState.idSearcher = "";
    clearList();
  };
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
            <button
              onClick={() => {
                search();
              }}
            >
              Search
            </button>
          </div>
          <div className="searcher-content-buttons-each">
            <button
              onClick={() => {
                clearFilters();
              }}
            >
              Clear Filter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
