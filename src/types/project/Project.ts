import { Timestamp } from "firebase/firestore";

/**
 * Represents a project worked in the app with details like technologies used, duration, and the project's impact.
 */
export interface Project {
  id?: string;
  name: string; // e.g., 'E-commerce Platform'
  description?: string; // Optional description of the project
  tools: string[]; // Tools or technologies used, e.g., ['React', 'Node.js', 'MongoDB']
  startDate: Timestamp;
  endDate?: Timestamp; // Optional if project is active
  clientId: string; // Id of the client
  role: string; // Role played in the project (e.g., 'Lead Developer', 'Project Manager')
  impact?: string; // Optional field to describe the impact or result of the project
  associatedSkills: string[]; // Skills obtained in this project
  categoryId?: string; // Optional category of the app that project belongs to
  subcategoryId?: string; // Optional subcategory of the app that project belongs to
  /**
   * TODO: This interface must be completed when working on projects, missing payment and progress
   * management, requirements, documents, urls, and others
   */
}
