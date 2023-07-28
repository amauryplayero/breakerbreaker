<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package breakerbreaker
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="profile" href="https://gmpg.org/xfn/11">
		<?php wp_head(); ?>
	</head>
	
	<body <?php body_class(); ?>>
		<?php wp_body_open(); ?>
				<?php
				get_template_part('template-parts/navbar');
				?>
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'breakerbreaker' ); ?></a>

	<header id="masthead" class="site-header">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Andada+Pro:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@400;500;700&family=Inter:wght@100;300;400;700&family=Readex+Pro:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
		<div class="site-branding">
			<?php
			the_custom_logo();
	
			$breakerbreaker_description = get_bloginfo( 'description', 'display' );
			if ( $breakerbreaker_description || is_customize_preview() ) :
				?>
				<p class="site-description"><?php echo $breakerbreaker_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p>
			<?php endif; ?>
		</div><!-- .site-branding -->
	</header><!-- #masthead -->
