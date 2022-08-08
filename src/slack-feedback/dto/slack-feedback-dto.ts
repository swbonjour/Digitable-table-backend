export class SlackFeedbackDto {
  payload: {
    name: string;
    contact: string;
    email: string;
    case: string;
    cpu: string;
    gpu: string;
    ram: string;
    power: string;
  };
}
