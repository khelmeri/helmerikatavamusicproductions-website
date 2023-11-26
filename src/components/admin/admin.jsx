import Image from "next/image";
import { signOut } from "next-auth/react";

export default function Admin({ user }) {
  function logoutHandler() {
    signOut();
  }

  return (
    <div className="fixed top-0 z-0 flex h-screen w-screen items-center justify-center bg-black">
      <Image
        src="/hero-bg.avif"
        sizes=""
        fill
        style={{
          objectFit: "cover",
        }}
        className="z-0 brightness-50 grayscale"
        alt="hero"
      />
      <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-20 brightness-100 contrast-150" />
      <div className="relative z-10 h-[400px] w-[360px] flex-col justify-center rounded-xl bg-black/90 p-4">
        <h2 className="font-bold text-white">Moro, {user}</h2>
        <div className="absolute bottom-4 right-3">
          <button
            type="button"
            onClick={logoutHandler}
            className="rounded-full bg-gray-600 px-3 py-1 font-semibold text-white duration-200 hover:bg-gray-800"
          >
            Kirjaudu ulos
          </button>
        </div>
      </div>
    </div>
  );
}
