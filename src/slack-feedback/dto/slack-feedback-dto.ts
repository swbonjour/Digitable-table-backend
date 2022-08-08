export class SlackFeedbackDto {
  payload: {
    userPayload: {
      name: string;
      contact: string;
      email: string;
    };
    componentsPayload: {
      componentCase: string;
      componentCPU: string;
      componentGPU: string;
      componentRAM: string;
      componentPower: string;
    };
  };
}
