import React from 'react';

interface BadgeProps {
  label: string;
  state: 'success' | 'error';
}

export const Badges: React.FC<BadgeProps> = ({ label, state }) => {
  const badgeStyle = state === 'success'
    ? 'bg-green-500 text-white'
    : 'bg-red-500 text-white';

  return (
    <span className={`px-3 py-1 rounded-full ${badgeStyle}`}>
      {label}
    </span>
  );
};