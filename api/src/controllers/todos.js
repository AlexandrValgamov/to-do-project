import Todo from '../models/todo.js';

export const getTodos = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const data = await Todo.find({ userId }).sort({ createdAt: -1 });
    if (!data || data.length === 0) {
      return res.send([]);
    }
    res.send({ data });
  } catch (error) {
    next(error);
  }
};

export const createTodo = async (req, res, next) => {
  const { title, description, priority, userId } = req.body;
  try {
    const data = await Todo.create({ title, description, userId, priority });
    res.send({ message: 'TODO создана', data: [data] });
  } catch (error) {
    next(error);
  }
};
