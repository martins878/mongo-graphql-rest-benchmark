import { Router } from 'express';
import { celebrate } from 'celebrate';
import { create, find } from './schema';
import * as API from './helper';

const router = new Router();

router.post('/new', celebrate(create), ({ body }, res) => {
  API.create(body)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json({ error }));
});

router.post('/find', celebrate(find), ({ body }, res) => {
  API.find(body)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json({ error }));
})

export default router;
