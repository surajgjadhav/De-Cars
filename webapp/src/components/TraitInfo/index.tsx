export interface TraitFieldProps {
  className?: string;
  title: string;
  value: string;
}

const TraitInfo = ({ className, title, value }: TraitFieldProps) => {
  return (
    <div
      className={`flex flex-col gap-0.5 items-center bg-slate-200 rounded-lg p-2 ${className}`}
    >
      <div className="!text-slate-600 text-xs uppercase">{title}</div>
      <div className="!text-slate-800 text-xl font-semibold">{value}</div>
    </div>
  );
};

export default TraitInfo;
