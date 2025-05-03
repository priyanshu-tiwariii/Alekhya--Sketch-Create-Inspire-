'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Check, LinkIcon, Mail, Users, Trash2, Pencil } from 'lucide-react';
import axios from 'axios';
import { COLLAB_URL } from '../lib/apiEndPoints';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { AlertModal } from "./AlertModal"
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setCollaborativeRole,setIsCollaborative} from '../redux/collaborativeSlice';

interface Collaborator {
  id: string;
  fileId: string;
  userId: string;
  role: string;
  joinedAt: string;
  user: {
    id: string;
    name: string;
    email: string;
    profilePhoto: string;
  };
}

const ShareButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedMode, setSelectedMode] = useState('USER');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [shareLink, setShareLink] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [collaborators, setCollaborators] = useState<Collaborator[]>([]);
  const [editingCollaboratorId, setEditingCollaboratorId] = useState<string | null>(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');
  const [showAlert, setShowAlert] = useState(false);
  
  const dispatch = useDispatch();
  const {collaborativeRole, isCollaborative} =  useSelector((state: RootState) => state.collaborative);


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

  const handleCollaborative = () => {
    dispatch(setIsCollaborative(!isCollaborative));
    setIsDropdownOpen(false);
  };

// Fetch collaborators when component mounts or when fileId changes ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    const listCollaborators = async () => {
      try {
        if (session?.user?.token !== undefined) {
          const res = await axios.get(`${COLLAB_URL}/${fileId}`, {
            headers: {
              Authorization: `${session?.user?.token}`,
            },
          });
          if (!res.data.success) {
            throw new Error('Failed to fetch collaborators');
          }

          const  collaborators : Collaborator[] = res.data.data;
          if (collaborators.length > 0) {
            dispatch(setIsCollaborative(true));
            setCollaborators(collaborators);
          }
         
          else if (collaborators.length === 0) {
            dispatch(setIsCollaborative(false));
            setCollaborators([]);
          }
          const currentUSer = collaborators.find((collab)=> collab.userId === session?.user?.id);
          dispatch(setCollaborativeRole(currentUSer?.role || 'USER'));
        
        }
      } catch (error) {
        console.error('Error fetching collaborators:', error);
        if (axios.isAxiosError(error)) {
          setAlertMessage(error.response?.data?.error || 'An error occurred while fetching collaborators.');
          setAlertType('error');
          setShowAlert(true);
        } else {
          setAlertMessage('An unexpected error occurred.');
          setAlertType('error');
          setShowAlert(true);
        }
      }
    };
    listCollaborators();
  }, [fileId, session?.user?.token]);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Invite collaborator ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
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
      if (!res.data.success) throw new Error('Failed to send invite');
      setShareLink(res?.data?.data);
      setShowSuccessModal(true);
      setIsDropdownOpen(false);
      setEmail('');
      setSelectedMode('USER');
      setAlertMessage('Invite sent successfully!');
      setAlertType('success');
      setShowAlert(true);

     
      const updatedCollabs = await axios.get(`${COLLAB_URL}/${fileId}`, {
        headers: {
          Authorization: `${session?.user?.token}`,
        },
      });

      if (!updatedCollabs.data.success) {
            throw new Error('Failed to fetch collaborators');
          }

      setCollaborators(updatedCollabs.data.data);
      dispatch(setIsCollaborative(true));
    } catch (error) {
      if (axios.isAxiosError(error)) {
       setAlertMessage(error.response?.data?.error || 'An error occurred while sending the invite.');
        setAlertType('error');
        setShowAlert(true);

      } else {
        setAlertMessage('Error in sending invite');
        setAlertType('error');
        setShowAlert(true);
      }
    }
  };
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Remove collaborator --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  const handleRemoveCollaborator = async (collabId: string,email:string) => {
    try {
      const res = await axios.delete(`${COLLAB_URL}/${fileId}`,{
        data :{
          email: email,
         },
          headers: {
            Authorization: `${session?.user?.token}`,
          },
        params: {
          collabId: collabId,
        },
      }
    
    );
      if (!res.data.success) throw new Error('Failed to remove collaborator');
      setAlertMessage('Collaborator removed successfully');
      setAlertType('success');
      setShowAlert(true);

      setCollaborators((prev) => prev.filter((collab) => collab.id !== collabId));

    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data?.error);
        setAlertMessage(error.response?.data?.error || 'An error occurred while removing the collaborator.');
        setAlertType('error');
        setShowAlert(true);
      } else {
        setAlertMessage('Error in removing collaborator');
        setAlertType('error');
        setShowAlert(true);
      }
    }
  }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Update collaborator role---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  const handleUpdateRole = async (collabId: string, newRole: string) => {
    try {
      const collaborator = collaborators.find(c => c.id === collabId);
      if (!collaborator) throw new Error('Collaborator not found');

      const res = await axios.patch(
        `${COLLAB_URL}/${fileId}`,
        {
          email: collaborator.user.email,
          role: newRole,
        },
        {
          params: { collabId },
          headers: { Authorization: `${session?.user?.token}` },
        }
      );

      if (!res.data.success) throw new Error('Failed to update role');

      setCollaborators(prev =>
        prev.map(collab =>
          collab.id === collabId ? { ...collab, role: newRole } : collab
        )
      );
      setEditingCollaboratorId(null);
      setAlertMessage('Role updated successfully');
      setAlertType('success');
      setShowAlert(true);
    } catch (error) {
   
      if (axios.isAxiosError(error)) {
        setAlertMessage(error.response?.data?.error || 'Failed to update role.');
      } else {
        setAlertMessage('An error occurred while updating the role.');
      }
      setAlertType('error');
      setShowAlert(true);
    }
  };
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2 px-4 py-3 lg:py-4 text-white bg-white/20 hover:bg-orange-600 transition-all duration-200 rounded-xl shadow-md"
      >
        {isMobile ? <Users size={18} /> : <LinkIcon size={20} />}
        {isMobile ? '' : 'Share'}
        <ChevronDown
          size={16}
          className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-[22rem] max-h-[80vh] overflow-y-auto bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl border border-orange-100 p-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-black/80">Collaborative Mode</span>
            <button
              onClick={handleCollaborative}
              className={`relative h-6 w-11 rounded-full transition-colors duration-300 ${
                isCollaborative? 'bg-orange-500' : 'bg-black/30'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transform transition-transform duration-300 ${
                  isCollaborative ? 'translate-x-5' : ''
                }`}
              />
            </button>
          </div>

        
            
                    

              {isCollaborative && (
            <>
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
                      className="w-full px-4 py-2 pr-10 border rounded-lg border-gray-300 text-gray-600 focus:ring-2 focus:ring-orange-500 outline-none text-sm"
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
                  className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all"
                >
                  Send Invite
                </button>
              </form>

                   


        
              {collaborators.length > 0 && (
      <div className="mt-4 space-y-2">
        <h3 className="text-sm font-semibold text-gray-800">Members</h3>
        <div className="divide-y divide-gray-200 max-h-40 overflow-y-auto">
          {collaborators.map((collab) => (
            <div key={collab.id} className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3 flex-1">
                <Image
                  src={collab.user.profilePhoto}
                  alt={collab.user.name}
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{collab.user.name}</p>
                  <div className="flex items-center gap-2">
                    {editingCollaboratorId === collab.id ? (
                      <select
                        value={collab.role}
                        onChange={(e) => handleUpdateRole(collab.id, e.target.value)}
                        className="text-xs text-gray-500 bg-white border rounded px-1 py-0.5"
                      >
                        {modes.map((mode) => (
                          <option key={mode.value} value={mode.value}>
                            {mode.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <p className="text-xs text-gray-500">
                        {modes.find(m => m.value === collab.role)?.label}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setEditingCollaboratorId(
                    editingCollaboratorId === collab.id ? null : collab.id
                  )}
                  className="p-1.5 rounded-full hover:bg-gray-200 transition"
                >
                  <Pencil size={14} className="text-gray-600" />
                </button>
                <button 
                  className="p-1.5 rounded-full hover:bg-red-100 transition" 
                  onClick={() => handleRemoveCollaborator(collab.id, collab.user.email)}
                >
                  <Trash2 size={14} className="text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
            </>
          )}
       
   

      
      </div>
    )
  }
  {showAlert && (
        <AlertModal
          message={alertMessage}
          type={alertType}
          onClose={() => setShowAlert(false)}
        />
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

  
  )
}

export default ShareButton
