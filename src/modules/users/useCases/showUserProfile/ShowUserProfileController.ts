import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const user = this.showUserProfileUseCase.execute({ user_id });
      return response.json(user);
    } catch (e) {
      const err = e.message;
      return response.status(404).json({ error: err });
    }
  }
}

export { ShowUserProfileController };
