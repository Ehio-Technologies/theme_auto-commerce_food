 # -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request
import json
import base64

#
class AutoCommTheme(http.Controller):

    @http.route('/auto-commerce/categories', auth='public')
    def categories(self, **kw):
        category_recs = request.env['product.public.category'].sudo().search([])

        categories = []
        for category in category_recs:
            categories.append({"id": category.id, "category": category.name, "image": str(category.image_1920)})
        return json.dumps(categories)

    @http.route('/auto-commerce/products', auth='public')
    def popular_products(self, **kw):
        product_recs = request.env['product.template'].sudo().search([])

        products = []
        for product in product_recs:
            products.append({"id": product.id, "name": product.name, "image": str(product.image_1920), "category_ids": [product.public_categ_ids.id], "price": str("{:,.2f}".format(product.list_price)), "description": product.description, 'sales_count': product.sales_count})
        # sort products to get the most sold ones
        products_sorted_by_sales_count = sorted(products, key=lambda i: i['sales_count'], reverse=True)

        return json.dumps(products_sorted_by_sales_count[:10])

    @http.route('/auto-commerce/company-details', auth='public')
    def owner_company_details(self, **kw):
        company_rec = request.env['res.company'].sudo().search([('id', '=', 1)])

        company_details = {
            "email": company_rec.email,
            "phone": company_rec.phone,
            "currency": company_rec.currency_id.name
        }

        return json.dumps(company_details)
