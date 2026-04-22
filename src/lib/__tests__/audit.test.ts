import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { auditLog } from '../audit';

describe('auditLog', () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('logs a JSON string to stdout', () => {
    auditLog('post.create', '1.2.3.4', { slug: 'test' });
    expect(consoleSpy).toHaveBeenCalledOnce();
    const output = consoleSpy.mock.calls[0][0];
    expect(() => JSON.parse(output)).not.toThrow();
  });

  it('includes level: audit', () => {
    auditLog('auth.login', '1.2.3.4');
    const output = JSON.parse(consoleSpy.mock.calls[0][0]);
    expect(output.level).toBe('audit');
  });

  it('includes action, ip and timestamp', () => {
    auditLog('post.delete', '10.0.0.1', { id: 'abc' });
    const output = JSON.parse(consoleSpy.mock.calls[0][0]);
    expect(output.action).toBe('post.delete');
    expect(output.ip).toBe('10.0.0.1');
    expect(output.timestamp).toBeTruthy();
    expect(new Date(output.timestamp).getTime()).not.toBeNaN();
  });

  it('includes details when provided', () => {
    auditLog('upload.create', '1.2.3.4', { filename: 'photo.jpg', size: 1024 });
    const output = JSON.parse(consoleSpy.mock.calls[0][0]);
    expect(output.details.filename).toBe('photo.jpg');
    expect(output.details.size).toBe(1024);
  });

  it('works without details', () => {
    auditLog('auth.logout', '1.2.3.4');
    const output = JSON.parse(consoleSpy.mock.calls[0][0]);
    expect(output.details).toBeUndefined();
  });
});
