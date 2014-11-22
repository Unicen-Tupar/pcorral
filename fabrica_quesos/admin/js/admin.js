function radioBuscacli()
{
	$('#campo_toggle').fadeOut(200);
	$("#form_buscador").removeClass('has-success has-error');
	$('#check_na').prop('checked',true);
	busquedaNA();
}
function radioBuscaque()
{
	$('#campo_toggle').fadeIn(200);
	$("#form_buscador").removeClass('has-success has-error');
}
function busquedaIDcliente()
{
	$('#input_principal').val('');
	$('#input_principal').attr('placeholder','ID Cliente');
	$('#input_secundario').slideUp(200);
	$("#form_buscador").removeClass('has-success has-error');
}
function busquedaNA()
{
	$('#input_principal').val('');
	$('#input_secundario').val('');
	$('#input_principal').attr('placeholder','Nombre');
	$('#input_secundario').slideDown(200);
	$('#input_secundario').attr('placeholder','Apellido');
	$("#form_buscador").removeClass('has-success has-error');
}
function busquedaQues()
{
	$('#input_principal').val('');
	$('#input_principal').attr('placeholder','Articulo');
	$('#input_secundario').slideUp(200);
	$("#form_buscador").removeClass('has-success has-error');
}
$("#form_login").submit(function() 
{
	$.ajax({
		type: "POST",
		url: "login.php",
		data:$("#form_login").serialize(),
		success: function(data)
		{
			if (data == 'user')
			{
				alert('Usuario Invalido');
			}
			else if (data == 'pass')
			{
				alert('Password Invalido');
			}
			else
			{
				window.location = data;
			}
		}
	});
	
	return false;
});
$('#buscar').on('submit','#form_buscador',function()  
{
	$.ajax({
		type: "POST",
		url: "admin.php",
		data:$("#form_buscador").serialize(),
		success: function(data)
		{
			if (data == false)
			{
				$("#form_buscador").removeClass('has-success has-error').addClass('has-error');
			}
			else
			{
				$('#buscar').html(data);
			}
		}
	});
	return false;
});
$("#tab_container").ready(function() 
{
	$.ajax({
		type: "POST",
		url: "admin.php",
		data: "que=true",
		success: function(data)
		{
			$("#tablaquesos").html(data);
			$('a[href=#tablaquesos]').tab('show');
		}
	});
	return false;
});
$("#tab_quesos").click(function() 
{
	$.ajax({
		type: "POST",
		url: "admin.php",
		data: "que=true",
		success: function(data)
		{
			$("#tablaquesos").html(data);
			$('a[href=#tablaquesos]').tab('show');
		}
	});
	return false;
});
$("#tab_clientes").click(function() 
{
	$.ajax({
		type: "POST",
		url: "admin.php",
		data: "cli=true",
		success: function(data)
		{
			$("#tablaclientes").html(data);
			$('a[href=#tablaclientes]').tab('show');
		}
	});
	return false;
});

$("#tab_buscar").click(function() 
{
	$.ajax({
		type: "POST",
		url: "admin.php",
		data: "buscar=true",
		success: function(data)
		{
			$("#buscar").html(data);
			$('a[href=#buscar]').tab('show');
		}
	});
	return false;
});
$("#tab_nuevoqueso").click(function() 
{
	$.ajax({
		type: "POST",
		url: "admin.php",
		data: "nuevoque=true",
		success: function(data)
		{
			$("#nuevoqueso").html(data);
			$('a[href=#nuevoqueso]').tab('show');
		}
	});
	return false;
});
$("#tab_nuevocliente").click(function() 
{
	$.ajax({
		type: "POST",
		url: "admin.php",
		data: "nuevocli=true",
		success: function(data)
		{
			$("#nuevocliente").html(data);
			$('a[href=#nuevocliente]').tab('show');
		}
	});
	return false;
});

$('#tablaquesos').on('click','table tbody tr',function() 
{
	$("#modal_body").load("admin.php",{id_queso:$(this).children('td').html()});
	$('#modal_emergente').modal('show');
	return false;
});
$('#tablaclientes').on('click','table tbody tr',function() 
{
	$("#modal_body").load("admin.php",{id_cliente:$(this).children('td').html()});
	$('#modal_emergente').modal('show');
	return false;
});

$('#buscar').on('click','table tbody tr',function() 
{
	if (($('#buscar table thead tr th:eq(3)').text()) == 'articulo')
	{
		$("#modal_body").load("admin.php",{id_queso:$(this).children('td').html()});
		$('#modal_emergente').modal('show');
	}
	else
	{
		$("#modal_body").load("admin.php",{id_queso:$(this).children('td').html()});
		$('#modal_emergente').modal('show');
	}
	return false;
});
$("#nuevocliente").on('submit','#form_nuevocli',function() 
{
	$.ajax({
		type: "POST",
		url: "admin.php",
		data:$("#form_nuevocli").serialize(),
		success: function(data)
		{
			$('#nuevocliente').html(data)
		}
	});
	return false;
});
$('#nuevocliente').on('closed.bs.alert','#alerta', function ()
{
	$.ajax({
		type: "POST",
		url: "admin.php",
		data: "nuevocli=true",
		success: function(data)
		{
			$("#nuevocliente").html(data);
		}
	});
});


