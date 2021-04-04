import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;

    try {
      const { name, email, admin } = this.turnUserAdminUseCase.execute({ user_id });
      return response.status(200).json({ name, email, admin });
    } catch (error) {
      return response.status(404).json({error:error});
    }
  }
}

export { TurnUserAdminController };
