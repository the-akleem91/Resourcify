import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  tags: {
    type: [String],
  },
  chapters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapters'
  }],
  introVideo: {
    type: String,
  },
  views: {
    type: String,
  }
});

const Course = mongoose.model('Course', courseSchema);

export { Course };
