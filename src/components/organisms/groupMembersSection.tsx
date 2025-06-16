import MemberCard from "../molecules/memberCard";

export default function GroupMembersSection() {
  return (
    <div className="flex flex-col gap-6">
      <MemberCard
        name="Santiago López"
        role="Administrador · Miembro desde ene. 2023"
        imageUrl="https://randomuser.me/api/portraits/men/1.jpg"
      />
      <MemberCard
        name="Valentina Ruiz"
        role="Miembro desde mar. 2024"
        imageUrl="https://randomuser.me/api/portraits/women/2.jpg"
      />
      <MemberCard
        name="Andrés Gómez"
        role="Miembro desde may. 2024"
        imageUrl="https://randomuser.me/api/portraits/men/3.jpg"
      />
    </div>
  );
}
