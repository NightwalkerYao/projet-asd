function randomExponential(rate, randomUniform) {
  // http://en.wikipedia.org/wiki/Exponential_distribution#Generating_exponential_variates
  rate = rate || 1;
  var U = randomUniform;
  if (typeof randomUniform === 'function') U = randomUniform();
  if (!U) U = Math.random();

  return -Math.log(U)/rate;
}

function randomGeometric(successProbability, randomUniform) {
  // http://en.wikipedia.org/wiki/Geometric_distribution#Related_distributions
  successProbability = successProbability || 1 - Math.exp(-1); // Equivalent to rate = 1

  var rate = -Math.log(1 - successProbability);

  return Math.floor(randomExponential(rate, randomUniform));
}
