import React, { useState } from 'react';
import Card from '../ui/Card';
import { educationData } from '../../utils/placeholderData';
import LessonCard from './LessonCard';
import QuizPanel from './QuizPanel';

const EducationSection: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState<number | null>(null);
  const [quizVisible, setQuizVisible] = useState(false);

  const completedLessons = educationData.lessons.filter(lesson => lesson.completed).length;
  const totalLessons = educationData.lessons.length;
  const progress = (completedLessons / totalLessons) * 100;

  return (
    <section id="education" className="pt-20 md:pt-24 lg:pt-28 pb-8">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="section-title animate-pulse-slow">Learn Crypto Taxes & Finance</h2>
          <p className="text-gray-400 max-w-2xl">
            Master crypto tax concepts and portfolio management through our interactive lessons and quizzes.
          </p>
        </div>

        <div className="mt-4 md:mt-0 bg-gray-800/40 rounded-full h-8 w-56 overflow-hidden flex items-center">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-xs font-medium text-white px-2"
            style={{ width: `${progress}%` }}
          >
            {completedLessons}/{totalLessons} Completed
          </div>
        </div>
      </div>

      {!quizVisible && activeLesson === null && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {educationData.lessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                onStartLesson={() => setActiveLesson(lesson.id)}
              />
            ))}
          </div>

          <div className="mb-8">
            <Card variant="holographic" className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="flex-1">
                  <div className="inline-block bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text font-orbitron font-bold text-lg md:text-xl mb-2">
                    Test Your Knowledge
                  </div>
                  <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-0">
                    Take a quiz to test your understanding of crypto tax concepts and earn badges.
                  </p>
                </div>
                <button
                  onClick={() => setQuizVisible(true)}
                  className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 mt-2 md:mt-0"
                >
                  Take Quiz
                </button>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="font-orbitron text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Your Achievements
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {educationData.badges.map((badge) => (
                <Card
                  key={badge.id}
                  variant={badge.earned ? "holographic" : "glass"}
                  className={`p-4 text-center ${!badge.earned && "opacity-50"}`}
                  hover={badge.earned}
                >
                  <div className="text-4xl mb-2">
                    {badge.earned ? "🏆" : "🔒"}
                  </div>
                  <h4 className="font-orbitron text-sm font-medium mb-1">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {badge.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </>
      )}

      {activeLesson !== null && (
        <Card variant="glass" className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-orbitron text-xl font-semibold">
              {educationData.lessons.find(l => l.id === activeLesson)?.title}
            </h3>
            <button
              onClick={() => setActiveLesson(null)}
              className="text-sm text-gray-400 hover:text-white"
            >
              Back to Lessons
            </button>
          </div>

          <div className="prose prose-invert max-w-none">
            <p>
              This lesson covers the fundamental concepts of {educationData.lessons.find(l => l.id === activeLesson)?.title.toLowerCase()}.
            </p>
            
            <h4>Key Concepts</h4>
            <ul>
              <li>Understanding the basics of capital gains and losses</li>
              <li>How cryptocurrency transactions are taxed</li>
              <li>Record-keeping requirements for crypto transactions</li>
              <li>Tax strategies to optimize your portfolio</li>
            </ul>
            
            <h4>Important Terminology</h4>
            <p>
              <strong>Cost Basis:</strong> The original value of an asset for tax purposes, usually the purchase price plus additional costs.
            </p>
            <p>
              <strong>Capital Gain/Loss:</strong> The difference between the cost basis of an asset and its selling price.
            </p>
            <p>
              <strong>Taxable Event:</strong> Any action that results in a tax liability, such as selling, trading, or using cryptocurrency.
            </p>
            
            <h4>Example Scenario</h4>
            <p>
              Alice buys 1 ETH for $2,000 (her cost basis). Six months later, she sells it for $3,000. 
              She has a short-term capital gain of $1,000, which is taxed at her ordinary income tax rate.
            </p>
            
            <p>
              If Alice had held the ETH for more than a year before selling, it would be a long-term capital gain, 
              potentially qualifying for lower tax rates (0%, 15%, or 20% depending on her tax bracket).
            </p>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={() => setActiveLesson(null)}
              className="px-4 py-2 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800"
            >
              Exit Lesson
            </button>
            <button
              onClick={() => {
                setActiveLesson(null);
                setQuizVisible(true);
              }}
              className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg"
            >
              Complete & Take Quiz
            </button>
          </div>
        </Card>
      )}

      {quizVisible && (
        <QuizPanel
          quiz={educationData.quizzes[0]}
          onClose={() => setQuizVisible(false)}
        />
      )}
    </section>
  );
};

export default EducationSection;