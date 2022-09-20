import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor() {}

  contactList() {
    return [
      {
        name: 'Eileen Russell',
        img: 'assets/img/contact1.png',
        position: 'HR Human Resources',
        email: 'eileenrussell@xumonk.com',
        birthday: new Date('2020-08-09T08:51:00'),
        phone: ['+1 (824) 598-2328'],
        address: '50 Herzel, Tel Aviv',
        color: '#1d82e7',
      },
      {
        name: 'Francis Mckay',
        img: 'assets/img/contact2.png',
        position: 'Software Development',
        email: 'francismckay@xumonk.com',
        birthday: new Date('2014-01-15T08:20:08'),
        phone: [],
        address: '42 Rothschild, Tel Aviv',
        color: '#1d82e7',
      },
      {
        name: 'Jewell Schultz',
        img: 'assets/img/contact3.png',
        position: 'Technical Support Rep',
        email: 'jewellschultz@xumonk.com',
        birthday: new Date('2020-07-03T01:03:19'),
        phone: ['+1 (932) 538-2367', '+1 (949) 503-2184'],
        address: '52 Begin Menachem, Tel Aviv',
        color: '#1d82e7',
      },
      {
        name: 'Goodman Hunter',
        img: 'assets/img/contact4.png',
        position: 'Website Manager',
        email: 'goodmanhunter@monk.com',
        birthday: new Date('2016-02-22T11:42:38'),
        phone: [],
        address: '3 Haavoda, Bat-Yam',
        color: '#1d82e7',
      },
      {
        name: 'Beck Webb',
        img: 'assets/img/contact5.png',
        position: 'UX/UI Designer',
        email: 'beckwebb@xumonk.com',
        birthday: new Date('2019-08-24T10:40:04'),
        phone: ['+1 (986) 566-2317', '+1 (950) 438-3960', '+1 (997) 562-3636'],
        address: '20 Yaacov, Petah Tikva',
        color: '#1d82e7',
      },
      {
        name: 'Tabitha Combs',
        img: 'assets/img/contact6.png',
        position: 'Data Scientist',
        email: 'tabithacombs@xumonk.com',
        birthday: new Date('2018-03-24T01:55:12'),
        phone: ['+1 (897) 437-2473'],
        address: '115 Dizengoff, Tel Aviv',
        color: '#1d82e7',
      },
      {
        name: 'Schmidt Jennings',
        img: 'assets/img/contact7.png',
        position: 'Information Security Analyst',
        email: 'schmidtjennings@monk.com',
        birthday: new Date('2014-09-24T04:18:20'),
        phone: [],
        address: '19 Mesilot, Rishon Lezion',
        color: '#1d82e7',
      },
      {
        name: 'Bullock Martinez',
        img: 'assets/img/contact8.png',
        position: 'Web Developer',
        email: 'bullockmartinez@xumonk.com',
        birthday: new Date('2016-05-18T11:26:22'),
        phone: ['+1 (889) 424-3036', '+1 (819) 403-2637'],
        address: '73 Hayarkon, Tel Aviv',
        color: '#1d82e7',
      },
      {
        name: 'Reva Stafford',
        img: 'assets/img/contact9.png',
        position: 'Sales Engineer',
        email: 'revastafford@xumonk.com',
        birthday: new Date('2022-02-21T03:10:47'),
        phone: ['+1 (929) 465-2033', '+1 (952) 546-2373'],
        address: '127 Bialik, Ramat Gan',
        color: '#1d82e7',
      },
      {
        name: 'Franco Mccray',
        img: 'assets/img/contact10.png',
        position: 'Information Technology Manager',
        email: 'francomccray@xumonk.com',
        birthday: new Date('2020-03-02T07:29:18'),
        phone: ['+1 (900) 587-3989'],
        address: '8 Harechev, Netanya',
        color: '#1d82e7',
      },
    ];
  }
}
