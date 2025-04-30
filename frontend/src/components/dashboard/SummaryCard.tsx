import React from 'react';
import Card from '../ui/Card';
import { TrendingUp, TrendingDown, MinusIcon } from 'lucide-react';

type SummaryCardProps = {
  title: string;
  value: string;
  icon: string;
  trend: string;
  trendUp?: boolean;
  trendDown?: boolean;
  trendNeutral?: boolean;
};

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  icon,
  trend,
  trendUp = false,
  trendDown = false,
  trendNeutral = false,
}) => {
  return (
    <Card variant="glass" hover tilt className="p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-400">{title}</h3>
        <span className="text-2xl" role="img" aria-label={title}>
          {icon}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-bold text-white">{value}</p>
        <div className="flex items-center gap-1">
          {trendUp && <TrendingUp size={16} className="text-success" />}
          {trendDown && <TrendingDown size={16} className="text-error" />}
          {trendNeutral && <MinusIcon size={16} className="text-warning" />}
          <p className={`text-xs ${trendUp ? 'text-success' : trendDown ? 'text-error' : 'text-warning'}`}>
            {trend}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default SummaryCard;