function sizeSet(){
    var height = $(window).height();
	var width = $(window).width();
	var colWidth = $('.col-md-2').css('width').replace(/[^-\d\.]/g, '');
	var widthG = $('.col-md-8').css('width').replace(/[^-\d\.]/g, '');
	var heightG = $('.board').css('height').replace(/[^-\d\.]/g, '');
    var drawWidth = $('.board').css('width').replace(/[^-\d\.]/g, '');
    $('.board').css('height', height);
    $('#draw').css({'width' : drawWidth, 'height' : height});
	$('.garbage').css({'width' : widthG, 'left' : colWidth+'px'});
	$('.process').css({'top' : height-100+'px'});
	$('#simulate').css({'width' : (width/8)+20});
	$('#create').css({'width' : (width/8)+20});
	$('.detail').css({'top' : height-200+'px', 'left' : ((widthG/2)-150)+'px'});
	$(window).resize(function(){
		$('.board').css('height', height);
        $('#draw').css({'width' : drawWidth, 'height' : height});
		$('.garbage').css({'width' : widthG, 'left' : colWidth+'px'});
		$('.process').css({'top' : height-100+'px'});
		$('#simulate').css({'width' : (width/8)+20});
		$('#create').css({'width' : (width/8)+20});
	});
}
//////////////////////////////////////////////////////////////
function drawInput(num, text){
    return "<div id = 'input' class='inputContent "+num+"'><label id = '"+num+"'>"+text+"</label></div>";
};
function drawOutput(num, text){
    return "<div id = 'output' class='outputContent "+num+"'><label id = '"+num+"'>"+text+"</label></div>";
}
//////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
//detail 함수 // 데이터 저장 xxxxxx
function detailPrint(text){
    if(text === "Brightness"){
        return "<tr><th><label>| Detecting brightness</label></th><td class='selector'><select class='form-control input-lg'><option value=''></option><option value='0'>Daytime</option><option value='1'>Midnight</option><option value='2'>Night</option> 			<option value='3'>Laser</option>		      			<option value='4'>LED</option>				</select>			</td>		</tr>";
    }else if(text === "Length"){
        return "<tr><th><label>| Detecting length</label></th><td class='selector'><div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>cm</span>                        	    			</div>										</td>									</tr>									<tr>										<th><label>| Length Resolution</label></th>										<td class='selector'>											<div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>cm</span>                        	    			</div>										</td>									</tr>";
    }else if(text === "Compass"){
        return "<tr><th><label>| Compass Resolution</label></th><td class='selector'><div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>º</span>                        	    			</div>										</td>									</tr>";
    }else if(text === "Heartbeat"){
        return "";
    }else if(text === "Sound"){
        return "<tr><th><label>| Detecting loudness</label></th><td class='selector'><div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>dB</span>                        	    			</div>										</td>									</tr>									<tr>										<th><label>| Loudness resolution</label></th>										<td class='selector'>											<div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>dB</span>                        	    			</div>										</td>									</tr>									<tr>										<th><label>| Detecting frequency</label></th>										<td class='selector'>											<div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>Hz</span>                        	    			</div>										</td>									</tr>									<tr>										<th><label>| Detecting resolution</label></th>										<td class='selector'>											<div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>Hz</span>                        	    			</div>										</td>									</tr>";		
    }else if(text === "Time"){
        return "<tr><th><label>| Detecting time</label></th><td class='selector'><div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>min</span>                        	    			</div>										</td>									</tr>									<tr>										<th><label>| Time resolution</label></th>										<td class='selector'>											<div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>min</span>                        	    			</div>										</td>									</tr><tr>								<th class='selector2' colspan='2'>											<div class='control-group' style='text-align:center;'><label class='radio-inline'><input type='radio' name='selTime' value='0'>Current</label><label class='radio-inline'><input type='radio' name='selTime' value='1'>Custom</label>                						</div>	</th>	</tr>";
    }else if(text === "Rotation"){
        return "<tr><th><label>| Detecting angle</label></th><td class='selector'><div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>º</span>                        	    			</div>										</td>									</tr>									<tr>										<th><label>| Angle resolution</label></th>										<td class='selector'>											<div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>º</span>                        	    			</div>										</td>									</tr>";
    }else if(text === "Color"){
        return "<tr><th><label>| RGB resolution</label></th><td class='selector'><div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>grd</span>                        	    			</div>										</td>									</tr>";
    }else if(text === "Acceleration"){
        return "<tr><th><label>| Detecting accel</label></th><td class='selector'><div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>g</span>                        	    			</div>										</td>									</tr>									<tr>										<th><label>| Resolution</label></th>										<td class='selector'>											<div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>g</span>                        	    			</div>										</td>									</tr>";
    }else if(text === "Slope"){
        return "<tr><th><label>| Resolution</label></th><td class='selector'><div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>º</span>                        	    			</div>										</td>									</tr>";
    }else if(text === "Humidity"){
        return "<tr><th><label>| Humidity resolution</label></th><td class='selector'><div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>%</span>                        	    			</div>										</td>									</tr>";
    }else if(text === "Temperature"){
        return "<tr><th><label>| Thermometry range </label></th><td class='selector'><div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>~</span>                <input name='length' type='text' class='form-control' placeholder='0'>        	    <span class='input-group-addon'>ºC</span>			</div>										</td>									</tr>									<tr>										<th><label>| Resolution</label></th>										<td class='selector'>											<div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>ºC</span>                        	    			</div>										</td>									</tr>";
    }
    else{
        return "<tr><th><label>| Detecting brightness</label></th><td class='selector'><select class='form-control input-lg'><option value=''></option><option value='0'>Daytime</option><option value='1'>Midnight</option><option value='2'>Night</option> 			<option value='3'>Laser</option>		      			<option value='4'>LED</option>				</select>			</td>		</tr>";
    }
}
function detailOutPrint(text){
    if(text === " Movement"){
        return "<tr>										<th><label>| Movement type</label></th>										<td class='selector'>											<select class='form-control input-lg' id='sel'>												<option value=''></option>                   				        		<option value='R'>Rotating</option>                   				      			<option value='L'>Linear</option>                   				      			<option value='A'>Angle</option>											</select>										</td>									</tr>";
    }else if(text === " Light"){
        return "<tr>										<th><label>| Actuating light</label></th>										<td class='selector'>											<select class='form-control input-lg'>												<option value='></option>                   				        		<option value='0'>Bulb</option>                   				      			<option value='1'>Candle</option>                   				      			<option value='2'>Halogen</option>                   				      			<option value='3'>Neon</option>                   				      			<option value='4'>Lamp</option>                   				      			<option value='5'>Lighter</option>											</select>										</td>									</tr>";
    }else if(text === " Speaker"){
        return "<tr>										<th><label>| Actuating loudness</label></th>										<td class='selector'>											<div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>dB</span>                        	    			</div>										</td>									</tr>									<tr>										<th><label>| Loudness resolution</label></th>										<td class='selector'>											<div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>dB</span>                        	    			</div>										</td>									</tr>									<tr>										<th><label>| Actuating frequency</label></th>										<td class='selector'>											<div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>Hz</span>                        	    			</div>										</td>									</tr>									<tr>										<th><label>| Frequency resolution</label></th>										<td class='selector'>											<div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>Hz</span>                        	    			</div>										</td>									</tr>";
    }else if(text === " Vibration"){
        return "<tr>										<th><label>| Intensity</label></th>										<td class='selector'>											<select class='form-control input-lg'>                   				        		<option value='0'>High</option>                   				      			<option value='1'>Middle</option>                   				      			<option value='2'>Low</option>											</select>										</td>									</tr>";
    }else if(text === " Save Data"){
        return "<tr>										<th><label>| Data type</label></th>										<td class='selector'>											<select class='form-control input-lg'>                   				        		<option value='0'>txt</option>                   				      			<option value='1'>Excel</option>                   				      			<option value='2'>Image</option>                   				      			<option value='3'>Video</option>											</select>										</td>									</tr>";
    }else if(text === " H A"){
        return "";
    }else if(text === " Waterpump"){
        return "<tr>										<th><label>| Flow</label></th>										<td class='selector'>											<div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>㎖/s</span>                        	    			</div>										</td>									</tr>";
    }else if(text === " Display"){
        return "<tr>										<th><label>| Display type</label></th>										<td class='selector'>											<select class='form-control input-lg'>                   				        		<option value='0'>Text</option>                   				      			<option value='1'>Image</option>                   				      			<option value='2'>Video</option>											</select>										</td>									</tr>";
    }else if(text === " Heater"){
        return "<tr>										<th><label>| Actuating temperature</label></th>										<td class='selector'>											<div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>~</span>              <input name='length' type='text' class='form-control' placeholder='0'>          	<span class='input-group-addon'>ºC</span>    			</div>										</td>									</tr>									<tr>										<th><label>| Heat power</label></th>										<td class='selector'>											<div class='input-group input-group-lg'>											<input name='length' type='text' class='form-control' placeholder='0'>                        	    			<span class='input-group-addon'>W</span>                        	    			</div>										</td>									</tr>";
    }
    else{
        return "<tr>										<th><label>| Movement type</label></th>										<td class='selector'>											<select class='form-control input-lg' id='sel'>												<option value=''></option>                   				        		<option value='R'>Rotating</option>                   				      			<option value='L'>Linear</option>                   				      			<option value='A'>Angle</option>											</select>										</td>									</tr>";
    }
}

