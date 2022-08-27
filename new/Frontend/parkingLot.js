import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

class Vehicle {
  constructor(id, color, slotNumber, entryTime) {
    this.vehicleId = id;
    this.color = color;
    this.slotNumber = slotNumber;
    this.entryTime = entryTime;
  }
}

class ParkingLot {
  constructor(size) {
    this.filled = 0;
    this.slots = new Array(size);
  }

  getStatus() {
    if (this.filled >= this.slots.length) return "Sorry Parking is Full";
    return "Parking Available";
  }

  parkVehicle(vehicleId, color) {
    const status = this.getStatus();
    if (status !== "Parking Available") return "Parking is Full";

    const entryTime = new Date().getTime();
    for (let i = 0; i < this.slots.length; i++) {
      if (!this.slots[i]) {
        const vehicle = new Vehicle(vehicleId, color, i, entryTime);
        this.slots[i] = {
          vehicle
        };
        this.filled++;
        return i;
      }
    }
  }

  removeVehicle(slotNumber) {
    const index = this.slots.findIndex(
      (item) => item.slotNumber === slotNumber
    );
    // collect payment;
    if (!this.slots[index].vehicle)
      return "Vehicle is not present in a parking lot";
    this.slots[index] = null;
    this.filled--;
  }

  getRegisterationNumbersForCarsWithColor(color) {
    const result = this.slots.map((item) => {
      if (item.vehicle.color === color) {
        return item.vehicle.vehicleId;
      }
    });
    return result;
  }

  getSlotNumberForCar(vehicleId) {
    if (!this.filled) return "Sorry parking lot is empty";
    const item = this.slots.find(
      (item) => item.vehicle.vehicleId === vehicleId
    );
    if (!item) return "Vehicle is not found";
    return item.vehicle.slotNumber;
  }

  getAllSlotNumbersForAColor(color) {
    const result = this.slots.map((item) => {
      if (item.vehicle.color === color) {
        return item.vehicle.slotNumber;
      }
    });
    return result;
  }
}
