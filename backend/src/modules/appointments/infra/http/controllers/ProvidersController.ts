/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProvidersService from '@modules/appointments/services/ListProvidersService';
import { classToClass } from 'class-transformer';

export default class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const listProvidersService = container.resolve(ListProvidersService);

    const providers = await listProvidersService.execute({
      user_id,
    });

    return response.json(classToClass(providers));
  }
}
