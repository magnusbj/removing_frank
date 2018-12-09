import axios from 'axios'
import {apiKey, db_url} from './config'

    let restdb = axios.create({
      baseURL: db_url,
      // timeout: 1000,
      headers: { 'x-apikey': apiKey }
    });

export {restdb}