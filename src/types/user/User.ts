import { Timestamp } from "firebase/firestore";
import { ImageRef, MediaItem } from "../Media";
import { Locations } from "../Locations";

/**
 * Interface representing a user in the app, which could also be an organization or individual.
 */
export interface User {
  id: string;
  name: string;
  headline: {
    [language: string]: string; // A headline summarize of the profile in languages user want
  };
  bio: {
    [language: string]: string; // A description of the user in languages user want
  };
  roleInApp: "worker" | "contractor" | "mediator" | "admin" | "support"; // User type
  available?: boolean; // Availability for workers/contractors/mediators
  ratings?: {
    average: number; // Average rating (e.g., 4.8)
    total: number; // Total number of ratings
  };
  generalReviews: Review[];
  contactDetails: {
    email: string;
    countryCode: string; // Default initially in 591
    phone: string;
    location?: string; // e.g., 'Cochabamba, Bolivia'
    website?: string; // Optional for companies/contractors
    // socialMediaLinks?: SocialMediaLinks; // Optional social media links, pending to confirm if it will be implemented
  };
  profilePhoto?: ImageRef;
  coverPhoto?: ImageRef;
  lastActive: Timestamp;
  createdAt: Timestamp;
  /**
   * TODO: add referal attributes which includes a referral system where users can refer others to hire
   * workers or understand the platform. The referral system includes the referrer code, tracking for
   * commissions, and information about referred users or projects.
   */
  location?: Locations;
}

/**
 * Represents a certification, including details like year, issuing organization, and description.
 */
export interface Certification {
  name: string; // e.g., 'AWS Certified Developer'
  issuedBy: string; // Issuing organization (e.g., 'Amazon Web Services')
  issueDate: Timestamp; // Date the certification was obtained
  expirationDate?: Timestamp; // Optional date the certification will expire
  description?: string; // Optional description of the certification
  credentialId: string; // Id of the credential
  credentialUrl: string; // Url of the credential to preview it
  mediaUrls: MediaItem[]; // Urls of attachments or media included
  associatedSkills: string[]; // Skills obtained in this certification
}

/**
 * Represents a skill with proficiency and expertise level.
 */
export interface Skill {
  name: string; // e.g., 'React'
  proficiency: number; // Proficiency level (e.g., 95 for 95%)
  expertiseLevel?: "Beginner" | "Intermediate" | "Advanced"; // Optional expertise level
  yearsOfExperience?: number; // Optional years of experience with the skill
}

/**
 * Interface representing external experience of a user, such as previous employment or freelance projects.
 */
export interface ExternalExperience {
  companyName: string; // Name of the company or organization (e.g., 'Tech Solutions Inc.')
  role: string; // Role held in the company (e.g., 'Senior Developer')
  startDate: Timestamp; // Start date of the experience
  endDate?: Timestamp; // End date of the experience
  isCurrentRole?: boolean; // Flag indicating if the role is current (optional)
  responsibilities: string[]; // List of responsibilities and key activities in the role (e.g., ['Developed software solutions', 'Led a team of 5 developers'])
  tools: string[]; // List of technologies used during the experience (e.g., ['Java', 'Spring Boot', 'MySQL'])
  achievements?: string[]; // Optional list of key achievements or results from the role (e.g., ['Increased code efficiency by 20%'])
  companyWebsite?: string; // Optional website of the company, if available
  description?: string; // Optional description of the role or company
  location?: string; // Optional location of the company (e.g., 'Remote', 'San Francisco, USA')
}

/**
 * Represents social media links for professional networking.
 */
export interface SocialMediaLinks {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  github?: string;
  personalWebsite?: string;
}

/**
 * Interface for user reviews.
 */
export interface Review {
  reviewerId: string; // ID of the reviewer
  rating: number; // Rating given (e.g., 4.5)
  comment?: string; // Optional comment from the reviewer
  date: Timestamp; // Date of the review
}

/**
 * Interface for pricing details for a user.
 */
export interface UserPricing {
  rateType: "hourly" | "fixed" | string; // Type of rate (hourly or fixed)
  min: number; // Minimum price
  max: number; // Maximum price
  currency: string; // Currency (e.g., 'USD')
}

/**
 * Interface for offered services.
 */
export interface UserService {
  title: string; // Name of the service (e.g., 'Web Development')
  description: string; // Detailed description of the service
  includedFeatures: string[]; // List of features included in the service
  media?: MediaItem[]; // Optional media associated with the service
  reviews?: Review[]; // Optional list of reviews for the service
}

/**
 * Represents an educational qualification.
 */
export interface Education {
  institution: string; // e.g., 'MIT', 'High School XYZ'
  degree?: string; // e.g., 'Bachelor of Science in Computer Science'
  fieldOfStudy?: string; // e.g., 'Software Engineering'
  startDate: Timestamp; // Start date of the education
  endDate?: Timestamp; // Optional end date (if completed)
  description?: string; // Optional description of the coursework or achievements
  achievements?: string[]; // Notable achievements or distinctions
}

/**
 * Represents language proficiency.
 */
export interface LanguageProficiency {
  languageCode: string; // e.g., 'ENG', 'ES' or custom name
  proficiency: "beginner" | "intermediate" | "advanced" | "native"; // Proficiency level
}
