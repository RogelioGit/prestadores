/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$scope.prestador = {			
                        "idPrestador" :"",
			"nombre" :"",
			"descPrestador" :"",
			"horarioAtencion1" :"",
			"horarioAtencion2" :"",
			"redPreferencia" :"",
			"plan" :"",
			"gama" :"",
			"userName" :"",
			"razonSocial" :"",
			"rfc" :"",
			"noAgente" : "", 
			"idTipoPrestador" :"",
			"tipoPrestador" :"",
			"tipoServicio" :"",
			"idTipoServicio" :"",					
			"cveEstatus" :"",			
			"especialidad":[],
			"direccion":[],
			"emails":[],
			"agenteRamos":[]
                    };
                    
$scope.direccionPrestador ={
                        "idDireccion" :"",
			"idPrestador" :"",			
			"pais" :"",			
			"idEstado" :"",
			"estado" :"",
			"idMunicipio" :"",
			"municipio" :"",
			"descripcion" :"",
			"latitud" :"",
			"longitud" :"",
			"codigoPostal" :"",
			"numeroInterior" :"",
			"numeroExterior" :"",
			"colonia" :"",
			"calle" :"",
			"userName" :"",
			"tipoDireccion" :"",		
			"telefonos":[]
                    };     
$scope.telefono = {                    
			"idPrestadorTelefono" :"",
			"idDireccion" :"",
			"numero" :"",
			"tipoTelefono" :"",
			"extension" :""
                    };
$scope.email = {
  			"idEmail" :"",
			"idPrestador" :"",
			"email" :""  
                };
        $http({
            method:$scope.metodo[0].type,
            data:  $scope.args,
            url :  $scope.rutas[2].url
        }).success(function(data){
            console.log("datos insertados correctamente" );
        });                

