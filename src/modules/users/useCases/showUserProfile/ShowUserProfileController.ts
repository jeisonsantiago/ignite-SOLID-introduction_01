import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {

    const { user_id } = request.params;

    try {
      const user = this.showUserProfileUseCase.execute({ user_id });
      const { admin, created_at, email, id, name, updated_at } = user;
      return response.status(200).json({ admin, created_at, email, id, name, updated_at });
    } catch (error) {
      return response.status(404).json({ error: error });
    }
  }
}

export { ShowUserProfileController };
