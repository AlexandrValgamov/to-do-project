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
    priority: {
      type: Number,
      required: [true, 'Поле "priority" должно быть заполнено'],
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
  { versionKey: false },
);

export default mongoose.model('todo', todoSchema);
