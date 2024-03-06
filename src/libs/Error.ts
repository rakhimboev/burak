export enum HttpCode {
  OK = 200,
  CREATED = 201,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum Message {
  SOMETHING_WENT_WRONG = "SOMETHING_WENT_WRONG",
  NO_DATA_FOUND = "NO_DATA_FOUND",
  CREATE_FAILED = "CREATE_FAILED",
  UPDATE_FAILED = "UPDATE_FAILED",
  USED_NICK_PHONE = " YOU ARE INSERTING ALREADY USED NICK OR PHONE!",
  NO_MEMBER_NICK = "NO MEMBER WITH THIS MEMBER NICK!",
  WRONG_PASSWORD = "WRONG PASSWORD, PLEASE TRY AGAIN!",
}

class Errors extends Error {
  public code: HttpCode;
  public message: Message;

  constructor(statusCode: HttpCode, statusMessage: Message) {
    super();
    this.code = statusCode;
    this.message = statusMessage;
  }
}

export default Errors;
