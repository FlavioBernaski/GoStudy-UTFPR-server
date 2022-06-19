import { Request, Response } from 'express';
import { BrowseInstituteUseCase } from './BrowseInstituteUseCase';
import { Institute } from '../../../../entities/Institute'

class BrowseInstituteController{
    constructor(
        private browseInstituteUseCase: BrowseInstituteUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const institute: Institute = await this.browseInstituteUseCase.execute(request.params.instituteId);
        if (institute) {
            return response.status(201).json(institute);
        }
        return response.status(404).json({Erro : 'Instituto não encontrado'});
    }
}

export { BrowseInstituteController };