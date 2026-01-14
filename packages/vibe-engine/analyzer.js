const Sentiment = require('sentiment');
const sentiment = new Sentiment();

/**
 * Verity Vibe Engine v1.0
 * Converts text into an "Emotional DNA" object.
 */
function getEmotionalDNA(text) {
    const analysis = sentiment.analyze(text);
    const score = analysis.comparative; // This is a number between -5 and 5

    // Mapping logic for Verity's 2026 UI
    let mood = {
        label: "Neutral",
        color: "#f8f9fa", // Default White/Grey
        intensity: Math.abs(score).toFixed(2),
        primaryEmotion: ""
    };

    if (score > 0.5) {
        mood.label = "Joyful / Hopeful";
        mood.color = "#ffcc00"; // Golden Yellow
        mood.primaryEmotion = "joy";
    } else if (score > 0 && score <= 0.5) {
        mood.label = "Peaceful / Calm";
        mood.color = "#a2d2ff"; // Sky Blue
        mood.primaryEmotion = "calm";
    } else if (score < 0 && score >= -0.5) {
        mood.label = "Melancholic / Somber";
        mood.color = "#4a4e69"; // Deep Purple-Grey
        mood.primaryEmotion = "sadness";
    } else if (score < -0.5) {
        mood.label = "Tense / Fearful";
        mood.color = "#1b1b1b"; // Near Black
        mood.primaryEmotion = "fear";
    }

    return {
        text_preview: text.substring(0, 50) + "...",
        dna: mood,
        analysis_details: {
            positive_words: analysis.positive,
            negative_words: analysis.negative
        }
    };
}

// --- TEST DATA ---
const books = [
    "The sun rose over the meadow, filling the world with a warm, golden glow. Everyone felt safe.",
    "The door creaked open, revealing a terrifying void where the floor should have been. My heart hammered in terror.",
    "Rain streaked the window as he sat alone, thinking of everything he had lost over the years."
];

console.log("--- VERITY VIBE ENGINE TEST RESULTS ---");
books.forEach(description => {
    console.log(getEmotionalDNA(description));
    console.log("---------------------------------------");
});