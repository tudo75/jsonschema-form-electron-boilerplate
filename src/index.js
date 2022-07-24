/*
  This is straight from the JSON-schema-form docs.
  Go here for more info: https://github.com/mozilla-services/react-jsonschema-form#usage
*/

import React from 'react';
import { createRoot } from 'react-dom/client';

import Form from '@rjsf/core';

const schema = {
  title: 'Sample JSON-schema-form',
  type: 'object',
  required: ['title'],
  properties: {
    title: { type: 'string', title: 'Title', default: 'A new task' },
    done: { type: 'boolean', title: 'Done?', default: false },
  },
};

const log = (type) => console.log.bind(console, type);

const root = createRoot(document.getElementById('root'));
root.render(
  <Form
    schema = { schema }
    onChange = { log('changed') }
    onSubmit = { log('submitted') }
    onError = { log('errors') }
  />
);
