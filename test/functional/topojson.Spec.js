describe('when calling loadTopoJson()', function () {
  "use strict";

  it('should convert TopoJSON to GeoJSON and load the file into the Map', function () {
    var map = new GMP({async: false, id: 'mymap', lat: 41.3833, lng: 2.1833});
    var topojson = {
      objects: {
        'states': {}
      }
    };
    var options = [{object: 'states'}];
    var result = map.addTopoJson(topojson, options);
    expect(result[0].ag.D).to.eql(53);
  });


  describe('with styles', function () {

    it('should apply the styles to each Feature', function () {
      var map = new GMP({async: false, id: 'mymap', lat: 41.3833, lng: 2.1833});

      var topojson = {
        objects: {
          'states': {}
        }
      };

      var options = [
        {
          object: 'states',
          style: {
            strokeWeight: 2,
            fillOpacity: 0
          },
          filters: 'NAME'
        },

      ];

      var result = map.addTopoJson(topojson, options);
      expect(result[0].style).to.eql(options[0].style);
    });

  });

});
