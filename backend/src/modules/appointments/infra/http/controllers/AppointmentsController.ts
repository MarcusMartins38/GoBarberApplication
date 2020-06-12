/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { provider_id, date } = request.body;

    const createAppointmentService = container.resolve(
      CreateAppointmentService,
    );

    const parsedDate = new Date(date);

    const appointment = await createAppointmentService.execute({
      provider_id,
      user_id,
      date: parsedDate,
    });

    return response.json(appointment);
  }
}
