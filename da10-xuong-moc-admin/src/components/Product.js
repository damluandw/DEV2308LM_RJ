import React from "react";

function Product() {
  return (
    <>
      {/* Default Basic Forms Start */}
      <div class="main-container">
        <div class="pd-ltr-20 xs-pd-20-10">
          <div class="min-height-200px">
            <div className="pd-20 card-box mb-30">
              <div className="clearfix">
                <div className="pull-left">
                  <h4 className="text-blue h4">Products</h4>
                  <p className="mb-30">All bootstrap element classies</p>
                </div>
                
              </div>
              <form>
                <div className="form-group row">
                  <label className="col-sm-12 col-md-2 col-form-label">
                    Text
                  </label>
                  <div className="col-sm-12 col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Johnny Brown"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-12 col-md-2 col-form-label">
                    Search
                  </label>
                  <div className="col-sm-12 col-md-10">
                    <input
                      className="form-control"
                      placeholder="Search Here"
                      type="search"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-12 col-md-2 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-12 col-md-10">
                    <input
                      className="form-control"
                      defaultValue="bootstrap@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-12 col-md-2 col-form-label">
                    URL
                  </label>
                  <div className="col-sm-12 col-md-10">
                    <input
                      className="form-control"
                      defaultValue="https://getbootstrap.com"
                      type="url"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-12 col-md-2 col-form-label">
                    Telephone
                  </label>
                  <div className="col-sm-12 col-md-10">
                    <input
                      className="form-control"
                      defaultValue="1-(111)-111-1111"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-12 col-md-2 col-form-label">
                    Password
                  </label>
                  <div className="col-sm-12 col-md-10">
                    <input
                      className="form-control"
                      defaultValue="password"
                      type="password"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-12 col-md-2 col-form-label">
                    Number
                  </label>
                  <div className="col-sm-12 col-md-10">
                    <input
                      className="form-control"
                      defaultValue={100}
                      type="number"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="example-datetime-local-input"
                    className="col-sm-12 col-md-2 col-form-label"
                  >
                    Date and time
                  </label>
                  <div className="col-sm-12 col-md-10">
                    <input
                      className="form-control datetimepicker"
                      placeholder="Choose Date anf time"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-12 col-md-2 col-form-label">
                    Date
                  </label>
                  <div className="col-sm-12 col-md-10">
                    <input
                      className="form-control date-picker"
                      placeholder="Select Date"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-12 col-md-2 col-form-label">
                    Month
                  </label>
                  <div className="col-sm-12 col-md-10">
                    <input
                      className="form-control month-picker"
                      placeholder="Select Month"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-12 col-md-2 col-form-label">
                    Time
                  </label>
                  <div className="col-sm-12 col-md-10">
                    <input
                      className="form-control time-picker"
                      placeholder="Select time"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-12 col-md-2 col-form-label">
                    Select
                  </label>
                  <div className="col-sm-12 col-md-10">
                    <select className="custom-select col-12">
                      <option selected="">Choose...</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                </div>
               
              </form>
              
            </div>
          </div>
        </div>
      </div>
      {/* Default Basic Forms End */}
    </>
  );
}

export default Product;
