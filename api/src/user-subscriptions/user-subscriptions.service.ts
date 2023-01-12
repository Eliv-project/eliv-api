import { Injectable } from '@nestjs/common';
import { CreateUserSubscriptionInput } from './dto/create-user-subscription.input';
import { UpdateUserSubscriptionInput } from './dto/update-user-subscription.input';

@Injectable()
export class UserSubscriptionsService {
  create(createUserSubscriptionInput: CreateUserSubscriptionInput) {
    return 'This action adds a new userSubscription';
  }

  findAll() {
    return `This action returns all userSubscriptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userSubscription`;
  }

  update(id: number, updateUserSubscriptionInput: UpdateUserSubscriptionInput) {
    return `This action updates a #${id} userSubscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} userSubscription`;
  }
}
