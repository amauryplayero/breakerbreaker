<?php
/**
 * breakerbreaker functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package breakerbreaker
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function breakerbreaker_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on breakerbreaker, use a find and replace
		* to change 'breakerbreaker' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'breakerbreaker', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'breakerbreaker' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'breakerbreaker_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'breakerbreaker_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function breakerbreaker_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'breakerbreaker_content_width', 640 );
}
add_action( 'after_setup_theme', 'breakerbreaker_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function breakerbreaker_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'breakerbreaker' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'breakerbreaker' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'breakerbreaker_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
// function breakerbreaker_scripts() {
// 	wp_enqueue_style( 'breakerbreaker-styles', get_stylesheet_uri(), array(), _S_VERSION );
// 	wp_style_add_data( 'breakerbreaker-styles', 'rtl', 'replace' );

// 	wp_enqueue_script( 'breakerbreaker-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

// 	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
// 		wp_enqueue_script( 'comment-reply' );
// 	}
// }

add_action('init', 'create_gallery_post_type');

function create_gallery_post_type() {
    $labels = array(
        'name'               => 'Slider Assets',
        'singular_name'      => 'Gallery Item',
        'menu_name'          => 'Slider Assets',
        'name_admin_bar'     => 'Gallery Item',
        'add_new'            => 'Add New',
        'add_new_item'       => 'Add New Gallery Item',
        'new_item'           => 'New Gallery Item',
        'edit_item'          => 'Edit Gallery Item',
        'view_item'          => 'View Gallery Item',
        'all_items'          => 'All Gallery Items',
        'search_items'       => 'Search Gallery Items',
        'parent_item_colon'  => 'Parent Gallery Items:',
        'not_found'          => 'No gallery items found.',
        'not_found_in_trash' => 'No gallery items found in Trash.',
    );

    $args = array(
        'labels'             => $labels,
		// 'taxonomies' 		 => array('category'),
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'gallery-item'), // Customize the slug as needed
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'supports'           => array('title', 'editor', 'thumbnail', 'cat'), // Customize supports as needed
    );

    // Register the custom post type
    register_post_type('gallery', $args);

	$taxonomy_args = array(
        'hierarchical' => true,
        'labels' => array(
            'name' => 'Gallery Categories',
            'singular_name' => 'Gallery Category',
            'search_items' => 'Search Gallery Categories',
            'all_items' => 'All Gallery Categories',
            'parent_item' => 'Parent Gallery Category',
            'parent_item_colon' => 'Parent Gallery Category:',
            'edit_item' => 'Edit Gallery Category',
            'update_item' => 'Update Gallery Category',
            'add_new_item' => 'Add New Gallery Category',
            'new_item_name' => 'New Gallery Category Name',
            'menu_name' => 'Gallery Categories',
        ),
        'show_ui' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'gallery-category'), // Customize the slug as needed
    );

    register_taxonomy('gallery_category', 'gallery', $taxonomy_args);
}

function get_gallery_items() {

	$args = array(
		'post_type' => 'gallery',
		'posts_per_page' => -1,
	);

	$gallery_query = new WP_Query($args);
	$gallery_items = array();
	
	if($gallery_query->have_posts()) {
		while ($gallery_query->have_posts()){
			$gallery_query->the_post();
			$featured_image_id = get_post_thumbnail_id();
			$featured_image_url = $featured_image_id ? wp_get_attachment_url($featured_image_id) : '';

			$item = array(
				'url' => $featured_image_url,
				'title' => get_the_title(),
				'category'=> get_the_terms(get_the_ID(), 'category'),
 			);

			 $gallery_items[] = $item;
		}
		wp_reset_postdata();
	}
	return $gallery_items;
}


function enqueue_custom_script() {
    // Replace 'your-theme' with the name of your theme's directory.
    $theme_directory = get_stylesheet_directory_uri();
    
    // Enqueue the custom JS file.
    wp_enqueue_script('slider', $theme_directory . '/js/slider.js', array('jquery'), '1.0', true);
	$gallery_items = get_gallery_items();

	wp_localize_script('slider', 'slider_data', $gallery_items);
    wp_localize_script('slider', 'my_ajax_object',
            array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
}
add_action('wp_enqueue_scripts', 'enqueue_custom_script');

function enqueue_styles() {
    wp_enqueue_style('breakerbreaker-styles', get_stylesheet_directory_uri() . '/css/styles.css');
}
add_action('wp_enqueue_scripts', 'enqueue_styles');
// add_action( 'wp_enqueue_scripts', 'breakerbreaker_scripts' );



// functions.php or custom PHP file
function get_image_url_by_id($image_id) {
    // Your code here to retrieve the image URL based on the provided image ID.
    // For this example, we'll assume you have a custom function called 'get_image_url_by_id'.
    // Replace this with your actual code that fetches the image URL.
    // $image_url = get_image_url_by_id($image_id);
	if ($image_id== "2"){
		$image_url = "https://i.imgur.com/JPUkJMu.jpg";
		return $image_url;
	} else {
		$image_url = "https://i.imgur.com/f7SqptB.jpeg";
		return $image_url;
	}
}
add_action('wp_ajax_get_image_url', 'ajax_get_image_url');
add_action('wp_ajax_nopriv_get_image_url', 'ajax_get_image_url');

function ajax_get_image_url() {
    // Check for the passed image ID parameter in the AJAX request.
    $image_id = isset($_POST['image_id']) ? $_POST['image_id'] : 0;

    // Call the PHP function to get the image URL based on the provided image ID.
    $image_url = get_image_url_by_id($image_id);

    // Return the image URL as the AJAX response.
    echo json_encode(array('image_url' => $image_url));
    wp_die(); // Always include this line to terminate the AJAX call properly.
}

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

