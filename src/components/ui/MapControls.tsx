import { useState } from 'react';
import { ZoomIn, ZoomOut, Navigation, RotateCcw } from 'lucide-react';

interface MapControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetNorth: () => void;
  onCenterRoute: () => void;
  className?: string;
}

export function MapControls({ 
  onZoomIn, 
  onZoomOut, 
  onResetNorth, 
  onCenterRoute,
  className = "" 
}: MapControlsProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {/* Zoom In */}
      <button
        onClick={onZoomIn}
        className="bg-white border border-gray-200 rounded-lg size-10 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow hover:bg-gray-50"
        title="Acercar"
      >
        <ZoomIn className="w-5 h-5 text-gray-700" />
      </button>

      {/* Zoom Out */}
      <button
        onClick={onZoomOut}
        className="bg-white border border-gray-200 rounded-lg size-10 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow hover:bg-gray-50"
        title="Alejar"
      >
        <ZoomOut className="w-5 h-5 text-gray-700" />
      </button>

      {/* Reset North */}
      <button
        onClick={onResetNorth}
        className="bg-white border border-gray-200 rounded-lg size-10 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow hover:bg-gray-50"
        title="Norte arriba"
      >
        <Navigation className="w-5 h-5 text-gray-700" />
      </button>

      {/* Center Route */}
      <button
        onClick={onCenterRoute}
        className="bg-white border border-gray-200 rounded-lg size-10 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow hover:bg-gray-50"
        title="Centrar ruta"
      >
        <RotateCcw className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
}
