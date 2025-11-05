import {
  handleGetAll,
  handleGetOne,
  handleCreate,
  handleUpdate,
  handleDelete
} from './controller.js';

export default function router(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === '/items' && method === 'GET') return handleGetAll(req, res);
  if (url === '/items' && method === 'POST') return handleCreate(req, res);
  if (url.startsWith('/items/') && method === 'GET') return handleGetOne(req, res);
  if (url.startsWith('/items/') && method === 'PUT') return handleUpdate(req, res);
  if (url.startsWith('/items/') && method === 'DELETE') return handleDelete(req, res);

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Route not found' }));
}