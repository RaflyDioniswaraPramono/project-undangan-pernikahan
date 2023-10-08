import { caro1, caro2, caro3, caro4, caro5, caro6, caro7 } from "../assets";

const handleDragStart = (e) => e.preventDefault();

export const images = [
  <div key={1} className="w-[95%] lg:w-[20rem] ">
    <img
      src={caro1}
      alt=""
      role="presentation"
      onDragStart={handleDragStart}
      className="rounded-2xl"
    />
  </div>,
  <div key={2} className="mr-10 w-[95%] lg:w-[20rem] ">
    <img
      src={caro2}
      alt=""
      role="presentation"
      onDragStart={handleDragStart}
      className="rounded-2xl"
    />
  </div>,
  <div key={3} className="mr-10 w-[95%] lg:w-[20rem] ">
    <img
      src={caro3}
      alt=""
      role="presentation"
      onDragStart={handleDragStart}
      className="rounded-2xl"
    />
  </div>,
  <div key={4} className="mr-10 w-[95%] lg:w-[20rem] ">
    <img
      src={caro4}
      alt=""
      role="presentation"
      onDragStart={handleDragStart}
      className="rounded-2xl"
    />
  </div>,
  <div key={5} className="mr-10 w-[95%] lg:w-[20rem] ">
    <img
      src={caro5}
      alt=""
      role="presentation"
      onDragStart={handleDragStart}
      className="rounded-2xl"
    />
  </div>,
  <div key={6} className="mr-10 w-[95%] lg:w-[20rem] ">
    <img
      src={caro6}
      alt=""
      role="presentation"
      onDragStart={handleDragStart}
      className="rounded-2xl"
    />
  </div>,
  <div key={7} className="mr-10 w-[95%] lg:w-[20rem] ">
    <img
      src={caro7}
      alt=""
      role="presentation"
      onDragStart={handleDragStart}
      className="rounded-2xl"
    />
  </div>,
];
