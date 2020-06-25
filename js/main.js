$('.dropbtn').click(function () {
    var current_dropdown = $(this).next('.dropdown-content');
    $(".dropdown-content").not(current_dropdown).slideUp();
    current_dropdown.toggle();
});
$('.btn-search').on("click", function (e) {
    e.preventDefault();
    $('.dropdown-content-search').toggleClass('show');
    $('.overlay').toggleClass('show');
});

/* Hidden and show mobile menu */
$('.btn-menu').on('click', function (e) {
    e.preventDefault;
    $('nav').toggleClass('show');
});
$('#btnLeft').on('click', function (e) {
    e.preventDefault();
    $('.left-menu').addClass('open-sidebar');
});
$('#btnRight').on('click', function (e) {
    e.preventDefault();
    $('.right-menu').addClass('open-sidebar');
});
$('#btnSettings').on('click', function (e) {
    e.preventDefault();
    $('.highlight-sidebar').addClass('open-sidebar');
});
$('.btn-cancel').on('click', function (e) {
    e.preventDefault();
    $('.close-block').removeClass('open-sidebar');
});
$('.btn-question').on('click', function (e) {
    e.preventDefault();
    $('.related-question').addClass('open-sidebar');
});
// Follow Unfollow button
$('#followUnfollow').on('click', function () {
    $('.follow-title').toggleClass('follow-hidden');
    $('.unfollow-title').toggleClass('follow-hidden');
    if ($('#followUnfollow').hasClass('btn-orange')) {
        $(this).removeClass('btn-orange').addClass('btn-grey');
    } else {
        $(this).removeClass('btn-grey').addClass('btn-orange');
    }
});
// Modal windows
$(function () {
    $(".dialog").dialog({
        autoOpen: false,
        height: "auto",
        maxWidth: 950,
        modal: true,
        position: {
            my: "top",
            at: "top"
        },
        open: function () {
            $('.dialog').scrollTop(0);
        }

    });
    $(".opener").on("click", function () {
        $(".dialog").dialog("open");
    });
});

$(function () {
    $(".notification").dialog({
        height: "auto"
    });
});

$(function () {
    $(".tabs").tabs();
});

$(function () {
    $(".selectmenu").selectmenu();
});
// FILTER
// $(document).ready(function() {
//     $('.filterOptions li a').click(function() {
//         // fetch the class of the clicked item
//         var ourClass = $(this).attr('class');
//
//         // reset the active class on all the buttons
//         $('.filterOptions li').removeClass('filter-active');
//         // update the active state on our clicked button
//         $(this).parent().addClass('filter-active');
//
//         if(ourClass === 'all-invitations') {
//             // show all our items
//             $('.ourHolder').children('div.item').show();
//         }
//         else {
//             // hide all elements that don't share ourClass
//             $('.ourHolder').children('div:not(.' + ourClass + ')').hide();
//             // show all elements that do share ourClass
//             $('.ourHolder').children('div.' + ourClass).show();
//         }
//         return false;
//     });
// });

/* CHECK ALL */
$("#checkAll").click(function () {
    $('.checkItem').not(this).prop('checked', this.checked);
});

// Login Validator
$.validate();

// Check interest

$('.interest-block').on('click', function (e) {
    e.preventDefault();
    $(this).children('.interest-block_check').toggleClass('hidden');
});

// set up account
$('.setup-account').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('checkmark');
});

// Wysiwyg editor
function commande(nom, argument) {
    if (typeof argument === 'undefined') {
        argument = '';
    }
    document.execCommand(nom, false, argument);
}

function rafraichit() {
    var valeur = $('.editeur').html();
    $('.htmlview').text(valeur);
}

$(document).ready(function () {
    $('button').click(function () {
        var id = $(this).attr('id');
        switch (id) {
            case "createLink":
                argument = prompt("What is the address of the link?");
                commande(id, argument);
                break;
            case "insertImage":
                argument = prompt("Please enter the link to the picture");
                commande(id, argument);
                break;

            default:
                commande(id);
                break;
        }
        rafraichit();
    });
});

// SLIDER

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20
        }
    }
});

// EDITABLE BLOCK
$(".editable-text").editable("save.php");
$(".editable-select").editable("save.php", {
    type: "select",
    // this data will be sorted by value
    data: '{"Male":"Male","Female":"Female"}',
    submitdata: function () {
        return { id: 42, something: 'else' };
    }
});
$(".datepicker").editable("save.php", {
    type: 'datepicker',
    submit: 'OK',
    datepicker: {
        format: "dd/mm/yy"
    },
    tooltip: "Click to edit..."
});
$(".checkAll").click(function () {
    $('input:checkbox').not(this).prop('checked', this.checked);
});
// SPINER
var spinner = $(".spinner").spinner();

// CHART JS
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line', // also try bar or other graph types

    // The data for our dataset
    data: {
        labels: ["Oct 1", "Oct 2", "Oct 3", "Oct 4", "Oct 5", "Oct 6", "Oct 7", "Oct 8", "Oct 9", "Oct 10", "Oct 11", "Oct 12", "Oct 13", "Oct 14", "Oct 15", "Oct 16", "Oct 17", "Oct 18", "Oct 19", "Oct 20", "Oct 21", "Oct 22", "Oct 23", "Oct 24", "Oct 25", "Oct 26", "Oct 27", "Oct 28", "Oct 29", "Oct 30"],
        // Information about the dataset
        datasets: [{
            backgroundColor: 'transparent',
            borderColor: '#fd7113',
            fill: false,
            data: [26.4, 39.8, 66.8, 66.4, 40.6, 55.2, 77.4, 69.8, 57.8, 76, 110.8, 142.6, 200, 400, 400, 400, 380, 280, 280, 125, 400, 390, 300, 400, 250, 257, 380, 145, 145, 145]
        }]
    },

    // Configuration options
    options: {
        legend: {
            display: false
        },
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    max: 400,
                    min: 0,
                    stepSize: 100
                }
            }]
        }
    }

});
//# sourceMappingURL=main.js.map
