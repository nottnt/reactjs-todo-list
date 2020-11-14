import axios from 'axios';
import {
    getToDoList,
} from './index'

axios.defaults.adapter = require('axios/lib/adapters/http');

it('returns the getToDoList isArray', async () => {
    const result = await getToDoList()
    expect(Array.isArray(result.data.data)).toBe(true);
})
