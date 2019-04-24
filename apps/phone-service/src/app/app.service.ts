import { Injectable } from '@nestjs/common';
import {Phone} from '@tuskphone/data-access-interfaces';

const phones = [{
  name: 'Awesome Flip Phone',
  id: '1c'
}, {
  name: 'Cheap Phone',
  id: '1d'
}];

@Injectable()
export class AppService {
  getAllPhones(): Phone[] {
    return phones;
  }

  getPhoneById(id: string): Phone {
    return phones.find((phone: Phone) => phone.id === id);
  }
}
