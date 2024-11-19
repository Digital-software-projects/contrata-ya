/**
 * Represents a team for users who are part of a company or work in collaboration.
 */
export interface Team {
  name: string; // Team name (e.g., 'Development Team', 'Design Team')
  membersIds: string[]; // List of team members' ids (can be individuals or employees)
  members: {
    [memberId: string]: string; // role of each member, e.g., abc2: UX designer
  };
  teamLeadId?: string; // Optional team lead id
  description?: string; // Optional description of the team’s focus or mission
  contactDetails?: {
    email: string;
    phone: string;
  }; // Optional team contact details
}
