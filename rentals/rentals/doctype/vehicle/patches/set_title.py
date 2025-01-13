import frappe

# frappe must have function execute
def execute():
    vehicle = frappe.db.get_all("Vehicle", pluck = "name")
    for v in vehicle:
        vehicle = frappe.get_doc("Vehicle",v)
        vehicle.set_title()
        vehicle.save()
    
    frappe.db.commit()
        