import { useState, useCallback } from 'react';

export default function useGlobalModel() {
  const [title, setTitle] = useState('首页');
  return {
    title,
    setTitle,
  };
}
