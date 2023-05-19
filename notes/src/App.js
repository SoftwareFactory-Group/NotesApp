export default function App() {
  const timeout = setTimeout(() => {
    window.location.href = "/login-options";
  }, 3000);

  return (
    <div className="w-screen flex flex-row h-screen">
      <h1 className="m-auto text-3xl font-extrabold text-white">
        LOGO REFACHERO
      </h1>
    </div>
  );
}
