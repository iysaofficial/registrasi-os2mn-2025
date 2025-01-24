import Link from "next/link";
const Thankyou = () => {
  return (
    <>
      <section className="thankyou">
        <div>
          <h1 className="text-sm md:text-lg lg:text-4xl">
            Terima kasih telah mendaftar! Kami menghargai partisipasi Anda dan
            menantikan keterlibatan Anda.
          </h1>
          <Link href="/" className="btn btn-action">
          Kembali ke menu pendaftaran
          </Link>
        </div>
      </section>
    </>
  );
};

export default Thankyou;
