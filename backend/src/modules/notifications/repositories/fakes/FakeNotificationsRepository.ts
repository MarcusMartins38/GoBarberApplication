/* eslint-disable @typescript-eslint/camelcase */
import { ObjectID } from 'mongodb';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';

import Notification from '../../infra/typeorm/schemas/Notification';

class NotificationsRepository implements INotificationsRepository {
  private notifications: Notification[] = [];

  public async create({
    // eslint-disable-next-line @typescript-eslint/camelcase
    content,
    recipient_id,
  }: ICreateNotificationDTO): Promise<Notification> {
    // eslint-disable-next-line @typescript-eslint/camelcase
    const notification = new Notification();

    Object.assign(notification, { id: new ObjectID(), content, recipient_id });

    this.notifications.push(notification);

    return notification;
  }
}

export default NotificationsRepository;
