import { X } from 'lucide-react';
import { useState } from 'react';

interface FileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (fileName: string) => void;
}

export const FileModal = ({ isOpen, onClose, onCreate }: FileModalProps) => {
  const [fileName, setFileName] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        <h2 className="text-xl font-semibold text-[#2d2d2d] mb-4">Create New Canvas</h2>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 outline-none focus:ring-2 focus:ring-[#ff7753]"
          placeholder="Canvas name"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="text-gray-600 px-4 py-2 hover:bg-gray-100 rounded-md">
            Cancel
          </button>
          <button
            onClick={() => {
              if (!fileName.trim()) return;
              onCreate(fileName);
              setFileName('');
              onClose();
            }}
            className="bg-[#ff7753] text-white px-4 py-2 rounded-md hover:bg-[#ff633d]"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
