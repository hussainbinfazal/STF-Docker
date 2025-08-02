

export interface SmtpService {
  sendEmail: (to: string, subject: string, body: string) => Promise<void>;
  sendBulkEmail: (recipients: string[], subject: string, body: string) => Promise<void>;
  validateEmail: (email: string) => boolean;
}




//  We will use node mailer for this 