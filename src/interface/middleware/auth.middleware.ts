import { Request, Response, NextFunction } from "express";
import { AuthenticateUserUseCase, IsUserAuthorizedUseCase } from "@src/core/application/use-cases/user";

export const buildAuthMiddleware = ({scopes, authenticateUser, isUserAuthorized}:{
  scopes: string[];
  authenticateUser: AuthenticateUserUseCase;
  isUserAuthorized: IsUserAuthorizedUseCase;
}) => async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    
    const [user, error] = await authenticateUser(req.headers.authorization?.split(" ")[1] || "");
    if (!user) {
      return res.sendStatus(401).json(error);
    }

    const isUserAllowed = await isUserAuthorized(user.scopes, scopes);
    if (!isUserAllowed) return res.sendStatus(403);

    next();
}

