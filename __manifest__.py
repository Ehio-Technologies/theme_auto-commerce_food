{
    'name': 'Auto-Commerce Food Theme',
    'description': 'Ehio Technologies Auto-Commerce theme for an food based e-commerce website',
    'version': '1.0',
    'author': 'Samson O., Ehio Technologies',
    'category': 'Theme/Creative',

    'depends': ['website',
                'website_sale'
                ],
    'data': [
        'views/assets.xml',
        'views/layout.xml',
        'views/pages.xml',
        'views/snippets.xml',
        'views/overrides.xml',
        'views/cart_overrides.xml',
        'views/checkout_overrides.xml',
        'views/product_overrides.xml'
    ],
    'application': False,
    'installable': True,
    'auto_install': False,
}