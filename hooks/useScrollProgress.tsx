import { useState, useEffect } from 'react';

const useScrollProgress = (): number => {
  const [completion, setCompletion] = useState<number>(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      console.log(`Current Progress: ${currentProgress}, Scroll Height: ${scrollHeight}`);

      if (scrollHeight > 0) {
        const newCompletion = (currentProgress / scrollHeight) * 100;
        console.log(`New Completion: ${newCompletion}`);
        setCompletion(Number(newCompletion.toFixed(2)));
      }
    };

    // Add event listener
    window.addEventListener('scroll', updateScrollCompletion);

    // Clean up event listener
    return () => window.removeEventListener('scroll', updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
