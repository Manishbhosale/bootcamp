// Copyright (c) 2024, ite me and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
    refresh(frm) {

        if (frm.doc.status !== "Accepted") {
            frm.add_custom_button("Accept", () => {
                // frappe.show_alert("It works")

                frm.set_value("status", "Accepted");
                frm.save();
            }) // if you want both are in group by use },"Actions")

            frm.add_custom_button("Reject", () => {
                // frappe.show_alert("It works")

                frm.set_value("status", "Rejected");
                frm.save();
            })
        }

    },
});
