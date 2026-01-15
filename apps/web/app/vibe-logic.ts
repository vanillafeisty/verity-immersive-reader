// apps/web/app/vibe-logic.ts
import Sentiment from 'sentiment';

const sentiment = new Sentiment();

export function analyzeVibe(text: string) {
    const result = sentiment.analyze(text);
    const score = result.comparative;

    if (score > 0.4) {
        return {
            label: "Hopeful",
            color: "rgba(234, 179, 8, 0.3)", // Yellow/Gold
            glow: "shadow-[0_0_50px_rgba(234,179,8,0.2)]"
        };
    } else if (score < -0.4) {
        return {
            label: "Fearful",
            color: "rgba(127, 29, 29, 0.4)", // Deep Red
            glow: "shadow-[0_0_50px_rgba(127,29,29,0.2)]"
        };
    } else {
        return {
            label: "Mysterious",
            color: "rgba(88, 28, 135, 0.3)", // Purple
            glow: "shadow-[0_0_50px_rgba(88,28,135,0.2)]"
        };
    }
}