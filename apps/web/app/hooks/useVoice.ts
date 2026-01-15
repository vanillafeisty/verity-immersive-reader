// apps/web/app/hooks/useVoice.ts
import { useState } from 'react';

export function useVoice(onResult: (text: string) => void) {
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Browser does not support speech recognition.");

    const recognition = new SpeechRecognition();
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: any) => {
      onResult(event.results[0][0].transcript);
    };
    recognition.start();
  };

  return { isListening, startListening };
}