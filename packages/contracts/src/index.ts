import { z } from 'zod';

export const UserRoleSchema = z.enum([
  'student',
  'lecturer',
  'hod',
  'registrar',
  'finance',
  'librarian',
  'warden',
  'admin'
]);
export type UserRole = z.infer<typeof UserRoleSchema>;

export const EventSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  version: z.number().int().default(1),
  occurredAt: z.string().datetime(),
  actorId: z.string().optional(),
  payload: z.any()
});
export type BaseEvent = z.infer<typeof EventSchema>;

export const EventNames = {
  APPLICATION_ACCEPTED: 'application.accepted',
  STUDENT_REGISTERED: 'student.registered',
  PAYMENT_CONFIRMED: 'payment.confirmed',
  MARKS_SENATE_APPROVED: 'marks.senate_approved',
  SEMESTER_ROLLED_OVER: 'semester.rolled_over',
  STUDENT_CLEARED: 'student.cleared'
} as const;
