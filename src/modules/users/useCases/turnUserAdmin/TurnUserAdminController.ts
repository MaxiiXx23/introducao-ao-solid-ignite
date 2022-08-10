import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const userTurnedAdmin = this.turnUserAdminUseCase.execute({ user_id });
      return response.json(userTurnedAdmin);
    } catch (e) {
      const err = e.message;
      return response.status(404).json({ error: err });
    }
  }
}

export { TurnUserAdminController };
