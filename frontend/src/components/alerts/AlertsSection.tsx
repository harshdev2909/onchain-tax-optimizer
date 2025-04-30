import React, { useState } from 'react';
import Card from '../ui/Card';
import { alertsData } from '../../utils/placeholderData';
import { Bell, BellOff, Trash2 } from 'lucide-react';
import Button from '../ui/Button';
import AlertCard from './AlertCard';

const AlertsSection: React.FC = () => {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [inAppNotifications, setInAppNotifications] = useState(true);
  const [alerts, setAlerts] = useState(alertsData);

  const handleDismissAll = () => {
    setAlerts([]);
  };

  const handleDismissAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <section id="alerts" className="pt-20 md:pt-24 lg:pt-28 pb-8">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="section-title animate-pulse-slow">Tax & Portfolio Alerts</h2>
          <p className="text-gray-400 max-w-2xl">
            Stay informed about important tax deadlines, optimization opportunities, and portfolio risks.
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex items-center space-x-4">
          <button
            onClick={() => setPushNotifications(!pushNotifications)}
            className={`flex items-center px-3 py-1.5 rounded-full text-sm ${
              pushNotifications 
                ? 'bg-primary/20 text-primary border border-primary/30' 
                : 'bg-gray-800 text-gray-400 border border-gray-700'
            }`}
          >
            {pushNotifications ? <Bell size={14} className="mr-1.5" /> : <BellOff size={14} className="mr-1.5" />}
            Push
          </button>
          
          <button
            onClick={() => setInAppNotifications(!inAppNotifications)}
            className={`flex items-center px-3 py-1.5 rounded-full text-sm ${
              inAppNotifications 
                ? 'bg-primary/20 text-primary border border-primary/30' 
                : 'bg-gray-800 text-gray-400 border border-gray-700'
            }`}
          >
            {inAppNotifications ? <Bell size={14} className="mr-1.5" /> : <BellOff size={14} className="mr-1.5" />}
            In-App
          </button>
          
          {alerts.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              icon={<Trash2 size={14} />}
              onClick={handleDismissAll}
            >
              Dismiss All
            </Button>
          )}
        </div>
      </div>

      {alerts.length === 0 ? (
        <Card variant="glass" className="p-8 text-center">
          <div className="text-6xl mb-4 opacity-30">🔔</div>
          <h3 className="text-xl font-orbitron mb-2">No Alerts</h3>
          <p className="text-gray-400 max-w-md mx-auto">
            You're all caught up! We'll notify you when there are new tax savings opportunities or important deadlines.
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {alerts.map((alert) => (
            <AlertCard
              key={alert.id}
              alert={alert}
              onDismiss={() => handleDismissAlert(alert.id)}
            />
          ))}
        </div>
      )}

      <div className="mt-8">
        <Card variant="holographic" className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="flex-1">
              <div className="inline-block bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text font-orbitron font-bold text-lg md:text-xl mb-2">
                Customize Your Alert Preferences
              </div>
              <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-0">
                Fine-tune which alerts you receive and how they are delivered.
                Set thresholds for tax savings, risk warnings, and more.
              </p>
            </div>
            <Button
              variant="primary"
              size="lg"
              className="mt-2 md:mt-0"
            >
              Manage Preferences
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AlertsSection;