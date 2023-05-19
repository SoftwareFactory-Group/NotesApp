export default function LogIn() {
  return (
    // Full Screen Div
    <div className="w-screen h-screen">
      {/* Feature Showcase Div */}
      <div className="w-screen rounded-b-3xl h-2/3 bg-gradient-to-r from-blue-800 to-blue-500 flex flex-row">
        <h1 className="m-auto font-extrabold text-white">
          FUNCIONES ARRECHISIMAS
        </h1>
      </div>
      {/* Login or Register Div */}
      <div className="flex flex-col w-full h-1/3 items-center justify-center bg-black space-y-7">
        <a
          href="/login"
          className="text-white w-3/4 text-center bg-gradient-to-r from-blue-700 to-blue-500 font-semibold py-4 rounded-lg text-md shadow-2xl shadow-gray-800"
        >
          Inicia Sesión
        </a>
        <div className="w-3/4 flex flex-row bg-gradient-to-r from-blue-700 to-blue-500 rounded-lg p-px">
          <a
            href="/signin"
            className="text-white mx-auto w-screen text-center bg-black font-semibold py-4 rounded-lg text-md shadow-2xl shadow-gray-800"
          >
            Regístrate
          </a>
        </div>
      </div>
    </div>
  );
}
