import inquirer from "inquirer";
function goodGetArea(shape) {
    switch (shape.kind) {
        case "Circle":
            return Math.PI * shape.radius ** 2;
        case "rectangular":
            return shape.width * shape.height;
        case "square":
            return shape.size ** 2;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
async function main() {
    const { shapeKind } = await inquirer.prompt([
        {
            type: "list",
            name: "shapeKind",
            message: "What kind of shape?",
            choices: ["Circle", "rectangular", "square"],
        },
    ]);
    let shape;
    if (shapeKind === "Circle") {
        const { radius } = await inquirer.prompt([
            {
                type: "number",
                name: "radius",
                message: "Enter the radius:",
            },
        ]);
        shape = { kind: "Circle", radius };
    }
    else if (shapeKind === "rectangular") {
        const { width, height } = await inquirer.prompt([
            {
                type: "number",
                name: "width",
                message: "Enter the width:",
            },
            {
                type: "number",
                name: "height",
                message: "Enter the height:",
            },
        ]);
        shape = { kind: "rectangular", width, height };
    }
    else if (shapeKind === "square") {
        const { size } = await inquirer.prompt([
            {
                type: "number",
                name: "size",
                message: "Enter the size:",
            },
        ]);
        shape = { kind: "square", size };
    }
    else {
        throw new Error("Invalid shape kind");
    }
    const area = goodGetArea(shape);
    console.log(`The area of the ${shape.kind} is ${area}`);
}
main();
