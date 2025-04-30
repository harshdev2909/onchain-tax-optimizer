import React from 'react';
import Card from '../ui/Card';
import { CheckCircle2, BookOpen } from 'lucide-react';

type Lesson = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

type LessonCardProps = {
  lesson: Lesson;
  onStartLesson: () => void;
};

const LessonCard: React.FC<LessonCardProps> = ({ lesson, onStartLesson }) => {
  const getIcon = () => {
    if (lesson.completed) {
      return <CheckCircle2 size={18} className="text-success" />;
    }
    return <BookOpen size={18} className="text-primary" />;
  };

  return (
    <Card 
      variant={lesson.completed ? "holographic" : "glass"} 
      hover
      className="p-5 h-full flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-orbitron font-semibold text-md">{lesson.title}</h3>
          {getIcon()}
        </div>
        <p className="text-gray-400 text-sm mb-4">{lesson.description}</p>
      </div>

      <button
        onClick={onStartLesson}
        className={`w-full px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium
        ${
          lesson.completed
            ? "bg-gray-800 hover:bg-gray-700 text-white"
            : "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-glow"
        }`}
      >
        {lesson.completed ? "Review Lesson" : "Start Lesson"}
      </button>
    </Card>
  );
};

export default LessonCard;