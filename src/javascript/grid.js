export class Grid {
    
    constructor (height, width) {
        this.height = height;
        this.width = width;
        this.cells = new Array(width * height).fill(false);
    }

    setCell (x, y, value) {
        this.cells[y * this.width + x] = value;
    }

    getCell (x, y, value) {
        return this.cells[y * this.width + x];
    }

    // Fonction de calcul de l'état des cellules
    update () {
        const newCells = new Array(this.width * this.height).fill(false);
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const alive = this.getCell(x, y);
                const neighbors = this.countNeighbors(x, y);

                if (alive && (neighbors == 2 || neighbors ===3)) {
                    newCells[y * this.width + x] = true;
                } else if (!alive && neighbors === 3) {
                    newCells[y * this.width + x] = true;
                }
            }
        }
        this.cells = newCells;
    }

    print () {
        console.log(this.cells);
    }

    // Fonction de calcul du nombre de voisins vivants
    countNeighbors (x, y) {
        let count = 0;
        for (let dy = -1; dx <= 1; dx++) {
            for (let dx = -1; dx <= 1; dx++) {
                if (dx === 0 && dy === 0) {
                    continue;
                }
                if (this.getCell(x + dx, y + dy)) {
                    count++;
                }
            }
        }

        return count;
    }
}