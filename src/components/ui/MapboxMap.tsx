import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapControls } from './MapControls';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapboxMapProps {
  className?: string;
  startLat?: number;
  startLng?: number;
  endLat?: number;
  endLng?: number;
  interactive?: boolean;
  showControls?: boolean;
  showStyleSelector?: boolean;
  showCustomControls?: boolean;
}

export function MapboxMap({ 
  className = "",
  startLat = 25.6866,
  startLng = -100.3161,
  endLat = 25.6898,
  endLng = -100.3089,
  interactive = true,
  showControls = true,
  showStyleSelector = true,
  showCustomControls = false
}: MapboxMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [currentStyle, setCurrentStyle] = useState('streets-v12');

  // Available map styles
  const mapStyles = [
    { id: 'streets-v12', name: 'Calles', style: 'mapbox://styles/mapbox/streets-v12' },
    { id: 'satellite-streets-v12', name: 'Satélite', style: 'mapbox://styles/mapbox/satellite-streets-v12' },
    { id: 'satellite-v9', name: 'Satélite sin calles', style: 'mapbox://styles/mapbox/satellite-v9' },
    { id: 'outdoors-v12', name: 'Terreno', style: 'mapbox://styles/mapbox/outdoors-v12' },
    { id: 'light-v11', name: 'Claro', style: 'mapbox://styles/mapbox/light-v11' },
    { id: 'dark-v11', name: 'Oscuro', style: 'mapbox://styles/mapbox/dark-v11' }
  ];

  useEffect(() => {
    if (map.current || !mapContainer.current) return; // Initialize map only once

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: `mapbox://styles/mapbox/${currentStyle}`,
      center: [(startLng + endLng) / 2, (startLat + endLat) / 2],
      zoom: 14,
      interactive: interactive,
      // Enable various interactions
      dragPan: interactive,
      dragRotate: interactive,
      scrollZoom: interactive,
      touchZoomRotate: interactive,
      doubleClickZoom: interactive,
      keyboard: interactive,
      // Ensure map fills container properly
      preserveDrawingBuffer: true
    });

    // Add navigation controls (zoom in/out, compass/north)
    if (showControls) {
      const nav = new mapboxgl.NavigationControl({
        visualizePitch: true, // Show pitch control
        showCompass: true,    // Show compass/north button
        showZoom: true        // Show zoom in/out buttons
      });
      map.current.addControl(nav, 'top-right');

      // Add fullscreen control
      const fullscreen = new mapboxgl.FullscreenControl();
      map.current.addControl(fullscreen, 'top-right');

      // Add scale control
      const scale = new mapboxgl.ScaleControl({
        maxWidth: 100,
        unit: 'metric'
      });
      map.current.addControl(scale, 'bottom-left');
    }

    map.current.on('load', () => {
      if (!map.current) return;

      // Add route line
      map.current.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [
              [startLng, startLat],
              [endLng, endLat]
            ]
          }
        }
      });

      map.current.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#3629FF',
          'line-width': 4
        }
      });

      // Add start marker
      const startMarkerEl = document.createElement('div');
      startMarkerEl.className = 'w-[78.5px] h-[76px] rounded-sm border-4 border-[#3629FF] bg-white/90 flex items-center justify-center';
      startMarkerEl.innerHTML = '<div class="text-[#3629FF] font-bold text-xs">INICIO</div>';

      new mapboxgl.Marker({ element: startMarkerEl })
        .setLngLat([startLng, startLat])
        .addTo(map.current);

      // Add end marker
      const endMarkerEl = document.createElement('div');
      endMarkerEl.className = 'relative';
      endMarkerEl.innerHTML = `
        <div class="w-[21px] h-[21px] bg-gradient-to-r from-[#3629FF] to-[#0C68E1] rounded-full relative" style="box-shadow: 0 0 0 12px rgba(59, 58, 255, 0.50)">
          <div class="w-[11px] h-[11px] bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      `;

      new mapboxgl.Marker({ element: endMarkerEl })
        .setLngLat([endLng, endLat])
        .addTo(map.current);

      // Fit map to show both markers
      const bounds = new mapboxgl.LngLatBounds();
      bounds.extend([startLng, startLat]);
      bounds.extend([endLng, endLat]);
      
      map.current.fitBounds(bounds, {
        padding: 40,
        duration: 1000
      });

      // Force resize after map is loaded
      setTimeout(() => {
        if (map.current) {
          map.current.resize();
        }
      }, 100);
    });

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [startLat, startLng, endLat, endLng, interactive, showControls]);

  // Force map resize when container dimensions change
  useEffect(() => {
    if (map.current) {
      // Use a small delay to ensure the container has the right dimensions
      const timeout = setTimeout(() => {
        map.current?.resize();
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [className]); // Re-run when className changes (which might affect size)

  // Add ResizeObserver to detect container size changes
  useEffect(() => {
    if (!mapContainer.current || !map.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (map.current) {
        map.current.resize();
      }
    });

    resizeObserver.observe(mapContainer.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Handle style changes
  useEffect(() => {
    if (map.current) {
      const selectedStyle = mapStyles.find(s => s.id === currentStyle);
      if (selectedStyle) {
        map.current.setStyle(selectedStyle.style);
      }
    }
  }, [currentStyle]);

  const handleStyleChange = (styleId: string) => {
    setCurrentStyle(styleId);
  };

  // Custom control functions
  const handleZoomIn = () => {
    if (map.current) {
      map.current.zoomIn({ duration: 300 });
    }
  };

  const handleZoomOut = () => {
    if (map.current) {
      map.current.zoomOut({ duration: 300 });
    }
  };

  const handleResetNorth = () => {
    if (map.current) {
      map.current.easeTo({ bearing: 0, pitch: 0, duration: 500 });
    }
  };

  const handleCenterRoute = () => {
    if (map.current) {
      const bounds = new mapboxgl.LngLatBounds();
      bounds.extend([startLng, startLat]);
      bounds.extend([endLng, endLat]);
      
      map.current.fitBounds(bounds, {
        padding: 40,
        duration: 1000
      });
    }
  };

  return (
    <div className={`relative ${className}`} style={{ overflow: 'hidden', borderRadius: 'inherit' }}>
      <div ref={mapContainer} className="w-full h-full [&_.mapboxgl-canvas-container]:rounded-[inherit]" style={{ borderRadius: '20px', overflow: 'hidden' }} />
      
      {/* Style Selector */}
      {showStyleSelector && (
        <div className="absolute top-2 left-2 z-10">
          <select
            value={currentStyle}
            onChange={(e) => handleStyleChange(e.target.value)}
            className="bg-white border border-gray-300 rounded-md px-2 py-1 text-xs shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-[#3629FF] focus:border-transparent"
          >
            {mapStyles.map((style) => (
              <option key={style.id} value={style.id}>
                {style.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Custom Controls */}
      {showCustomControls && (
        <MapControls
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onResetNorth={handleResetNorth}
          onCenterRoute={handleCenterRoute}
          className="absolute top-2 right-2 z-10"
        />
      )}
    </div>
  );
}
