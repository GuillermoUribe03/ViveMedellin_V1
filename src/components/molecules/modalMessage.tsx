interface ModalMessageProps {
  type: "success" | "error";
  message: string;
  onAccept: () => void;
}

export default function ModalMessage({ type, message, onAccept }: ModalMessageProps) {
  const isSuccess = type === "success";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white w-[750px] h-80 px-16 py-12 rounded-[30px] flex flex-col justify-center items-center gap-8">
        <div className="flex items-center gap-6">
          <div
            className={`w-14 h-14 rounded-full ${
              isSuccess ? "outline-teal-600" : "outline-red-600"
            } outline outline-[6px] outline-offset-[-3px]`}
          ></div>
          <p
            className={`w-96 text-2xl font-bold leading-loose ${
              isSuccess ? "text-teal-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        </div>

        <button
          onClick={onAccept}
          className="w-full h-16 bg-orange-500 rounded-[10px] shadow text-white text-3xl font-semibold"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
