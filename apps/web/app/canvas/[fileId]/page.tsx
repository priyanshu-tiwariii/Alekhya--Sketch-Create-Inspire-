'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; 

export default function CanvasPage() {
  const [fileId, setFileId] = useState<string | null>(null);
  const params = useParams(); 

  useEffect(() => {
    if (params?.fileId) {
      setFileId(params.fileId as string);
    }
  }, [params]);

  return (
    <div>
      <h1 className="text-xl font-semibold">Canvas</h1>
      <p className="text-sm text-gray-600">Canvas page</p>
      {fileId ? (
        <p className="mt-2 font-medium text-orange-500">File ID: {fileId}</p>
      ) : (
        <p>Loading File ID...</p>
      )}
    </div>
  );
}