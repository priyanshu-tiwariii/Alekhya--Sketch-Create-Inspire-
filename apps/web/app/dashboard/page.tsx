'use client';
import { useState, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { FileModal } from '../../components/FileModal';
import { FileCard } from '../../components/FileCard';
import { FilePlus, Menu } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

interface File {
  id: string;
  name: string;
  createdAt: string;
}

export default function Dashboard() {
  const [files, setFiles] = useState<File[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { data: session } = useSession();

  const handleCreateFile = (fileName: string) => {
    const newFile: File = {
      id: Date.now().toString(),
      name: fileName,
      createdAt: new Date().toISOString(),
    };
    setFiles((prev) => [...prev, newFile]);
  };

  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#fefaf7] text-[#2d2d2d] relative">
      {/* Sidebar */}
      <Sidebar
        userName={session?.user?.name || 'User'}
        profileImage={session?.user?.image || ''}
        onLogout={handleLogout}
        onNewCanvas={() => setShowModal(true)}
      />

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 py-6 sm:py-8 lg:ml-72 transition-all duration-300 w-full">

        {/* Topbar for Mobile */}
        <div className="lg:hidden flex items-center justify-between px-1 mb-6  fixed top-0 left-0 right-0 bg-[#fff8f5] z-30 py-4 shadow-sm">
          <div className="flex items-center gap-2 ml-3">
            <span className="text-[#2d2d2d] font-semibold text-lg">Chitran</span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="bg-[#ff7753] hover:bg-[#e95e3f] text-white p-2 rounded-md mr-3"
          >
            <Menu size={20} />
          </button>
        </div>

        <div className="max-w-6xl mx-auto w-full pt-10 lg:pt-0">
          

          {/* File Section */}
          <section>
            {files.length === 0 ? (
              <div className="text-center mt-24 sm:mt-32">
                <div className="inline-block bg-[#ffe4dc] p-4 sm:p-5 rounded-full mb-6">
                  <FilePlus size={32} className="text-[#ff7753]" />
                </div>
                <h2 className="text-lg sm:text-xl font-semibold">No files yet</h2>
                <p className="text-[#777] mt-1 text-sm sm:text-base">
                  Start by creating your first canvas.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {files.map((file) => (
                  <FileCard key={file.id} file={file} />
                ))}
              </div>
            )}
          </section>
        </div>

        {/* Modal */}
        <FileModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onCreate={handleCreateFile}
        />
      </main>
    </div>
  );
}
