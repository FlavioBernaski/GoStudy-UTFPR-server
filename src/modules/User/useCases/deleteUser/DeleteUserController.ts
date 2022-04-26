import { Request, Response } from 'express';
import { DeleteUserUseCase } from './DeleteUserUseCase';
import { User } from '../../../../entities/User'

class DeleteUserController{
    constructor(
        private deleteUserUseCase: DeleteUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const id:string = request.body;

        const user : User = await this.deleteUserUseCase.execute(id);

        return response.status(201).json(user);
    }
}

export { DeleteUserController };