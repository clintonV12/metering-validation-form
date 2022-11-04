
var validationController = {
    validateMeterNumber : validateMeterNumber,
    validateIPaddress   : validateIPaddress,
    validateBusAddress  : validateBusAddress,
}

function validateMeterNumber(req, res)
{
    let meter_number = req.params.number;
    
    if(isNaN(meter_number)){
        res.send(meter_number + " is not a number ");
    }else{
        //check is length is 11
        if(meter_number.toString().length == 11){
            res.send(meter_number + " The meter number is correct ");
            //check if meter number exists in other systems
        }
        else{
            res.send(bus_number + " The meter number is wrong ");
        }
    }
}

function validateBusAddress(req, res)
{
    let bus_number = req.params.address;

    //check is length is 11
    if(bus_number.toString().length == 11){
        res.send(bus_number + " The bus number is correct ");
    }
    else{
        res.send(bus_number + " The bus number is wrong ");
    }
}

function validateIPaddress(req, res) 
{
    let ipaddress = req.params.ip;

    if (/^(1[0])\.(25[5])\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress))
    {
        res.send(" IP address is valid");
    }
    else{
        res.send("IP address is invalid");
    }
}


function checkIfMeterNumberIsInCRM(){}
function checkIfMeterNumberIsInIPMP(){}

module.exports = validationController;