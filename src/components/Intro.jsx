import Container from "./Container";
import { intros } from "../constants/intro-contents";

const Intro = () => {
  return (
    <div id="intro" className="-mt-10 z-[2]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {intros.map((intro) => {
            const { id, icons, judulIntro, deskripsi } = intro;

            return (
              <div
                key={id}
                className="bg-slate-200/70 p-10 rounded-2xl backdrop-blur-md shadow-2xl"
              >
                <div className="flex justify-between items-center mb-5">
                  {icons}

                  <h2 className="text-xl font-semibold text-zinc-700">
                    {judulIntro}
                  </h2>
                </div>
                <p className="text-md tracking-widest mb-5">{deskripsi}</p>
                <button className="py-3 px-5 bg-zinc-400 hover:bg-zinc-500 rounded-lg text-slate-100">
                  Coba sekarang
                </button>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Intro;
