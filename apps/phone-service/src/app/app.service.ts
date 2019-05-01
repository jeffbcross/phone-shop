import { Injectable } from '@nestjs/common';
import {Phone} from '@tuskphone/data-access-interfaces';

const phones: Phone[] = [
  {
    name: 'Apple iPhone 8',
    id: '1a',
    imgSrc: 'apple-iphone8.jpg',
    pricingOptions: {
      total: 800,
      monthly: 100,
      monthlyGoodCredit: 40
    }
  }, 
  {
    name: 'Apple iPhone XS',
    id: '1b',
    imgSrc: 'apple-iphonexs.jpg',
    pricingOptions: {
      total: 800,
      monthly: 100,
      monthlyGoodCredit: 40
    }
  },
  {
    name: 'Samsung Galaxy S10',
    id: '2a',
    imgSrc: 'samsung-galaxy-s10.jpg',
    pricingOptions: {
      total: 800,
      monthly: 100,
      monthlyGoodCredit: 40
    }
  }, 
  {
    name: 'Samsung Galaxy Note 9',
    id: '2b',
    imgSrc: 'samsung-galaxy-note9.jpg',
    pricingOptions: {
      total: 800,
      monthly: 100,
      monthlyGoodCredit: 40
    }
  },
  {
    name: 'LG G8 Thinq',
    id: '3a',
    imgSrc: 'lg-g8-thinq.jpg',
    pricingOptions: {
      total: 800,
      monthly: 100,
      monthlyGoodCredit: 40
    }
  }, 
  {
    name: 'OnePlus 6T',
    id: '4a',
    imgSrc: 'oneplus-6t.jpg',
    pricingOptions: {
      total: 800,
      monthly: 100,
      monthlyGoodCredit: 40
    }
  }
];

@Injectable()
export class AppService {
  getAllPhones(): Phone[] {
    return phones;
  }

  getPhoneById(id: string): Phone {
    return phones.find((phone: Phone) => phone.id === id);
  }
}
