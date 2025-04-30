'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Check, LinkIcon, Mail, Users } from 'lucide-react';
import axios from 'axios';
import { COLLAB_URL } from '../lib/apiEndPoints';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';


const ShareButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [collaborativeMode, setCollaborativeMode] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedMode, setSelectedMode] = useState('USER');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [shareLink, setShareLink] = useState('');
  const [isMobile, setIsMobile] = useState(false);


    const params = useParams();
    const { data: session } = useSession();
    const fileId = params.fileId;
    
  const modes = [
    { value: 'USER', label: 'Can View' },
    { value: 'EDITOR', label: 'Can Edit' }
  ];
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInvite = async (e) => {
    e.preventDefault();
    try {
      if (!fileId) {
        throw new Error('File ID is undefined');
      }
      const res = await axios.post(
        `${COLLAB_URL}/${fileId}`,
        {
          email: email,
          role: selectedMode,
        },
        {
          headers: {
            Authorization: `${session?.user?.token}`,
          },
        }
      );
      console.log('Response from invite:', res.data);
      if (!res.data.success) {
        throw new Error('Failed to send invite');
      }

      setShareLink(res?.data?.data);
      setShowSuccessModal(true);
      setIsDropdownOpen(false);
      setEmail('');
      setSelectedMode('view');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('Error response:', error.response?.data);
        alert(error.response?.data?.error || 'An error occurred while sending the invite.');
      } else {
        console.error('Unexpected error:', error);
        alert('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2 px-4 py-3 lg:py-3 lg:text-lg text-white bg-white/20 hover:bg-orange-600 transition-all duration-200 rounded-xl shadow-md"
      >
        {isMobile ? <Users size={18} /> : <LinkIcon size={20} />}
        {isMobile ? '' : 'Share'}
        <ChevronDown
          size={16}
          className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white/80 backdrop-blur-xl rounded-xl shadow-2xl border border-orange-100 p-4">
          <div className="flex items-center mb-1 justify-between ">
            <span className="text-lg font-semibold text-black/80">Collaborative Mode</span>
            <button
              onClick={() => setCollaborativeMode(!collaborativeMode)}
              className={`relative h-6 w-11 rounded-full transition-colors duration-300 ${
                collaborativeMode ? 'bg-orange-500' : 'bg-black/30'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transform transition-transform duration-300 ${
                  collaborativeMode ? 'translate-x-5' : ''
                }`}
              />
            </button>
          </div>

          {collaborativeMode && (
            <form onSubmit={handleInvite} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    className="w-full px-4 py-2 pr-10 border rounded-lg border-gray-300  text-gray-600 focus:ring-2 focus:ring-orange-500 outline-none text-sm"
                  />
                  <Mail size={16} className="absolute top-2.5 right-3 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Permission</label>
                <select
                  value={selectedMode}
                  onChange={(e) => setSelectedMode(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 bg-white focus:ring-2 focus:ring-orange-500"
                >
                  {modes.map((mode) => (
                    <option key={mode.value} value={mode.value}>
                      {mode.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                onSubmit={handleInvite}
                className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all"
              >
                Send Invite
              </button>
            </form>
          )}
        </div>
      )}

      {showSuccessModal && (
       <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[100]">
       <div className="bg-white p-6 sm:p-8 rounded-3xl w-full max-w-md mx-4 shadow-2xl border border-gray-100 transition-all duration-300 animate-fade-in">
         <div className="text-center space-y-4">
           <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-orange-100">
             <Check className="w-6 h-6 text-orange-500" />
           </div>
           <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Invite Sent 🎉</h3>
           <p className="text-sm text-gray-500">Your link has been generated. Share it with your team!</p>
     
           <div className="bg-gray-100 px-4 py-2 rounded-lg flex items-center justify-between group border border-gray-200">
             <span className="text-sm text-gray-700 truncate">{shareLink}</span>
             <button
               onClick={() => navigator.clipboard.writeText(shareLink)}
               className="ml-3 p-1.5 rounded-md bg-white shadow-sm hover:bg-gray-100 transition"
             >
               <LinkIcon className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
             </button>
           </div>
     
           <button
             onClick={() => setShowSuccessModal(false)}
             className="w-full py-2.5 mt-2 bg-orange-500 text-white rounded-xl text-sm font-medium shadow-md hover:bg-orange-600 transition-all"
           >
             Close
           </button>
         </div>
       </div>
     </div>
     
      )}
    </div>
  );
};

export default ShareButton;
