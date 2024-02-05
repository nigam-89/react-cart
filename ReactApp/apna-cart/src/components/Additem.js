import React from "react";
class Additem extends React.Component {
  render() {
    return (
      <form className="row mb-5">
        <div className="mb-3 col-4">
          <label htmlFor="InputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="InputName"
            aria-describedby="name"
          />
        
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="InputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
          />
        </div>
        
        <button type="submit" className="btn btn-primary col-4">
          Add
        </button>
      </form>
    );
  }
}

export default Additem;
