export class ResourceNotFoundError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "ResourceNotFoundError";
    }
}

export class ResourceAlreadyExistsError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "ResourceAlreadyExistsError";
    }
}

export class ValidationError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "ValidationError";
    }
}

export class MissingParameterError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "MissingParameterError";
    }
}

export class UnauthorizedError extends Error {
    constructor() {
      super();
      this.name = "UnauthorizedError";
      this.message = 'Unauthorized';
    }
}

export class InternalServerError extends Error {
  constructor(stack: string | undefined) {
    super('Internal Server Error');
    this.name = 'InternalServerError';
    this.stack = stack;
  }
}
