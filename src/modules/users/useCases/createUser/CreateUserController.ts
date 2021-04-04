import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    if (!name || !email) {
      return response.status(400).json({ error: "No input" });
    }

    try {
      this.createUserUseCase.execute({ name, email });
    } catch (error) {
      return response.status(400).json({ error: "User email already in use" });
    }

    return response.status(201).json({ name,email,admin:false });
  }
}

export { CreateUserController };
