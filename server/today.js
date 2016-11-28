if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.methods({

      newDay: function () {
        Bookings.remove({});
        Rooms.remove({});

        // Setup your rooms here
        Rooms.insert({name: 'Ghent - The very left one'});
        Rooms.insert({name: 'Ghent - The kind of left one'});
        Rooms.insert({name: 'Ghent - The kind of right one'});
        Rooms.insert({name: 'Ghent - The very right one'});
        Rooms.insert({name: 'Kontich - Euphoria'});
        Rooms.insert({name: 'Kontich - Oberon'});
        Rooms.insert({name: 'Kontich - Vala'});


        var rooms = Rooms.find({});
        var count = 0;
        rooms.forEach(function (room) {
          // Setup template for the day
          var startingDate = new Date();
          startingDate.setHours(8);
          debugger;

          startingDate.setMinutes(0);

          var timestamp = startingDate.getTime()

          var date = startingDate, interval=60, arr=[];
          for(var i=0;i<14;i++){
            var timeBlockDate = new Date(timestamp)
            var timeBlockDateEnd = (timestamp + interval*60*1000)

            var formattedTimeBlock = moment(timeBlockDate).format('HH:mm') + " → " + moment(timeBlockDateEnd).format('HH:mm');

            Bookings.insert({timeBlock: formattedTimeBlock, endTime: timeBlockDateEnd, room_id: room._id});
            timestamp += interval*60*1000
          }
        });
      },

      // welcome: function () {

      // },
    });
  });
}
