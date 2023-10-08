import { mockup } from "../assets";
import Container from "./Container";

const Jumbotron = () => {
  return (
    <div
      id="jumbotron"
      className="py-28 bg-custom bg-center lg:bg-top -mt-[5rem]"
    >
      <Container>
        <div className="block lg:grid grid-cols-2">
          <div></div>
          <div className="flex justify-center items-center flex-col">
            <img
              src={mockup}
              alt="Mockup for online wedding letter"
              className="w-full"
            />

            <h1 className="text-3xl font-extrabold tracking-wide text-center mb-5 text-slate-200 lg:text-zinc-800">
              Buat Website Udangan Online Pernikahanmu
            </h1>
            <h3 className="text-xl font-bold tracking-wider text-center mb-5 text-slate-200 lg:text-gray-800">
              Lengkapi momen bahagia mu dengan membuat undangan online yang
              lebih praktis, mewah dan elegan bersama kami.
            </h3>
            <button className="py-5 px-8 bg-zinc-700 rounded-xl text-slate-100 hover:bg-zinc-800">
              Buat undangan sekarang
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Jumbotron;
