<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'aspirinad_ktb' );

/** MySQL database username */
define( 'DB_USER', 'aspirinad_vlad' );

/** MySQL database password */
define( 'DB_PASSWORD', '171995vlad' );

/** MySQL hostname */
define( 'DB_HOST', 'db13.freehost.com.ua' );

/** Database Charset to use in creating database tables. */
//define( 'DB_CHARSET', 'utf8mb4' );
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'A7&8~=aso$w$a7]]gAX+;+%AHk!iEfj@s~`3p-+9Cp+YU-!Xp.`_,MURNhp[U?]?' );
define( 'SECURE_AUTH_KEY',  '5^:q,=N)oqly5~8=O9L5j[ZW*;Q?Tm|hD~{X5AiLrfV13o1%VKqg< 6yJog(XGeQ' );
define( 'LOGGED_IN_KEY',    '$@wq`JWZ-?fq$T^cKklt-4C/V9{9~@el~G~KD%sR`&6XU8k,ZKR>]Iu)5i;+lol8' );
define( 'NONCE_KEY',        'X77F(OT4^=6hYzK#hB1}:0#K:>}>z6N*)gsA()Uo}cCVd|1A^-`mu O;B;EY>R+K' );
define( 'AUTH_SALT',        'bMY$emGsmwrq(RY~8v^0:76cZ*.y#bl!*hUq7aQUN&./@z2;IsZ:~6vPnl?5>d^m' );
define( 'SECURE_AUTH_SALT', '8ck=xTztH0!wNgHd4(vgxJ,e>{E~N*CI./+s >82o^[yK~A7CapzZjI17o{yTqq}' );
define( 'LOGGED_IN_SALT',   '7iOR+snlE7^74tT|,Tz6:D[lFD*`8#1U5ppQKiWIe<.L8AtRHU!^mgvt7_atdyc,' );
define( 'NONCE_SALT',       'l$zAz`^+d:;sG)z:6n{B_FPU >([yFuXU/&#-.6E^(3<-K8^9k1!ok=RoEH~K8D7' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
