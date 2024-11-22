import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Предполагается, что существует модель User
      required: true,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
      required: [true, 'Поле "description" должно быть заполнено'],
    },
    targetDate: {
      type: String,
    },
    priority: {
      type: Number,
    },
    tags: {
      type: [String],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false },
);

export default mongoose.model('todo', todoSchema);
