interface MemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

export default function MemberCard({ name, role, imageUrl }: MemberCardProps) {
  return (
    <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-2xl shadow-sm outline outline-1 outline-slate-300">
      <img
        src={imageUrl}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <span className="text-xl text-sky-900 font-semibold">{name}</span>
        <span className="text-base text-sky-900 font-normal">{role}</span>
      </div>
    </div>
  );
}
