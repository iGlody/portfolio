import { json } from '@sveltejs/kit';

/**
 * POST handler for track information
 * @param {{ request: Request }} event - The request event object containing the request
 */
export async function POST(event) {
    const request = event.request;
    try {
        const trackInfo = await request.json();
        
        // Create ASCII art for track information
        const asciiArt = `
╔════════════════════════════════════════════════════════════╗
║                     NOW PLAYING                           ║
╠════════════════════════════════════════════════════════════╣
║  ${trackInfo.artist} - ${trackInfo.title}                  
║  ${trackInfo.currentTime} / ${trackInfo.duration}                                        
║  Album: ${trackInfo.album}                                 
║  Label: ${trackInfo.label}                                 
╚════════════════════════════════════════════════════════════╝
`;
        
        // Log to server console
        console.log(asciiArt);
        
        return json({ success: true });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error('Error logging track info:', errorMessage);
        return json({ success: false, error: errorMessage }, { status: 500 });
    }
}
