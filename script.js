$(document).ready(function () {

    for (var i = 100; i >= 0; i--) {
        var text = 'Accusation ' + (i);
        $('body').append('<h3>' + text + '</h3>');

    }
    
   $('h3').click(getKiller);
    function getKiller(e) {

        var friends = ['Rod', 'Courtney', 'Whitey', 'Sierra', 'Shannon'];
    var weaponName = ['knife', 'hammer', 'gun', 'cast iron skillet', 'heel', 'kro bar', 'fork', 'brass knuckles', 'hands', 'pen'];
    var location = ['kitchen', 'basement', 'livingRoom', 'laundry room', 'master bedroom', 'movieRoom', 'sauna', 'garage', 'roofTop', 'dining room'];
       function getSomething() {
        var acc = $(e.target).text();
        var myIndex = acc.indexOf(' ');
        acc = acc.substring(myIndex);
        var num = parseInt(acc);
             alert('Accusation ' + num + ': I accuse ' + friends[num % 5] + 
             ' with the ' + weaponName[num % 10] + 'in the ' + location[num % 10] + '!');
            
        }
        getSomething();
    }
    
})

