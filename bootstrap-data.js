module.exports.init = async (model) => {
    const garage = await model.Garage.create({ name: "My First Garage" });
    const car1 = await model.Car.create({ name: "My First Car" });
    car1.setGarage(garage);
    const car2 = await model.Car.create({ name: "My Second Car" });
    car2.setGarage(garage);
}
