export type ResponseType = {
  status: number;
  message: string;
  payload: string | object;
};

export const sendSuccess = (
  Payload?: string | object,
  message?: string,
): ResponseType => ({
  status: 200,
  message: message || 'OK',
  payload: Payload,
});

export const sendError = (
  Payload?: string | object,
  message?: string,
): ResponseType => {
  return {
    status: 500,
    message: message || 'Something went wrong',
    payload: Payload,
  };
};
