'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class MapStore extends EventEmitter {
  constructor() {
    super()
    this.bathrooms = [
      {
        bathroomId: 1,
        bathroomName: 'Topicstorm',
        location_lat: '41',
        location_long: '-8.4667',
        date_found: '12/16/2015',
        last_confirmed: '12/25/2015',
        description: 'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.'
      }, {
        bathroomId: 2,
        bathroomName: 'Rhynoodle',
        location_lat: '39.70068',
        location_long: '97.19865',
        date_found: '6/1/2015',
        last_confirmed: '12/28/2015',
        description: 'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.'
      }, {
        bathroomId: 3,
        bathroomName: 'Oyoloo',
        location_lat: '35.53333',
        location_long: '136.91667',
        date_found: '6/20/2015',
        last_confirmed: '9/25/2015',
        description: 'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur rbathroomIdiculus mus.'
      }, {
        bathroomId: 4,
        bathroomName: 'Divanoodle',
        location_lat: '31.98358',
        location_long: '121.34687',
        date_found: '2/28/2016',
        last_confirmed: '6/13/2015',
        description: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor bathroomId nulla ultrices aliquet. Maecenas leo odio, condimentum bathroomId, luctus nec, molestie sed, justo.'
      }, {
        bathroomId: 5,
        bathroomName: 'Skalith',
        location_lat: '58.8524',
        location_long: '5.7352',
        date_found: '8/23/2015',
        last_confirmed: '9/25/2015',
        description: 'Integer aliquet, massa bathroomId lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.'
      }, {
        bathroomId: 6,
        bathroomName: 'Katz',
        location_lat: '17.92851',
        location_long: '103.95519',
        date_found: '10/8/2015',
        last_confirmed: '1/7/2016',
        description: 'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincbathroomIdunt eget, tempus vel, pede. Morbi porttitor lorem bathroomId ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.'
      }, {
        bathroomId: 7,
        bathroomName: 'Topicshots',
        location_lat: '60.1418',
        location_long: '15.4142',
        date_found: '8/16/2015',
        last_confirmed: '10/16/2015',
        description: 'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.'
      }, {
        bathroomId: 8,
        bathroomName: 'Quinu',
        location_lat: '46.91591',
        location_long: '130.64547',
        date_found: '10/29/2015',
        last_confirmed: '5/2/2016',
        description: 'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincbathroomIdunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravbathroomIda nisi at nibh. In hac habitasse platea dictumst.'
      }, {
        bathroomId: 9,
        bathroomName: 'Skinte',
        location_lat: '33.7866',
        location_long: '-118.2987',
        date_found: '5/16/2016',
        last_confirmed: '7/5/2015',
        description: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.'
      }, {
        bathroomId: 10,
        bathroomName: 'Vinder',
        location_lat: '-7.4505',
        location_long: '108.0184',
        date_found: '12/13/2015',
        last_confirmed: '7/31/2015',
        description: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.'
      }, {
        bathroomId: 11,
        bathroomName: 'Gabtype',
        location_lat: '38.9497',
        location_long: '-104.767',
        date_found: '7/28/2015',
        last_confirmed: '5/23/2016',
        description: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.'
      }, {
        bathroomId: 12,
        bathroomName: 'Innotype',
        location_lat: '42.0667',
        location_long: '-8.4222',
        date_found: '8/10/2015',
        last_confirmed: '9/4/2015',
        description: 'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.'
      }, {
        bathroomId: 13,
        bathroomName: 'Gigazoom',
        location_lat: '13.71667',
        location_long: '-88.93333',
        date_found: '3/26/2016',
        last_confirmed: '2/3/2016',
        description: 'Morbi vestibulum, velit bathroomId pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.'
      }, {
        bathroomId: 14,
        bathroomName: 'Eadel',
        location_lat: '26.5208',
        location_long: '50.02452',
        date_found: '1/3/2016',
        last_confirmed: '6/15/2015',
        description: 'Morbi vestibulum, velit bathroomId pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.'
      }, {
        bathroomId: 15,
        bathroomName: 'Avavee',
        location_lat: '13.54753',
        location_long: '100.27362',
        date_found: '2/4/2016',
        last_confirmed: '10/14/2015',
        description: 'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.'
      }, {
        bathroomId: 16,
        bathroomName: 'Yoveo',
        location_lat: '-7.4375',
        location_long: '108.7324',
        date_found: '9/29/2015',
        last_confirmed: '9/7/2015',
        description: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.'
      }, {
        bathroomId: 17,
        bathroomName: 'Aimbu',
        location_lat: '40.49748',
        location_long: '44.7662',
        date_found: '1/11/2016',
        last_confirmed: '3/28/2016',
        description: 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.'
      }, {
        bathroomId: 18,
        bathroomName: 'Realblab',
        location_lat: '-7.0558',
        location_long: '106.8946',
        date_found: '6/30/2015',
        last_confirmed: '6/13/2015',
        description: 'Maecenas tincbathroomIdunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.'
      }, {
        bathroomId: 19,
        bathroomName: 'Skilith',
        location_lat: '13.12972',
        location_long: '122.97917',
        date_found: '5/31/2015',
        last_confirmed: '12/28/2015',
        description: 'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur rbathroomIdiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur rbathroomIdiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravbathroomIda sem. Praesent bathroomId massa bathroomId nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.'
      }, {
        bathroomId: 20,
        bathroomName: 'Digitube',
        location_lat: '22.53511',
        location_long: '91.91919',
        date_found: '12/9/2015',
        last_confirmed: '6/15/2015',
        description: 'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat bathroomId mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincbathroomIdunt lacus at velit.'
      }
    ]
  }

  getBathrooms() {
    return this.bathrooms
  }

  createBathroom(bathroom) {
    const bathroomId = Date.now();

    this.bathrooms.push({
      bathroomId: bathroomId,
      bathroomName: bathroom.bathroomName,
      location_lat: bathroom.lat,
      location_long: bathroom.long,
      date_found: bathroom.foundDate,
      last_confirmed: bathroom.confirmedDate,
      description: bathroom.desc
    });

    this.emit('change');
  }

  handleActions(action) {
    switch(action.type) {
      case 'CREATE_BATHROOM': {
        this.createBathroom(action.bathroom)
        break
      }
    }
  }

}

const mapStore = new MapStore
export default mapStore
dispatcher.register(mapStore.handleActions.bind(mapStore))
