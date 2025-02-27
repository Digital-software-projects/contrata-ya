import { Timestamp } from "firebase/firestore";
import {
  Certification,
  Education,
  ExternalExperience,
  LanguageProficiency,
  Skill,
  User,
  UserPricing,
  UserService,
} from "./User";
import { Currency } from "../admin/PaymentDetails";

/**
 * Details for a worker user.
 */
export interface WorkerUser extends User {
  role: string; // General role description (e.g., 'Full Stack Developer', 'Admin', 'Support Specialist')
  type: "individual" | "organization";
  skills: Skill[]; // List of skills with proficiency
  certifications: Certification[]; // List of certifications
  education: Education[]; // List of educational qualifications
  experience: {
    professionSeniority: string; // Profession and seniority (e.g., 'Front-End Developer Senior')
    completedProjects: number;
    startDate: Timestamp; // Start date of professional experience
    satisfactionRate: number; // Satisfaction percentage
    mediaResponseTimeInMinutes: number; // Response time in minutes (e.g., 120 for 2 hours, 30 for 30 minutes)
  };
  services: UserService[]; // Services offered by the worker
  servicesIntroduction: string; // Services introduction global description
  pricingRate?: UserPricing; // Optional media pricing rate of the user
  availabilityDetails: {
    workingHours: string; // e.g., '9am - 6pm'
    immediateStart: boolean;
    timezone: string; // Default: GMT-4 (Bolivia)
  };
  externalExperiences: ExternalExperience[]; // Previous work experience
  workMode: "onsite" | "remote" | "hybrid"; // Indicates the user's work mode
  categoriesIds: string[]; // Ids of categories worker belongs to
  subcategoriesIds: string[]; // Ids of subcategories worker belongs to
  teamId?: string; // Optional team data for users or companies with a team
  languages?: LanguageProficiency[]; // List of languages and proficiency
}

/**
 * Details for a contractor user.
 */
export interface ContractorUser extends User {
  projectsIds: string[]; // List of projects ids managed by the contractor
  budgetRange?: {
    min: number; // Minimum budget
    max: number; // Maximum budget
    currency: Currency; // e.g., 'Bs (BOB)'
  };
  includedServices: string[]; // Services included in their rate
  preferredCategories?: string[]; // Preferred categories for hiring
  preferredSubcategories?: string[]; // Preferred subcategories for hiring
  preferences?: string[]; // Other preferences or requirements for hiring
  language: string | "ES"; // Language code spoken by user or custom name, initially "ES" by default
}

/**
 * Details for a mediator user.
 */
export interface MediatorUser extends User {
  negotiations: {
    projectId: string; // ID of the project being mediated
    contractorId: string; // ID of the contractor
    workerId: string; // ID of the worker
    status: "pending" | "in-progress" | "completed"; // Status of negotiation
  }[];
  //   TODO: Management for negoatiations must be completed
}

/**
 * Details for an admin user.
 */
export interface AdminUser extends User {
  performedActions: string[]; // Ids of performed admin actions
}

/**
 * Details for a support user.
 */
export interface SupportUser extends User {
  responseTime: string; // Average response time (e.g., '2h')
  performedActions: string[]; // Ids of performed admin actions
}
