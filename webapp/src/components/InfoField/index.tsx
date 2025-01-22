export interface InfoFieldProps {
  className?: string;
  title: string;
  value: string;
}

const InfoField = ({ className, title, value }: InfoFieldProps) => {
  return (
    <div className={`flex flex-col gap-2 items-center ${className}`}>
      <div className="!text-slate-200 text-5xl font-semibold">{value}</div>
      <div className="!text-gray-400 text-base">{title}</div>
    </div>
  );
};

export default InfoField;