$("#nuevoqueso").on('submit','#form_nuevoque',function() 
{
	$.ajax({
		type: "POST",
		url: "admin.php",
		data:$("#form_nuevoque").serialize(),
		success: function(data)
		{
			$('#nuevoqueso').html(data)
		}
	});
	return false;
});
$('#nuevoqueso').on('closed.bs.alert','#alerta', function ()
{
	$.ajax({
		type: "POST",
		url: "admin.php",
		data: "nuevoque=true",
		success: function(data)
		{
			$("#nuevoqueso").html(data);
		}
	});
});


$('#logout').click(function()
{
	$.ajax({
		type: "POST",
		url: "logout.php",
		success: function(data)
		{
			window.location = "login.php";
		}
	});
	return false;
});
$('#modal_body').on('click','#boton_modificacli',activaFormcli);
function activaFormcli()
{
	$('#modal_body input').not("[name=id]").prop('readonly',false);
	$('#modal_body input[name=nombre_n]').focus();
	$('#modal_body').off('click','#boton_modificacli',activaFormcli).on('click','#boton_modificacli',modificaFormcli);
	$('#boton_modificacli').removeClass('btn-primary').addClass('btn-success');
	$('#boton_modificacli span').removeClass('glyphicon-edit').addClass('glyphicon-ok');
	$('#modal_emergente').off('hidden.bs.modal').on('hidden.bs.modal', function ()
	{
		$('#modal_body').off('click','#boton_modificacli',modificaFormcli).on('click','#boton_modificacli',activaFormcli);
	});
};
function modificaFormcli()
{	
	$("#modal_body").load("admin.php",$("#actualiza_cli").serializeArray());
	$('#modal_body').off('closed.bs.alert').on('closed.bs.alert','#alerta', function ()
	{
		$('#modal_emergente').modal('hide');
	});
	$('#modal_emergente').on('hidden.bs.modal', function ()
	{
		$.ajax({
			type: "POST",
			url: "admin.php",
			data: "cli=true",
			success: function(data)
			{
				$("#tablaclientes").html(data);
			}
		});
		return false;
	});
};
$('#modal_body').on('click','#boton_modificaque',activaFormque);
function activaFormque()
{
	$('#modal_body textarea,input').not("[name=id_que]").prop('readonly',false);
	$('#modal_body select').prop('disabled',false);
	$('#modal_body input[name=articulo]').focus();
	$('#modal_body').off('click','#boton_modificaque',activaFormque).on('click','#boton_modificaque',modificaFormque);
	$('#boton_modificaque').removeClass('btn-primary').addClass('btn-success');
	$('#boton_modificaque span').removeClass('glyphicon-edit').addClass('glyphicon-ok');
	$('#modal_emergente').off('hidden.bs.modal').on('hidden.bs.modal', function ()
	{
		$('#modal_body').off('click','#boton_modificaque',modificaFormque).on('click','#boton_modificaque',activaFormque);
	});
};
function modificaFormque()
{	
	$("#modal_body").load("admin.php",$("#actualiza_que").serializeArray());
	$('#modal_body').off('closed.bs.alert').on('closed.bs.alert','#alerta', function ()
	{
		$('#modal_emergente').modal('hide');
	});
	$('#modal_emergente').on('hidden.bs.modal', function ()
	{
		$.ajax({
			type: "POST",
			url: "admin.php",
			data: "que=true",
			success: function(data)
			{
				$("#tablaquesos").html(data);
			}
		});
		return false;
	});
};
$('#modal_body').on('click','#boton_borracli',function ()
{
	if (confirm('Seguro desea eliminar a el cliente?'))
	{
		$("#modal_body").load("admin.php",{id_delcli:$('#modal_body input[name=id]').val()});
		$('#modal_body').off('closed.bs.alert').on('closed.bs.alert','#alerta', function ()
		{
			$('#modal_emergente').modal('hide');
		});
		$('#modal_emergente').off('hidden.bs.modal').on('hidden.bs.modal', function ()
		{
			$.ajax({
				type: "POST",
				url: "admin.php",
				data: "cli=true",
				success: function(data)
				{
					$("#tablaclientes").html(data);
				}
			});
			return false;
		});
	}
});
$('#modal_body').on('click','#boton_borraque',function ()
{
	if (confirm('Seguro desea eliminar el producto?'))
	{
		$("#modal_body").load("admin.php",{id_delque:$('#modal_body input[name=id_que]').val()});
		$('#modal_body').off('closed.bs.alert').on('closed.bs.alert','#alerta', function ()
		{
			$('#modal_emergente').modal('hide');
		});
		$('#modal_emergente').off('hidden.bs.modal').on('hidden.bs.modal', function ()
		{
			$.ajax({
				type: "POST",
				url: "admin.php",
				data: "que=true",
				success: function(data)
				{
					$("#tablaquesos").html(data);
				}
			});
			return false;
		});
	}
});
