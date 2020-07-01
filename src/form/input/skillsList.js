import React from 'react';

import { Input, Button, Form } from 'antd';

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

export const SkillsList = (handleChange, value, setFieldValue) => (
  <Form name="dynamic_form_item">
    <Form.List name="names">
      {(fields, { add, remove }) => (
        <div>
          <Form.Item className="label" label="Skills" required={false} key={0} style={{ width: '90%' }}>
            <Form.Item noStyle>
              <Input
                onChange={handleChange}
                name="skills[0]"
                placeholder="Skill"
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Form.Item>
          {fields.map((field) => (
            <Form.Item {...field} noStyle>
              <Input
                onChange={handleChange}
                name={`skills[${field.name + 1}]`}
                placeholder="Skill"
                style={{ width: '90%' }}
              />
              <MinusCircleOutlined
                className="dynamic-delete-button"
                style={{ margin: '0 8px' }}
                onClick={(e) => {
                  console.log(field.name);
                  for (let i = field.name + 1; i < value.length; i += 1) {
                    setFieldValue(`skills[${i}]`, value[i + 1]);
                  }
                  remove(field.name);
                }}
              />
            </Form.Item>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={(e) => {
                add();
              }}
              style={{ width: '90%' }}
            >
              <PlusOutlined />
              {' '}
              Add Skill
            </Button>
          </Form.Item>
        </div>
      )}
    </Form.List>
  </Form>
);
