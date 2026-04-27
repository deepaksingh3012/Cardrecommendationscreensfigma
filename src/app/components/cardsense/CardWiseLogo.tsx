export function CardWiseLogo({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) {
  const sizes = {
    small: { container: 'w-8 h-8', text: 'text-lg' },
    default: { container: 'w-10 h-10', text: 'text-xl' },
    large: { container: 'w-16 h-16', text: 'text-3xl' }
  };

  const { container, text } = sizes[size];

  return (
    <div className="flex items-center gap-3">
      {/* Logo Icon */}
      <div className={`${container} bg-gradient-to-br from-[#2156F3] to-[#1a45c9] rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden`}>
        {/* Card layers effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-3/4 h-3/4 bg-white opacity-20 rounded-lg transform rotate-12"></div>
          <div className="absolute top-1/3 left-1/3 w-3/4 h-3/4 bg-white opacity-30 rounded-lg transform rotate-6"></div>
        </div>
        {/* Main card icon */}
        <svg className="w-1/2 h-1/2 text-white relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      </div>

      {/* App Name */}
      <div className="flex flex-col leading-tight">
        <span className={`font-bold text-gray-900 ${text}`}>
          Card<span className="text-[#2156F3]">Wise</span>
        </span>
      </div>
    </div>
  );
}
