import Head from "next/head";
import Link from "next/link";
import { useState } from "react";


export default function Home() {

  

  return (
    <>
      <Head>
        <title>REGISTRASI OS2MN</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="homeregist-section">
        <div className="wrapper">
          <div className="">
            <h2 className="">FORMULIR REGISTRASI</h2>
            <h1 className="">Registrasi OS2MN</h1>
          </div>
        </div>
        <div className="wrapper">
            <Link href="/indonesiaparticipants" className="btn btn-custom text-center me-lg-5 m-2">Peserta Indonesia</Link>
        </div>
      </section>
    </>
  );
}
