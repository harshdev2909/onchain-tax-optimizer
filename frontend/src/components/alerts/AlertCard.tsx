import React from 'react';
import Card from '../ui/Card';
import { AlertTriangle, Clock, TrendingDown, X } from 'lucide-react';

type Alert = {
  id: number;
  message: string;
  priority: 'high' | 'medium' | 'low';
};

type AlertCardProps = {
  alert: Alert;
  onDismiss: () => void;
};

const AlertCard: React.FC<AlertCardProps> = ({ alert, onDismiss }) => {
  const getPriorityStyles = () => {
    switch (alert.priority) {
      case 'high':
        return {
          bg: 'bg-error/10',
          border: 'border-error/30',
          icon: <AlertTriangle size={20} className="text-error" />,
          badge: 'bg-error/20 text-error',
          label: 'High Priority',
        };
      case 'medium':
        return {
          bg: 'bg-warning/10',
          border: 'border-warning/30',
          icon: <Clock size={20} className="text-warning" />,
          badge: 'bg-warning/20 text-warning',
          label: 'Medium Priority',
        };
      case 'low':
        return {
          bg: 'bg-primary/10',
          border: 'border-primary/30',
          icon: <TrendingDown size={20} className="text-primary" />,
          badge: 'bg-primary/20 text-primary',
          label: 'Low Priority',
        };
      default:
        return {
          bg: 'bg-gray-800/50',
          border: 'border-gray-700',
          icon: <AlertTriangle size={20} className="text-gray-400" />,
          badge: 'bg-gray-700 text-gray-300',
          label: 'Normal',
        };
    }
  };

  const styles = getPriorityStyles();

  return (
    <Card 
      variant="glass" 
      className={`p-4 ${styles.bg} border ${styles.border} hover:brightness-110 transition-all`}
    >
      <div className="flex items-start">
        <div className="mr-3 mt-1">
          {styles.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className={`text-xs px-2 py-0.5 rounded-full ${styles.badge}`}>
              {styles.label}
            </span>
            <button 
              onClick={onDismiss}
              className="text-gray-500 hover:text-gray-300"
              aria-label="Dismiss alert"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-white">{alert.message}</p>
        </div>
      </div>
    </Card>
  );
};

export default AlertCard;