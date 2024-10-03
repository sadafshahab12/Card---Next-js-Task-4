import React from "react";

interface CardType {
  name: string;
  roll: number;
  city: string;
  center: string;
  day: string;
  time: string;
}
const Card = (props: CardType) => {
  return (
    <>
      <div className="rounded-2xl p-5 m-5 bg-yellow-400 font-sans ">
        <h1 className="xl:text-3xl text-3xl font-bold pb-5">
          Student ID Card
        </h1>
        <p className="xl:text-1xl lg:text-[1rem] md:text-[0.75rem] pb-4">
          Name : <span className="font-bold">{props.name}</span>
        </p>
        <p className="xl:text-1xl lg:text-[1rem] md:text-[0.75rem] pb-4">
          Roll No : <span className="font-bold">{props.roll}</span>
        </p>
        <p className="xl:text-1xl lg:text-[1rem] md:text-[0.75rem] pb-4">
          City : <span className="font-bold">{props.city}</span>
        </p>
        <p className="xl:text-1xl lg:text-[1rem] md:text-[0.75rem] pb-4">
          Center : <span className="font-bold">{props.center}</span>
        </p>
        <p className="xl:text-1xl lg:text-[1rem] md:text-[0.75rem] pb-4">
          Days: <span className="font-bold">{props.day}</span>
        </p>
        <p className="xl:text-1xl lg:text-[1rem] md:text-[0.75rem] pb-4">
          Time : <span className="font-bold">{props.time}</span>
        </p>
      </div>
    </>
  );
};

export default Card;
