$(document).ready(function() {
    // $("#categorySlider").lightSlider();

    let currency = '';
    
    // function addCategories(){
    //     var baseUrl = '/auto-commerce/categories';
    //
    //     $.ajax({
    //         method: "GET",
    //         url: baseUrl,
    //         dataType: "json",
    //         success: function(data){
    //
    //             var allCategories = data.map(function(value){
    //                 // return `
    //                 //     <option value="${value.id}">
    //                 //         ${value.category}
    //                 //     </option>
    //                 // `;
    //
    //                 if(value.image == 'False'){
    //                     return '';
    //                 }
    //
    //                 let imageStr = value.image.substring(2, value.image.length - 1);
    //
    //                 return`<li class="position-relative mx-2">
    //                             <div class="category-item d-flex flex-column justify-content-center">
    //                                 <a class="cover" href="/shop/category/${value.id}">
    //                                     <img class="category-img" src="data:image/png;base64,${imageStr}"/>
    //                                 </a>
    //                                 <div class="d-flex justify-content-center mt-1">
    //                                     <a href="/shop/category/${value.id}" class="text-break text-center lh-sm category-name">
    //                                         ${value.category}
    //                                     </a>
    //                                 </div>
    //                             </div>
    //                         </li>`;
    //
    //             }).join('');
    //
    //             if($("#categorySlider") != null){
    //
    //                 $('#categorySlider').append(allCategories);
    //
    //                 $("#categorySlider").lightSlider({
    //                     autoWidth: false,
    //
    //                     mode: "slide",
    //                     useCSS: true,
    //                     cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
    //                     easing: 'linear',
    //
    //                     pager: false,
    //
    //                     enableTouch: true,
    //                     enableDrag: true,
    //                     freeMove: true,
    //                     controls: false,
    //
    //                     gallery: true,
    //                     item: 5,
    //                     galleryMargin: 10,
    //                     slideMargin: 20,
    //
    //                     responsive: [{
    //                             breakpoint: 2561,
    //                             settings: {
    //                                 item: 12,
    //                                 slideMargin: 10,
    //                                 slideMove: 1
    //                             }
    //                         },
    //
    //                         {
    //                             breakpoint: 1441,
    //                             settings: {
    //                                 item: 10,
    //                                 slideMargin: 10,
    //                                 slideMove: 1
    //                             }
    //                         },
    //
    //                         {
    //                             breakpoint: 1281,
    //                             settings: {
    //                                 item: 8,
    //                                 slideMargin: 10,
    //                                 slideMove: 1
    //                             }
    //                         },
    //
    //
    //                         {
    //                             breakpoint: 1025,
    //                             settings: {
    //                                 item: 6,
    //                                 slideMove: 1,
    //                                 slideMargin: 6,
    //                             }
    //                         },
    //
    //
    //                         {
    //                             breakpoint: 768,
    //                             settings: {
    //                                 item: 4,
    //                                 slideMove: 1,
    //                                 slideMargin: 0,
    //                             }
    //                         },
    //
    //                     ]
    //
    //                 });
    //
    //                 if(allCategories == '' || allCategories == null){
    //                     $('.js-no-category').removeClass('d-none');
    //                 }
    //
    //             }
    //
    //         },
    //
    //         error: function(data){
    //             $('.js-no-category').removeClass('d-none');
    //
    //         }
    //     });
    //
    // }
    //
    //

    function addPopularProducts(){
        var baseUrl = '/auto-commerce/products';

        $.ajax({
            method: "GET",
            url: baseUrl,
            dataType: "json",
            success: function(data){

                var allProducts = data.map(function(value, index){

                    if(value.image == 'False'){
                        return '';
                    }

                    if(index > 8){
                        return '';
                    }

                    let imageStr = value.image.substring(2, value.image.length - 1);

                    return`<div class="product-item col-md-4 col-xl-3 d-flex align-items-stretch mb-lg-2">
                                <div class="product-card card m-1 d-flex flex-column justify-content-center">
                                    <a href="/shop/${value.id}" class="h-100 cover-wrapper product-img">
                                        <img src="data:image/png;base64,${imageStr}" class="card-img-top h-100 cover" alt="${value.name}"/>
                                    </a>
                                    <div class="card-body flex-none w-100 border-top mb-0 align-self-end">
                                        <p class="card-text mb-2">
                                            <a href="/shop/${value.id}">${value.name}</a>
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            <h5 class="card-title mb-3">${currency + ' ' + value.price}</h5>
                                            <span class="card-text">
                                                5.0<i class="bi bi-star-fill ms-1 text-info align-items-center"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>`;

                }).join('');

                $('.js-product-spinner').addClass('d-none');

                if($('#popularProductsContainer') !=null){
                    $('#popularProductsContainer').append(allProducts);
                }

                if(allProducts == '' || allProducts == null){
                        $('.js-no-product').removeClass('d-none');
                    }

            },

            error: function(data){
                $('.js-product-spinner').addClass('d-none');
                $('.js-no-product').removeClass('d-none');
            }
        });

    }

    function addCategoriesBanner(){
        var baseUrl = '/auto-commerce/categories';

        $.ajax({
            method: "GET",
            url: baseUrl,
            dataType: "json",
            success: function(data){

                let count = 0;
                var allCategories = data.map(function(value, index){

                    if(index > 2){
                        return '';
                    }

                    let categoryImg = '';

                    if(value.image == 'False'){
                        categoryImg = `<img class="cover w-100" src="/theme_auto-commerce_default/static/src/img/bg/banner-bg.jpg"/>`;
                    }
                    else{
                        let imageStr = value.image.substring(2, value.image.length - 1);
                        categoryImg = `<img class="cover w-100" src="data:image/png;base64,${imageStr}"/>`;
                    }

                    return`<div class="banner-item-container">
                                <div class="banner-item position-relative ">
                                    <div class="banner-item-img w-100 cover">
                                        ${categoryImg}
                                    </div>
            
                                    <div class="banner-text position-absolute">
                                        <span>
                                            ${value.category}
                                    </div>
            
                                    <div class="banner-content-wrapper position-bottom-right position-x-left-to-right position-y-top-to-bottom style-1">
                                        <div class="banner-content-inner">
                                            <div>
                                                <a href="/shop/category/${value.id}" class="btn btn-light">Shop category</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;

                }).join('');

                $('.js-category-spinner').addClass('d-none');

                $('.js-banner-container').append(allCategories);

                if(allCategories == '' || allCategories == null){
                    $('#categoryBanner').addClass('d-none');
                }
                else{
                    $('#categoryBanner').addClass('d-flex');
                }


            },

            error: function(data){
                $('.js-category-spinner').addClass('d-none');
                $('#categoryBanner').addClass('d-none');
            }
        });

    }


    function getContactInfo(){
        var baseUrl = '/auto-commerce/company-details';

        $.ajax({
           method: "GET",
            url: baseUrl,
            dataType: "json",
            success: function(data){
               currency = data.currency;
               $('#footer .custom-business-info').html(
                   `
                            <li><i class="fa fa-comment fa-fw mr-2"/><span><a href="/contactus">Contact us</a></span></li>
                            <li><i class="fa fa-envelope fa-fw mr-2"/><span><a href="mailto:${data.email}">${data.email}</a></span></li>
                            <li><i class="fa fa-phone fa-fw mr-2"/><span class="o_force_ltr"><a href="tel:${data.phone}">${data.phone}</a></span></li>
                   `
               )
            },
            error: function(data){
               //unable to retrieve business info
            }
        });
    }


    getContactInfo();

    // if($('#categories')!= null){
    //     addCategories();
    // }

    if($('#categoriesBanner')!= null){
        addCategoriesBanner();
    }

    if($('#popularProducts') != null){
        addPopularProducts();
    }



  });