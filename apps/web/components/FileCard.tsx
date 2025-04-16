'use client';

import { Files, Trash2 } from 'lucide-react';

interface FileCardProps {
  file: {
    id: string;
    name: string;
    createdAt: string;
    isSaving?: boolean;
  };
  onDelete?: (id: string) => void;
}

export const FileCard = ({ file, onDelete }: FileCardProps) => {
  return (
    <div className="relative bg-white border border-[#f7d9cf] rounded-xl shadow-sm hover:shadow-lg p-5 transition-all group hover:-translate-y-1 overflow-hidden">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-[#ff9966] to-[#ff5e62] text-white">
          <Files size={22} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-[#2d2d2d] truncate">{file.name}</h3>
          <p className="text-sm text-[#ff7753]">
            {new Date(file.createdAt).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
            })}
          </p>
        </div>

        {file.isSaving && (
          <div className="absolute top-2 right-2 text-xs text-orange-500 animate-pulse">
            Saving...
          </div>
        )}
      </div>

      {/* Delete Button */}
      <button
        onClick={() => onDelete?.(file.id)}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#fff0ee] hover:bg-[#ffe0db] text-[#ff5e4f] p-1 rounded-md"
        title="Delete file"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};
