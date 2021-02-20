document.addEventListener('DOMContentLoaded', function() {
  var elem = document.querySelector('#modal1');
  var instance = M.Modal.init(elem, {dismissible: false});
  instance.open();
});

function $(_id) {
  return document.getElementById(_id);
}

$('run').addEventListener('click', function(){
  var lambda = [50, 30],
      mu = [40, 35],
      S = 3,
      N_t,
      dn = false;
      p = parseFloat($('p').value),
      i = 0,
      c = parseFloat($('d').value),
      LF = {x1: 60, x2: 0},
      Ge = [
        parseFloat($('g').value),
        parseFloat($('r').value)
      ],
      data = [{
        x: [],
        y: [],
        type: 'scatter',
        name: "Voie 1"
      }, {
        x: [],
        y: [],
        type: 'scatter',
        name: "Voie 2"
      }];

      function A(j) {
        if(j == 1) {
          return lambda[1] * c
        } else {
          return lambda[0] * Ge[1] + lambda[1]*(c-Ge[1]);
        }
      }

      function D(j) {
        if(j == 1)
          return S*Ge[j];
        else
          return S * (c - Ge[1])
      }

      function X(k, j) {
        if(j == 1) {
          if(k == 0)
            return LF.x2;
          return X(k-1, j) + A(1) - D(1);
        } else {
          if(k==0)
            return LF.x1;
          return X(k-1, j) + lambda[0] * Ge[1] + lambda[0] * (c - Ge[1]) - S*(c-Ge[1]);
        }
      }

  for(i = 0; i<=parseFloat($('c').value); i++) {

    data[0].x.push(i);
    data[0].y.push(parseInt(p * (X(i, 0)/(A(0) - D(0)))));

    data[1].x.push(i);
    data[1].y.push(Math.max(0, parseInt(p * (X(i, 1)/(A(1) - D(1)) - 10))));
  }

  if(dn) Plotly.purge($('chart'));
  Plotly.newPlot('chart', data);
  dn = true;

  return false;
}, false);
