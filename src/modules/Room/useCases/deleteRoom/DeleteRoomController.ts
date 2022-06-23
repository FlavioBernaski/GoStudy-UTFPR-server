import { Request, Response } from 'express';
import { DeleteRoomUseCase } from './DeleteRoomUseCase';
import { Room } from '../../../../entities/Room'

class DeleteRoomController{
    constructor(
        private deleteRoomUseCase: DeleteRoomUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const id : string = request.params.id;

        const room : Room = await this.deleteRoomUseCase.execute(id);

        if (room !== null) return response.status(201).json(room);
        return response.status(404).send('Sala não encontrada');
    }
}

export { DeleteRoomController };