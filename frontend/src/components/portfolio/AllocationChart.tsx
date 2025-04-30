import React, { useEffect, useRef } from 'react';

type ChartData = {
  asset: string;
  percentage: number;
  value: string;
};

type AllocationChartProps = {
  data: ChartData[];
  showOptimized?: boolean;
  optimizedData?: ChartData[];
};

const AllocationChart: React.FC<AllocationChartProps> = ({ 
  data, 
  showOptimized = false,
  optimizedData = []
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    
    // Set dimensions
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 40;
    
    // Colors for chart segments
    const colors = [
      'rgba(0, 183, 255, 0.8)',    // Primary color
      'rgba(123, 44, 255, 0.8)',   // Secondary color
      'rgba(255, 62, 154, 0.8)',   // Accent color
    ];
    
    // Draw chart background
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(30, 30, 45, 0.5)';
    ctx.fill();
    
    // Draw the chart segments
    const chartData = showOptimized ? optimizedData : data;
    
    let startAngle = 0;
    chartData.forEach((item, index) => {
      // Calculate segment angle
      const segmentAngle = (item.percentage / 100) * 2 * Math.PI;
      
      // Draw segment
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + segmentAngle);
      ctx.closePath();
      
      // Fill with color
      ctx.fillStyle = colors[index % colors.length];
      ctx.fill();
      
      // Draw segment border
      ctx.strokeStyle = 'rgba(10, 10, 20, 0.8)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Update starting angle for next segment
      startAngle += segmentAngle;
    });
    
    // Draw inner circle for donut effect
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(10, 10, 15, 0.8)';
    ctx.fill();
    
    // Add glass effect highlight
    ctx.beginPath();
    ctx.arc(centerX - radius * 0.2, centerY - radius * 0.2, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fill();
    
    // Add center text
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'white';
    ctx.font = 'bold 16px Inter';
    ctx.fillText(showOptimized ? 'Optimized' : 'Current', centerX, centerY - 10);
    ctx.font = '14px Inter';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillText('Allocation', centerX, centerY + 10);
    
  }, [data, showOptimized, optimizedData]);
  
  return (
    <div className="flex items-center justify-center w-full h-full">
      <canvas 
        ref={canvasRef} 
        width={300}
        height={300}
        className="max-w-full max-h-full"
      />
    </div>
  );
};

export default AllocationChart;