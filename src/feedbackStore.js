//Customer feedback temporarily stored and fetched from here in admin panel. Will be replaced by a database in the future.

const feedbackStore = {
  feedbacks: [],
  add(feedback) {
    this.feedbacks.push(feedback);
  },
  getAll() {
    return this.feedbacks;
  }
};

export default feedbackStore;
