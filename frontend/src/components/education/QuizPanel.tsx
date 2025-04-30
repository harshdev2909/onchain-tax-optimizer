import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { X } from 'lucide-react';

type Quiz = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

type QuizPanelProps = {
  quiz: Quiz;
  onClose: () => void;
};

const QuizPanel: React.FC<QuizPanelProps> = ({ quiz, onClose }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    setIsSubmitted(true);
    setIsCorrect(selectedOption === quiz.correctAnswer);
  };

  return (
    <Card variant="holographic" className="p-6 relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
        aria-label="Close quiz"
      >
        <X size={20} />
      </button>

      <h3 className="font-orbitron text-xl font-semibold mb-6 pr-8">
        Tax Knowledge Quiz
      </h3>

      <div className="mb-6">
        <h4 className="text-lg font-medium mb-4">{quiz.question}</h4>
        <div className="space-y-3">
          {quiz.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !isSubmitted && setSelectedOption(index)}
              className={`w-full p-4 rounded-lg text-left transition-all duration-200 ${
                isSubmitted
                  ? index === quiz.correctAnswer
                    ? "bg-success/20 border-success border"
                    : selectedOption === index
                    ? "bg-error/20 border-error border"
                    : "bg-gray-800/50 border-gray-700 border"
                  : selectedOption === index
                  ? "bg-primary/20 border-primary border"
                  : "bg-gray-800/50 border-gray-700 border hover:bg-gray-800"
              }`}
              disabled={isSubmitted}
            >
              <div className="flex items-center">
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center mr-3 ${
                    isSubmitted
                      ? index === quiz.correctAnswer
                        ? "bg-success text-white"
                        : selectedOption === index
                        ? "bg-error text-white"
                        : "bg-gray-700 text-white"
                      : selectedOption === index
                      ? "bg-primary text-white"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </div>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {isSubmitted && (
        <div
          className={`p-4 rounded-lg mb-6 ${
            isCorrect ? "bg-success/20 border-success border" : "bg-error/20 border-error border"
          }`}
        >
          <h4 className={`font-medium ${isCorrect ? "text-success" : "text-error"}`}>
            {isCorrect ? "Correct!" : "Incorrect"}
          </h4>
          <p className="text-gray-300 text-sm mt-1">
            {isCorrect
              ? "Great job! You've earned 10 points toward your rank."
              : `The correct answer is ${String.fromCharCode(65 + quiz.correctAnswer)}: ${
                  quiz.options[quiz.correctAnswer]
                }`}
          </p>
        </div>
      )}

      <div className="flex justify-between">
        {isSubmitted ? (
          <Button variant="primary" onClick={onClose} full>
            Continue Learning
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={selectedOption === null}
            full
          >
            Submit Answer
          </Button>
        )}
      </div>
    </Card>
  );
};

export default QuizPanel;