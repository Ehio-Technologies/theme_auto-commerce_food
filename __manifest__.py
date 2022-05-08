

# -*- encoding: utf-8 -*-

{
    'name': 'Auto-commerce Food Theme',
    'description': 'Ehio Technologies Auto-Commerce theme for an food based e-commerce website',
    'category': 'Theme',
    'sequence': 100,
    'version': '1.0',
    'depends': ['website', 'website_sale'],
    'assets': {
        'web.assets_frontend': [
            # 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
            'theme_auto-commerce_food/static/scss/fonts.css',
            'theme_auto-commerce_food/static/src/fonts/reckless-neue/stylesheet.css',
            'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css',
            'theme_auto-commerce_food/static/scss/lightslider.css',
            'theme_auto-commerce_food/static/scss/style.scss',
            'theme_auto-commerce_food/static/scss/front.scss',
            'theme_auto-commerce_food/static/src/js/lightslider.js',
            'theme_auto-commerce_food/static/src/js/snippets_script.js'
        ],
    },
    'data': [
        # 'views/assets.xml',
        'data/ir_asset.xml',
        'views/layout.xml',
        'views/snippets.xml',
        'views/cart_overrides.xml',
        'views/overrides.xml',
        'views/product_overrides.xml',
    ],
    'images': [
        'static/description/cover.png',
        'static/description/theme_default_screenshot.jpg',
    ],
    'snippet_lists': {
        'homepage': ['s_banner_slider', 's_category_section', 's_popular_products_section', 's_product_highlight_section', 's_category_banner_section'],
    },
    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
}
