import { Files } from 'lucide-react';

interface FileCardProps {
  file: {
    id: string;
    name: string;
    createdAt: string;
  };
}

export const FileCard = ({ file }: FileCardProps) => {
  return (
    <div className="relative bg-white border border-[#f7d9cf] rounded-xl shadow-sm hover:shadow-lg p-5 transition-all group hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-[#ff9966] to-[#ff5e62] text-white">
          <Files size={22} />
        </div>
        <div>
          <h3 className="font-semibold text-[#2d2d2d] truncate">{file.name}</h3>
          <p className="text-sm text-[#ff7753]">
            {new Date(file.createdAt).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
