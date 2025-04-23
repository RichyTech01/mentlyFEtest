import React, { useEffect, useRef } from 'react';

interface ChartData {
  name: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  data: ChartData[];
  size?: number;
  thickness?: number;
}

export const DonutChart: React.FC<DonutChartProps> = ({ 
  data, 
  size = 180, 
  thickness = 30 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawDonut = (context: CanvasRenderingContext2D) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2 - thickness / 2;
    
    let currentAngle = -0.5 * Math.PI;
    
    // Draw each segment
    data.forEach((item) => {
      const segmentAngle = (2 * Math.PI * item.value) / total;
      
      context.beginPath();
      context.arc(
        centerX,
        centerY,
        radius,
        currentAngle,
        currentAngle + segmentAngle
      );
      context.arc(
        centerX,
        centerY,
        radius - thickness,
        currentAngle + segmentAngle,
        currentAngle,
        true
      );
      context.closePath();
      
      context.fillStyle = item.color;
      context.fill();
      
      currentAngle += segmentAngle;
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        // Clear canvas
        context.clearRect(0, 0, size, size);
        
        // Set canvas dimensions
        canvas.width = size;
        canvas.height = size;
        
        // Draw the chart
        drawDonut(context);
      }
    }
  }, [data, size, thickness]);

  return <canvas ref={canvasRef} width={size} height={size} />;
};