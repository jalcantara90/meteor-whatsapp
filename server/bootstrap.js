import Moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { Chats, Messages } from '../lib/collections';

Meteor.startup(function(){
    if (Chats.find().count() !== 0) return;

    Messages.remove({});

    const messages = [
        {
        text: 'You on your way?',
        timestamp: Moment().subtract(1, 'hours').toDate()
        },
        {
        text: 'Hey, it\'s me',
        timestamp: Moment().subtract(2, 'hours').toDate()
        },
        {
        text: 'I should buy a boat',
        timestamp: Moment().subtract(1, 'days').toDate()
        },
        {
        text: 'Look at my mukluks!',
        timestamp: Moment().subtract(4, 'days').toDate()
        },
        {
        text: 'This is wicked good ice cream.',
        timestamp: Moment().subtract(2, 'weeks').toDate()
        }
    ];

    messages.forEach((m) => {
        Messages.insert(m);
    });
});