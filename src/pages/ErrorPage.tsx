import errorImg from "../assets/404/404.gif";

function ErrorPage() {
  return (
    <main className="py-12 w-full min-h-[calc(100svh-91.6px)] flex flex-col items-center justify-center bg-cover bg-center">
      <div className="md:max-w-screen-lg mx-auto px-3 md:px-6 lg:px-0 w-full">
        <img src={errorImg} alt="Error" className="mx-auto" />
      </div>
    </main>
  );
}

export default ErrorPage;
