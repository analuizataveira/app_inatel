export interface Reminder {
    id: number;
    deadlineId: number;
    userId: number;
    alarmDate: Date;
    notificationType: string;  // Pode ser 'email', 'push', etc.
    active: boolean;
}