// ID 값을 매개변수로 받으면 오브젝트를 생성하는 함수
function createObjByID(ID){	//
		var object;
		select = $(document).find('#'+ID);
		if(select.hasClass('item')){	// item이 맞는지 확인
			
			if(select.hasClass('input')){	// input Item 생성
				
				if(ID == "I0"){		// Brightness
                    Brightness.prototype = new InputItem();
					object = new Brightness();
                    
				}else{		// Length
                    Length.prototype = new InputItem();
					object = new Length();
				}
            
				//object.setID(inputNum++);
			}else{	// output Item 생성
				object = new Brightness();	// 임시
				object.prototype = new InputItem();
				//object.setID(inputNum++);
			}
		}else{return ""}	// error
		return object;
	}

///////////////////////객체 정보///////////////////////////////////
/////////////////////////부모 클래스///////////////////////////////
function InputItem(){
			this.id=0;
            this.text="default";
			this.getID = function(){
				return this.id;
			};
			this.setID = function(id){
				this.id = id;
			};
			this.outputList = new Array();
            this.draw = function(){
                 $("#draw").append("<div id = 'input' class='item inputItem'><label id = '"+this.id+"'>"+this.text+"</label></div>");
            };
	};
	
	function OutputItem(){
		this.InputItem = new Object();
		this.id=0;
		this.getID = function(){
			return this.id;
		};
		this.setID = function(id){
			this.id = id;
		};
		this.savedClass; 
	};
	
