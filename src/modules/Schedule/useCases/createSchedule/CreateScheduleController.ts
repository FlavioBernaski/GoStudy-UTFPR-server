import { Request, Response } from 'express';
import { CreateScheduleUseCase } from './CreateScheduleUseCase';
import { IScheduleDTO } from '../ScheduleDTO'
import { Schedule } from '../../../../entities/Schedule'

class CreateScheduleController {
    constructor(
        private createScheduleUseCase: CreateScheduleUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const {
            label,
            initial_time,
            final_time
        }: IScheduleDTO = request.body;

        const schedule: Schedule = await this.createScheduleUseCase.execute({
            label,
            initial_time,
            final_time
        });

        return response.status(201).json(schedule);
    }
}

export { CreateScheduleController };