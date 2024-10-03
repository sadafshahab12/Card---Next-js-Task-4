import React from "react";
import Card from "./components/Card";
export default function Home() {
  return (
    <>
      <div className="mx-w-[1440px] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 grid-cols-1">
        <Card
          name="Sadaf Shahab"
          roll={244244}
          city="Karachi"
          center="Governor House Karachi"
          day="Monday"
          time="2:00 to 5:00"
        />
        <Card
          name="Yusra Naz"
          roll={254254}
          city="Karachi"
          center="Governor House Karachi"
          day="Friday"
          time="9:00 to 12:00"
        />

        <Card
          name="Rida"
          roll={285295}
          city="Karachi"
          center="Governor House Karachi"
          day="Sunday"
          time="7:00 to 10:00"
        />
      </div>
    </>
  );
}
