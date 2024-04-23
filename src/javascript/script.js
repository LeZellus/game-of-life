import { Grid } from './grid.js';

const grid = new Grid(5, 5);

grid.setCell(1, 2, true);
grid.setCell(1, 3, true);
grid.setCell(1, 4, true);

grid.print();