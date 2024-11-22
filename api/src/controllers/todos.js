import todo from '../models/todo.js';

export const getTodos = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const data = await todo.find({ userId }).sort({ createdAt: -1 });
    if (!data || data.length === 0) {
      return res.send([]);
    }
    res.send({ data });
  } catch (error) {
    next(error);
  }
};

export const createTodo = async (req, res, next) => {
  const { userId, title, description, targetDate, priority, tags, completed } =
    req.body;

  try {
    const data = await todo.create({
      userId,
      title,
      description,
      targetDate,
      tags,
      priority,
      completed,
    });
    res.send({ message: 'TODO создана', data: [data] });
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = async (req, res, next) => {
  const { todoId } = req.params;

  try {
    const data = await todo.deleteOne({ _id: todoId });
    res.send({ message: 'TODO удалена', data: [data] });
  } catch (error) {
    next(error);
  }
};
