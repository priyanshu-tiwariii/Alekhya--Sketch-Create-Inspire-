'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Settings, LogOut, Menu, FilePlus } from 'lucide-react';

interface SidebarProps {
  userName: string | undefined | null;
  profileImage?: string | null;
  onLogout: () => void;
  onNewCanvas: () => void;
}

export const Sidebar = ({ userName, profileImage, onLogout, onNewCanvas }: SidebarProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const primaryGradient = 'bg-gradient-to-r from-[#ff9966] to-[#ff5e62]';

  return (
    <>
      {/* Mobile Topbar */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3  shadow-sm fixed top-0 left-0 right-0 bg-[#fff8f5] z-50">
        <div className="flex items-center gap-2">
       
          <span className="text-[#2d2d2d] font-semibold text-lg">Chitran</span>
        </div>
        <button
          onClick={() => setIsMobileOpen((prev) => !prev)}
          className="bg-[#ff7753] hover:bg-[#e95e3f] text-white p-2 rounded-md"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-40 w-72 bg-[#fff8f5] border-r border-[#f7d9cf] shadow-sm transform transition-transform duration-300 ease-in-out
          pt-6 lg:pt-8 pb-6
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="flex flex-col h-full px-6">
          {/* Desktop Logo */}
          <div className="hidden lg:flex items-center gap-2 mb-10">
            <div className="flex items-center space-x-2">
              <div className={`w-7 h-7 rounded-full ${primaryGradient}`} />
              <span className="text-xl font-bold text-gray-900">Chitran</span>
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3 mt-12 md:mt-0 mb-8">
            {profileImage ? (
              <Image
                src={profileImage}
                alt="Profile"
                width={42}
                height={42}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 bg-gradient-to-br from-[#ff9966] to-[#ff5e62] text-white rounded-full flex items-center justify-center font-bold text-sm">
                {(userName?.[0] ?? '').toUpperCase()}
              </div>
            )}
            <div>
              <p className="font-semibold text-[#2d2d2d]">{userName}</p>
              <p className="text-sm text-[#ff7753]">Creator Free Plan</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3 text-sm font-medium mb-6">
            <SidebarLink href="/dashboard" icon={<Home size={18} />} label="Workspace" />
            <SidebarLink href="/settings" icon={<Settings size={18} />} label="Customize" />
          </nav>

          {/* Create Button */}
          <button
            onClick={onNewCanvas}
            className="flex items-center gap-2 px-4 py-2 bg-[#ff7753] text-white rounded-lg hover:shadow-md transition text-sm font-medium mb-6"
          >
            <FilePlus size={18} />
            New Canvas
          </button>

          {/* Logout Button */}
          <div className="mt-auto pt-4 border-t border-[#f7d9cf]">
            <button
              onClick={onLogout}
              className="flex items-center gap-3 text-[#2d2d2d] hover:text-[#ff7753] transition-colors text-sm mt-4"
            >
              <LogOut size={18} />
              Exit Studio
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

function SidebarLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 text-[#2d2d2d] hover:text-[#ff7753] transition-colors"
    >
      {icon}
      {label}
    </Link>
  );
}
