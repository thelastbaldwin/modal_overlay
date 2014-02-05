
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
  				title: 'Express', 
  				video : {
  					'width': 560, 
  					'height' : 315,
  					'src' : '//www.youtube.com/embed/96E0RfyL2Gc?version=3&enablejsapi=1',
  					'id' : 'player'}
  			});
};