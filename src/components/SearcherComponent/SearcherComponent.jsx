import React from "react";
import {useForm} from "../../hooks/useForm";
import "./SearcherComponent.scss";

export const SearcherComponent = (props) => {
  const {searchByNumber, searchByName, clearList} = props;
  const initialForm = {
    idSearcher: {value: "", validate: false},
    nameSearcher: {value: "", validate: false},
  };
  const {formState, handleInputForm} = useForm(initialForm);

  const search = () => {
    if (formState.idSearcher.value !== "") {
      searchByNumber(formState.idSearcher.value);
    }
    if (formState.nameSearcher.value !== "") {
      searchByName(formState.nameSearcher.value);
    }
  };
  const clearFilters = () => {
    formState.nameSearcher.value = "";
    formState.idSearcher.value = "";
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
            value={formState.idSearcher.value}
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
            value={formState.nameSearcher.value}
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
