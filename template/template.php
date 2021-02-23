<?php
    $title = 'Template';
    $template_css = 'template.css';
    include($_SERVER['DOCUMENT_ROOT'].'/ProjectTemplates/template/head.php');
    include($_SERVER['DOCUMENT_ROOT'].'/ProjectTemplates/template/header.php');
?>
<head>
    <!-- Templates -->
    <link rel="stylesheet" href="<?php echo (CSSPATH . "$template_css"); ?>" type="text/css">
</head>
<body>
    <?php
        include($_SERVER['DOCUMENT_ROOT'].'/ProjectTemplates/template/footer.php');
    ?>