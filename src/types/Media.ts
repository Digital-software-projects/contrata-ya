/**
 * Interface for media items (images, videos, etc.) related to services.
 */
export interface MediaItem {
  type: "image" | "video" | "document" | "project" | "presentation" | "other"; // Type of media
  url: string; // URL of the media
  description: string; // Optional description of the media
  ref?: string; // Optional if the attachment was uploaded to the app's cloud
}

/**
 * Interface for images uploaded to app's cloud
 */
export interface ImageRef {
  url: string;
  ref: string; // location of the image
}
