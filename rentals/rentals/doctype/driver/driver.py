# Copyright (c) 2024, ite me and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Driver(Document):
	def before_save(self):
		self.last_name = f"{self.first_name}"
