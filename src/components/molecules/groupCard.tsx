import { useState } from "react";
import { useRouter } from "next/router";
import Button from "../atoms/button";
import ModalMessage from "./modalMessage";

interface GroupCardProps {
  id?: number;
  image?: string;
  title: string;
  text: string;
  text2?: string;
  button?: string;
  variant?: string;
}

const GroupCard = ({
  id,
  image,
  title,
  text,
  text2,
  button,
  variant,
}: GroupCardProps) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const cardClass =
    variant === "search" ? "shadow-xl border-2 border-altGray" : "";

  const handleCardClick = () => {
    if (id) {
      router.push(`/grupo/${id}`);
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // evita que el click en el botón dispare el redirect
    setShowModal(true);
  };

  const handleAccept = () => {
    setShowModal(false);
    if (id) {
      router.push(`/grupo/${id}`);
    }
  };

  return (
    <>
      <div
        className={`flex flex-row bg-Gray2 gap-8 ${cardClass} w-full rounded-2xl p-4 hover:cursor-pointer`}
        onClick={handleCardClick}
      >
        <div className="flex flex-row gap-8 w-full">
          {image && (
            <img src={image} alt={title} width={85} className="rounded-xl" />
          )}
          <div className="flex flex-col justify-evenly items-start text-Blue">
            <h1 className="font-bold text-xl">{title}</h1>
            <p className="text-lg">{text}</p>
            {text2 && <p className="text-lg">{text2}</p>}
          </div>
        </div>

        {button && (
          <Button
            color="orange"
            text={button}
            className="my-4"
            onClick={handleButtonClick}
          />
        )}
      </div>

      {showModal && (
        <ModalMessage
          type="success"
          message={`Se ha unido al grupo "${title}" con éxito`}
          onAccept={handleAccept}
        />
      )}
    </>
  );
};

export default GroupCard;

