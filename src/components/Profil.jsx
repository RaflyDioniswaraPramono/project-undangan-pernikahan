import Container from "./Container";
import { comments } from "../constants/profil-comments";
import { mockups } from "../constants/mockups";

const Profil = () => {
  return (
    <div id="profil" className="pt-44 pb-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl font-extrabold tracking-wider mb-3">
              AJAKDONG
            </h1>
            <h1 className="text-lg font-medium text-slate-600 tracking-wider mb-10 leading-tight">
              <strong>AJAKDONG</strong> adalah platform <strong>No.1</strong>{" "}
              pembuatan undangan online terlengkap, cepat dan elegan. Penyedia
              jasa pembuatan undangan pernikahan online terbaik di Indonesia.
              Website terbaru undangan online yang ada, dan telah melayani
              sebanyak lebih dari 20 <i>customers</i>. Beberapa alasan{" "}
              <i>customers</i> memilih kami adalah
            </h1>
            {comments.map((comment) => {
              const { id, icon, deskripsi } = comment;

              return (
                <div
                  key={id}
                  className="flex items-center p-3 bg-zinc-300 rounded-tl-2xl mb-5 shadow-lg"
                >
                  {icon}
                  <h1 className="text-lg font-semibold text-gray-600">
                    {deskripsi}
                  </h1>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between items-center flex-col">
            {mockups.map((mockup) => {
              const { id, src, alt } = mockup;

              return (
                <img
                  key={id}
                  src={src}
                  alt={alt}
                  className="w-full lg:w-[70%]"
                />
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profil;
