// Copy and paste your prototype in here and refactor into class syntax.
/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

class CuboidMaker{
  constructor(properties) {
  this.length = properties.length;
  this.width = properties.width;
  this.height = properties.height
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  }
};

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/
const cuboid = new CuboidMaker ({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/


class CubeMaker extends CuboidMaker{
  constructor(newProperties) {
    super(newProperties)
    this.area = newProperties.area;
    this.edge = newProperties.edge;
  }
  cubeVolume() {
    return this.edge * this.edge * this.edge;
  }
  cubeSurfaceArea() {
    return 6 * (this.area * this.area);
  }
}

const cube = new CubeMaker ({
area: 2,
edge: 2
});

console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());