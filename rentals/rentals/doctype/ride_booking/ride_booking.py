# Copyright (c) 2024, ite me and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Ridebooking(Document):
	def validate(self):
		if not self.rate:
			frappe.throw("Please provide the rate")

		total_distance = 0
		for i in self.ride_booking_details:
			total_distance = total_distance + i.distance
    
		self.total_amount = total_distance * self.rate