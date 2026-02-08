
const reservationStore = {
  reservations: [],
  add(reservation) {
    this.reservations.push(reservation);
  },
  getAll() {
    return this.reservations;
  }
};

export default reservationStore;