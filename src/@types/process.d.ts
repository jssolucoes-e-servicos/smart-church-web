
// We recommend doing your own environment variable validation
declare global {
  namespace NodeJS {
    export interface ProcessEnv {

      NEXT_PUBLIC_API_URL: string;
      NODE_ENV: string;

      
      NEXTAUTH_SECRET: string

      AUTH_APPLE_ID: string
      AUTH_APPLE_SECRET: string

      AUTH_FACEBOOK_ID: string
      AUTH_FACEBOOK_SECRET: string

      AUTH_GOOGLE_ID: string
      AUTH_GOOGLE_SECRET: string

      AUTH_INSTAGRAM_ID: string
      AUTH_INSTAGRAM_SECRET: string
     
      AUTH_SPOTIFY_ID: string
      AUTH_SPOTIFY_SECRET: string
  
      AUTH_TWITTER_ID: string
      AUTH_TWITTER_SECRET: string
    
      AUTH_ZOOM_ID: string
      AUTH_ZOOM_SECRET: string
    }
  }
}