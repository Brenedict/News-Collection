const API_KEY: string = "22c71ed49f664f848bb3d8f7dd6eea90";

interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

interface Data {
    articles: Article[];
}

export const sampleSource = async (): Promise<Article[]> => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=associated-press&apiKey=${API_KEY}`);
    const data: Data = await response.json();
    return data.articles; 
}