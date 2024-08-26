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
      required: [true, 'Поле "title" должно быть заполнено'],
    },
    description: {
      type: String,
      required: [true, 'Поле "description" должно быть заполнено'],
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high', 'highest'],
      required: [true, 'Поле "priority" должно быть заполнено'],
    },
    state: {
      type: String,
      enum: ['todo', 'in-progress', 'done'],
      // required: [true, 'Поле "state" должно быть заполнено'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
    expiresIn: {
      type: Date,
      // required: [true, 'Поле "expiresIn" должно быть заполнено'],
    },
  },
  { versionKey: false }
);

export default mongoose.model('todo', todoSchema);