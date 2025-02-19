<?php
/**
 * Plugin Name:         Cippy Plugin
 * Plugin URI:          https://at.the.moment/frega.una.cippy
 * Description:         Plugin del cippy
 * Version:             1.0.0
 * Author:              Marcello Faugiana
 *
 */

define( 'PLUG_DIR', plugin_dir_path( __FILE__ ) );
define( 'PLUG_URL', plugin_dir_url( __FILE__ ) );

function load_ng_scripts() {
	
	// Gestione della versione (per evitare di invalidare la cache quando si fa upload di nuovi file)
	// Ad essere precisi andrebbe creata una versione per ogni file.
	// Qui per semplicità si assume che i file js vengano copiati in blocco
	$ver = date( 'Ymd-Gis', filemtime( PLUG_DIR . 'dist/main.js' ) );
		
	wp_enqueue_style('ng_styles', trailingslashit( PLUG_URL ) . 'dist/styles.css', null, $ver );
	
	// ATTENZIONE: se non si mette true come ultimo parametro lo script viene caricato fuori dal body e il nostro tag <cippy-plug> non sarà riconosciuto
	wp_enqueue_script( 'ng_polyfills', trailingslashit( PLUG_URL ) . 'dist/polyfills.js', null, $ver, true);       
    wp_enqueue_script( 'ng_runtime', trailingslashit( PLUG_URL ) . 'dist/runtime.js', null, $ver, true);
	wp_enqueue_script( 'ng_main', trailingslashit( PLUG_URL ) . 'dist/main.js', null, $ver, true);   
}

add_action( 'wp_enqueue_scripts', 'load_ng_scripts', 1 );

function get_angular() {
	return "<cippy-plug/>";
}

add_shortcode( 'cippy_wp', 'get_angular' );

?>