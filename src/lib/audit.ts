/**
 * Audit logger — records admin actions with timestamp, actor and details.
 * Currently logs to console (stdout). In production, pipe stdout to a
 * log aggregator (Datadog, CloudWatch, etc.) or replace with a DB write.
 */

type AuditAction =
  | 'post.create'
  | 'post.update'
  | 'post.delete'
  | 'category.create'
  | 'category.update'
  | 'category.delete'
  | 'tag.create'
  | 'tag.update'
  | 'tag.delete'
  | 'upload.create'
  | 'auth.login'
  | 'auth.logout'
  | 'auth.failed';

interface AuditEntry {
  timestamp: string;
  action: AuditAction;
  ip: string;
  details?: Record<string, unknown>;
}

export function auditLog(action: AuditAction, ip: string, details?: Record<string, unknown>) {
  const entry: AuditEntry = {
    timestamp: new Date().toISOString(),
    action,
    ip,
    details,
  };
  // Structured JSON log — easy to parse by log aggregators
  console.log(JSON.stringify({ level: 'audit', ...entry }));
}
