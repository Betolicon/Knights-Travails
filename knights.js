class Knight{
    constructor(start, end){
        this.start = [start[0], start[1]]
        this.end = [end[0], end[1]]
    }

    _checkElements(array){
        let answer = true
        array.forEach(element => {
            if(element === undefined)
                answer = false
        });
        return answer
    }

    _checkIsValid(array){
        if(array[0] < 0 || array[0] > 7 || array[1] < 0 || array[1] > 7 )
            return false
        return true
    }

    moves() {
        if (this._checkIsValid(this.start) && this._checkIsValid(this.end) && this._checkElements(this.start) && this._checkElements(this.end)) {
           const xMoves = [2, 1, -1, -2, -2, -1, 1, 2];
            const yMoves = [1, 2, 2, 1, -1, -2, -2, -1];
            const queue = [[this.start, [this.start]]]; 
            const visited = new Set();
            visited.add(this.start.toString());

            while (queue.length > 0) {
                const [current, path] = queue.shift();

                if (current[0] === this.end[0] && current[1] === this.end[1]) {
                    return path; 
                }

                for (let i = 0; i < xMoves.length; i++) {
                    const x = current[0] + xMoves[i];
                    const y = current[1] + yMoves[i];

                    const newPos = [x, y];
                    if (!visited.has(newPos.toString()) && this._checkIsValid(newPos)) {
                        visited.add(newPos.toString());
                        queue.push([newPos, [...path, newPos]]);
                    }   
                }
            }
        }
        return [];
    }
}

module.exports = {Knight}