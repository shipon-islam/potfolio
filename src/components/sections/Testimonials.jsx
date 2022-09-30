import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import one from '../../assets/image/1 (1).jpg';
import two from '../../assets/image/1 (2).jpg';
import three from '../../assets/image/1 (3).jpg';
import four from '../../assets/image/1 (4).jpg';
import five from '../../assets/image/1 (5).jpg';
import six from '../../assets/image/joe lerry.jpg';
import Heading from "../Heading";
import { emptyStar, fullStar, hulfStar } from "../Icon";
import ReviewCard from "../ReviewCard";
import ReviewCounter from "../ReviewCounter";

const client_reviews = [
  {
    id: 1,
    name: "john doe",
    avatar: four,
    desc: "It has been a pleasure working with shipon islam. I appreciate your dedication to the projects that you and your team are on. It is nice from the customers stand point to be able to get in touch with you. You did a great.",
    starIconPath: [fullStar, fullStar, fullStar, fullStar, fullStar],
  },
 
  {
    id: 2,
    name: "ben don",
    avatar: one,
    desc: "Thank you so much for the work!I think our website is performing extremely well and our calls and emails are flooding in.I i have referred a few others to you guys that have needed ui design.Keep up the good work!",
    starIconPath: [fullStar, fullStar, fullStar, hulfStar,emptyStar],
  },
  {
    id: 3,
    name: "john head",
    avatar: two,
    desc: "shipon has done a great job designing our new site here at Aeon Systems Inc. and we are impressed overall with the fontend services. After approximately 6 months we are really starting to see some results on google.thanks shipon!",
    starIconPath: [fullStar, fullStar, fullStar, fullStar, hulfStar],
  },
  {
    id: 4,
    name: "dr david ",
    avatar: three,
    desc: "shipon has done a great job designing our new site here at Aeon Systems Inc. and we are impressed overall with the fontend services. After approximately 6 months we are really starting to see some results on google.thanks shipon!",
    starIconPath: [fullStar, fullStar, fullStar, fullStar, emptyStar],
  },
  {
    id: 5,
    name: "joe lerry",
    avatar: six,
    desc: "Thank you so much for the work!I think our website is performing extremely well and our calls and emails are flooding in.I i have referred a few others to you guys that have needed ui design.Keep up the good work!",
    starIconPath: [fullStar, fullStar, fullStar, fullStar, hulfStar],
  },
  {
    id: 6,
    name: "osman sheikh",
    avatar: five,
    desc: "It has been a pleasure working with shipon islam. I appreciate your dedication to the projects that you and your team are on. It is nice from the customers stand point to be able to get in touch with you. You did a great.",
    starIconPath: [fullStar, fullStar, fullStar, fullStar, fullStar],
  },
];

export default function Testimonials() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="font-inter  mt-24 mb-32 md:mt-40 md:mb-40 ">
      <Heading title="client reviews" subTitle="mind say?" />
      <div data-aos="fade-right" data-aos-duration="1000" className="my-14">
        <Carousel
          swipeable={window.innerWidth <= "600" ? true : false}
          draggable={window.innerWidth <= "600" ? true : false}
          showDots={true}
          responsive={responsive}
          // means to render carousel on server-side.
          infinite={true}
          autoPlay={window.innerWidth >= "600" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {client_reviews.map((review) => (
            <React.Fragment key={review.id}>
              <ReviewCard {...review} />
            </React.Fragment>
          ))}
        </Carousel>
      </div>
      <ReviewCounter/>
    </div>
  );
}
