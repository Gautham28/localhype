export function getAdminAllowedEmails(): string[] {
  const raw = process.env.ADMIN_ALLOWED_EMAILS;
  if (!raw) {
    return [];
  }

  return raw
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export function isAdminEmail(email: string | undefined | null): boolean {
  if (!email) {
    return false;
  }

  const allowedEmails = getAdminAllowedEmails();
  if (allowedEmails.length === 0) {
    return true;
  }

  return allowedEmails.includes(email.toLowerCase());
}
