import Image from "next/image";
export default function LogoVM({ className = "top-1 left-8 absolute" }) {
    return (
        <Image
            src="/logos/logovm.svg"
            alt="Logo ViveMedellín"
            width={180}
            height={40}
            className={className}
            priority
        />
    );
}