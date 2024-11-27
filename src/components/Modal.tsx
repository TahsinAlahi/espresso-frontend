import warningImg from "../assets/warning.png";

function Modal({ onDelete }: { onDelete: () => void }) {
  return (
    <div className="fixed inset-0 bg-gray-900/20 py-3 flex items-center justify-center font-raleway z-10">
      <div className="bg-white w-2/3 rounded-lg shadow-lg p-6 max-w-md mx-auto">
        <img
          src={warningImg}
          alt="Successful"
          className="w-24 aspect-square mx-auto mb-4"
        />
        <h1 className="text-center text-2xl font-bold">Are you sure?</h1>

        <p className="text-center mt-2 mb-5">
          Are you sure that you want to delete it?
        </p>

        <button
          className="bg-red-600 text-white text-base ml-auto block py-2 px-5 font-semibold rounded-lg hover:bg-red-700 duration-200"
          onClick={onDelete}
        >
          Yes
        </button>
      </div>
    </div>
  );
}

export default Modal;
