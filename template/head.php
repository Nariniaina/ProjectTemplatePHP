<?php
    define('CSSPATH', 'http://localhost/ProjectTemplates/template/css/');
    define('CSSPATH_PUBLIC', 'http://localhost/ProjectTemplates/public/css/');
    define('JS_PATH', 'http://localhost/ProjectTemplates/template/js/');
    define('IMGPATH', 'http://localhost/ProjectTemplates/template/images/');
    define('IMGPATH_PULIC', 'http://localhost/ProjectTemplates/public/images/');
    $header_css = 'header.css';
    $footer_css = 'footer.css';
    $template_css = 'template.css';
    $font_css = 'poppins.css';
    $font_awesome_css = '/fontawesome/css/all.min.css';
    $favicon = 'favicon-template.ico';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo($title); ?></title>
    <!-- Favicon -->
    <link rel="shortcut icon" href="<?php echo (IMGPATH . "$favicon"); ?>" type="image/x-icon" />
    <!-- Footer -->
    <link rel="stylesheet" href="<?php echo (CSSPATH . "$footer_css"); ?>" type="text/css">
    <!-- Nav-bar -->
    <link rel="stylesheet" href="<?php echo (CSSPATH . "$header_css"); ?>" type="text/css">
    <!-- Google font -->
    <link rel="stylesheet" href="<?php echo (CSSPATH . "$font_css"); ?>" type="text/css"/>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="<?php echo (CSSPATH_PUBLIC . "$font_awesome_css"); ?>" type="text/css"/>
</head>