import React from "react";

const Booking = () => {
  return (
    <>
      <div className="booking-form boxed-layout">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-11">
              <div className="booking-form-inner">
                <form action="#">
                  <div className="row align-items-end">
                    <div className="col-lg-3 col-md-6">
                      <div className="inputs-filed mt-30">
                        <label for="arrival-date">Arrival Date</label>
                        <div className="icon">
                          <i className="fal fa-calendar-alt"></i>
                        </div>
                        <input
                          type="text"
                          placeholder="24th march 2022"
                          name="arrival-date"
                          id="arrival-date"
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="inputs-filed mt-30">
                        <label for="departure-date">Departure Date</label>
                        <div className="icon">
                          <i className="fal fa-calendar-alt"></i>
                        </div>
                        <input
                          type="text"
                          placeholder="30th march 2022"
                          name="departure-date"
                          id="departure-date"
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="inputs-filed mt-30">
                        <label for="guests">Pet Type</label>
                        <select name="guests" id="guests">
                          <option value="" disabled selected>
                            Select From Here
                          </option>
                          <option value="1">Dog</option>
                          <option value="2">Cat</option>
                          <option value="4">Bird</option>
                          <option value="8">Lizard</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="inputs-filed mt-30">
                        <button type="submit">check availability</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
