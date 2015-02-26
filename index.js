var xray = require("x-ray");
var phantom = require("x-ray-phantom")

xray('http://www.nfl.com/combine/tracker')
  .use(phantom())
  .wait(500)
  .select([{
    $root: '.tracker-table tbody tr',
    name: '.name a',
    college: '.college a',
    position: '.position',
    time: '.result'
  }])
  .paginate('li.next a')
  .delay(2000, 10000)
  .write('out.json');
