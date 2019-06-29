// Javascript for the Sequence Countdown Controls 

$(document).ready(function () {
    
    // Open / Close Settings Button
    $('#settingsOpen').on('click', function () {
        $('#settings').removeClass('d-none');
    })

    $('#settingsClose').on('click', function () {
        $('#settings').addClass('d-none');
    });
        
    
    // Create Sequence Form 
    $('#createSequence').on('click', function () {

        // check to see if settings filled in
        // REFERENCE: https://getbootstrap.com/docs/4.3/components/forms/#how-it-works

        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('click', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    console.log("here")
                } else
                {
                    // Get the values from the settings

                    var raceNo = $('#settingsRaceNo').val();
                    var raceClass = $('#settingsRaceClass :selected').text();
                    var raceTime = $('#settingsRaceTime :selected').text();

                    // Add the settings to the main screen

                    $('#RaceNo').val(raceNo)
                    $('#ClassNo').val(raceClass)
                    $('#SeqTime').val(raceTime)

                    $('#settings').addClass('d-none')
                }
                form.classList.add('was-validated');
            }, false);
        });

    })

    // Recall Buttons
    $('#OCS').on('click', function () {
        recall($(this))
    });

    $('#General').on('click', function () {
        recall($(this))
    });

    // Start Button
    $('#Start').on('click', function () {

        // Make sure settings are setand if they are get them

        if ($('#settingsRaceTime :selected').val() == "" || $('#settingsRaceTime :selected').val() == "" || $('#settingsSignalFlag :selected').val() == ""){
            $('#startAlert').addClass("show")
            $('#startAlert').alert()
        } else {
            var sequenceTime = 60 * parseInt(($('#settingsRaceTime :selected').text()).substring(0, 2));
            console.log("Sequence Time: " + sequenceTime)

            // Pass length of start sequence in seconds i.e. 180 = 3 min start
            startSequence(sequenceTime)
        }
        
    });

    // Stop Button
    $('#Stop').on('click', function () {
        // Do Something
    });
    
    // Reset Button
    $('#Reset').on('click', function () {
        // Do Something
    });

    

})
