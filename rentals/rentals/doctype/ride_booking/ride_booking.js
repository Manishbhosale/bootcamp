// Copyright (c) 2024, ite me and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Ride booking", {
// 	refresh(frm) {

// 	},
// });


// suppose I want when i enter the rate at that time total amount calculated so this code is useful

// frappe.ui.form.on('Ride booking', {
//     rate: function(frm) {
//         // Calculate total distance
//         let total_distance = 0;

//         if (frm.doc.ride_booking_details) {
//             frm.doc.ride_booking_details.forEach(detail => {
//                 total_distance += detail.distance || 0;
//             });
//         }

//         // Calculate total amount
//         if (frm.doc.rate) {
//             frm.set_value('total_amount', total_distance * frm.doc.rate);
//         }
//     },

//     ride_booking_details: {

//         distance: function(frm, cdt, cdn) {
//             // Recalculate total amount when distance changes in child table
//             let total_distance = 0;

//             frm.doc.ride_booking_details.forEach(detail => {
//                 total_distance += detail.distance || 0;
//             });

//             if (frm.doc.rate) {
//                 frm.set_value('total_amount', total_distance * frm.doc.rate);
//             }
//         }
//     }
// });

frappe.ui.form.on("Ride booking", {

	refresh(frm) {

	},

    rate(frm)
    {
        frm.trigger("udp");
    },

    udp(frm)
    {
        total_d = 0;
        for(let data of frm.doc.ride_booking_details)
        {
            total_d = total_d + data.distance
        }

        const total2 = frm.doc.rate * total_d;
        frm.set_value("total_amount", total2); 
    }
});


frappe.ui.form.on("Ride booking item", {
	refresh(frm) {

	},

    distance(frm,cdt,cdn)
    {
        console.log(cdt,cdn);
        console.log("Child table");
        // cdt and cdn represent current row
        // we can update and set the value using this
        // mychid = frappe.get_doc(cdt,cdn);
        // frappe.model.set_value(cdt,cdn,"source","updated soruce");

        // total_d = 0;
        // for(let data of frm.doc.ride_booking_details)
        // {
        //     total_d = total_d + data.distance
        // }

        // const total2 = frm.doc.rate * total_d;
        // frm.set_value("total_amount", total2); 

        frm.trigger("udp");
    },

    ride_booking_details_remove(frm)
    {
        frm.trigger("udp");
    }
});