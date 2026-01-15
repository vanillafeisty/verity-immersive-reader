// apps/web/app/book-service.ts
export async function fetchBooksByVibe(vibeLabel: string) {
    // We map our vibes to Open Library search terms
    const queryMap: Record<string, string> = {
        "Hopeful": "happiness+inspiration",
        "Fearful": "horror+ghost+dark",
        "Mysterious": "mystery+detective+noir",
        "Neutral": "classic+fiction"
    };

    const query = queryMap[vibeLabel] || "fiction";
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=6`);
    const data = await response.json();

    return data.docs.map((book: any) => ({
        id: book.key,
        title: book.title,
        author: book.author_name?.[0] || "Unknown Author",
        cover: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : null
    }));
}