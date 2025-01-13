# Copyright (c) 2024, ite me and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator


class Vehicle(WebsiteGenerator):        
   
    def before_save(self):
        self.full_name = f"{self.make} {self.model} {self.year}"
    
    # def before_save(self):
    #     pass
    

    def set_title(self):
        self.full_name = f"{self.make} {self.model} {self.year}"



    
