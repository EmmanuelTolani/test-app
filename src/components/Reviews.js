import React, { Component } from "react";

export default class Reviews extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe",
      reviews: [
        {
          userName: "Michelle",
          imgUrl:
            "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82",
          review: `I love my drone! It gave me unlimited potential in my videography career!`,
          date: "July 28, 2021",
        },
        {
          userName: "Joe Santos",
          imgUrl: "https://randomuser.me/api/portraits/men/64.jpg",
          review: `Perfect for farm survielence. The video and camera footage is phenomenal!`,
          date: "July 18, 2020",
        },
        {
          userName: "Emmanuel Paul",
          imgUrl:
            "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          review: `Must Buy! I have bought several different drones, and this is the best one!`,
          date: "March 15, 2019",
        },
      ],
    };
  }
  showAllReviews = () => {
    const Reviews = this.state.reviews; // sets the variable dronePrices to the array of prices
    var i; //declare the variable i that will be used to iterate through the dronePrices
    for (i = 0; i < Reviews.length; i++) {
      // for loop to iterate through all objects in the dronePrices variable
      return Reviews.map((review, index) => {
        return (
          <li
            className={`reviews__single-review ${"a" + index}`}
            key={index}
          >
            <div className="reviews__img">
              <img src={review.imgUrl} alt="" />
            </div>
            <div className="reviews__review">
              <p>{review.review}</p>
              <div className="reviews__user">
              <h5>... {review.userName}</h5>
            </div>
            </div>
           
          </li>
        );
      });
    }
  };

  render() {
    return (
      <div className="reviews">
        <div className="reviews__title">
          <h2>
            Our students are our biggest fans
          </h2>
          <p>Have a look at some of our reviews</p>
        </div>
        <div className="reviews__container">
          <ul className="reviews__all">{this.showAllReviews()}</ul>
        </div>
      </div>
    );
  }
}