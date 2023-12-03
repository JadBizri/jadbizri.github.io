$(document).ready(function() {
    function loadSpeakerData(jsonFileName, month, speakerName) {
        $.ajax({
            url: 'json_files/' + jsonFileName + '.json',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                var speakerData = data.speakers[0];

                // update the main element with the speaker details
                $('main > h1').text(speakerData.title);
                $('main > h2').text(speakerData.month);
                $('main > h3').text(speakerData.speaker);
                $('main > img').attr('src', speakerData.image);
                $('main > p').text(speakerData.text);
                
            },
            error: function(error) {
                console.error('Error loading speaker data:', error);
            }
        });
    }

    // click event handlers for sidebar links
    $('#nav_list li:nth-child(1) a').click(function() {
        loadSpeakerData('toobin', 'October', 'Jeffrey Toobin');
    });

    $('#nav_list li:nth-child(2) a').click(function() {
        loadSpeakerData('sorkin', 'November', 'Andrew Ross Sorkin');
    });

    $('#nav_list li:nth-child(3) a').click(function() {
        loadSpeakerData('chua', 'January', 'Amy Chua');
    });

    $('#nav_list li:nth-child(4) a').click(function() {
        loadSpeakerData('sampson', 'December', 'Scott Sampson');
    });
});
