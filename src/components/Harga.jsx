import Container from "./Container";

const Harga = () => {
  return (
    <div id="harga" className="py-20">
      <Container>
        <h1 className="text-3xl font-extrabold tracking-wide mb-10">
          Detail Harga di AJAKDONG
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5">
          <div className="bg-zinc-400 rounded-lg p-5">
            {/* price header */}
            <div className="flex justify-center items-center flex-col mb-10 bg-sky-400 p-5">
              <h3>Basic</h3>
              <h1>Rp. 50.000</h1>
            </div>

            {/* price body */}
            <div>
              <h4 className="mb-3">Fitur</h4>
              <p>&#8226; Masa aktif undangan 5 hari.</p>
              <p>&#8226; Kustom undangan berwaktu selama 1 hari.</p>
              <p>
                &#8226; Semua fitur unggulan tersedia kecuali live streaming dan
                konten bervideo.
              </p>
              <p>&#8226; Template yang dapat dipakai luxury</p>
            </div>
          </div>
          <div className="bg-zinc-400 rounded-lg p-5">
            {/* price header */}
            <div className="flex justify-center items-center flex-col mb-10">
              <h3>Premium</h3>
              <h1>Rp.100.000</h1>
            </div>

            {/* price body */}
            <div>
              <h4 className="mb-3">Fitur</h4>
              <p>&#8226; Masa aktif undangan selamanya.</p>
              <p>&#8226; Kustom undangan berwaktu selama 5 hari.</p>
              <p>
                &#8226; Semua fitur unggulan tersedia kecuali konten bervideo.
              </p>
              <p>&#8226; Template yang dapat dipakai luxury dan elegant.</p>
              <p>&#8226; Feedback penerima tamu.</p>
            </div>
          </div>
          <div className="bg-zinc-400 rounded-lg p-5">
            {/* price header */}
            <div className="flex justify-center items-center flex-col mb-10">
              <h3>Ultimate</h3>
              <h1>Rp.150.000</h1>
            </div>

            {/* price body */}
            <div>
              <h4 className="mb-3">Fitur</h4>
              <p>&#8226; Masa aktif undangan selamanya.</p>
              <p>&#8226; Kustom undangan selamanya.</p>
              <p>&#8226; Semua fitur unggulan tersedia.</p>
              <p>
                &#8226; Template yang dapat dipakai luxury, elegant dan gold.
              </p>
              <p>&#8226; Feedback penerima tamu.</p>
              <p>&#8226; Scan barcode tamu.</p>
              <p>&#8226; Hitung mundur waktu acara.</p>
              <p>&#8226; Support pemilihan bahasa inggris.</p>
              <p>&#8226; Managemen undagan / managemen tamu.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Harga;
