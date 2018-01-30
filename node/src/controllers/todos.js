import { Router } from 'express';
import HttpStatus from 'http-status-codes';
import * as todoService from '../services/todoService';

const router = Router();

// SEARCH by query
router.get('/search/:pgNumber', (req, res, next) => {
  todoService.searchTodo(req.params.pgNumber, req.query.key, req.id)
  .then(data => {
    let tempData = data.pagination;
    res.json({ metadata: tempData, data });
  })
  .catch(err => next(err));
});

// GET /api/todos/
router.get('/', (req, res, next) => {
  let pageNumber = 1;
  todoService
    .getAllTodos(1, pageNumber)
    .then(data => {
      let tempData = data.pagination;

      return res.json({ metadata: tempData, data });
    })
    .catch(err => next(err));
});

// POST /api/todos
router.post('/', (req, res, next) => {
  todoService
    .createTodo(req.body, 1)
    .then(data => {
      let todoData = data.relatedData.parentAttributes;

      return res.status(HttpStatus.CREATED).json({ todoData });
    })
    .catch(err => next(err));
});

// PUT /api/todos/id
router.put('/:id', (req, res, next) => {
  todoService
    .updateTodo(req.params.id, req.body)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

// DELETE /api/todos/id
router.delete('/:id', (req, res, next) => {
  console.log('delete',req.params.id);
  todoService
    .deleteTodo(req.params.id, next)
    .then(data => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch(err => next(err));
});

export default router;
