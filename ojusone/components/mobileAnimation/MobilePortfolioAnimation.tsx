
// 'use client';

// import { ChevronRight, ChevronsUp, ChevronsDown } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';

// const MobilePortfolioAnimation = () => {
//   const [activeCategory, setActiveCategory] = useState(3); // Start from bottom (Out-of-form)
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   const categories = [
//     { name: 'In-form', status: 'Performing great', color: 'bg-green-100', icon: <ChevronsUp className="text-green-800" />, textColor: 'text-green-800', ring: 'ring-green-500' },
//     { name: 'On-track', status: 'Performing good', color: 'bg-green-200', icon: '↑', textColor: 'text-green-800', ring: 'ring-green-400' },
//     { name: 'Off-track', status: 'Don\'t invest further', color: 'bg-orange-100', icon: '↓', textColor: 'text-orange-700', ring: 'ring-orange-500' },
//     { name: 'Out-of-form', status: 'Exit now', color: 'bg-red-100', icon: <ChevronsDown className="text-red-800" />, textColor: 'text-red-800', ring: 'ring-red-500' }
//   ];

//   // Auto-cycle every 2s (bottom to top)
//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length);
//     }, 2000);

//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, [categories.length]);

//   return (
//     <div className=" pt-4 pb-2 w-[80%] max-w-md mx-auto lg:mr-6">
     
//       <div className="relative w-full mx-auto" style={{ maxWidth: '85%' }}> 
        
//         {/* Left Side Buttons (Volume & Silent) */}
//         <div className="absolute -left-[3px] top-[96px] w-[3px] h-12 bg-gradient-to-b from-gray-700 to-gray-900 rounded-l-sm z-20" style={{ boxShadow: 'inset 1px 0 1px rgba(0,0,0,0.5)' }}></div>
       
//         <div className="absolute -left-[3px] top-[152px] w-[3px] h-16 bg-gradient-to-b from-gray-700 to-gray-900 rounded-l-sm z-20" style={{ boxShadow: 'inset 1px 0 1px rgba(0,0,0,0.5)' }}></div>
        
//         {/* Right Side Button (Power) */}
//         <div className="absolute -right-[3px] top-[120px] w-[3px] h-20 bg-gradient-to-b from-gray-700 to-gray-900 rounded-r-sm z-20" style={{ boxShadow: 'inset -1px 0 1px rgba(0,0,0,0.5)' }}></div>

   
//         <div className="relative h-[420px] rounded-t-[52px] bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden border-t-[8px] border-l-[8px] border-r-[8px] border-gray-800" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), inset 0 2px 4px rgba(0,0,0,0.2)' }}>
          
//           {/* Dynamic Island / Notch */}
//           <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-7 bg-black rounded-full z-10" style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.3)' }}></div>

//           {/* Screen Content */}
//           <div className="absolute inset-0 bg-white rounded-t-[44px]" style={{ boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }}>
//             <div className="flex flex-col space-y-3 p-4 pt-10 pb-4">
//               {/* Header */}
//               <div className="text-xs mt-6 text-black">
//                <span className='font-bold'> Portfolio Performance</span> in Jan
//                 <br />
//                 <span className="text-xs opacity-80">Powered by 20 years of data</span>
//               </div>

//               <div>
//                 {/* Categories */}
//                 {categories.map((category, index) => {
//                   const isActive = index === activeCategory;
//                   return (
//                     <div
//                       key={index}
//                       className={`flex items-center p-5 rounded-lg transition-all duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] ${
//                         isActive
//                           ? `${category.color} ${category.textColor} ring-2 ${category.ring}`
//                           : `${category.color} ${category.textColor}`
//                       }`}
//                       style={{
//                         transform: isActive
//                           ? 'translateY(-12px) scale(1.12)'
//                           : 'translateY(0) scale(1)',
//                         zIndex: isActive ? 30 - index : 10 - index,
//                         boxShadow: isActive
//                           ? '0 10px 20px -5px rgba(0,0,0,0.15), 0 4px 6px -2px rgba(0,0,0,0.05)'
//                           : '0 2px 4px rgba(0,0,0,0.03)',
//                         willChange: 'transform',
//                       }}
//                     >
//                       {/* Icon Circle */}
//                       <div
//                         className={`w-9 h-9 rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold ${
//                           isActive
//                             ? category.name === 'In-form' || category.name === 'On-track'
//                               ? 'bg-green-300 text-green-900'
//                               : category.name === 'Off-track'
//                                 ? 'bg-orange-300 text-orange-900'
//                                 : 'bg-red-300 text-red-900'
//                             : category.name === 'In-form' || category.name === 'On-track'
//                               ? 'bg-green-200 text-green-800'
//                               : category.name === 'Off-track'
//                                 ? 'bg-orange-200 text-orange-800'
//                                 : 'bg-red-200 text-red-800'
//                         }`}
//                       >
//                         {category.icon}
//                       </div>

//                       {/* Category Info */}
//                       <div className="flex-1 min-w-0">
//                         <div className={`font-semibold truncate ${isActive ? 'text-base' : 'text-sm'}`}>
//                           {category.name}
//                         </div>
//                         <div className={`opacity-90 truncate ${isActive ? 'text-sm font-medium' : 'text-xs'}`}>
//                           {category.status}
//                         </div>
//                       </div>

//                       {/* Arrow */}
//                       <ChevronRight
//                         size={isActive ? 18 : 14}
//                         className={`transition-all duration-300 ${
//                           isActive ? 'text-gray-700 ml-1' : 'text-gray-400'
//                         }`}
//                       />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobilePortfolioAnimation;

'use client';

import { ChevronRight, ChevronsUp, ChevronsDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const MobilePortfolioAnimation = () => {
  const [activeCategory, setActiveCategory] = useState(3); // Start from bottom (Out-of-form)
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const categories = [
    { name: 'In-form', status: 'Performing great', color: 'bg-green-100', icon: <ChevronsUp className="text-green-800" />, count: 8, textColor: 'text-green-800', ring: 'ring-green-500' },
    { name: 'On-track', status: 'Performing good', color: 'bg-green-200', icon: '↑', count: 12, textColor: 'text-green-800', ring: 'ring-green-400' },
    { name: 'Off-track', status: 'Don\'t invest further', color: 'bg-orange-100', icon: '↓', count: 3, textColor: 'text-orange-700', ring: 'ring-orange-500' },
    { name: 'Out-of-form', status: 'Exit now', color: 'bg-red-100', icon: <ChevronsDown className="text-red-800" />, count: 5, textColor: 'text-red-800', ring: 'ring-red-500' }
  ];

  // Auto-cycle every 2s (bottom to top)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length);
    }, 2000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [categories.length]);

  return (
    <div className=" pt-4 pb-2  lg:w-[90%] lg:max-w-md mx-auto lg:mr-6 font-poppins">
     
      <div className="relative w-full md:w-[80%] mx-auto" >
        
        {/* Left Side Buttons (Volume & Silent) */}
        <div className="absolute -left-[3px] top-[96px] w-[3px] h-12 bg-gradient-to-b from-gray-700 to-gray-900 rounded-l-sm z-20" style={{ boxShadow: 'inset 1px 0 1px rgba(0,0,0,0.5)' }}></div>
       
        <div className="absolute -left-[3px] top-[152px] w-[3px] h-16 bg-gradient-to-b from-gray-700 to-gray-900 rounded-l-sm z-20" style={{ boxShadow: 'inset 1px 0 1px rgba(0,0,0,0.5)' }}></div>
        
        {/* Right Side Button (Power) */}
        <div className="absolute -right-[3px] top-[120px] w-[3px] h-20 bg-gradient-to-b from-gray-700 to-gray-900 rounded-r-sm z-20" style={{ boxShadow: 'inset -1px 0 1px rgba(0,0,0,0.5)' }}></div>

   
        <div className="relative h-[485px] md:h-[500px] rounded-t-[52px] bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden border-t-[8px] border-l-[8px] border-r-[8px] border-gray-800" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), inset 0 2px 4px rgba(0,0,0,0.2)' }}>
          
          {/* Dynamic Island / Notch */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-7 bg-black rounded-full z-10" style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.3)' }}></div>

          {/* Screen Content */}
          <div className="absolute inset-0 bg-white rounded-t-[44px]" style={{ boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }}>
            <div className="flex flex-col space-y-3 p-4 pt-10 pb-4">
              {/* Header */}
              <div className="text-xs mt-6 pb-[23px] md:pb-0 text-black">
               <span className='font-bold'> Portfolio Performance</span> This Month 
                <br />
                <span className="text-xs opacity-80">Powered by 20 years of data</span>
              </div>

              <div>
                {/* Categories */}
                {categories.map((category, index) => {
                  const isActive = index === activeCategory;
                  return (
                    <div
                      key={index}
                      className={`flex items-center p-2 md:p-5 mt-2 h-[70px] md:h-[77px] rounded-lg transition-all duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] ${
                        isActive
                          ? `${category.color} ${category.textColor} ring-2 ${category.ring}`
                          : `${category.color} ${category.textColor}`
                      }`}
                      style={{
                        transform: isActive
                          ? 'translateY(-12px) scale(1.12)'
                          : 'translateY(0) scale(1)',
                        zIndex: isActive ? 30 - index : 10 - index,
                        boxShadow: isActive
                          ? '0 10px 20px -5px rgba(0,0,0,0.15), 0 4px 6px -2px rgba(0,0,0,0.05)'
                          : '0 2px 4px rgba(0,0,0,0.03)',
                        willChange: 'transform',
                      }}
                    >
                      {/* Icon Circle with Count Badge */}
                      <div className="relative mr-3 flex-shrink-0">
                        {/* Count Badge - Only show when active, positioned on top-left of icon */}
                        {isActive && (
                          <div className={`absolute -left-1 -top-1 w-5 h-5 rounded-full flex items-center justify-center text-[8px] md:text-[11px] font-bold z-10 ${
                            category.name === 'In-form' || category.name === 'On-track'
                              ? 'bg-white text-green-900'
                              : category.name === 'Off-track'
                                ? 'bg-white text-orange-900'
                                : 'bg-white text-red-900'
                          }`} style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                            {category.count}
                          </div>
                        )}
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center font-bold ${
                            isActive
                              ? category.name === 'In-form' || category.name === 'On-track'
                                ? 'bg-green-300 text-green-900'
                                : category.name === 'Off-track'
                                  ? 'bg-orange-300 text-orange-900'
                                  : 'bg-red-300 text-red-900'
                              : category.name === 'In-form' || category.name === 'On-track'
                                ? 'bg-green-200 text-green-800'
                                : category.name === 'Off-track'
                                  ? 'bg-orange-200 text-orange-800'
                                  : 'bg-red-200 text-red-800'
                          }`}
                        >
                          {category.icon}
                        </div>
                      </div>

                      {/* Category Info */}
                      <div className="flex-1 min-w-0">
                        <div className={`font-semibold truncate ${isActive ? 'text-base' : 'text-sm'}`}>
                          {category.name}
                        </div>
                        <div className={`opacity-90 truncate ${isActive ? 'text-sm font-medium' : 'text-xs'}`}>
                          {category.status}
                        </div>
                      </div>

                      {/* Arrow */}
                      <ChevronRight
                        size={isActive ? 18 : 14}
                        className={`transition-all duration-300 ${
                          isActive ? 'text-gray-700 ml-1' : 'text-gray-400'
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePortfolioAnimation;