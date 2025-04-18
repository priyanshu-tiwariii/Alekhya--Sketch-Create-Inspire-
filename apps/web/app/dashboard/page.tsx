'use client';

import { useState, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { FileModal } from '../../components/FileModal';
import { FileCard } from '../../components/FileCard';
import { FilePlus, Menu } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { FILE_URL } from '../../lib/apiEndPoints';
import { useQuery, useQueryClient,UseQueryOptions } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

declare module 'next-auth' {
  interface Session {
    user: {
      id?: string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      token?: string | null;
    };
  }
}

interface File {
  id: string | number;
  name: string;
  createdAt: string;
  isSaving?: boolean;
}

export default function Dashboard() {

  // State variables -------------------------------------------------------------------------------------------------------------------------
  const [showModal, setShowModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [page, setPage] = useState(1); 
  const [limit] = useState(10); 
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data: session, status } = useSession();

  // Fetching files from server using React Query -----------------------------------------------------------------------------------
  const query = useQuery<any, Error>({
    queryKey: ['files', page],
    queryFn: async () => {
      const res = await axios.get(`${FILE_URL}?page=${page}&limit=${limit}`, {
        headers: {
          Authorization: `${session?.user?.token}`,
        },
      });
      return res.data;
    },
    enabled: !!session?.user?.token,
    staleTime: 0,
    cacheTime: 3 * 60 * 1000,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  }as UseQueryOptions<any, Error>
);

// Handle sidebar open/close on mobile devices -------------------------------------------------------------------------------------------------
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (status === 'unauthenticated') return <div>Access Denied</div>;
  if (status === 'loading' || query.isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ff7753]"></div>
      </div>
    );
  }


  // Handle creation of file --------------------------------------------------------------------------------------------------------------------

  const handleCreateFile = async (fileName: string) => {
    const toastId = toast.loading('Creating file...');
    const tempId = `temp-${Date.now()}`;
  
    queryClient.setQueryData(['files', page], (oldData: any) => {
      if (!oldData) return oldData;
      return {
        ...oldData,
        data: [{
          id: tempId,
          name: fileName,
          createdAt: new Date().toISOString(),
          isSaving: true,
        }, ...oldData.data],
      };
    });
  
    setShowModal(false);
  
    try {
      const res = await axios.post(
        FILE_URL,
        {
          name: fileName,
          createdByUserId: session?.user?.id,
        },
        {
          headers: {
            Authorization: `${session?.user?.token}`,
          },
        }
      );
      queryClient.setQueryData(['files', page], (oldData: any) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: oldData.data.map((file: File) =>
            file.id === tempId ? { ...res.data.data, isSaving: false } : file
          ),
        };
      });
  
      toast.success('File created successfully!', { id: toastId });
    } catch (error) {
      queryClient.setQueryData(['files', page], (oldData: any) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: oldData.data.filter((file: File) => file.id !== tempId),
        };
      });
  
      toast.error('Failed to create file', { id: toastId });
      console.error('Error creating file:', error);
    } finally {
      await queryClient.invalidateQueries({ queryKey: ['files', page] });
    }
  };
  
// HAndle Delete File ------------------------------------------------------------------------------------------------------------------------
  const handleDeleteFile = async (fileId: string) => {
    try {
      await axios.delete(`${FILE_URL}/${fileId}`, {
        headers: {
          Authorization: `${session?.user?.token}`,
        },
      });

      toast.success('File deleted successfully.');
      await queryClient.invalidateQueries({ queryKey: ['files', page] });

    } catch (error) {
      console.log('Error deleting file:', error);
      toast.error('Failed to delete file. Please try again.');
    }
  };


  // Handle Open File --------------------------------------------------------------------------------------------------------------------------
  const handleOpenFile = (fileId: string) => {
    router.push(`/canvas/${fileId}`);
  };

  //HAndle logout ->
  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white p-4 rounded-lg shadow-sm animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-3 w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#fefaf7] text-[#2d2d2d] relative">
      <Sidebar
        userName={session?.user?.name || 'User'}
        profileImage={session?.user?.image || ''}
        onLogout={handleLogout}
        onNewCanvas={() => setShowModal(true)}
      />

      <main className="flex-1 px-4 sm:px-6 py-6 sm:py-8 lg:ml-72 transition-all duration-300 w-full">
        <div className="lg:hidden flex items-center justify-between px-1 mb-6 fixed top-0 left-0 right-0 bg-[#fff8f5] z-30 py-4 shadow-sm">
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
          <section>
            {query.isLoading ? (
              <LoadingSkeleton />
            ) : query.data?.data.length === 0 ? (
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
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {query.data?.data.map((file: File, index: number) => {
                    const fileId = file.id ?? `file-${index}`;
                    return (
                      <FileCard
                        key={fileId.toString()}
                        file={{ ...file, id: fileId.toString() }}
                        onDelete={(id) => {
                          handleDeleteFile(id);
                        }}
                        onClick={() => {
                          handleOpenFile(fileId.toString());
                        }}

                      />
                    );
                  })}
                </div>

                {/* Pagination Controls */}
                <div className="mt-6 flex justify-between items-center">
                  <button
                    onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                    disabled={page === 1}
                    className="px-4 py-2 bg-[#ff7753] text-white rounded disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <span className="text-sm text-gray-600">Page {page}</span>
                  <button
                    onClick={() => setPage((prev) => prev + 1)}
                    className="px-4 py-2 bg-[#ff7753] text-white rounded"
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </section>
        </div>

        <FileModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onCreate={handleCreateFile}
        />
      </main>
    </div>
  );
}
