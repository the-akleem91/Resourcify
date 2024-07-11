import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  thumbnail: { 
    type: String 
  }, 
  tags: [{ type: String }], 
  chapters: [{ type : String }],
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const CourseModel = mongoose.model('Courses', courseSchema);

export {CourseModel as Courses}