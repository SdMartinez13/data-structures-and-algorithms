'use strict';

const Graph = require('../index');

describe('Business Trip Test', () => {
  let graph = new Graph();

  let Pandora = graph.addVertex('Pandora');
  let Arendelle = graph.addVertex('Arendelle');
  let Metroville = graph.addVertex('Metroville');
  let Monstropolis = graph.addVertex('Monstropolis');
  let Narnia = graph.addVertex('Narnia');
  let Naboo = graph.addVertex('Naboo');

  graph.addEdge(Pandora, Arendelle, 150);
  graph.addEdge(Pandora, Metroville, 82);
  graph.addEdge(Arendelle, Metroville, 99);
  graph.addEdge(Arendelle, Monstropolis, 42);
  graph.addEdge(Metroville, Monstropolis, 105);
  graph.addEdge(Metroville, Narnia, 37);
  graph.addEdge(Metroville, Naboo, 26);
  graph.addEdge(Monstropolis, Naboo, 73);
  graph.addEdge(Narnia, Naboo, 250);

  it('Happy Path Returns price if trip is possible.', () => {
    let arr = ['Pandora', 'Metroville'];
    expect(graph.businessTrip(graph, arr)).toEqual('$82');
  });

  it('Returns $0 if no trip', () => {
    let arr = ['Pandora'];
    expect(graph.businessTrip(graph, arr)).toEqual('$0');

  });

  it('Returns null if trip not possible', () => {
    let arr = ['Naboo', 'Pandora'];
    expect(graph.businessTrip(graph, arr)).toEqual(null);
  });

});
