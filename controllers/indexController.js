module.exports.HomePage = function(req, res){
    res
    .status(200)
    .render('indexcontroller/index');
    };

module.exports.About = function(req, res){
    var cars = ['Maruti','Nisaan','Altroz','Audi', 'BMW','Mercedes','Ferrari','Porsche'];
    var carTxt = '';
    cars.forEach(function(item, index){
        carTxt += '<ul><li>'+item+'</li></ul>';
    });
    res
    .status(200)
    .send(carTxt);
    
    };

module.exports.Mycar = function(req, res){
    var cars = ['Maruti','Nisaan','Altroz','Audi', 'BMW','Mercedes','Ferrari','Porsche'];
    var carTxt = '';
    carTxt += '<h1>I have a <em>'+cars[req.params.id]+'</em></h1>';        
    res
    .status(200)
    .send(carTxt);
    
    };