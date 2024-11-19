import { Timestamp } from "firebase/firestore";

/**
 * Interface for actions performed by admin or support users.
 */
export interface AdminAction {
  id: string; // Unique identifier for the action
  performedBy: string; // ID of the admin or support user who performed the action
  actionType: AdminActionType; // Type of action performed
  targetUserId?: string; // Optional ID of the affected user (if applicable)
  targetWorkerId?: string; // Optional ID of the affected worker (if applicable)
  details?: string; // Additional information or notes about the action
  createdAt: Timestamp; // Timestamp when the action was performed
  description?: string;
}

/**
 * Enum for different types of admin or support actions.
 */
export type AdminActionType =
  | "DISABLE_USER" // Disable a user account
  | "ENABLE_USER" // Re-enable a user account
  | "ADD_WORKER" // Add a new worker to the platform
  | "REMOVE_WORKER" // Remove a worker from the platform
  | "PAY_WORKER" // Process a payment to a worker
  | "RESOLVE_REFUND" // Resolve a refund case
  | "BLOCK_USER" // Temporarily block a user
  | "UNBLOCK_USER" // Unblock a previously blocked user
  | "MANAGE_PROJECT" // Assign, cancel, or update a project
  | "UPDATE_PROFILE" // Modify a user's profile details
  | "SEND_NOTIFICATION" // Send notifications to users
  | "DELETE_REVIEW" // Remove inappropriate or spam reviews
  | "MANAGE_PAYMENT_DISPUTE" // Resolve a payment dispute
  | "GENERATE_REPORT" // Generate platform reports (e.g., financial, user activity)
  | "ASSIGN_MEDIATOR" // Assign a mediator to a project or dispute
  | "OTHER";
