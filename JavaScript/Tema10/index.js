import { suma, multiplica } from "./modulos/controller.js";
import chalk from "chalk";

let multiplicacion = multiplica(1, 2);
console.log(multiplicacion);

let adicion = suma(4, 5);
console.log(chalk.green(adicion));