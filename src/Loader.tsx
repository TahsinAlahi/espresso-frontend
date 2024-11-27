function Loader({ className = "" }) {
  return (
    <div
      className={`h-screen w-full flex items-center justify-center ${className}`}
    >
      <div className="loader" />
    </div>
  );
}

export default Loader;
