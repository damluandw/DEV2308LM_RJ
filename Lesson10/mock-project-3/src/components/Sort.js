import React from "react";

function Sort() {
  return (
    <>
      {/* SORT : START */}
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="dropdown">
          <button
            className="btn btn-default dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sort by <span className="caret" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <a role="button">Name ASC</a>
            </li>
            <li>
              <a role="button">Name DESC</a>
            </li>
            <li role="separator" className="divider" />
            <li>
              <a role="button">Level ASC</a>
            </li>
            <li>
              <a role="button">Level DESC</a>
            </li>
          </ul>
          <span className="label label-success label-medium">NAME - DESC</span>
        </div>
      </div>
      {/* SORT : END */}
    </>
  );
}

export default Sort;