///////////////////////////INPUT///////////////////////////////////
	function Brightness(){
		this.detectingBrightness = "Daytime";
        this.text = "Brightness";
	};
	
	function Length(){
		this.detectingLength = 0;	//default setting
		this.selectedLengthUnit = "mm";	//default setting
		this.resolution = 0;	//default setting
		this.selectedResolutionUnit = "default";
		this.text = "Length";
	};
	
	function Compass(){
		this.draw = function(){
			return "<div id='inputID"+this.id+"' class='inputItem item'> Compass</div>";
		};
	};
	
	function Heartbeat(){
		this.draw = function(){
			return "<div id='inputID"+this.id+"' class='inputItem item'> Heartbeat</div>";
		};
	};
	
	function Sound(){
		this.draw = function(){
			return "<div id='inputID"+this.id+"' class='inputItem item'> Sound</div>";
		};
	};
	
	function Time(){
		this.draw = function(){
			return "<div id='inputID"+this.id+"' class='inputItem item'> Time</div>";
		};
	};
	
	function Rotation(){
		this.draw = function(){
			return "<div id='inputID"+this.id+"' class='inputItem item'> Rotation</div>";
		};
	};
	function Color(){
		this.draw = function(){
			return "<div id='inputID"+this.id+"' class='inputItem item'> Color</div>";
		};
	};
	function Slope(){
		this.draw = function(){
			return "<div id='inputID"+this.id+"' class='inputItem'> Slope</div>";
		};
	};
	function Acceleration(){
		this.draw = function(){
			return "<div id='inputID"+this.id+"' class='inputItem'> Acceleration</div>";
		};
	};
	function Humidity(){
		this.draw = function(){
			return "<div id='inputID"+this.id+"' class='inputItem'> Humidity</div>";
		};
	};
	function Temperature(){
		this.draw = function(){
			return "<div id='inputID"+this.id+"' class='inputItem'> Temperature</div>";
		};
	};
	///////////////////////////////////////OUTPUT/////////////////////////////////////////
	function Speaker(){
		this.draw = function(){
			return "<div id = 'outputID"+this.id+"' class='outputItem'> Speaker</div>";
		};
	};
	function Movement(){
		this.draw = function(){
			return "<div id = 'outputID"+this.id+"' class='outputItem'> Movement</div>";
		};
	};
	function Light(){};
	function Vibration(){};
	function SaveData(){};
	function HA(){};
	function Waterpump(){};
	function Display(){};
	function Heater(){};
//////////////////////////////////////////////////////////////////////////////////////////