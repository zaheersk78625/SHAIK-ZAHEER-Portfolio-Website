import { useState, useEffect } from 'react';

export function useTypewriter(words: string[], typingSpeed = 100, deletingSpeed = 50, delayBetweenWords = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      const shouldDelete = isDeleting;

      if (!shouldDelete && currentText === currentWord) {
        timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (shouldDelete && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        const nextText = shouldDelete
          ? currentWord.substring(0, currentText.length - 1)
          : currentWord.substring(0, currentText.length + 1);

        setCurrentText(nextText);
        timer = setTimeout(handleTyping, shouldDelete ? deletingSpeed : typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return currentText;
}
