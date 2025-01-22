export interface TagProps {
  className?: string;
  title: string;
}

const Tag = ({ className = "", title }: TagProps) => {
  return (
    <div
      className={`border-[1px] border-slate-200 rounded-full py-1 px-2 grow-0 text-sm ${className}`}
    >
      {title}
    </div>
  );
};

export default Tag;
