import { BiPhone, BiEnvelope, BiMap } from "react-icons/bi";

export function Card2Row({
  title,
  text,
  icon,
  iconContainerClassName = "",
  hasBottomBorder,
}) {
  return (
    <div
      className={`flex ${
        hasBottomBorder ? "pb-3 border-b border-[#E3E3E3]" : ""
      }`}
    >
      <div
        className={`flex h-10 w-10 min-w-[2.5rem] min-h-[2.5rem] items-center justify-center rounded-lg shadow-md ${iconContainerClassName}`}
      >
        {icon}
      </div>
      <div className="text-left ml-2.5">
        <p className="text-xs text-gray-600">{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
export function Info({phone,email,address}) {
  return (
    <div className="flex flex-col gap-3 p-7 rounded-2xl bg-white">
      <Card2Row
        title="Phone"
        text={phone?phone:"Update your Info"}
        iconContainerClassName="bg-[#fcf4ff]"
        icon={<BiPhone size="1.2rem" className="text-[#D566FF]" />}
        hasBottomBorder
      />
      <Card2Row
        title="Email"
        text={email?email:"Not specified"}
        iconContainerClassName="bg-[#fefaf0]"
        icon={<BiEnvelope size="1.2rem" className="text-[#DDA10C]" />}
        hasBottomBorder
      />
      <Card2Row
        title="Address"
        text={address? address:"Not mentioned"}
        iconContainerClassName="bg-[#fff4f4]"
        icon={<BiMap size="1.2rem" className="text-[#FF6080]" />}
      />
    </div>
  );
}


