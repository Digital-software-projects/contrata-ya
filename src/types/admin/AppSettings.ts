/**
 * Interface for application settings that defines the configuration options for the application
 */
export interface AppSettings {
  suggestedSkills: string[];
  // List of skills that will be suggested to users when they add a new skill, e.g. ['JavaScript', 'React', 'Node.js', 'TypeScript']
  locations: string[];
  //   List of locations the app is working, e.g. ["Cochabamba, Bolivia"]
}
