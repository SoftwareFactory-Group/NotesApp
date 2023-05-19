import { Carousel } from "react-responsive-carousel";

export default function LoginOptions() {
  return (
    // Full Screen Div
    <div className="w-screen h-screen bg-black">
      {/* Feature Showcase Div */}
      <div className="w-screen h-3/5 bg-white">
        <div className="w-screen rounded-b-3xl h-full bg-black flex flex-row">
          <h1 className="m-auto font-extrabold text-white">
            FUNCIONES ARRECHISIMAS
          </h1>
        </div>
      </div>
      {/* Login or Register Div */}
      <div className="flex flex-col w-full h-[35.5%] items-center justify-center bg-white space-y-7 rounded-b-3xl">
        <a
          href="/login"
          className="text-white w-3/4 text-center bg-black font-semibold py-4 rounded-lg text-md drop-shadow-2xl"
        >
          Inicia Sesión
        </a>
        <div className="w-3/4 flex flex-row bg-white rounded-lg p-px">
          <a
            href="/signin"
            className="text-black mx-auto w-screen text-center bg-white font-semibold py-4 rounded-lg text-md drop-shadow-md"
          >
            Regístrate
          </a>
        </div>
      </div>
    </div>
  );
}
