export interface Request {
  esr?: string;
  dateInitiated?: Date;
  requestedDateForCompletion: Date;
  initiatedBy?: string;
  department: string;
  locationOfProject: string;
  description: string;
  priority: number;
  approved?: boolean;
  engineerAssigned?: string;
  status?: string;
  dateCompleted?: Date;
}
