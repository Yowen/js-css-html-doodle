jQuery(document).ready(function() {

    // Adding the x button
    jQuery('#first-block').append('<button class="close">Close First Block</button>')

    // Handling the click event
    jQuery('.close').click(function() {
        jQuery(this).parents('#first-block').fadeOut();
    });

    // Initially hide the text to the second block
    jQuery('#second-block p').hide();

    // Toggle the visibility of the text
    jQuery('#second-block h2').click(function() {
        jQuery(this).next('#second-block-text').slideToggle();
    });

    // Load specific content from other HTML document
    jQuery('#about-list-link').click(function() {
        jQuery('#placeholder-list').load('about.html .list');
        return false;
    });

    // Load specific content from other HTML document
    jQuery('#about-text-link').click(function() {
        jQuery('#placeholder-text').load('about.html .text');
        return false;
    })

    // Load all content from other HTML document
    jQuery('#about-all-link').click(function() {
        jQuery('#placeholder-all').load('about.html .container');
        return false;
    })
});