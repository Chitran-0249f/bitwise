interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
}

export default function PlaceholderImage({
  width = 800,
  height = 600,
  text = "Image Placeholder",
  className = ""
}: PlaceholderImageProps) {
  return (
    <div
      className={`bg-gray-200 flex items-center justify-center ${className}`}
      style={{ width: `${width}px`, height: `${height}px`, minHeight: `${height}px` }}
    >
      <div className="text-center text-gray-400">
        <svg
          className="mx-auto mb-4"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <p className="text-sm font-medium">{text}</p>
        <p className="text-xs mt-1">{width} × {height}</p>
      </div>
    </div>
  );
}
