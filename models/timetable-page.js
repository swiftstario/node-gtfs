const mongoose = require('mongoose');

const TimetablePage = mongoose.model('GTFS-TimetablePage', new mongoose.Schema({
  agency_key: {
    type: String,
    required: true,
    index: true
  },
  timetable_page_id: {
    type: String,
    index: true
  },
  timetable_page_label: String,
  filename: String
}));

module.exports = TimetablePage;
