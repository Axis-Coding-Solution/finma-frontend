
interface GaugeChartProps {
  value: number;
  maxValue: number;
}

const GaugeChart = ({ value, maxValue }: GaugeChartProps) => {
    
    const percentage = (value / maxValue) * 100;
    const rotation = (percentage / 100) * 180; // Converts the percentage to degrees (0-180)
  return (
    <div className="flex justify-center items-center">
    <div className="relative w-64 h-32">
      {/* Background Arc */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg className="w-full h-full">
          <circle
            cx="50%"
            cy="100%"
            r="50%"
            stroke="lightgray"
            strokeWidth="20"
            fill="none"
            strokeDasharray="157 157"
            strokeDashoffset="0"
          />
        </svg>
      </div>
      
      {/* Foreground Arc */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg className="w-full h-full">
          <circle
            cx="50%"
            cy="100%"
            r="50%"
            stroke="blue"
            strokeWidth="20"
            fill="none"
            strokeDasharray="157 157"
            strokeDashoffset={`-${157 - (157 * percentage) / 100}`}
            transform="rotate(-90 50 50)"
          />
        </svg>
      </div>
      
      {/* Arrow */}
      <div
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="w-1 h-24   bg-red-500"></div>
      </div>
      
      {/* Center Circle */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-10 h-10 bg-white rounded-full border border-gray-300"></div>
      </div>
    </div>
  </div>
  )
}

export default GaugeChart