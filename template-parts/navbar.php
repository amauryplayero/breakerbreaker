<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package breakerbreaker
 */

?>

<?php if ( has_nav_menu( 'primary' ) ) : ?>
	<nav id="site-navigation" class="primary-navigation" aria-label="<?php esc_attr_e( 'Primary menu', 'twentytwentyone' ); ?>">
		<div class="menu-button-container">
           TYESTING NAV BART
			
    <?php 	
    wp_nav_menu( 
        array(
        'theme_location' => 'primary',
        'menu_class'     => 'primary-menu-HAIII',
         ) );

		?>
	</nav><!-- #site-navigation -->
	<?php
endif;
