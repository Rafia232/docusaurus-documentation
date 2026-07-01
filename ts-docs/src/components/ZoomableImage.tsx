import React, { useState } from 'react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  maxHeight?: string;
}

export default function ZoomableImage({ src, alt, maxHeight = 'none' }: ZoomableImageProps) {
  const [zoom, setZoom] = useState(100);
  const [naturalWidth, setNaturalWidth] = useState<number | null>(null);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 20, 300));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 20, 50));
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZoom(Number(e.target.value));
  };

  const handleReset = () => {
    setZoom(100);
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setNaturalWidth(e.currentTarget.naturalWidth);
  };

  return (
    <div style={{
      margin: '2rem 0',
      border: '1px solid var(--ifm-color-emphasis-200)',
      borderRadius: '12px',
      overflow: 'hidden',
      background: 'var(--ifm-background-surface-color, #f8f9fa)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Control Panel */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '0.75rem 1.25rem',
        borderBottom: '1px solid var(--ifm-color-emphasis-200)',
        background: 'var(--ifm-color-emphasis-100, #f1f3f5)',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={handleZoomOut}
            disabled={zoom <= 50}
            style={{
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              border: '1px solid var(--ifm-color-emphasis-300)',
              background: 'var(--ifm-background-color)',
              color: 'var(--ifm-color-emphasis-800)',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.2s',
              opacity: zoom <= 50 ? 0.5 : 1
            }}
            title="Zoom Out"
          >
            －
          </button>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, minWidth: '3.5rem', textAlign: 'center', color: 'var(--ifm-color-emphasis-800)' }}>
            {zoom}%
          </span>
          <button
            onClick={handleZoomIn}
            disabled={zoom >= 300}
            style={{
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              border: '1px solid var(--ifm-color-emphasis-300)',
              background: 'var(--ifm-background-color)',
              color: 'var(--ifm-color-emphasis-800)',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.2s',
              opacity: zoom >= 300 ? 0.5 : 1
            }}
            title="Zoom In"
          >
            ＋
          </button>
        </div>

        {/* Zoom Slider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1, minWidth: '150px', maxWidth: '300px' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--ifm-color-emphasis-600)' }}>50%</span>
          <input
            type="range"
            min="50"
            max="300"
            value={zoom}
            onChange={handleSliderChange}
            style={{
              flex: 1,
              cursor: 'pointer',
              accentColor: 'var(--ifm-color-primary)',
              height: '6px',
              borderRadius: '3px'
            }}
          />
          <span style={{ fontSize: '0.75rem', color: 'var(--ifm-color-emphasis-600)' }}>300%</span>
        </div>

        <button
          onClick={handleReset}
          style={{
            padding: '0.4rem 0.8rem',
            borderRadius: '6px',
            border: 'none',
            background: 'var(--ifm-color-primary)',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: 500,
            transition: 'opacity 0.2s'
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Reset
        </button>
      </div>

      {/* Image Container with Scrollbars */}
      <div style={{
        overflow: 'auto',
        maxHeight: maxHeight,
        padding: '1.5rem',
        background: 'var(--ifm-background-surface-color, #ffffff)',
        textAlign: 'center'
      }}>
        <img
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          style={{
            width: naturalWidth ? `${naturalWidth * (zoom / 100)}px` : '100%',
            maxWidth: zoom <= 100 ? '100%' : 'none',
            height: 'auto',
            transition: 'width 0.2s ease-in-out',
            display: 'block',
            margin: '0 auto',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            borderRadius: '4px'
          }}
        />
      </div>
    </div>
  );
}
