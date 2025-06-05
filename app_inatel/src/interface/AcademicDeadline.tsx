export interface AcademicDeadline {
    id: number;
    title: string;
    type: string;
    startDate: Date;
    endDate: Date;
    description: string;
    subject?: string;
    relatedCourse: string;
}