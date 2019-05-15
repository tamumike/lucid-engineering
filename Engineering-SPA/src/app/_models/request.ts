export interface Request {
  esr?: string;
  dateInitiated?: Date;
  requestedDateForCompletion: Date;
  initiatedBy?: string;
  group: string;
  locationOfProject: string;
  description: string;
  approved?: boolean;
  engineerAssigned?: string;
  dateCompleted?: Date;
}
