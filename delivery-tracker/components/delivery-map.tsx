"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"

export default function DeliveryMap() {
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [activeTab, setActiveTab] = useState("Terreno")
  const mapRef = useRef<HTMLDivElement>(null)

  const tabs = ["Terreno", "Tráfico", "Tránsito", "Reportes"]

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 2))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 0.6))
  }

  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
      {/* Map Container */}
      <div
        ref={mapRef}
        className="relative h-[600px] overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {/* Street Grid Pattern */}
        <div
          className="absolute inset-0 transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
            transformOrigin: "center",
          }}
        >
          {/* Grid lines */}
          <svg className="absolute inset-0 h-full w-full" style={{ width: "100%", height: "100%" }}>
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgb(203 213 225)" strokeWidth="1" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Delivery Route Path */}
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            width="300"
            height="400"
            viewBox="0 0 300 400"
          >
            {/* Route shadow for depth */}
            <path
              d="M 50 80 Q 80 120, 100 160 T 150 240 Q 180 280, 200 320"
              fill="none"
              stroke="rgba(66, 133, 244, 0.2)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(2, 2)"
            />
            {/* Main route */}
            <path
              d="M 50 80 Q 80 120, 100 160 T 150 240 Q 180 280, 200 320"
              fill="none"
              stroke="#4285F4"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-[dash_2s_ease-in-out_infinite]"
              strokeDasharray="10 5"
            />
          </svg>

          {/* Start Point - Delivery Person */}
          <div
            className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2"
            style={{ pointerEvents: "none" }}
          >
            <div className="relative">
              {/* Pulsing ring animation */}
              <div className="absolute inset-0 -m-2 animate-ping rounded-full bg-blue-400 opacity-75" />
              {/* Profile picture with gradient border */}
              <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 p-1 shadow-lg">
                <div className="h-full w-full overflow-hidden rounded-full bg-white">
                  <img src="/delivery-person-avatar.png" alt="Delivery person" className="h-full w-full object-cover" />
                </div>
              </div>
              {/* Status indicator */}
              <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-white bg-green-500 shadow-md" />
            </div>
          </div>

          {/* End Point - Destination */}
          <div
            className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2"
            style={{ pointerEvents: "none" }}
          >
            <div className="relative">
              {/* Destination marker */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 shadow-lg">
                <div className="h-3 w-3 rounded-full bg-white" />
              </div>
              {/* Marker pin */}
              <div className="absolute left-1/2 top-full h-2 w-1 -translate-x-1/2 bg-red-500" />
            </div>
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="absolute bottom-24 right-4 flex flex-col gap-2">
          <Button
            size="icon"
            variant="secondary"
            className="h-10 w-10 rounded-full bg-white shadow-lg hover:bg-slate-50"
            onClick={handleZoomIn}
          >
            <Plus className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-10 w-10 rounded-full bg-white shadow-lg hover:bg-slate-50"
            onClick={handleZoomOut}
          >
            <Minus className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-slate-200 bg-white px-2 py-3">
        <div className="flex items-center justify-around">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes dash {
          0%, 100% {
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dashoffset: 30;
          }
        }
      `}</style>
    </div>
  )
}
