<?php /* Smarty version Smarty-3.1.14, created on 2014-11-27 05:24:54
         compiled from ".\templates\contacto.tpl" */ ?>
<?php /*%%SmartyHeaderCode:57535476a7966b4081-58362901%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '466dcc33a567cd1e7c81f5bde835247db88df2dd' => 
    array (
      0 => '.\\templates\\contacto.tpl',
      1 => 1417008338,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '57535476a7966b4081-58362901',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_5476a7969a2133_07303346',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5476a7969a2133_07303346')) {function content_5476a7969a2133_07303346($_smarty_tpl) {?>

<div class="container text-center seccion-chica">
	<div class="row" id="alerta_mail">
	</div>
			<form action="" id="form_mail" method="POST">
				<h3>Formulario de Contacto</h3>
				<div class="form-group input-group col-lg-12">
					<label class="sr-only" for="nombre_apellido">Nombre y Apellido</label>
					<span class="input-group-addon glyphicon glyphicon-user"></span>
					<input class="form-control" type="text" name="nombre_apellido" placeholder="*Nombre y Apellido" pattern="[a-zA-Z]+\s[a-zA-Z]+" title="Formato: Nombre Apellido" required>
				</div>
				<div class="form-group input-group col-lg-12">
					<label class="sr-only" for="email">Email</label>
					<span class="input-group-addon glyphicon glyphicon-envelope"></span>
					
					<input class="form-control" type="email" name="mail" placeholder="*Direccion de E-Mail" pattern="[\w-.]+@[\w-.]+\.\w{2,3}" title="Formato: xxx@yyy.zzz" required>
					
				</div>
				<div class="form-group input-group col-lg-12">
					<label class="sr-only" for="telefono">Telefono</label>
					<span class="input-group-addon glyphicon glyphicon-earphone"></span>
					
					<input class="form-control" type="tel" name="telefono" placeholder="*Telefono (Incluya Cod. Área)" pattern="[\d]{3,5}-[\d]{7,12}" title="Formato: (Cod. Área)-(Numero Completo)" required>
					
				</div>
				<div class="form-group input-group col-lg-12">
					<label class="sr-only" for="consulta">Consulta</label>
					<span class="input-group-addon glyphicon glyphicon-comment"></span>
					<textarea class="form-control" name="consulta" rows="4" placeholder="*Ingrese aqui su consulta" required></textarea>
				</div>
				<div class="form-group">
					<span class="help-block">Todos los campos son Obligatorios.</span><br>
					<button class="color btn col-lg-1 col-lg-offset-4" type="reset">limpiar</button>
					<button class="color btn col-lg-1 col-lg-offset-2 " type="submit">enviar</button>
				</div>
			</form>
		</div>
	</div>
</div>



<?php echo $_smarty_tpl->getSubTemplate ("footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
<?php }} ?>