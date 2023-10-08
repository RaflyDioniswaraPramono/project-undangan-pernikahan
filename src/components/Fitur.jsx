import { features } from "../constants/features";
import Container from "./Container";

const Fitur = () => {
  return (
    <div id="fitur" className="py-20">
      <Container>
        <h1 className="text-3xl font-extrabold tracking-wide mb-10">
          Fitur Unggulan AJAKDONG
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {features.map((feature) => {
            const { id, judulFitur, deskripsi, icon, alt } = feature;

            return (
              <div
                key={id}
                className="cursor-pointer"
              >
                <div className="flex items-center justify-around mb-3 bg-zinc-200 px-5 pt-5 pb-12 shadow-2xl rounded-b-xl">
                  <img src={icon} alt={alt} className="w-10 h-10" />
                  <h1 className="text-md leading-none font-medium tracking-wide">
                    {judulFitur}
                  </h1>
                </div>
                <div className="mx-5 p-3 -mt-10 bg-zinc-100 rounded-md">
                  <p>{deskripsi}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Fitur;
