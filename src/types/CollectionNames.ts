/**
 * Enum representing the collection names in the database.
 *
 * This enum is used to ensure consistency across the application when referring
 * to various collections like `users`, `projects`, `teams`, and `admin`. It is
 * useful for reducing errors from hard-coded collection names and makes it easier
 * to update collection names in a single place.
 */
export enum CollectionNames {
  USERS = "users",
  PROJECTS = "projects",
  TEAMS = "teams",
  ADMIN_ACTIONS = "admin-actions",
  PAYMENTS = "payments",
  ADMIN_SETTINGS = "settings", // For storing app settings
}
