interface Position {
    x: number,
    y: number,
    z: number,
}

interface Fuel {
    current: number,
    max: number,
}

class Turtle {
    position: Position;
    fuel: Fuel;
    constructor(position: Position, fuel: Fuel) {
        this.position = position;
        this.fuel = fuel;
    }

    /**
     * Returns the code for the given operation. Turtles can only perform HTTP requests. Operation codes 
     * are therefore used to 
     * 
     * Code 
     * 
     * @param operation The operation to get the code for
     */
    getOperationCode(operation: string): number {
        switch (operation) {
            case "position_update":
                return 101;
        }
        throw new Error("Invalid operation: " + operation);
    }
}

export type { Position, Fuel };
export { Turtle };